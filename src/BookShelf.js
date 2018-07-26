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
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
