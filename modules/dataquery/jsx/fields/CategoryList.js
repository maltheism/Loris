import React, {Component} from 'react';

/*
 *  Used for displaying the list of available categories
 */
class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: ''
    };
    this.selectCategoryHandler = this.selectCategoryHandler.bind(this);
  }

  selectCategoryHandler(category) {
    return ((evt) => {
      if (this.props.onCategorySelect) {
        this.props.onCategorySelect(category);
      }
      this.setState({
        selectedCategory: category
      });
    });
  }

  render() {
    let items = [],
      selectClosure = (name) => {
        return this.selectCategory(name);
      };
    for (i = 0; i < this.props.items.length; i += 1) {
      let selected = false;
      if (this.props.items[i].category == this.state.selectedCategory) {
        selected = true;
      }
      items.push(<CategoryItem
        key={this.props.items[i].category}
        name={this.props.items[i].category}
        count={this.props.items[i].numFields}
        selected={selected}
        onClick={this.selectCategoryHandler(this.props.items[i].category)}/>);
    }
    return (
      <div className='list-group col-md-3 col-sm-12'>{items}</div>
    );
  }
}

export default CategoryList;
