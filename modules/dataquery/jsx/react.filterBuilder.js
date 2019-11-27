/**
 *  The following file contains the components used for the filter builder tab
 *
 *  @author   Jordan Stirling <jstirling91@gmail.com>
 *  @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 *  @link     https://github.com/mohadesz/Loris-Trunk
 */

import React, {Component} from 'react';
import FilterRule from './filters/FilterRule';
import FilterGroup from './filters/FilterGroup';
import LogicOperator from './filters/LogicOperator';
import UploadCSV from './filters/UploadCSV';


/*
 *  The following component is the base component for the filter builder
 */
class FilterBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalCSV: false,
    };
    this.openModalCSV = this.openModalCSV.bind(this);
    this.closeModalCSV = this.closeModalCSV.bind(this);
    this.defineCSVCandidates = this.defineCSVCandidates.bind(this);
  }

  openModalCSV(e) {
    e.preventDefault();
    this.setState({showModalCSV: true});
  }

  closeModalCSV() {
    this.setState({showModalCSV: false});
  }

  defineCSVCandidates(data) {
    console.log(data);
    document.getElementById('filter_or_btn').click();
    this.closeModalCSV();
  }

  render() {
    return (
      <div>
        <UploadCSV
          showModalCSV={this.state.showModalCSV}
          closeModalCSV={this.closeModalCSV}
          defineCSVCandidates={this.defineCSVCandidates}
        />
        <h1 className='col-xs-12'>Filter</h1>
        <div className='col-xs-12'>
          <div className='well well-primary'>
            <FilterGroup group={this.props.filter}
                         items={this.props.items}
                         updateFilter={this.props.updateFilter}
                         Visits={this.props.Visits}
            />
          </div>
        </div>
        <ButtonElement label='Upload CSV'
                       columnSize=''
                       onUserInput={this.openModalCSV}
        />
      </div>
    );
  }
}

window.LogicOperator = LogicOperator;
window.FilterRule = FilterRule;
window.FilterGroup = FilterGroup;
window.FilterBuilder = FilterBuilder;

export default {
  LogicOperator,
  FilterRule,
  FilterGroup,
  FilterBuilder
};
