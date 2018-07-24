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
 * @package  new_profile
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
 * POST Data Validity Controller
 */
$data = processValidity($_POST);

/**
 * Processes the values and saves to database
 *
 * @param array $values form values
 *
 * @return void
 */
function processValidity($values)
{
    if (!isset($values['dob1']) ||
        !isset($values['dob2']) ||
        !isset($values['gender']))
    {
        return json_encode(array('error'=>'incomplete data'));
    }
    else if ($values['dob1'] != $values['dob2']) {
        return json_encode(array('error'=>'birth confirmation mismatch'));
    }
    $config =& \NDB_Config::singleton();
    if ($config->getSetting('useEDC') == 'true' && is_array($values['edc1']) && is_array($values['edc2'])) {
        if (strlen(implode($values['edc1'])) > 2
            && !\Utility::_checkDate($values['edc1'])
        ) {
            $errors['edc1'] = 'EDC is not a valid date';
        }
        if ($values['edc1'] != $values['edc2']) {
            $errors['edc1'] = 'Estimated Due date fields must match.';
        }
    } else {
        $values['edc1'] = null;
    }


}

/**
 * Processes the values and saves to database
 *
 * @param array $values form values
 *
 * @return void
 * @throws DatabaseException
 * @throws LorisException
 */
function createCandidate($values)
{
    // set up the arguments to Candidate::createNew
    $user   =& \User::singleton();
    $config =& \NDB_Config::singleton();
    $dob    = empty($values['dob1']) ? null : $values['dob1'];

    $edc = null;
    if ($config->getSetting('useEDC') == "true") {
        $edc = empty($values['edc1']) ? null : $values['edc1'];
    }

    // create the candidate
    $DB        = \Database::singleton();
    $site_arr  = $user->getData('CenterIDs');
    $num_sites = count($site_arr);

    if ($num_sites >1) {
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

    // get the candidate
    $candidate =& \Candidate::singleton($candID);

    if ($config->getSetting('useProjects') == "true") {
        $candidate->setData('ProjectID', $values['ProjectID']);

    }

    //------------------------------------------------------------

    $this->tpl_data['success'] = true;
    $this->tpl_data['candID']  = $candID;
    $this->tpl_data['PSCID']   = $candidate->getPSCID();

    // freeze it, just in case
    $this->form->freeze();

    return json_encode($this->tpl_data);
}