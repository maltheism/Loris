<?php
/**
 * Get Candidate Options.
 *
 * This retrieves the extra fields needed
 * for the new_profile form the user will submit.
 *
 * PHP Version 7
 *
 * @category Loris
 * @package  New_Profile
 * @author   Alizée Wickenheiser <alizee.wickenheiser@mcin.ca>
 * @license  Loris license
 * @link     https://github.com/aces/Loris-Trunk
 */

/**
 * User permission verification.
 */
$user =& User::singleton();
if (!$user->hasPermission('data_entry')) {
    header('HTTP/1.1 403 Forbidden');
    exit;
}

/**
 * The necessary fields to send to client.
 */
try {
    $data = necessaryFields();
} catch (LorisException $e) {
    throw new LorisException("Server Error");
}

/**
 * Send the data in JSON format.
 */
echo json_encode($data);

/**
 * Processes the necessary fields
 * for the new_profile react component.
 *
 * @return array
 * @throws LorisException
 */
function necessaryFields()
{
    $config =& \NDB_Config::singleton();

    $dobFormat   = $config->getSetting('dobFormat');
    $minYear     = $config->getSetting('startYear') - $config->getSetting('ageMax');
    $maxYear     = $config->getSetting('endYear') - $config->getSetting('ageMin');
    $dateClass   = 'form-control input-sm input-date';
    $dateOptions = array(
                    'language'       => 'en',
                    'format'         => $dobFormat,
                    'addEmptyOption' => true,
                    'minYear'        => $minYear,
                    'maxYear'        => $maxYear,
                   );

    $data = array(
             'gender' => array(
                          'options' => array(
                                        'Male'    => 'Male',
                                        'Female'  => 'Female',
                                        'Other'   => 'Other',
                                        'Unknown' => 'Unknown',
                                       ),
                         ),
             'dob'    => array(
                          'options'    => $dateOptions,
                          'attributes' => ['class' => $dateClass],
                         ),
            );

    if ($config->getSetting('useEDC') == 'true') {
        // add expected date of confinement
        $data['edc'] = array(
                        'options'    => $dateOptions,
                        'attributes' => ['class' => $dateClass],
                       );
    }

    // add sites for users with more than one site affiliation
    $user =& \User::singleton();
    $DB   = \Database::singleton();
    $user_list_of_sites = $user->getData('CenterIDs');
    $num_sites          = count($user_list_of_sites);

    if ($num_sites >1) {
        $psc_labelOptions = array(null => '');
        foreach ($user_list_of_sites as $key => $siteID) {
            $center = $DB->pselectRow(
                'SELECT CenterID as ID, Name FROM psc WHERE CenterID =:cid',
                array('cid' => $siteID)
            );
            $psc_labelOptions[$siteID] = $center['Name'];
        }
        $data['psc'] = ['options' => $psc_labelOptions];
    }

    $PSCID_Settings = $config->getSetting('PSCID');
    if ($PSCID_Settings['generation'] == 'user') {
        $data['PSCID'] = ['text' => 'PSCID'];
    }

    return $data;
}
