import React, {Component} from 'react';

/*
 *  The following component is used for displaying operator for the group component
 */
class LogicOperator extends Component {
  constructor(props) {
    super(props);
    this.changeOperator = this.changeOperator.bind(this);
  }

  changeOperator(op) {
    // Wrapper function updating operator
    this.props.updateGroupOperator(op);
  }

  render() {
    // Renders the html for the component

    let andClass = 'btn',
      orClass = 'btn';

    // Set operator to OR if logicOperator is 1, AND otherwise
    if (this.props.logicOperator === 1) {
      orClass += ' btn-primary';
      andClass += ' switch'
    } else {
      andClass += ' btn-primary';
      orClass += ' switch'
    }
    return (
      <div className='btn-group' role='group'>
        <button type='button' className={andClass} onClick={this.changeOperator.bind(this, 0)}>And</button>
        <button type='button' className={orClass} onClick={this.changeOperator.bind(this, 1)} id='filter_or_btn'>Or</button>
      </div>
    );
  }
}

export default LogicOperator;
