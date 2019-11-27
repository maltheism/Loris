import React, {Component} from 'react';

/*
 *  The following component is used for displaying a filter group
 */
class FilterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateChild = this.updateChild.bind(this);
    this.updateGroupOperator = this.updateGroupOperator.bind(this);
    this.updateSessions = this.updateSessions.bind(this);
    this.addChild = this.addChild.bind(this);
    this.deleteChild = this.deleteChild.bind(this);
  }

  updateChild(index, child) {
    // Update a specified child in the groups children

    let group = this.props.group;
    group.children[index] = child;

    if (this.props.index) {
      // If not base filter group, recursively call update child
      this.props.updateGroup(this.props.index, group);
    } else {
      // Else base filter group, update the filter in the data query component
      this.props.updateFilter(group);
    }
  }

  updateGroupOperator(operator) {
    // Update the group's operator
    let group = this.props.group;
    group.activeOperator = operator;

    // Update the groups sessions by calling the arrayintersect.js functions
    group.session = getSessions(group);

    if (this.props.index) {
      // If not base filter group, recursively call update child
      this.props.updateGroup(this.props.index, group);
    } else {
      // Else base filter group, update the filter in the data query component
      this.props.updateFilter(group);
    }
  }

  updateSessions(index, child) {
    // Computes the desired sessions of the current group
    let group = this.props.group,
      sessions = [],
      session = [];
    group.children[index] = child;

    // Update the groups sessions by calling the arrayintersect.js functions
    group.session = getSessions(group);
    if (this.props.index) {
      // If not base filter group, recursively call update parents session
      this.props.updateSessions(this.props.index, group);
    } else {
      // Else base filter group, update the filter in the data query component
      this.props.updateFilter(group)
    }
  }

  addChild(type) {
    // Add a child to the group
    let child,
      group = this.props.group;

    // Define the child's base data structure depending on specifed type
    if (type === 'rule') {
      child = {
        type: 'rule'
      }
    } else {
      child = {
        type: 'group',
        activeOperator: 0,
        children: [
          {
            type: 'rule'
          }
        ]
      }
    }
    group.children.push(child);

    if (this.props.index) {
      // If not base filter group, recursively call update child
      this.props.updateGroup(this.props.index, group);
    } else {
      // Else base filter group, update the filter in the data query component
      this.props.updateFilter(group)
    }
  }

  deleteChild(index) {
    // Delete a child

    let group = this.props.group;
    group.children.splice(index, 1);

    // Update the groups sessions by calling the arrayintersect.js functions
    group.session = getSessions(group);


    if (this.props.index) {
      // If not base filter group, recursively call update child
      this.props.updateGroup(this.props.index, group);
    } else {
      // Else base filter group, update the filter in the data query component
      this.props.updateFilter(group);
    }
  }

  render() {
    // Renders the html for the component
    let logicOperator = (
      <LogicOperator
        logicOperator={this.props.group.activeOperator}
        updateGroupOperator={this.updateGroupOperator}
      />
    );

    // Render the children based on their type
    let children = this.props.group.children.map((child, index) => {
      if (child.type === 'rule') {
        return (
          <li key={index}>
            <FilterRule rule={child}
                        items={this.props.items}
                        index={index}
                        updateRule={this.updateChild}
                        updateSessions={this.updateSessions}
                        deleteRule={this.deleteChild}
                        Visits={this.props.Visits}
            />
          </li>
        );
      } else if (child.type === 'group') {
        return (
          <li key={index}>
            <FilterGroup group={child}
                         items={this.props.items}
                         index={index}
                         updateGroup={this.updateChild}
                         updateSessions={this.updateSessions}
                         deleteGroup={this.deleteChild}
                         Visits={this.props.Visits}
            />
          </li>
        );
      }
    });

    let deleteButton;

    if (this.props.deleteGroup) {
      // Can only delete a group that isn't the base group
      deleteButton = (
        <button
          className='btn btn-danger btn-sm pull-right'
          onClick={this.props.deleteGroup.bind(this, this.props.index)}
        >
          <span className='glyphicon glyphicon-remove'/> Delete Group
        </button>
      );
    }
    return (
      <div className='tree'>
        <ul className='firstUL'>
          <li>
            <div className='row'>
              <div className='col-xs-2'>
                {logicOperator}
              </div>
              <div className='col-xs-10'>
                {deleteButton}
                <button className='btn btn-primary btn-sm pull-right'
                        onClick={this.addChild.bind(this, 'group')}
                >
                  <span className='glyphicon glyphicon-add'/> Add Group
                </button>
                <button className='btn btn-primary btn-sm pull-right'
                        onClick={this.addChild.bind(this, 'rule')}
                >
                  <span className='glyphicon glyphicon-add'/> Add Rule
                </button>
              </div>
            </div>
            <ul>
              {children}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterGroup;
