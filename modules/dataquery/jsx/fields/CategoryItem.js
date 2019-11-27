import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
 *  Used for displaying individual categories
 *  in the categories list.
 */
class CategoryItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classList = 'list-group-item',
      badge = '';
    if (this.props.selected) {
      classList += ' active';
    }
    if (this.props.count >= 0) {
      badge = <span className='badge'>{this.props.count}</span>
    }
    return (
      <a href='#' className={classList} onClick={this.props.onClick}>
        {this.props.name}
        {badge}
      </a>
    );
  }
}
CategoryItem.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryItem;
