<?php
/**
 * Handles a request to the project's BIDS export portion of the LORIS API
 *
 * PHP Version 7
 *
 * @category Main
 * @package  API
 * @author   Cécile Madjar <cecile.madjar2@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */

namespace Loris\API\Projects;
//Load config file and ensure paths are correct
set_include_path(get_include_path() . ":" . __DIR__ . "/../");

require_once 'APIBase.php';

/**
 * Class to handle project's BIDS export portion of the LORIS API
 *
 * @category Main
 * @package  API
 * @author   Cécile Madjar <cecile.madjar2@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
class Bids extends \Loris\API\APIBase
{
    var $RequestData;
    private $_project;

    /**
     * Create a Bids request handler
     *
     * @param string $method The HTTP request method of the request
     * @param array  $data   The data that was POSTed to the request
     */
    public function __construct($method, $data=null)
    {

        $this->AllowedMethods = array('GET');
        $this->AutoHandleRequestDelegation = false;

        parent::__construct($method);

        $projectName = $data['project_name'];

        try {
            $this->_project = $this->Factory->project($projectName);
        } catch (\LorisException $e) {
            $this->header("HTTP/1.1 404 Not Found");
            $this->error(['error' => 'Invalid project']);
            $this->safeExit(0);
        }

        try {
            $dateString = $data['since'] ?? '1970-01-01';
            $this->RequestData['since'] = new \DateTime($dateString);
        } catch(\Exception $e) {
            $this->header("HTTP/1.1 400 Bad Request");
            $this->error(['error' => 'Invalid date']);
            $this->safeExit(0);
        }

        $this->handleRequest();

    }

    /**
     * Calculate an ETag by taking a hash of the number of BIDS files in the
     * database and the time of the most recently changed one.
     *
     * @return string An ETag for ths candidates object
     */
    function calculateETag()
    {
        return md5('Bids:' . json_encode($this->JSON, true));
    }


    /**
     * Handles a bids GET request
     *
     * @return void but populates $this->JSON
     */
    public function handleGET()
    {
        $dataset_description_file = [
            'Link' =>  '/projects/loris/bids/dataset_description.json'
        ];

        $readme_file = [
            'Link' => '/projects/loris/bids/README'
        ];

        $bids_validator_config_file = [
            'Link' => '/projects/loris/bids/.bids-validator-config.json'
        ];

        $participants_files = [
            'TsvLink'  => '/projects/loris/bids/participants.tsv',
            'JsonLink' => '/projects/loris/bids/participants.json'
        ];

        $session_results = $this->DB->pselect(
            "SELECT
               s.CandID,
               c.PSCID,
               s.Visit_label,
               bef.FilePath
             FROM bids_export_files bef
             LEFT JOIN session s   ON (bef.SessionID = s.ID)
             LEFT JOIN candidate c USING (CandID)
             WHERE c.Active          = 'Y'
               AND bef.BIDSFileLevel = 'session'
               AND bef.FileType      = 'tsv' ",
            array()
        );

        $session_files = array_map(
            function($item) {
                $candid    = $item['CandID'];
                $pscid     = $item['PSCID'];
                $session   = $item['Visit_label'];
                $filename  = basename($item['FilePath'], '.tsv');
                $tsv_link  = "/candidates/$candid/$session/bidsfiles/$filename.tsv";
                $json_link = "/candidates/$candid/$session/bidsfiles/$filename.json";
                return array(
                    'Candidate' => $candid,
                    'PSCID'     => $pscid,
                    'Visit'     => $session,
                    'TsvLink'   => $tsv_link,
                    'JsonLink'  => $json_link,
                );
            },
            $session_results
        );

        $result_images = $this->DB->pselect(
            "SELECT
               s.CandID,
               c.PSCID,
               s.Visit_label,
               bef.ModalityType,
               bef.FilePath,
               f.File,
               mst.Scan_type as LorisScanType
             FROM bids_export_files bef
             LEFT JOIN files f           USING (FileID)
             LEFT JOIN mri_scan_type mst ON (mst.ID=f.AcquisitionProtocolID) 
             LEFT JOIN session s         ON (f.SessionID = s.ID)
             LEFT JOIN candidate c       USING (CandID)
             WHERE c.Active           = 'Y'
                AND bef.BIDSFileLevel = 'image'
                AND bef.FileType      = 'nii'
                  ",
            array()
        );

        $images = array_map(
            function ($item) {
                $candid      = $item['CandID'];
                $pscid       = $item['PSCID'];
                $session     = $item['Visit_label'];
                $subfolder   = $item['ModalityType'];
                $file_name   = basename($item['FilePath'], '.nii.gz');
                $minc_name   = basename($item['File']);
                $nii_link    = "/candidates/$candid/$session/images/$minc_name/bids/$file_name.nii.gz";
                $json_link   = "/candidates/$candid/$session/images/$minc_name/bids/$file_name.json";

                $final_array_to_return = array(
                    'Candidate'     => $candid,
                    'PSCID'         => $pscid,
                    'Visit'         => $session,
                    'LorisScanType' => $item['LorisScanType'],
                    'Subfolder'     => $subfolder,
                    'NiftiLink'     => $nii_link,
                    'JsonLink'      => $json_link,
                );

                if ($subfolder == 'dwi') {
                    $final_array_to_return['BvalLink'] =
                        "/candidates/$candid/$session/images/$minc_name/bids/$file_name.bval";
                    $final_array_to_return['BvecLink'] =
                        "/candidates/$candid/$session/images/$minc_name/bids/$file_name.bvec";
                }

                if (preg_match('/_task-/', $file_name)) {
                    $final_array_to_return['EventLink'] =
                        "/candidates/$candid/$session/images/$minc_name/bids/$file_name"."_events.txt";
                }

                return $final_array_to_return;
            },
            $result_images
        );

        $this->JSON = [
            "DatasetDescription"  => $dataset_description_file,
            "README"              => $readme_file,
            "BidsValidatorConfig" => $bids_validator_config_file,
            "Participants"        => $participants_files,
            "SessionFiles"        => $session_files,
            "Images"              => $images
        ];
    }
}

$input = null;
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $input = $_GET;
        break;
}
print (new Bids($_SERVER['REQUEST_METHOD'], $input))->toJSONString();
