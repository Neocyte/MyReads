import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchPage extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  updateSearch = (search) => {
    // Successful search
    if (search) {
      BooksAPI.search(search).then((books) => {
        if (books.length) {
          this.setState({
            searchBooks: books
          });
        }
      });
    // Failed or empty search
    } else {
      this.setState({
        searchBooks: []
      });
    }
  };

  // Clears search bar before component is removed from DOM
  componentWillUnmount() {
    this.updateSearch('');
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id} className="contact-list-item">
                <Book
                  book={book}
                  changeShelf={this.props.changeShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage;
