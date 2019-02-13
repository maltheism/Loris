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
      data: {
        pscid: '',
        dccid: '',
        visit: '',
        options: {
          control: 'control',
          experiment: 'experiment',
        },
        form: '',
      },
      form: {
        subproject: 'experiment',
      },
      psc: null,
      errors: null,
    };

    // Bind component instance to custom methods
    this.collectParams = this.collectParams.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.setForm = this.setForm.bind(this);
  }
  /**
   * Executes after component mounts.
   */
  componentDidMount() {
    console.log('componentDidMount');
    // this.fetchData();
    this.setState({
      isLoaded: true,
    });
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
   * Set the form data based on state values of child elements/components
   *
   * @param {string} formElement - name of the selected element
   * @param {string} value - selected value for corresponding form element
   */
  setForm(formElement, value) {
    this.state.form.subproject = value;
    this.setState(this.state);
  }

  /**
   * Handle form submission
   * @param {object} e - Form submission event
   */
  handleSubmit(e) {

  }
  /**
   * @return {DOMRect}
   */
  render() {
    // Waiting for async data to load.
    if (!this.state.isLoaded) {
      return <Loader/>;
    }
    // Include form errors.
    const errors = this.state.errors ? (
      <div className='col-sm-12'>
        <label className='error col-sm-12'>
          todo
        </label>
      </div>
    ) : '';
    // Include psc label.
    const psc = this.state.psc ? (
      <StaticElement
        label='PSCID'
        text={this.state.data.pscid}
      />
    ) : '';
    console.log('success');

    return (
      <div>
        {errors}
        <div>
          <h3>Create Time Point</h3>
          <FormElement
            name={'timepointInfo'}
            fileUpload={false}
            ref={'form'}
            class={'form-group col-sm-12'}
            onSubmit={this.handleSubmit}
          >
            <StaticElement
              label={'DCCID'}
              text={this.state.data.dccid}
            />
            <SelectElement
              id={'subproject'}
              name={'subproject'}
              ref={'subproject'}
              label={'Subproject'}
              value={this.state.form.subproject}
              options={this.state.data.options}
              onUserInput={this.setForm}
              emptyOption={false}
              disabled={false}
              required={true}
            />
            {psc}
            <StaticElement
              label={'Visit'}
              text={this.state.data.visit}
            />
            <ButtonElement
              label={'Create Time Point'}
              type={'submit'}
            />
          </FormElement>
        </div>
      </div>
    );
  }
}
CreateTimepoint.propTypes = {
  Module: PropTypes.string,
  DataURL: PropTypes.string,
};

/**
 * Render create_timepoint on page load.
 */
window.onload = function() {
  const createTimepoint = (
    <CreateTimepoint
      Module='create_timepoint'
      DataURL={loris.BaseURL + '/create_timepoint/AddTimepoint/?format=json'}
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
