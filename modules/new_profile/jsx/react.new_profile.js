/**
 *	This is the React class for new_profile.
 */

/**
 * This is the React class for the conflict resolver.
 */
class NewProfileApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      user: {
        guid: {
          name: {
            first: '',
            middle: '',
            last: ''
          },
          dob: {
            date: '',
            confirmation: '',
            city: ''
          },
          gender: 'Female'
        },
        edc: '',
      },
      setup: null,
    };

    // Bind component instance to custom methods
    this.fetchData = this.fetchData.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateConfirmChange = this.handleDateConfirmChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Fetch data when component mounts.
   */
  componentDidMount() {
    this.fetchData();
  }

  /**
   * Retrieve data from the provided URL and save it in state.
   */
  fetchData() {
    $.ajax(loris.BaseURL + '/new_profile/ajax/getCandidateOptions.php', {
      method: 'GET',
      dataType: 'json',
      success: function(data) {
       //let options = data;
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
   * Handle the Date_of_Birth (DateElement) change.
   */
  handleDateChange(name, value) {
    this.getState((appState) => {
      appState.user.guid.dob.date = value;
      this.setState(appState);
      console.log(JSON.stringify(appState));
    });
  }

  /**
   * Handle the Date_of_Birth_Confirmation (DateElement) change.
   */
  handleDateConfirmChange(name, value) {
    this.getState((appState) => {
      appState.user.guid.dob.confirmation = value;
      this.setState(appState);
      console.log(JSON.stringify(appState));
    });
  }

  /**
   * Handle the Gender (SelectElement) change.
   */
  handleGenderChange(name, value) {
    this.getState((appState) => {
      appState.user.guid.gender = value;
      this.setState(appState);
      console.log(JSON.stringify(appState));
    });
  }

  /**
   * Handle the Create (Button) click.
   */
  handleSubmit(e) {
    e.preventDefault();
    const send = {
      dob1: this.state.user.guid.dob.date,
      dob2: this.state.user.guid.dob.confirmation,
      gender: this.state.user.guid.gender
    };
    console.log(JSON.stringify(send));
    if (send.dob1 === '' || send.dob2 === '' || send.dob1 !== send.dob2) {
      // todo: failed dob check
    }
    else if (send.gender === '') {
      // todo: failed gender check
    }
    else {
      $.ajax(
        {
          url: loris.BaseURL + '/new_profile/ajax/createCandidate.php',
          type: 'POST',
          dataType: 'json',
          data: send,
          success: function(data) {
            console.log('success');
            console.log('data is: ' + JSON.stringify(data));
          },
          error: function(error) {
            console.log('error: ' + JSON.stringify(error));
          }
        }
      );
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
    // Waiting for async data to load
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

    // Circumstantial Elements
    let edc_element = '',
        psc_element = '',
        pscid_element = '';
    if (this.state.isLoaded && this.state.setup.data.hasOwnProperty('edc')) {
      edc_element = (
        <div>
          <DateElement

          />
          <DateElement

          />
        </div>
      );
    }
    if (this.state.isLoaded && this.state.setup.data.hasOwnProperty('psc')) {
      psc_element = (
        <div>
          <SelectElement

          />
        </div>
      );
    }
    if (this.state.isLoaded && this.state.setup.data.hasOwnProperty('PSCID')) {
      pscid_element = (
        <div>
          <TextboxElement

          />
        </div>
      );
    }

    return (
      <div>
        <div id="lorisworkspace">
          <FormElement
            name="new_profile"
            id="new_profile"
            method="POST"
            class="form-inline"
            onUserInput={this.test}
          >
            <DateElement
              id="dob1"
              name="dob1"
              min={this.state.setup.data.dob.options.minYear}
              max={this.state.setup.data.dob.options.maxYear}
              label="Date of Birth"
              onUserInput={this.handleDateChange}
              value={this.state.user.guid.dob.date}
            />

            <DateElement
              id="dob2"
              name="dob2"
              min={this.state.setup.data.dob.options.minYear}
              max={this.state.setup.data.dob.options.maxYear}
              label="Confirm Date of Birth"
              onUserInput={this.handleDateConfirmChange}
              value={this.state.user.guid.dob.confirmation}
            />

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

            {edc_element}

            {psc_element}

            {pscid_element}

            <ButtonElement
              name="fire_away"
              label="Create"
              type="submit"
              onUserInput={this.handleSubmit}
            />
          </FormElement>
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
 * Render NewProfileApp on page load
 */
window.onload = function() {
  const newProfile = (
    <NewProfileApp
      module={'newProfile'}
    />
  );
  // Create a wrapper div in which react component will be loaded
  const NewProfileAppDOM = document.createElement('div');
  NewProfileAppDOM.id = 'newProfile';

  // Append wrapper div to page content
  const rootDOM = document.getElementById('lorisworkspace');
  rootDOM.appendChild(NewProfileAppDOM);

  // Render the React Component.
  ReactDOM.render(newProfile, document.getElementById('newProfile'));
};
