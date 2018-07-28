import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book" id={book.id}>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : null}")` }}></div>
          <BookShelfChanger
            book={book}
            changeShelf={this.props.changeShelf}
          />
        </div>
        <div className="book-title">{book.name}</div>
        <div className="book-authors">
          {(book.authors) ? book.authors.join(', ' ) : ''}
        </div>
      </div>
    )
  }
}

export default Book;
