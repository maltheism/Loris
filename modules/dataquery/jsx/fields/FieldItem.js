import React, {Component} from 'react';

/*
 *  Used for displaying individual fields
 */
class FieldItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.visitSelect = this.visitSelect.bind(this);
  }

  visitSelect(evt) {
    // Selects and deselects visits
    let field = {
      instrument: this.props.Category,
      field: this.props.FieldName,
    };
    if (evt.target.checked) {
      this.props.fieldVisitSelect('check', evt.target.value, field);
    } else {
      this.props.fieldVisitSelect('uncheck', evt.target.value, field);
    }
  }

  render() {
    // Renders the html for the component

    let classList = 'list-group-item row';
    let downloadIcon = '';
    let criteria;
    let multiselect;

    if (this.props.selected) {
      // If field is selected, add active class and visits
      classList += ' active';
      multiselect = Object.keys(this.props.Visits).map((visit) => {
        let checked = false;
        if (this.props.selectedVisits[visit]) {
          checked = true;
        }
        return (
          <div key={visit} className='checkbox'>
            <label>
              <input
                type='checkbox'
                value={visit}
                checked={checked}
                onChange={this.visitSelect}
              />
              {visit}
            </label>
          </div>
        );
      });
    }

    if (this.props.downloadable) {
      // Add download icon if field is downloadable
      downloadIcon = <span className='glyphicon glyphicon-download-alt pull-right' title='Downloadable File'></span>
    }
    // Don't display the category in the field selector
    let displayName = this.props.FieldName;

    return (
      <div className={classList}>
        <div className='col-xs-8' onClick={this.props.onClick}>
          <h4 className='list-group-item-heading col-xs-12'>{displayName}{criteria}{downloadIcon}</h4>
          <span className='col-xs-12'>{this.props.Description}</span>
        </div>
        <div className='col-xs-4'>
          {multiselect}
        </div>
      </div>
    );
  }
}

export default FieldItem;
