<?php

/**
 * Create Candidate.
 *
 * This ensures the user had data_entry to create
 * before processing the new candidate with the
 * $_POST (array) data.
 *
 * PHP Version 7
 *
 * @category Loris
 * @package  New_Profile
 * @author   Alizée Wickenheiser <alizee.wickenheiser@mcin.ca>
 * @license  Loris license
 * @link     https://github.com/aces/Loris-Trunk
 */

$user =& User::singleton();

/**
 * User permission verification.
 */
if (!$user->hasPermission('data_entry')) {
    header('HTTP/1.1 403 Forbidden');
    exit;
}

/**
 * POST Data Validity.
 */
$data = processValidity($_POST);

/**
 * Create Candidate if valid data from user,
 * (json) response sent to user: 'error' or 'success' key
 * depending on result.
 */
echo array_key_exists('error', $data)
    ? json_encode($data)
    : createCandidate($data);

/**
 * Processes the values and saves to database
 *
 * @param array $values the user data received..
 *
 * @return array
 * @throws LorisException
 */
function processValidity($values)
{
    // Validate (dob1, dob2, gender) not set.
    if (!isset($values['dob1'])
        || !isset($values['dob2'])
        || !isset($values['gender'])
        || !isset($values['identification'])
    ) {
        return array('error' => 'Incomplete candidate fields.');
    }
    // Validate dob.
    if (strlen(implode($values['dob1'])) > 2
        && !\Utility::_checkDate($values['dob2'])
    ) {
        return array('error' => 'Birth date is not a valid date.');
    } else if ($values['dob1'] != $values['dob2']) {
        // Validate (dob1 & dob2) are not equal.
        return array('error' => 'Birth date confirmation mismatch.');
    }
    $config =& \NDB_Config::singleton();
    // Validate edc.
    if ($config->getSetting('useEDC') == 'true'
        && is_array($values['edc1'])
        && is_array($values['edc2'])
    ) {
        if (strlen(implode($values['edc1'])) > 2
            && !\Utility::_checkDate($values['edc1'])
        ) {
            return array('error' => 'EDC is not a valid date.');
        } else if ($values['edc1'] != $values['edc2']) {
            return array('error' => 'Estimated Due date fields must match.');
        }
    } else {
        $values['edc1'] = null;
        $values['edc2'] = null;
    }
    // Validate Gender.
    if ($values['gender'] != 'Male'
        && $values['gender' != 'Female'
        && $values['gender'] != 'Other'
        && $values['gender'] != 'Unknown']
    ) {
        return array('error' => 'Invalid gender option.');
    }
    // Validate PSCID.
    $pscidSettings = $config->getSetting('PSCID');
    $user          =& \User::singleton();
    if ($pscidSettings['generation'] == 'user') {
        // Setup Database object.
        $db = \Database::singleton();
        if (empty($values['psc'])) { // user is in only one site.
            $centerIDs = $user->getData('CenterIDs');
            $centerID  = $centerIDs[0];
            $site      =& \Site::singleton($centerID);
        } else {
            // user has multiple sites, so validate
            // PSCID against the Site selected.
            $site =& \Site::singleton($values['psc']);
        }
        if (empty($values['PSCID'])) {
            return array('error' => 'PSCID must be specified.');
        } else if (!\Candidate::validatePSCID(
            $values['PSCID'],
            $site->getSiteAlias()
        )
        ) {
            return array('error' => 'PSCID does not match the required structure.');
        } else if ($db->pselectOne(
            "SELECT count(PSCID) FROM candidate WHERE PSCID=:V_PSCID",
            array('V_PSCID' => $values['PSCID'])
        ) > 0
        ) {
            return array('error' => 'PSCID has already been registered.');
        }
    }
    // Validate site.
    $site = $values['psc'];
    $user_list_of_sites = $user->getData('CenterIDs');
    $num_sites          = count($user_list_of_sites);
    if ($num_sites > 1 && (empty($site) || !$user->hasCenter($site))) {
        return ['error' => 'Site must be selected from the available dropdown.'];
    }
    $useProjects = $config->getSetting('useProjects');
    if ($useProjects === 'true' && empty($values['ProjectID'])) {
        return array('error' => 'Project is required.');
    }
    return $values;
}

/**
 * Create the candidate and saves to database.
 *
 * @param array $values verified form data from user.
 *
 * @return string
 * @throws DatabaseException
 * @throws LorisException
 */
function createCandidate($values)
{
    // Setup the arguments for Candidate.
    $user   =& \User::singleton();
    $config =& \NDB_Config::singleton();
    $dob    = $values['dob1'];
    $edc    = null;
    if ($config->getSetting('useEDC') == 'true') {
        $edc = $values['edc1'];
    }
    // Create the candidate.
    $site_arr  = $user->getData('CenterIDs');
    $num_sites = count($site_arr);
    if ($num_sites > 1) {
        $candID = \Candidate::createNew(
            $values['psc'],
            $dob,
            $edc,
            $values['gender'],
            $values['PSCID'] ?? null
        );
    } else {
        $centerIDs = $user->getData('CenterIDs');
        $centerID  = $centerIDs[0];
        $candID    = \Candidate::createNew(
            $centerID,
            $dob,
            $edc,
            $values['gender'],
            $values['PSCID'] ?? null
        );
    }
    // Get the candidate.
    $candidate =& \Candidate::singleton($candID);
    if ($config->getSetting('useProjects') == 'true') {
        $candidate->setData('ProjectID', $values['ProjectID']);
    }

    // Store the identification to the candidate.
    $factory = NDB_Factory::singleton();
    $db      = $factory->database();
    $statement = $db->prepare(
        'UPDATE candidate SET Identification=? WHERE CandID=?'
    );
    if ($statement) {
        $statement->bindParam(1, $values['identification'], PDO::PARAM_STR);
        $statement->bindParam(2, $candID, PDO::PARAM_INT);
        $statement->execute();
    }

    // The success response.
    $success = array(
                'success' => array(
                              'candID' => $candID,
                              'PSCID'  => $candidate->getPSCID(),
                             ),
               );
    return json_encode($success);
}
