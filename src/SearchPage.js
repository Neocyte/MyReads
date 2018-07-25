import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';

class Search extends React.Component {
  propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  updateSearch = (search) => {
    this.props.updateSearch(search.trim());
  };

  // Clears search bar before component is removed from DOM 
  componentWillUnmount() {
    this.props.updateSearch('');
  }

  render() {
    return (

    )
  }
}

export default SearchPage;
