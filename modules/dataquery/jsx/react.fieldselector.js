/**
 *  The following file contains the components used for the field select tab
 *
 *  @author   Jordan Stirling <jstirling91@gmail.com>
 *  @author   Dave MacFarlane <david.macfarlane2@mcgill.ca>
 *  @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 *  @link     https://github.com/mohadesz/Loris-Trunk
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FieldItem from './fields/FieldItem';
import FieldList from './fields/FieldList';

import CategoryItem from './fields/CategoryItem';
import CategoryList from './fields/CategoryList';

/*
 *  The following component is the base component for the field select tan
 */
class FieldSelector extends Component {
  constructor(props) {
    super(props);
    let instruments = {};
    for (let i = 0; i < this.props.items.length; i++) {
      instruments[this.props.items[i].category] = this.props.items[i].category;
    }
    this.state = {
      filter: '',
      selectedCategory: '',
      categoryFields: {},
      instruments: instruments,
      PageNumber: 1
    };
    this.onFieldSelect = this.onFieldSelect.bind(this);
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.filterChange = this.filterChange.bind(this);
    this.addAll = this.addAll.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.modifyCategoryFieldVists = this.modifyCategoryFieldVists.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  onFieldSelect(fieldName, category, downloadable) {
    // Wrapper function for field changes
    this.props.onFieldChange(fieldName, category, downloadable);
  }

  onCategorySelect(elementName, category) {
    // Use the cached version if it exists
    if (this.state.categoryFields[category]) {
    } else {
      // Retrieve the data dictionary
      $.get(loris.BaseURL + "/AjaxHelper.php?Module=dataquery&script=datadictionary.php", {category: category}, (data) => {
        let cf = this.state.categoryFields;
        cf[category] = data;
        this.setState({
          categoryFields: cf
        });
      }, 'json');
    }
    this.setState({
      selectedCategory: category,
      PageNumber: 1,
    });
  }

  filterChange(evt) {
    this.setState({
      filter: evt.currentTarget.value
    });
  }

  addAll() {
    // Adds all fields the currently selected category
    let i, isFile, fieldName, category;
    for (i in this.state.categoryFields[this.state.selectedCategory]) {
      fieldName = this.state.categoryFields[this.state.selectedCategory][i].key[1];
      category = this.state.categoryFields[this.state.selectedCategory][i].key[0];
      if (this.props.selectedFields[category] && this.props.selectedFields[category][fieldName]) {
        // Do nothing, already added
      } else {
        isFile = (this.state.categoryFields[category][i].value.isFile) ? true : false;
        this.props.onFieldChange(fieldName, category, isFile);
      }
    }
  }

  deleteAll() {
    // Deletes all fields the currently selected category
    let i, index, fieldName, category, isFile;
    for (i in this.state.categoryFields[this.state.selectedCategory]) {
      fieldName = this.state.categoryFields[this.state.selectedCategory][i].key[1];
      category = this.state.categoryFields[this.state.selectedCategory][i].key[0];
      if (this.props.selectedFields[category] && this.props.selectedFields[category][fieldName]) {
        isFile = (this.state.categoryFields[category][i].value.isFile) ? true : false;
        this.props.onFieldChange(fieldName, category, isFile);
      }
    }
  }

  modifyCategoryFieldVists(visit, action) {
    if (this.state.selectedCategory && this.props.selectedFields[this.state.selectedCategory]) {
      for (let field in this.props.selectedFields[this.state.selectedCategory]) {
        if (field === 'allVisits') {
          continue;
        }
        if (action === 'check' && !this.props.selectedFields[this.state.selectedCategory][field][visit]) {
          this.props.fieldVisitSelect(
            action,
            visit,
            {instrument: this.state.selectedCategory, field: field}
          );
        } else if (action === 'uncheck' && this.props.selectedFields[this.state.selectedCategory][field][visit]) {
          this.props.fieldVisitSelect(
            action,
            visit,
            {instrument: this.state.selectedCategory, field: field}
          );
        }
      }
    }
  }

  changePage(i) {
    this.setState({
      PageNumber: i
    });
  }

  render() {
    // Renders the html for the component
    let categoryVisits = {},
      selectedFieldsCount;
    if (this.state.selectedCategory != '') {
      if (this.props.selectedFields[this.state.selectedCategory]) {
        selectedFieldsCount = Object.keys(this.props.selectedFields[this.state.selectedCategory]).length - 1;
      }
      for (let key in this.props.Visits) {
        if (this.props.selectedFields[this.state.selectedCategory]
          && this.props.selectedFields[this.state.selectedCategory].allVisits[key]
          && this.props.selectedFields[this.state.selectedCategory].allVisits[key] == selectedFieldsCount) {
          categoryVisits[key] = true;
        } else {
          categoryVisits[key] = false;
        }
      }
    }

    return (
      <div>
        <div className='row'>
          <h1 className='col-md-8'>{this.props.title}</h1>
          <div className='form-group col-sm-4 search'>
            <label className='col-sm-12 col-md-4'>Search within instrument:</label>
            <div className='col-sm-12 col-md-8'>
              <input type='text' onChange={this.filterChange} className='form-control input-sm'/>
            </div>
          </div>
        </div>
        <div className='row form-group'>
          <div className='col-md-8'>
            <button type='button' className='btn btn-primary' onClick={this.addAll}>Add All</button>
            <button type='button' className='btn btn-primary' onClick={this.deleteAll}>Remove All</button>
          </div>
        </div>
        <div className='row form-group'>
          <div className='form-group col-sm-8 search'>
            <label className='col-sm-12 col-md-2'>Instrument:</label>
            <div className='col-sm-12 col-md-8'>
              <SearchableDropdown
                name="fieldsDropdown"
                options={this.state.instruments}
                onUserInput={this.onCategorySelect}
                placeHolder="Select One"
              />
            </div>
          </div>
          <div className='form-group col-sm-4 search'>
            <label className='col-sm-12 col-md-4'>Visits:</label>
            <div className='col-sm-12 col-md-8'>
              <SelectDropdown
                multi={true}
                options={categoryVisits}
                onFieldClick={this.modifyCategoryFieldVists}
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <FieldList
            items={this.state.categoryFields[this.state.selectedCategory]}
            category={this.state.selectedCategory}
            Criteria={this.props.Criteria}
            onFieldSelect={this.onFieldSelect}
            FieldsPerPage='15'
            selected={this.props.selectedFields[this.state.selectedCategory]}
            Filter={this.state.filter}
            Visits={this.props.Visits}
            fieldVisitSelect={this.props.fieldVisitSelect}
            changePage={this.changePage}
            PageNumber={this.state.PageNumber}
          />
        </div>
      </div>
    );
  }
}

FieldSelector.propTypes = {
  selectedFields: PropTypes.array
};

window.CategoryItem = CategoryItem;
window.CategoryList = CategoryList;
window.FieldItem = FieldItem;
window.FieldList = FieldList;
window.FieldSelector = FieldSelector;

export default {
  CategoryItem,
  CategoryList,
  FieldItem,
  FieldList,
  FieldSelector
};
