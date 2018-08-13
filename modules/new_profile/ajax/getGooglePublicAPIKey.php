<?php
/**
 * Get Candidate Options.
 *
 * This retrieves the public google api key
 * for the new_profile form to use google places
 * and view cities as the user types.
 *
 * PHP Version 7
 *
 * @category Loris
 * @package  New_Profile
 * @author   Alizée Wickenheiser <alizee.wickenheiser@mcin.ca>
 * @license  Loris license
 * @link     https://github.com/aces/Loris-Trunk
 */

// Load the config file.
$factory = NDB_Factory::singleton();
$config = $factory->config($configFile);

$googlePlacesPublicKey = $config->getSetting('googlePlacesPublicKey');

/**
 * Send the data in JSON format.
 */
echo json_encode(
    array(
        'key' => 'AIzaSyCxy41BXs6lpdQUrna7Ah8_kkmuG9Qxpfk'
    )
);
