import React, {Component} from 'react';

/*
 *  The following component is used for displaying a filter rule
 */
class FilterRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operators: {
        equal: '=',
        notEqual: '!=',
        lessThanEqual: '<=',
        greaterThanEqual: '>=',
        startsWith: 'startsWith',
        contains: 'contains',
        isNull: 'isNull',
        isNotNull: 'isNotNull'
      },
      value: '',
    };
    this.selectInstrument = this.selectInstrument.bind(this);
    this.fieldSelect = this.fieldSelect.bind(this);
    this.operatorSelect = this.operatorSelect.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.valueSet = this.valueSet.bind(this);
    this.updateVisit = this.updateVisit.bind(this);
  }

  componentWillMount() {
    this.valueSet = loris.debounce(this.valueSet, 1000);
  }

  selectInstrument(event) {
    // Update the rules instrument, getting the instruments avalible fields
    let rule = this.props.rule;
    if (event.target.value) {
      rule.instrument = event.target.value;
      $.get(loris.BaseURL + '/dataquery/ajax/datadictionary.php', {category: rule.instrument}, (data) => {
        rule.fields = data;
        this.props.updateRule(this.props.index, rule);
      }, 'json');
    }
  }

  fieldSelect(event) {
    // Update the rules desired field, setting the rules field and field type
    let rule = JSON.parse(JSON.stringify(this.props.rule));
    delete rule.field;
    delete rule.fieldType;
    delete rule.operator;
    delete rule.value;
    delete rule.visit;
    delete rule.candidates;
    if (event.target.value) {
      rule.field = rule.fields[event.target.value].key[1];
      rule.fieldType = rule.fields[event.target.value].value.Type;
    }
    this.props.updateRule(this.props.index, rule);
  }

  operatorSelect(event) {
    // Update the desired rule operation for the selected field
    let rule = JSON.parse(JSON.stringify(this.props.rule));
    delete rule.operator;
    delete rule.value;
    delete rule.visit;
    delete rule.candidates;
    if (event.target.value) {
      rule.operator = event.target.value;
    }
    this.props.updateRule(this.props.index, rule);
    if (rule.operator === 'isNull' || rule.operator === 'isNotNull') {
      this.setState({
        value: 'null'
      });
      this.valueSet();
    }
  }

  valueChange(event) {
    let rule = JSON.parse(JSON.stringify(this.props.rule));
    delete rule.visit;
    delete rule.candidates;

    rule.value = event.target.value;

    this.setState({
      value: event.target.value
    });
    this.valueSet();
    this.props.updateRule(this.props.index, rule);
  }

  valueSet() {
    // Update the value to filter for, and runs the query for the rules parameters
    let rule = JSON.parse(JSON.stringify(this.props.rule));
    if (this.state.value) {
      let responseHandler = (data) => {
        let i;
        let allSessions = {};
        let allCandiates = {};
        // Loop through data and divide into individual visits with unique PSCIDs
        // storing a master list of unique PSCIDs
        for (i = 0; i < data.length; i++) {
          if (!allSessions[data[i][1]]) {
            allSessions[data[i][1]] = [];
          }
          allSessions[data[i][1]].push(data[i][0]);
          if (!allCandiates[data[i][0]]) {
            allCandiates[data[i][0]] = [];
          }
          allCandiates[data[i][0]].push(data[i][1]);
        }
        rule.candidates = {
          allCandiates: allCandiates,
          allSessions: allSessions,
        };
        rule.session = Object.keys(allCandiates);
        rule.visit = 'All';
        this.props.updateSessions(this.props.index, rule);
      };
      let ajaxRetrieve = (script) => {
        $.get(loris.BaseURL + '/dataquery/ajax/' + script,
          {
            category: rule.instrument,
            field: rule.field,
            value: this.state.value,
          },
          responseHandler,
          'json',
        );
      };
      switch (rule.operator) {
        case 'equal':
        case 'isNull':
          ajaxRetrieve('queryEqual.php');
          break;
        case 'notEqual':
        case 'isNotNull':
          ajaxRetrieve('queryNotEqual.php');
          break;
        case 'lessThanEqual':
          ajaxRetrieve('queryLessThanEqual.php');
          break;
        case 'greaterThanEqual':
          ajaxRetrieve('queryGreaterThanEqual.php');
          break;
        case 'startsWith':
          ajaxRetrieve('queryStartsWith.php');
          break;
        case 'contains':
          ajaxRetrieve('queryContains.php');
          break;
        default:
          break;
      }
    }
  }

  updateVisit(event) {
    // Update rule to filter for specified visit
    let rule = JSON.parse(JSON.stringify(this.props.rule));
    rule.visit = event.target.value;

    if (event.target.value === 'all') {
      // If all visits, use keys of master list
      rule.session = Object.keys(rule.candidates.allCandiates);
    } else {
      // Else use list of PSCIDs for given vist
      rule.session = rule.candidates.allSessions[event.target.value];
    }
    this.props.updateSessions(this.props.index, rule);
  }

  render() {
    // Renders the html for the component

    let rule;
    let fieldIndex;
    let forVisits;
    let visits;
    if (this.props.rule.instrument) {
      // Only display field select and etc. if instrument is selected
      let fields = this.props.rule.fields.map((field, index) => {
        if (this.props.rule.field && field.key[1] === this.props.rule.field) {
          fieldIndex = index;
        }
        return (
          <option key={index} value={index}>{field.key[1]}</option>
        );
      });
      let operators = [];
      let inputOptions = [];
      let input = [];
      let operatorKey = '';
      let operatorSelect = [];
      let options = [];
      let value = '';
      let inputType = [];

      if (this.props.rule.fieldType) {
        // Only display operators if field is selected
        inputType = this.props.rule.fieldType.split("(");
        operatorKey = inputType[0]
        for (let key in this.state.operators) {
          operators.push(
            <option value={key} onChange={this.operatorSelect}>
              {this.state.operators[key]}
            </option>
          );
        }
        value = (this.props.rule.operator) ? this.props.rule.operator : "";
        operatorSelect = (
          <select className="input-sm col-xs-3 " onChange={this.operatorSelect} value={value}>
            <option value=""></option>
            {operators}
          </select>
        );
        if (this.props.rule.operator &&
          this.props.rule.operator !== 'isNull' &&
          this.props.rule.operator !== 'isNotNull'
        ) {
          // Only display value input if operator is selected, displaying specific
          // input type field data type
          switch (operatorKey) {
            case 'enum':
              inputOptions = enumToArray(this.props.rule.fieldType);
              options = inputOptions.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              });
              value = (this.props.rule.value) ? this.props.rule.value : '';
              input = (
                <select className='input-sm col-xs-3' onChange={this.valueChange} value={value}>
                  <option value=''></option>
                  {options}
                </select>
              );
              break;
            default:
              input = (
                <input type='text'
                       className='input-sm col-xs-3'
                       onChange={this.valueChange}
                       value={this.props.rule.value}
                />
              );
              break;
          }
        }
        if (this.props.rule.visit) {
          // Display dropdown for visit select. This only displays after a value
          // has been inputed
          visits = Object.keys(this.props.Visits).map((visit, index) => {
            return (
              <option key={index} value={visit}>
                {visit}
              </option>
            );
          });
          forVisits = (
            <select className='input-sm col-xs-3' onChange={this.updateVisit} value={this.props.rule.visit}>
              <option value='all'>All Visits</option>
              {visits}
            </select>
          );
        }
      }
      rule = (
        <div>
          <div className='col-xs-12'>
            <label className='instrumentLabel'>{this.props.rule.instrument}</label>
          </div>
          <div className='col-xs-10'>
            <select className='input-sm col-xs-3' onChange={this.fieldSelect} value={fieldIndex}>
              <option value=''></option>
              {fields}
            </select>
            {operatorSelect}
            {input}
            {forVisits}
          </div>
        </div>
      );
    } else {
      // Else display dropdown for instrument select
      let options = this.props.items.map((item, index) => {
        return (
          <option key={index} value={item.category}>{item.category}</option>
        );
      });
      rule = (
        <select onChange={this.selectInstrument} className="input-sm col-xs-10">
          <option value=''></option>
          {options}
        </select>
      )
    }
    console.log('rule:');
    console.log(rule);
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          {rule}
          <div className='col-xs-2'>
            <button className='btn btn-danger btn-sm pull-right'
                    onClick={this.props.deleteRule.bind(this, this.props.index)}
            >
              <span className='glyphicon glyphicon-remove'></span> Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterRule;
