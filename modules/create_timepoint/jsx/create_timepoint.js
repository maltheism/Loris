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
          subproject: {
            control: 'control',
            experiment: 'experiment',
          },
          visit: {},
          psc: {},
        },
      },
      form: {
        display: {
          subproject: false,
          visit: false,
          psc: false,
        },
        value: {
          subproject: 'control',
          visit: '',
          psc: '',
        },
      },
      errors: false,
      url: {
        params: {
          candID: '',
          identifier: '',
        },
      },
    };

    // Bind component instance to custom methods
    this.fetchInitializerData = this.fetchInitializerData.bind(this);
    this.populateErrors = this.populateErrors.bind(this);
    this.collectParams = this.collectParams.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setForm = this.setForm.bind(this);
  }
  /**
   * Executes after component mounts.
   */
  componentDidMount() {
    console.log('componentDidMount');
    this.collectParams();
    this.fetchInitializerData();
  }
  /**
   * Retrieve params from the browser URL and save it in state.
   */
  collectParams() {
    const url = new URL(window.location.href);
    this.state.url.params = {
      candID: url.searchParams.get('candID'),
      identifier: url.searchParams.get('identifier'),
    };
    this.state.data.dccid = this.state.url.params.candID;
    this.setState(this.state);
  }
  /**
   * Retrieve data from the provided URL and save it in state.
   */
  fetchInitializerData() {
    const send = {
      command: 'initialize',
      candID: this.state.url.params.candID,
      identifier: this.state.url.params.identifier,
      subprojectID: this.state.form.subproject,
    };
    const url = this.props.DataURL + '/create_timepoint/ajax/timepoint.php';
    $.ajax({
      url: url,
      type: 'POST',
      async: true,
      data: send,
      success: function(data) {
        console.log('ajax - success');
        console.log('data is: ' + JSON.stringify(data));
        // Populate the form errors.
        if (data.errors && data.errors.length > 0) {
          this.setState({errors: data.errors});
        }
        // Populate the select options for subproject.
        if (data.subproject) {
          this.state.data.options.subproject = data.subproject;
          this.state.form.value.subproject = Object.keys(data.subproject)[0];
          console.log(this.state.form.value.subproject);
          this.state.form.display.subproject = true;
          this.setState(this.state);
        }
        // Populate the select options for visit.
        if (data.visit) {
          this.state.data.options.visit = data.visit;
          this.state.form.value.visit = Object.keys(data.visit)[0];
          this.state.form.display.visit = true;
          this.setState(this.state);
        }
        // Populate the select options for psc.
        if (data.psc) {
          this.state.data.options.psc = data.psc;
          this.state.form.value.psc = Object.keys(data.psc)[0];
          this.state.form.display.psc = true;
          this.setState(this.state);
        }
        // Display form to user.
        this.setState({isLoaded: true});
      }.bind(this),
      error: function(e, error) {
        this.populateErrors({message: 'Server error.'});
        this.setState({isLoaded: true});
      }.bind(this),
    });
  }
  /**
   * Set the form data based on state values of child elements/components
   *
   * @param {string} formElement - name of the selected element
   * @param {string} value - selected value for corresponding form element
   */
  setForm(formElement, value) {
    this.state.form.value.subproject = value;
    this.setState(this.state);
    // todo - Set visit label.
  }

  /**
   * Populate the elements of errors to display.
   *
   * @param {object} values - for individual form element.
   */
  populateErrors(values) {
    let errors = [];
    Object.keys(values).forEach(function(key) {
      // console.log(key, values[key]);
      errors.push(
        <div className='col-xs-12 col-sm-12 col-md-12'>
          <label className='error form-group'>
            {values[key]}
          </label>
        </div>
      );
    });
    this.setState({errors: errors});
  }

  /**
   * Handle form submission
   * @param {object} e - Form submission event
   */
  handleSubmit(e) {
    console.log('submit fired!');
    const send = {
      command: 'create',
      candID: this.state.url.params.candID,
      identifier: this.state.url.params.identifier,
      subproject: this.state.form.value.subproject,
      visit: this.state.form.value.visit,
      psc: this.state.form.value.psc,
    };
    console.log(send);
    const url = this.props.DataURL + '/create_timepoint/ajax/timepoint.php';
    $.ajax(url, {
      method: 'POST',
      dataType: 'json',
      data: send,
      success: function(data) {
        console.log('ajax - success');
        console.log('data is: ' + JSON.stringify(data));
        if (data.status === 'error') {
          // Populate the form errors.
          if (data.errors) {
            this.populateErrors(data.errors);
          }
        }
      }.bind(this),
      error: function(error) {
        this.populateErrors({message: 'Server error.'});
      }.bind(this),
    });
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
    const errors = this.state.errors;
    // Include subproject select.
    const subproject = this.state.form.display.subproject ? (
      <SelectElement
        id={'subproject'}
        name={'subproject'}
        ref={'subproject'}
        label={'Subproject'}
        value={this.state.form.value.subproject}
        options={this.state.data.options.subproject}
        onUserInput={this.setForm}
        emptyOption={false}
        disabled={false}
        required={true}
      />
    ) : '';
    // Include psc select.
    const psc = this.state.psc ? (
      <SelectElement
        id={'psc'}
        name={'psc'}
        ref={'psc'}
        label={'Site'}
        value={this.state.form.value.psc}
        options={this.state.data.options.psc}
        onUserInput={this.setForm}
        emptyOption={false}
        disabled={false}
        required={true}
      />
    ) : '';
    // Include visit select.
    const visit = this.state.visit ? (
      <SelectElement
        id={'visit'}
        name={'visit'}
        ref={'visit'}
        label={'Visit label'}
        value={this.state.form.value.visit}
        options={this.state.data.options.visit}
        onUserInput={this.setForm}
        emptyOption={false}
        disabled={false}
        required={true}
      />
    ) : '';

    return (
      <div>
        <div>
          <h3>Create Time Point</h3> <br />
          {errors}
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
            {subproject}
            {psc}
            {visit}
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
      DataURL={loris.BaseURL}
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
