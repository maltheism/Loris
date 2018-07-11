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

    loris.hiddenHeaders = [
      'Value1',
      'Value2',
      'Hash',
      'Site'
    ];

    this.state = {
      isLoaded: true,
    };

    // Bind component instance to custom methods
    this.fetchData = this.fetchData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // $.ajax(this.props.url.data.new_profile, {
    //   method: 'GET',
    //   dataType: 'json',
    //   success: function(data) {
    //     this.setState({
    //       Data: data,
    //       isLoaded: true
    //     });
    //   }.bind(this),
    //   error: function(error) {
    //     console.error(error);
    //   }
    // });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hello');
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
        <div className="col-sm-10">
          <FormElement
            name="new_profile"
            id="new_profile"
            method="POST"
            class="form-inline"
          >
            <div className="form-group col-sm-12">
              <DateElement
                name="dob1"
                label="Date of Birth"
              />
            </div>

            <div className="form-group col-sm-12">
              <DateElement
                name="dob2"
                label="Confirm Date of Birth"
              />
            </div>

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
  url: React.PropTypes.object.isRequired
};
NewProfileApp.defaultProps = {
  module: '',
  url: {
    base: '',
    data: {
      new_profile: ''
    }
  }
};


/**
 * Render NewProfileApp on page load
 */
window.onload = function() {
  const newProfile = (
    <NewProfileApp
      module={'newProfile'}
      url={{
        base: loris.BaseURL,
        data: {
          new_profile: loris.BaseURL + '/new_profile/?format=json'
        }
      }}
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
