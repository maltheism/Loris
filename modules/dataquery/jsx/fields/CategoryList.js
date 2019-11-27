import React, {useState} from 'react';

/*
 *  Used for displaying the list of available categories
 */
const CategoryList = (props) => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const selectCategoryHandler = (category) => {
    return ((evt) => {
      if (props.onCategorySelect) {
        props.onCategorySelect(category);
      }
      setSelectedCategory({selectedCategory: category});
    });
  };

  let items = [];
  for (let i = 0; i < this.props.items.length; i += 1) {
    let selected = false;
    if (props.items[i].category === selectedCategory) {
      selected = true;
    }
    items.push(<CategoryItem
      key={props.items[i].category}
      name={props.items[i].category}
      count={props.items[i].numFields}
      selected={selected}
      onClick={selectCategoryHandler(props.items[i].category)}/>);
  }
  return (
    <div className='list-group col-md-3 col-sm-12'>{items}</div>
  );
};

export default CategoryList;
