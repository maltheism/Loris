<?php
/**
 * Create timepoint.
 *
 * Used to create timepoint by the create_timepoint form.
 * Ensures the user can create timepoint before
 * processing the $_POST (array) data.
 *
 * PHP Version 7
 *
 * @category Loris
 * @package  create_timepoint
 * @author   Alizée Wickenheiser <alizee.wickenheiser@mcin.ca>
 * @license  Loris license
 * @link     https://github.com/aces/Loris-Trunk
 */

namespace LORIS\create_timepoint;
use \Psr\Http\Message\ServerRequestInterface;
use \Psr\Http\Message\ResponseInterface;


class CreateTimepoint extends \NDB_Page
{
    public $skipTemplate = true;

    /**
     * Determine whether the user has permission to view this page
     *
     * @param \User $user The user whose access is being checked
     *
     * @return bool
     * @throws \LorisException
     */
    function _hasAccess(\User $user) : bool
    {
        $candidate =& \Candidate::singleton($this->identifier);

        // check user permissions
        return (
            $user->hasPermission('data_entry') &&
            (in_array(
                $candidate->getData('RegistrationCenterID'),
                $user->getData('CenterIDs')
            )
            )
        );
    }

    /**
     * The AJAX endpoint
     *
     * @param ServerRequestInterface $request The incoming PSR7 request
     *
     * @return ResponseInterface The outgoing PSR7 response
     * @throws \DatabaseException
     * @throws \LorisException
     */
    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        $values    = $request->getParsedBody();
        $DB        = \Database::singleton();
        $user      = \User::singleton();
        $config    = \NDB_Config::singleton();
        $site_arr  = $user->getData('CenterIDs');
//        $num_sites = count($site_arr);
//        if ($num_sites >1) {
//            $candID = \Candidate::createNew(
//                $values['site'],
//                $values['dateTaken'],
//                $values['edcDateTaken'] ?? null,
//                $values['gender'],
//                $values['pscid'] ?? null
//            );
//        } else {
//            $centerIDs = $user->getData('CenterIDs');
//            $centerID  = $centerIDs[0];
//            $candID    = \Candidate::createNew(
//                $centerID,
//                $values['dateTaken'],
//                $values['edcDateTaken'] ?? null,
//                $values['gender'],
//                $values['pscid'] ?? null
//            );
//        }
//        // get the candidate
//        $candidate = \Candidate::singleton($candID);
//        // setup the project for candidate
//        if (isset($values['project'])) {
//            $candidate->setData(array('ProjectID' => $values['project']));
//        }
//        $result           = array();
//        $result['candID'] = $candID;
//        $result['pscid']  = $candidate->getPSCID();
//        return (new \LORIS\Http\Response())
//            ->withHeader("Content-Type", "text/plain")
//            ->withStatus(200)
//            ->withHeader("Allow", "POST")
//            ->withBody(
//                new \LORIS\Http\StringStream(
//                    json_encode($result)
//                )
//            );
    }

}
