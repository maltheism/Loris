<?php
/**
 * New_profile
 *
 * PHP Version 7
 *
 * @category Main
 * @package  Loris
 * @author   Ted Strauss <ted.strauss@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://github.com/aces/Loris
 */
namespace LORIS\new_profile;

/**
 * New_profile
 *
 * PHP Version 7
 *
 * @category Main
 * @package  Loris
 * @author   Ted Strauss <ted.strauss@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://github.com/aces/Loris
 */
class New_Profile extends \NDB_Form
{
    public $skipTemplate = true;

    /**
     * Tie the access to a data_entry permission
     *
     * @return bool true if they have access to this page
     * @throws \ConfigurationException
     * @throws \LorisException
     */
    function _hasAccess()
    {
        // create user object
        $user =& \User::singleton();

        $site_arr      = $user->getData('CenterIDs');
        $userInDCCSite = in_array('1', $site_arr);
        if ($user->hasStudySite() or $userInDCCSite) {
            return $user->hasPermission('data_entry');
        }

        return false;
    }

    /**
     * Gathers JS dependencies and merge them with the parent
     *
     * @return array of javascript to be inserted
     */
    function getJSDependencies()
    {
        $factory = \NDB_Factory::singleton();
        $baseURL = $factory->settings()->getBaseURL();
        $deps    = parent::getJSDependencies();
        return array_merge(
            $deps,
            array(
                $baseURL . '/new_profile/js/react.new_profile.js',
                $baseURL . '/new_profile/js/guid.bundle.js',
            )
        );
    }

}