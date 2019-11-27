import React from 'react';

/*
 *  Used for displaying individual fields
 */
const FieldItem = (props) => {

  const visitSelect = (evt) => {
    // Selects and deselects visits
    let field = {
      instrument: props.Category,
      field: props.FieldName,
    };
    if (evt.target.checked) {
      props.fieldVisitSelect('check', evt.target.value, field);
    } else {
      props.fieldVisitSelect('uncheck', evt.target.value, field);
    }
  };

  // Renders the html for the component

  let classList = 'list-group-item row';
  let downloadIcon = '';
  let multiselect;

  console.log('CHECK!!!');
  console.log('props.selected:');
  console.log(props.selected);
  if (props.selected) {
    console.log('1');
    // If field is selected, add active class and visits
    classList += ' active';
    multiselect = Object.keys(props.Visits).map((visit) => {
      let checked = false;
      if (props.selectedVisits[visit]) {
        checked = true;
      }
      return (
        <div key={visit} className='checkbox'>
          <label>
            <input
              type='checkbox'
              value={visit}
              checked={checked}
              onChange={visitSelect}
            />
            {visit}
          </label>
        </div>
      );
    });
  }

  if (props.downloadable) {
    // Add download icon if field is downloadable
    downloadIcon = <span className='glyphicon glyphicon-download-alt pull-right'
                         title='Downloadable File'
                   />
  }
  // Don't display the category in the field selector
  let displayName = props.FieldName;

  return (
    <div className={classList}>
      <div className='col-xs-8' onClick={props.onClick}>
        <h4 className='list-group-item-heading col-xs-12'>
          {displayName}{downloadIcon}
        </h4>
        <span className='col-xs-12'>
          {props.Description}
        </span>
      </div>
      <div className='col-xs-4'>
        {multiselect}
      </div>
    </div>
  );
};

export default FieldItem;
