//import Form from 'jsx/Form'

/**
 *	This is the React class for new_profile
 */

/**
 * This is the React class for the conflict resolver
 */
class NewProfileApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      user: {
        guid: {
          name: {
            first: '',
            middle: '',
            last: ''
          },
          birthday: {
            date: '',
            date_confirm: '',
            city: ''
          },
          gender: 'Female'
        },
        edc: '',
      },
      options: {
        gender: {
          Male: 'Male',
          Female: 'Female',
          Other: 'Other',
          Unknown: 'Unknown'
        }
      },
    };

    // Bind component instance to custom methods
    this.fetchData = this.fetchData.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateConfirmChange = this.handleDateConfirmChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  /**
   * Retrieve data from the provided URL and save it in state
   * Additionally add hiddenHeaders to global loris variable
   * for easy access by columnFormatter.
   */
  fetchData() {

  }

  handleDateChange(name, value) {
    this.getState((appState) => {
      appState.user.guid.birthday.date = value;
      this.setState(appState);
      console.log(JSON.stringify(appState));
    });
  }

  handleDateConfirmChange(name, value) {
    this.getState((appState) => {
      appState.user.guid.birthday.date_confirm = value;
      this.setState(appState);
      console.log(JSON.stringify(appState));
    });
  }

  handleGenderChange(name, value) {
    this.getState((appState) => {
      appState.user.guid.gender = value;
      this.setState(appState);
      console.log(JSON.stringify(appState));
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('TODO: submit data..');
    document.getElementById('new_profile').submit();
  }

  getState(callback) {
    this.setState((prevState) => {
      callback(prevState);
    });
  }
  test() {
    console.log('change');
  }


  // Render the HTML
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
              min="2007-01-01"
              max="2020-12-31"
              label="Date of Birth"
              onUserInput={this.handleDateChange}
              value={this.state.user.guid.birthday.date}
            />

            <DateElement
              id="dob2"
              name="dob2"
              label="Confirm Date of Birth"
              onUserInput={this.handleDateConfirmChange}
              value={this.state.user.guid.birthday.date_confirm}
            />

            <SelectElement
              id="gender"
              name="gender"
              label="Gender"
              class="form-control input-sm"
              options={this.state.options.gender}
              required={true}
              hasError={false}
              value={this.state.user.guid.gender}
              emptyOption={false}
              onUserInput={this.handleGenderChange}
            />

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
  user: React.PropTypes.object.isRequired
};
NewProfileApp.defaultProps = {
  module: '',
  user: {
    guid: {
      name: {
        first: '',
        middle: '',
        last: ''
      },
      birthday: {
        date: '',
        date_confirm: '',
        city: ''
      },
      gender: ''
    },
    edc: {
      value: '',
      enabled: false
    },
  }
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
