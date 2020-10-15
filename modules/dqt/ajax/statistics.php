<?php
/**
 * Data Querying Module
 *
 * PHP Version 7
 *
 * @category Data_Querying_Module
 * @package  Loris
 * @author   Loris Team <loris-dev@bic.mni.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
$user =& User::singleton();
if (!$user->hasPermission('dataquery_view')) {
    header("HTTP/1.1 403 Forbidden");
    exit;
}
require_once __DIR__ . '/../../../vendor/autoload.php';
$client = new NDB_Client();
$client->makeCommandLine();
$client->initialize(__DIR__ . "/../../../project/config.xml");
header("Content-Type: application/json");

$config      = \NDB_Config::singleton();
$couchConfig = $config->getSetting('CouchDB');
$cdb         = \NDB_Factory::singleton()->couchDB(
    $couchConfig['dbName'],
    $couchConfig['hostname'],
    intval($couchConfig['port']),
    $couchConfig['admin'],
    $couchConfig['adminpass']
);

print json_encode([
    'participants' => '1,004,912',
    'gender' => [
        ['label' => 'Female', 'total' => '602656'],
        ['label' => 'Male', 'total' => '402256'],
    ],
    'disease' => [
        'labels' => ['Autism', 'Anxiety', 'OCD'],
        'datasets' => [
            'female' => ['500000', '320123', '159000'],
            'male' => ['450000', '932000', '169000'],
        ]
    ]
]);
