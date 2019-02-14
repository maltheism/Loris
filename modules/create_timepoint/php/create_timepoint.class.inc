<?php
/**
 * This file contains the NDB_Form_create_timepoint class
 *
 * PHP Version 5
 *
 * @category Loris
 * @package  Create_Timepoint
 * @author   Loris Team <loris.mni@bic.mni.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://github.com/aces/Loris-Trunk
 */

namespace LORIS\create_timepoint;

/**
 * The forms for the new profile menu
 *
 * @category Loris
 * @package  Create_Timepoint
 * @author   Loris Team <loris.mni@bic.mni.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://github.com/aces/Loris-Trunk
 */

class Create_Timepoint extends \NDB_Form
{

    public $skipTemplate = true; // stops from looking for a smarty template

    /**
     * This timepoint's candidate
     *
     * @var \Candidate
     */
    protected $candidate;

    /**
     * The subprojectID being created
     */
    var $subprojectID;

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
     * Does the setup required for this page.
     * Particularly creates all the form elements.
     *
     * @return void
     */
    function setup()
    {
        parent::setup();
    }


    /**
     * Validates user form selection
     *
     * @param array $val array of form values
     *
     * @return array
     * @throws \LorisException
     */
    function _validate(array $val)
    {
        $user = \User::singleton();

        $errors = array();

        // validate site entered
        $site = $val['psc'] ?? '';
        $user_list_of_sites = $user->getData('CenterIDs');
        $num_sites          = count($user_list_of_sites);
        if ($num_sites > 1 && (empty($site) || !$user->hasCenter($site))) {
            $errors['psc'] = "Site must be selected from the available dropdown.";
        }

        $candid       = $this->identifier;
        $subprojectID = $val['subprojectID'];
        $visitLabel   = $val['visitLabel'] ?? '';

        try {
            \TimePoint::isValidVisitLabel($candid, $subprojectID, $visitLabel);
        } catch ( \LorisException $e) {
            $errors['visitLabel'] = $e->getMessage();
        }

        return $errors;
    }

    /**
     * Generate a breadcrumb trail for this page.
     *
     * @return \LORIS\BreadcrumbTrail
     */
    public function getBreadcrumbs(): \LORIS\BreadcrumbTrail
    {
        $candid = 897255;
        $pscid = 897255;
        // $candid = $this->candidate->getCandID();
        // $pscid  = $this->candidate->getPSCID();

        return new \LORIS\BreadcrumbTrail(
            new \LORIS\Breadcrumb(
                'Access Profile',
                '/candidate_list'
            ),
            new \LORIS\Breadcrumb(
                "Candidate Profile $candid / $pscid",
                "/$candid"
            ),
            new \LORIS\Breadcrumb(
                'Create Time Point',
                "/create_timepoint/?candID=$candid&identifier=$candid"
            )
        );
    }

    /**
     * Get js Dependencies
     *
     * @return array
     */
    function getJSDependencies()
    {
        $depends = parent::getJSDependencies();
        $factory = \NDB_Factory::singleton();
        $baseurl = $factory->settings()->getBaseURL();
        $depends = array_merge(
            $depends,
            array(
                $baseurl . '/create_timepoint/js/create_timepoint.js',
            )
        );
        return $depends;
    }

}

