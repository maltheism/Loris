<?php
/**
 * Handles API requests for the candidate's visit level BIDS files.
 *
 * PHP Version 5.5+
 *
 * @category Main
 * @package  API
 * @author   Cecile Madjar <cecile.madjar2@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
namespace Loris\API\Candidates\Candidate\Visit;
require_once '../Visit.php';
/**
 * Handles API requests for the candidate's visit level BIDS files. Extends
 * Visit so that the constructor will validate the visit
 * portion of URL automatically.
 *
 * @category Main
 * @package  API
 * @author   Cecile Madjar <cecile.madjar2@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
class BidsFiles extends \Loris\API\Candidates\Candidate\Visit
{
    /**
     * Construct a visit class object to serialize candidate visits
     *
     * @param string $method     The method of the HTTP request
     * @param string $CandID     The CandID to be serialized
     * @param string $VisitLabel The visit label to be serialized
     */
    public function __construct($method, $CandID, $VisitLabel)
    {
        $requestDelegationCascade = $this->AutoHandleRequestDelegation;

        $this->AutoHandleRequestDelegation = false;

        if (empty($this->AllowedMethods)) {
            $this->AllowedMethods = ['GET'];
        }
        $this->CandID     = $CandID;
        $this->VisitLabel = $VisitLabel;

        //   $this->Timepoint = \Timepoint::singleton($timepointID);
        // Parent constructor will handle validation of
        // CandID
        parent::__construct($method, $CandID, $VisitLabel);

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
                'CandID' => $this->CandID,
                'Visit'  => $this->VisitLabel,
            ],
        ];

        $this->JSON['Files'] = $this->GetVisitBidsFiles();
    }

    /**
     * Gets a list of visit level BIDS files for this visit. Filename only.
     *
     * @return an array of strings of filenames
     */
    function getVisitBidsFiles()
    {
        $factory = \NDB_Factory::singleton();
        $DB      = $factory->database();
        $rows    = $DB->pselect(
            "SELECT 
                    SUBSTRING_INDEX(FilePath, '/', -1) as Filename
                FROM bids_export_files bef 
                    JOIN session s ON (s.ID=bef.SessionID)
                    JOIN candidate c ON (s.CandID=c.CandID)
                WHERE s.Visit_label=:VL AND c.CandID=:CID 
                    AND c.Active='Y' AND s.Active='Y'",
            [
                'VL'  => $this->VisitLabel,
                'CID' => $this->CandID,
            ]
        );
        return $rows;
    }

}

if (isset($_REQUEST['PrintFiles'])) {
    $obj = new BidsFiles(
        $_SERVER['REQUEST_METHOD'],
        $_REQUEST['CandID'],
        $_REQUEST['VisitLabel']
    );
    print $obj->toJSONString();
}