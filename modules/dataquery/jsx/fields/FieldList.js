import React, {Component} from 'react';

/*
 * Used for displaying the list of available
 * fields for the selected category
 */
class FieldList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onFieldClick = this.onFieldClick.bind(this);
  }

  onFieldClick(fieldName, downloadable) {
    // Wrapper function used to update field
    this.props.onFieldSelect(fieldName, this.props.category, downloadable);
  }

  render() {
    // Renders the html for the component
    let fields = [];
    let items = this.props.items || [];
    let fieldName, desc, isFile, type, selected;
    let rowsPerPage = this.props.FieldsPerPage || 20;

    let start = (this.props.PageNumber - 1) * rowsPerPage;
    let filter = this.props.Filter.toLowerCase();
    let selectedFields;
    if (filter > 0) {
      start = 0;
    }

    // Display the fields using the FieldItem component
    for (let i = start; i < items.length; i += 1) {
      fieldName = items[i].key[1];
      desc = items[i].value.Description;
      type = items[i].value.Type || 'varchar(255)';

      if (fieldName.toLowerCase().indexOf(filter) === -1
        && desc.toLowerCase().indexOf(filter) === -1)
      {
        continue;
      }

      // Check if field is a file, if so set flag to true
      isFile = false;
      if (items[i].value.IsFile) {
        isFile = true;
      }

      // Check if field is selected, if so set flag to true
      selected = false;
      if (this.props.selected && this.props.selected[fieldName]) {
        selected = true;
      }

      // Get the fields selected visits, set to empty object if none
      if (this.props.selected && this.props.selected[fieldName]) {
        selectedFields = this.props.selected[fieldName]
      } else {
        selectedFields = {}
      }

      fields.push(
        <FieldItem
          key={fieldName}
          FieldName={fieldName}
          Category={this.props.category}
          Description={desc}
          ValueType={type}
          onClick={this.onFieldClick.bind(this, fieldName, isFile)}
          selected={selected}
          downloadable={isFile}
          Visits={this.props.Visits}
          selectedVisits={selectedFields}
          fieldVisitSelect={this.props.fieldVisitSelect}
      />);
      if (fields.length > rowsPerPage) {
        break;
      }
    }

    return (
      <div className='list-group col-md-9 col-sm-12'>
        {fields}
        <PaginationLinks
          Total={items.length}
          Active={this.props.PageNumber}
          onChangePage={this.props.changePage}
          RowsPerPage={rowsPerPage}
        />
      </div>
    );
  }
}

export default FieldList;
