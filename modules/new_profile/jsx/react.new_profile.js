/**
 * This is the React class for the new_profile.
 */
class NewProfileApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      showCandidate: false,
      user: {
        guid: {
          name: {
            first: '',
            middle: '',
            last: '',
          },
          dob: {
            value: '',
            confirmation: '',
            city: '',
          },
          gender: 'Female',
        },
        psc: '',
        pscid: '',
        edc: {
          value: '',
          confirmation: ''
        }
      },
      setup: null,
      div: {
        input: {
          dob: {
            value: document.getElementById('dob1'),
            confirmation: document.getElementById('dob2')
          },
          edc: {
            value: document.getElementById('edc1'),
            confirmation: document.getElementById('edc2')
          }
        },
        message: {
          error: {
            dob: {
              value: document.getElementById('dob1_error_message'),
              confirmation: document.getElementById('dob2_error_message')
            },
            edc: {
              value: document.getElementById('edc1_error_message'),
              confirmation: document.getElementById('edc2_error_message')
            },
            submission: document.getElementById('submission_error_message')
          }
        }
      }
    };

    // Bind component instance to custom methods
    this.fetchData                    = this.fetchData.bind(this);
    this.handlePersonalIdentification = this.handlePersonalIdentification.bind(this);
    this.handleEdcChange              = this.handleEdcChange(this);
    this.handleEdcConfirmationChange  = this.handleEdcConfirmationChange(this);
    this.handlePscChange              = this.handlePscChange.bind(this);
    this.handlePscidChange            = this.handlePscidChange.bind(this);
    this.handleDateChange             = this.handleDateChange.bind(this);
    this.handleDateConfirmChange      = this.handleDateConfirmChange.bind(this);
    this.handleGenderChange           = this.handleGenderChange.bind(this);
    this.handleSubmit                 = this.handleSubmit.bind(this);
  }

  /**
   * Fetch data when component mounts.
   */
  componentDidMount() {
    this.fetchData();
  }

  /**
   * Post-Render when we can access the DOM.
   */
  componentDidUpdate(prevProps, prevState) {
    this.state.div.input.dob.value = document.getElementById('dob1');
    this.state.div.input.dob.confirmation = document.getElementById('dob2');
    this.state.div.input.edc.value = document.getElementById('edc1');
    this.state.div.input.edc.confirmation = document.getElementById('edc2');
    this.state.div.message.error.dob.value = document.getElementById('dob1_error_message');
    this.state.div.message.error.dob.confirmation = document.getElementById('dob2_error_message');
    this.state.div.message.error.edc.value = document.getElementById('edc1_error_message');
    this.state.div.message.error.edc.confirmation = document.getElementById('edc2_error_message');
    this.state.div.message.error.submission = document.getElementById('submission_error_message');
  }

  /**
   * Retrieve data from the provided URL and save it in state.
   */
  fetchData() {
    $.ajax(loris.BaseURL + '/new_profile/ajax/getCandidateOptions.php', {
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        console.log('ajax (get) - success!');
        this.getState((appState) => {
          appState.setup = {
            data
          };
          appState.isLoaded = true;
          this.setState(appState);
          console.log(JSON.stringify(appState));
        });
      }.bind(this),
      error: function(error) {
        console.log('ajax (get) - error!');
        console.log(JSON.stringify(error));
      }
    });
  }

  /**
   * Handle the Personal Identification change.
   */
  handlePersonalIdentification(name, value) {
    this.resetSubmissionError();
    if (name === 'guid_first_name') {
      this.getState((appState) => {
        appState.user.guid.name.first = value;
        this.setState(appState);
      });
    } else if (name === 'guid_middle_name') {
      this.getState((appState) => {
        appState.user.guid.name.middle = value;
        this.setState(appState);
      });
    } else if (name === 'guid_last_name') {
      this.getState((appState) => {
        appState.user.guid.name.last = value;
        this.setState(appState);
      });
    } else if (name === 'guid_city_of_birth') {
      this.getState((appState) => {
        appState.user.guid.dob.city = value;
        this.setState(appState);
      });
    }
  }

  /**
   * Handle the EDC (DateElement) change.
   */
  handleEdcChange(name, value) {
    this.resetSubmissionError();
    let edc1 = this.state.div.input.edc.value;
    if (edc1) {
      edc1.checkValidity() ? this.state.div.message.error.edc.value.innerHTML = '' :
        this.state.div.message.error.edc.value.innerHTML = edc1.validationMessage;
      this.getState((appState) => {
        appState.user.edc.value = value;
        this.setState(appState);
      });
    }
  }

  /**
   * Handle the EDC_Confirmation (DateElement) change.
   */
  handleEdcConfirmationChange(name, value) {
    this.resetSubmissionError();
    let edc2 = this.state.div.input.edc.confirmation;
    if (edc2) {
      edc2.checkValidity() ? this.state.div.message.error.edc.confirmation.innerHTML = '' :
        this.state.div.message.error.edc.confirmation.innerHTML = edc2.validationMessage;
      this.getState((appState) => {
        appState.user.edc.confirmation = value;
        this.setState(appState);
      });
    }
  }

  /**
   * Handle the PSC (SelectElement) change.
   */
  handlePscChange(name, value) {
    this.resetSubmissionError();
    this.getState((appState) => {
      appState.user.psc = value;
      this.setState(appState);
    });
  }

  /**
   * Handle the PSCID (TextboxElement) change.
   */
  handlePscidChange(name, value) {
    this.resetSubmissionError();
    this.getState((appState) => {
      appState.user.pscid = value;
      this.setState(appState);
    });
  }

  /**
   * Handle the Date_of_Birth (DateElement) change.
   */
  handleDateChange(name, value) {
    this.resetSubmissionError();
    let dob1 = this.state.div.input.dob.value;
    dob1.checkValidity() ? this.state.div.message.error.dob.value.innerHTML = '' :
      this.state.div.message.error.dob.value.innerHTML = dob1.validationMessage;
    this.getState((appState) => {
      appState.user.guid.dob.value = value;
      this.setState(appState);
    });
  }

  /**
   * Handle the Date_of_Birth_Confirmation (DateElement) change.
   */
  handleDateConfirmChange(name, value) {
    this.resetSubmissionError();
    let dob2 = this.state.div.input.dob.confirmation;
    dob2.checkValidity() ? this.state.div.message.error.dob.confirmation.innerHTML = '' :
      this.state.div.message.error.dob.confirmation.innerHTML = dob2.validationMessage;
    this.getState((appState) => {
      appState.user.guid.dob.confirmation = value;
      this.setState(appState);
    });
  }

  /**
   * Handle the Gender (SelectElement) change.
   */
  handleGenderChange(name, value) {
    this.resetSubmissionError();
    this.getState((appState) => {
      appState.user.guid.gender = value;
      this.setState(appState);
    });
  }

  /**
   * Handle the Create (Button) click.
   */
  handleSubmit(e) {
    e.preventDefault();
    const send = {
      dob1: this.state.user.guid.dob.value,
      dob2: this.state.user.guid.dob.confirmation,
      gender: this.state.user.guid.gender,
      identification: ''
    };
    console.log(JSON.stringify(send));
    if (send.dob1 === '' || send.dob2 === '' || send.dob1 !== send.dob2) {
      this.state.div.message.error.submission.innerHTML = 'Please correct the Date of Birth.';
    }
    else if (send.gender === '') {
      this.state.div.message.error.submission.innerHTML = 'Please select a valid Gender';
    }
    else {
      let id = new osi.OpenScienceIdentity({
        gender: this.state.user.guid.gender,
        first_name: this.state.user.guid.name.first,
        middle_name: this.state.user.guid.name.middle,
        last_name: this.state.user.guid.name.last,
        birth_day: this.state.user.guid.dob.value,
        city_of_birth: this.state.user.guid.dob.city
      });
      if (!id.valid()) {
        this.state.div.message.error.submission.innerHTML = 'Personal Identification has incomplete or invalid field(s)!';
      } else {
        send.identification = id.toSignature();
        $.ajax(
          {
            url: loris.BaseURL + '/new_profile/ajax/createCandidate.php',
            type: 'POST',
            dataType: 'json',
            data: send,
            success: function(data) {
              console.log('success');
              console.log('data is: ' + JSON.stringify(data));
              if (data.error) {
                document.getElementById('submission_error_message').innerHTML = data.error;
              } else if (data.success) {
                document.getElementById('new_profile').style.display = 'none';
                let info = 'New candidate created. DCCID: ' +
                  data.success.candID + ' PSCID: ' + data.success.PSCID; + '<br>';
                document.getElementById('candidate_info').innerHTML = info;
                let access = '<a href="/' + data.success.candID + '/">Access this candidate</a><br>';
                document.getElementById('candidate_access').innerHTML = access;
                document.getElementById('another_profile').innerHTML = '<a href="/new_profile/"> Recruit another candidate</a>';
                document.getElementById('candidate').style.display = 'block';

              }
            },
            error: function(error) {
              console.log('error: ' + JSON.stringify(error));
            }
          }
        );
      }
    }
  }

  resetSubmissionError() {
    let submission = this.state.div.message.error.submission;
    if (submission) {
      this.state.div.message.error.submission.innerHTML = '';
    }
  }

  /**
   * Retrieve the previous state.
   */
  getState(callback) {
    this.setState((prevState) => {
      callback(prevState);
    });
  }

  /**
   * Render the HTML.
   */
  render() {
    // Waiting for async data to load.
    if (!this.state.isLoaded) {
      return (
        <button className="btn-info has-spinner">
          Loading
          <span
            className="glyphicon glyphicon-refresh glyphicon-refresh-animate">
          </span>
        </button>
      );
    }

    // Circumstantial Elements.
    let element = {
      edc: '',
      psc: '',
      pscid: '',
      candidate: ''
    };
    if (this.state.isLoaded && this.state.setup.data.hasOwnProperty('edc')) {
      element.edc = (
        <div>
          <DateElement
            id="edc1"
            name="edc1"
            min={this.state.setup.data.edc.options.minYear}
            max={this.state.setup.data.edc.options.maxYear}
            label="Expected Date of Confinement"
            onUserInput={this.handleEdcChange}
            value={this.state.user.edc.value}
          />
          <div id="edc1_error_message" className="form-group col-sm-12" style={{color:'red'}}></div>
          <DateElement
            id="edc2"
            name="edc2"
            min={this.state.setup.data.edc.options.minYear}
            max={this.state.setup.data.edc.options.maxYear}
            label="Confirm EDC"
            onUserInput={this.handleEdcConfirmationChange}
            value={this.state.user.edc.confirmation}
          />
          <div id="edc2_error_message" className="form-group col-sm-12" style={{color:'red'}}></div>
        </div>
      );
    }
    if (this.state.isLoaded && this.state.setup.data.hasOwnProperty('psc')) {
      element.psc = (
        <div>
          <SelectElement
            id="psc"
            name="psc"
            label="Site"
            class="form-control input-sm"
            options={this.state.setup.data.psc.options}
            required={true}
            hasError={false}
            value={this.state.user.psc}
            emptyOption={false}
            onUserInput={this.handlePscChange}
          />
        </div>
      );
    }
    if (this.state.isLoaded && this.state.setup.data.hasOwnProperty('PSCID')) {
      element.pscid = (
        <div>
          <TextboxElement
            id="pscid"
            name="PSCID"
            label="PSCID"
            value=""
            onUserInput={this.handlePscidChange}
          />
        </div>
      );
    }

    element.candidate = (
      <div id="candidate" style={{display: 'none'}}>
        <div id="candidate_info"></div>
        <div id="candidate_access"></div>
        <div id="another_profile"></div>
      </div>
    );

    return (
      <div>
        <div id="lorisworkspace">

          {element.candidate}

          <div id="new_profile">

            <h2 style={{color: '#064785'}}>Personal Identification:</h2>

            <FormElement
              id="private_info_form"
              name="private_info_form"
              class="form-inline"
            >
              <TextboxElement
                id="guid_first_name"
                name="guid_first_name"
                label="First name"
                required={true}
                value={this.state.user.guid.name.first}
                onUserInput={this.handlePersonalIdentification}
              />
              <TextboxElement
                id="guid_middle_name"
                name="guid_middle_name"
                label="Middle name"
                value={this.state.user.guid.name.middle}
                onUserInput={this.handlePersonalIdentification}
              />
              <TextboxElement
                id="guid_last_name"
                name="guid_last_name"
                label="Last name"
                required={true}
                value={this.state.user.guid.name.last}
                onUserInput={this.handlePersonalIdentification}
              />
              <TextboxElement
                id="guid_city_of_birth"
                name="guid_city_of_birth"
                label="City of birth"
                required={true}
                value={this.state.user.guid.dob.city}
                onUserInput={this.handlePersonalIdentification}
              />
            </FormElement>

            <br/>

            <h2 style={{color: '#850608'}}>Information Saved:</h2>

            <FormElement
              name="new_profile_form"
              id="new_profile_form"
              method="POST"
              class="form-inline"
            >
              <DateElement
                id="dob1"
                name="dob1"
                min={this.state.setup.data.dob.options.minYear}
                max={this.state.setup.data.dob.options.maxYear}
                label="Date of Birth"
                onUserInput={this.handleDateChange}
                value={this.state.user.guid.dob.value}
                required={true}
              />
              <div id="dob1_error_message" className="form-group col-sm-12" style={{color:'red'}}></div>
              <DateElement
                id="dob2"
                name="dob2"
                min={this.state.setup.data.dob.options.minYear}
                max={this.state.setup.data.dob.options.maxYear}
                label="Confirm Date of Birth"
                onUserInput={this.handleDateConfirmChange}
                value={this.state.user.guid.dob.confirmation}
                required={true}
              />
              <div id="dob2_error_message" className="form-group col-sm-12" style={{color:'red'}}></div>

              <SelectElement
                id="gender"
                name="gender"
                label="Gender"
                class="form-control input-sm"
                options={this.state.setup.data.gender.options}
                required={true}
                hasError={false}
                value={this.state.user.guid.gender}
                emptyOption={false}
                onUserInput={this.handleGenderChange}
              />

              {element.edc}

              {element.psc}

              {element.pscid}

              <ButtonElement
                name="fire_away"
                label="Create"
                type="submit"
                onUserInput={this.handleSubmit}
              />

              <div id="submission_error_message" className="form-group col-sm-12" style={{color:'red'}}></div>

            </FormElement>

          </div>

        </div>
      </div>
    );
  }
}
NewProfileApp.propTypes = {
  module: React.PropTypes.string.isRequired,
};
NewProfileApp.defaultProps = {
  module: ''
};

/**
 * Render NewProfileApp on page load.
 */
window.onload = function() {
  const newProfile = (
    <NewProfileApp
      module={'newProfile'}
    />
  );
  // Create a wrapper div in which react component will be loaded.
  const NewProfileAppDOM = document.createElement('div');
  NewProfileAppDOM.id = 'newProfile';

  // Append wrapper div to page content.
  const rootDOM = document.getElementById('lorisworkspace');
  rootDOM.appendChild(NewProfileAppDOM);

  // Render the React Component.
  ReactDOM.render(newProfile, document.getElementById('newProfile'));
};
