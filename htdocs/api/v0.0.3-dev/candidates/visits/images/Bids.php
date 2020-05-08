<?php
/**
 * Handles API requests for image level BIDS files.
 *
 * PHP Version 5.5+
 *
 * @category Main
 * @package  API
 * @author   Cecile Madjar <cecile.madjar2@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
namespace Loris\API\Candidates\Candidate\Visit\Imaging;
require_once __DIR__ . '/Image.php';
/**
 * Handles API requests for image level BIDS files. Extends
 * Visit so that the constructor will validate the visit
 * portion of URL automatically.
 *
 * @category Main
 * @package  API
 * @author   Cecile Madjar <cecile.madjar2@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
class Bids extends \Loris\API\Candidates\Candidate\Visit\Imaging\Image
{
    /**
     * Construct a visit class object to serialize candidate visits
     *
     * @param string $method     The method of the HTTP request
     * @param string $CandID     The CandID to be serialized
     * @param string $VisitLabel The visit label to be serialized
     */
    public function __construct($method, $CandID, $VisitLabel, $Filename)
    {
        $requestDelegationCascade = $this->AutoHandleRequestDelegation;

        $this->AutoHandleRequestDelegation = false;

        if (empty($this->AllowedMethods)) {
            $this->AllowedMethods = ['GET'];
        }
        $this->CandID     = $CandID;
        $this->VisitLabel = $VisitLabel;
        $this->Filename   = $Filename;

        //   $this->Timepoint = \Timepoint::singleton($timepointID);
        // Parent constructor will handle validation of
        // CandID
        parent::__construct($method, $CandID, $VisitLabel, $Filename);

        if ($requestDelegationCascade) {
            $this->handleRequest();
        }
    }

    /**
     * Handles a GET request
     *
     * @return void but populates $this->JSON
     */
    public function handleGET()
    {
        $this->JSON          = [
            'Meta' => [
                'CandID'   => $this->CandID,
                'Visit'    => $this->VisitLabel,
                'Filename' => $this->Filename,
            ],
        ];

        $this->JSON['Files'] = $this->GetImageBidsFiles();
    }

    /**
     * Gets a list of visit level BIDS files for this visit. Filename only.
     *
     * @return an array of strings of filenames
     */
    function getImageBidsFiles()
    {
        $factory = \NDB_Factory::singleton();
        $DB      = $factory->database();
        $rows    = $DB->pselect(
            "SELECT 
                     bef.ModalityType AS Subfolder,
                     SUBSTRING_INDEX(FilePath, '/', -1) AS FilePath
                FROM bids_export_files bef 
                     JOIN files f USING (FileID)
                     JOIN session s ON (s.ID=f.SessionID)
                     JOIN candidate c ON (s.CandID=c.CandID)
                WHERE f.File LIKE CONCAT('%', :Fname)
                     AND c.CandID      = :CID 
                     AND s.Visit_label = :VL 
                     AND c.Active      = 'Y' 
                     AND s.Active      = 'Y'
                     AND bef.FileType  = 'nii'",
            [
                'VL'    => $this->VisitLabel,
                'CID'   => $this->CandID,
                'Fname' => $this->Filename,
            ]
        );

        $files = array_map(
            function ($item) {
                $subfolder = $item['Subfolder'];
                $file_name = basename($item['FilePath'], '.nii.gz');
                $candid    = $this->CandID;
                $session   = $this->VisitLabel;
                $minc_name = $this->Filename;
                $nii_link  = "/candidates/$candid/$session/images/$minc_name/bids/$file_name.nii.gz";
                $json_link = "/candidates/$candid/$session/images/$minc_name/bids/$file_name.json";

                $final_array_to_return = array(
                    'Subfolder'  => $subfolder,
                    'NiftiLink'  => $nii_link,
                    'JsonLink'   => $json_link,
                );

                if ($subfolder == 'dwi') {
                    $final_array_to_return['BvalLink'] =
                        "/candidates/$candid/$session/images/$minc_name/bids/$file_name.bval";
                    $final_array_to_return['BvecLink'] =
                        "/candidates/$candid/$session/images/$minc_name/bids/$file_name.bvec";
                }

                if (strpos('_task-', $file_name)) {
                    $final_array_to_return['EventLink'] =
                        "/candidates/$candid/$session/images/$minc_name/bids/$file_name-events.txt";
                }

                return $final_array_to_return;
            },
            $rows
        );

        return $files;
    }
}

if (isset($_REQUEST['PrintFiles'])) {
    $obj = new Bids(
        $_SERVER['REQUEST_METHOD'],
        $_REQUEST['CandID'],
        $_REQUEST['VisitLabel'],
        $_REQUEST['Filename']
    );
    print $obj->toJSONString();
}