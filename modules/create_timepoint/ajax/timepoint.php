<?php
/**
 * Ajax timepoint methods.
 *
 * Used to retrieve info & create timepoint by the create_timepoint form.
 * Ensures the user can create timepoint before processing
 * the $_POST (array) data.
 *
 * PHP Version 7
 *
 * @category Loris
 * @package  Create_Timepoint
 * @author   Alizée Wickenheiser <alizee.wickenheiser@mcin.ca>
 * @license  Loris license
 * @link     https://github.com/aces/Loris-Trunk
 */

namespace LORIS\create_timepoint;

/**
 * User permission verification.
 */
$user       =& \User::singleton();
$identifier = isset($_POST['identifier']) ? $_POST['identifier'] : '';
$candidate  =& \Candidate::singleton($identifier);
if (!$user->hasPermission('data_entry')
    && !(in_array(
        $candidate->getData('RegistrationCenterID'),
        $user->getData('CenterIDs')
    ))
) {
    header('HTTP/1.1 403 Forbidden');
    exit;
}

/**
 * Sanitize $_POST data.
 */
$_POST = sanitizer($_POST);

/**
 * Retrieve response and reply to the client.
 */
echo json_encode(processRequest($_POST));

/**
 * Sanitize the $_POST data.
 *
 * @param array $values that have been sanitized.
 *
 * @return array
 */
function sanitizer($values)
{
    // Verify subprojectID.
    if (!empty($values['subprojectID']) && is_numeric($values['subprojectID'])) {
        $values['subprojectID'] = '';
    }
    // Verify cand ID.
    $values['identifier'] = isset($values['identifier']) ?
        htmlentities(
            $values['identifier'],
            ENT_QUOTES,
            'UTF-8'
        ) : '';
    return $values;
}

/**
 * Processes the values and saves to database
 *
 * @param array $values the user data received.
 *
 * @return array
 * @throws \DatabaseException
 * @throws \DeprecatedException
 * @throws \LorisException
 */
function processRequest($values)
{
    if (isset($values['command']) && $values['command'] == 'initialize') {
        $response = initializeSetup($values);
    } else if (isset($values['command']) && $values['command'] == 'create') {
        \TimePoint::createNew(
            $values['identifier'],
            $values['subprojectID'],
            $values['visitLabel'],
            $values['psc']
        );
        $response['status'] = 'success';
    } else {
        $response['status'] = 'error';
    }
    return $response;
}

/**
 * Initialize setup, the extra values for the
 * create timepoint form. (psc & errors)
 *
 * @param array $values the user data received.
 *
 * @return array
 * @throws \DatabaseException
 * @throws \DeprecatedException
 * @throws \LorisException
 */
function initializeSetup($values)
{
    // Setup variables
    $errors         = array(); // form errors.
    $config         =& \NDB_Config::singleton();
    $candidate      =& \Candidate::singleton($values['identifier']);
    $allSubprojects = \Utility::getSubprojectList();

    // All subprojects from config file (error).
    if (empty($allSubprojects)) {
        $errors['subprojectID'] = 'No subprojects have been defined 
            for this study. If you are an administrator, please use the 
            Configuration module to add new subprojects.';
    }
    // List of valid subprojects for a given project
    if ($config->getSetting('useProjects') === 'true') {
        // If projects enabled, loop through and add valid subprojects only
        $subprojList = '';
        try {
            $subprojList = $candidate->getValidSubprojects();
        } catch (\DatabaseException $e) {
        }
        if (empty($subprojList)) {
            $errors['subprojectID'] = 'No subprojects have been 
                defined for the project this candidate is affiliated with. 
                If you are an administrator, please use the Configuration module to 
                add new subprojects and associate them with projects.';
        }
    }

    // Handle if requiring visit label.
    $visitLabelSettings = $config->getSetting('visitLabel');
    $visitLabelAdded    = false;
    foreach (
        \Utility::associativeToNumericArray($visitLabelSettings) as $visitLabel
    ) {
        if ($visitLabel['@']['subprojectID'] == $values['subprojectID']) {
            if (isset($visitLabel['generation'])
                && $visitLabel['generation'] !== 'sequence'
            ) {
                throw new \DeprecatedException(
                    'User generated Visit Labels are no '.
                    'longer supported in Loris.'
                );
            }
            $labelOptions[''] = null;
            $items            = \Utility::associativeToNumericArray(
                $visitLabel['labelSet']['item']
            );
            foreach ($items as $item) {
                $labelOptions[$item['@']['value']] = $item['#'];
            }
            $visitLabelAdded = true;
        }
    }
    if ($visitLabelAdded) {
        // List of sites for the user.
        $user = \User::singleton();
        $DB   = \Database::singleton();
        $user_list_of_sites = $user->getData('CenterIDs');
        $num_sites          = count($user->getData('CenterIDs'));
        $psc_labelOptions   = array();
        if ($num_sites > 1) {
            $values['pscLabelAdded'] = true;
            $psc_labelOptions        = array(null => '');
            foreach ($user_list_of_sites as $key => $siteID) {
                $center = $DB->pselectRow(
                    "SELECT CenterID as ID, Name FROM psc 
                        WHERE CenterID =:cid",
                    array('cid' => $siteID)
                );
                $psc_labelOptions[$siteID] = $center['Name'];
            }
        }
        $values['psc'] = $psc_labelOptions;
    }
    $values['errors'] = $errors;

    return $values;
}
