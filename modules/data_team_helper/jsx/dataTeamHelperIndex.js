import React from 'react';

/**
 * Genomic Browser.
 *
 * @description the Data Team Helper of LORIS.
 *
 * @author Alizée Wickenheiser
 * @version 1.0.0
 *
 */
class DataTeamHelper extends React.Component {
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
    return (
      <div className={'col-sm-12'}>
        <div className={'row'}>
          hello
        </div>
      </div>
    );
  }
}

/**
 * Render Genomic Browser on page load.
 */
window.addEventListener('load', () => {
  ReactDOM.render(
    <DataTeamHelper/>,
    document.getElementById('lorisworkspace')
  );
});
