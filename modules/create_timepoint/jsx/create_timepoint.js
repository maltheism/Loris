import React from 'react';
import Loader from 'Loader';
import PropTypes from 'prop-types';

/**
 * Create Timepoint.
 *
 * @description form for create timepoint.
 *
 * @author Alizée Wickenheiser
 * @version 1.0.0
 *
 */
class CreateTimepoint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    // Bind component instance to custom methods
    this.fetchData = this.fetchData.bind(this);
    this.collectParams = this.collectParams.bind(this);
  }
  /**
   * Executes after component mounts.
   */
  componentDidMount() {
    console.log('componentDidMount');
    this.fetchData();
  }
  /**
   * Retrieve params from the browser URL and save it in state.
   */
  collectParams() {
    this.state.url.params = {
      candID: url.searchParams.get('candID'),
      identifier: url.searchParams.get('identifier'),
    };
  }
  /**
   * Retrieve data from the provided URL and save it in state.
   */
  fetchData() {
    $.ajax(this.props.DataURL, {
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        console.log('success');
        this.setState({
          Data: data,
          isLoaded: true,
        });
      }.bind(this),
      error: function(error) {
        console.log('error');
        console.error(error);
      },
    });
  }
  /**
   * @return {DOMRect}
   */
  render() {
    // Waiting for async data to load
    if (!this.state.isLoaded) {
      return <Loader/>;
    }
    return (
      <div>
        <form method='post' name='create_timepoint' id='create_timepoint'>
          <h3>Create Time Point</h3>
        </form>
      </div>
    );
  }
}
CreateTimepoint.propTypes = {
  pscid: PropTypes.string,
  children: PropTypes.string,
};

/**
 * Render create_timepoint on page load.
 */
window.onload = function() {
  const dataURL = loris.BaseURL + '/create_timepoint/?format=json';
  const createTimepoint = (
    <CreateTimepoint
      Module='create_timepoint'
      DataURL={dataURL}
    />
  );

  // Create a wrapper div in which React component will be loaded
  const browserDOM = document.createElement('div');
  browserDOM.id = 'page_create_timepoint';

  // Append wrapper div to page content
  const rootDOM = document.getElementById('lorisworkspace');
  rootDOM.appendChild(browserDOM);

  ReactDOM.render(createTimepoint, document.getElementById('page_create_timepoint'));
};
