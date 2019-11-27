import React from 'react';
import PropTypes from 'prop-types';

/*
 * Used for displaying individual
 * categories in the categories list.
 */
const CategoryItem = (props) => {
  let classList = 'list-group-item',
    badge = '';
  if (this.props.selected) {
    classList += ' active';
  }
  if (props.count >= 0) {
    badge = <span className='badge'>{props.count}</span>
  }
  return (
    <a href='#' className={classList} onClick={props.onClick}>
      {props.name}
      {badge}
    </a>
  );
};
CategoryItem.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryItem;
