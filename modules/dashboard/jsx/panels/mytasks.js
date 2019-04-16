import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from 'Panel';

/**
 * My Tasks Panel.
 *
 * @description panel for dashboard.
 *
 * @author Alizée Wickenheiser
 * @version 1.0.0
 *
 */
class MyTasks extends Component {
  /**
   * Constructor of component
   * @param {object} props - the component properties.
   */
  constructor(props) {
    super(props);
  }

  /**
   * @return {DOMRect}
   */
  render() {
    if (this.props.display) {
      let panel = {
        tasks: {
          title: null,
          content: [],
          div: null,
        },
      };
      if (this.props.data) {
        console.log(this.props.data);
        if (this.props.data.new_scans !== '' ||
            this.props.data.conflicts !== '' ||
            this.props.data.incomplete_forms !== '' ||
            this.props.data.radiology_review !== '' ||
            this.props.data.violated_scans !== '' ||
            this.props.data.pending_users !== '' ||
            this.props.data.issues_assigned !== '') {
          if (parseInt(this.props.data.conflicts) > 0) {
            const content = (
              <a key={'list_item_conflict_resolver'}
                href={window.origin + '/conflict_resolver'}
                 className={'list-group-item conflict_resolver'}
              >
                <div className={'row'}>
                  <div className={'col-xs-8 text-left'}>
                    <div className={'huge'}>
                      {this.props.data.conflicts}
                    </div>
                    Data entry conflict{parseInt(
                      this.props.data.conflicts) > 1 ? 's' : null}
                  </div>
                  <div className={'col-xs-4 text-right alert-chevron'}>
                    <span className={
                      'glyphicon glyphicon-chevron-right medium'
                    }/>
                    <p className={'small task-site'}>
                      {this.props.data.conflicts_site}
                    </p>
                  </div>
                </div>
              </a>
            );
            panel.tasks.content.push(content);
          }
          if (parseInt(this.props.data.incomplete_forms) > 0) {
            let content = null;
            if (this.props.data.incomplete_forms_site === 'Sites: all') {
              content = (
                <a key={'list_item_statistics'}
                  href={window.origin + '/statistics/statistics_site'}
                   className={'list-group-item statistics'}
                >
                  <div className={'row'}>
                    <div className={'col-xs-8 text-left'}>
                      <div className={'huge'}>
                        {this.props.data.incomplete_forms}
                      </div>
                      Incomplete form{parseInt(
                        this.props.data.incomplete_forms) > 1 ? 's' : null}
                      </div>
                      <div className={'col-xs-4 text-right alert-chevron'}>
                      <span className={
                        'glyphicon glyphicon-chevron-right medium'
                      }/>
                      <p className={'small task-site'}>
                        {this.props.data.incomplete_forms_site}
                      </p>
                      </div>
                  </div>
                </a>
              );
            } else {
              const userSites = [];
              for (let userSite in this.props.data.user_site) {
                if (this.props.data.user_site.hasOwnProperty(userSite)) {
                  userSites.push(
                    (
                      <a key={'tasks_user_sites_' + userSite}
                         href={
                        window.origin +
                        '/statistics/statistics_site/?CenterID=' +
                        this.props.data.user_site[userSite]
                      }>
                        <p style={{color: '#555'}}
                           className={'small task-site'}
                        >
                          {this.props.data.incomplete_forms_site[userSite]}
                          <span className={
                            'glyphicon glyphicon-chevron-right small'
                          }/>
                        </p>
                      </a>
                    )
                  );
                }
              }
              content = (
                <div className={'list-group-item'}>
                  <div className={'row'}>
                    <div className={'col-xs-8 text-left'}>
                      <div className={'huge'}>
                        {this.props.data.incomplete_forms}
                      </div>
                      Incomplete form{parseInt(
                      this.props.data.incomplete_forms) > 1 ? 's' : null}
                    </div>
                    <div className={'col-xs-4 text-right alert-chevron'}>
                      {userSites}
                    </div>
                  </div>
                </div>
              );
            }
            panel.tasks.content.push(content);
          }
          if (parseInt(this.props.data.new_scans) > 0) {
            const content = (
              <a key={'list_item_imaging_browser'}
                href={window.origin + '/imaging_browser/'}
                 className={'list-group-item new-scans'}
              >
                <div className={'row'}>
                  <div className={'col-xs-8 text-left'}>
                    <div className='huge'>{this.props.data.new_scans}</div>
                    New and pending imaging session{parseInt(
                    this.props.data.$new_scans) > 1 ? 's' : null}
                  </div>
                  <div className={'col-xs-4 text-right alert-chevron'}>
                    <span className={
                      'glyphicon glyphicon-chevron-right medium'
                    }/>
                    <p className={'small task-site'}>
                      {this.props.data.new_scans_site}
                    </p>
                  </div>
                </div>
              </a>
            );
            panel.tasks.content.push(content);
          }
          if (parseInt(this.props.data.violated_scans) > 0) {

          }
          if (parseInt(this.props.data.pending_users) > 0) {

          }
          if (parseInt(this.props.data.issues_assigned) > 0) {

          }
        }
        panel.tasks.div = (
          <div>
            {panel.tasks.content}
          </div>
        );
      }
      return (
        <div className='col-lg-12 col-md-6 col-sm-6 col-xs-12'>
          <Panel
            title={'My Tasks'}
            id={'tasksPanel'}
          >
            {panel.tasks.div}
          </Panel>
        </div>
      );
    } else {
      return null;
    }
  }
}
MyTasks.defaultProps = {
  display: false,
  data: null,
};

MyTasks.propTypes = {
  display: PropTypes.bool,
  data: PropTypes.object,
};

export default MyTasks;
