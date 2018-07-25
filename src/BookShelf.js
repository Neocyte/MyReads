import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends React.Component {
  propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    return (
      
    )
  }
}

export default BookShelf;
