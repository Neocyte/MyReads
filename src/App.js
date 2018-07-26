import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage';
import BookShelf from './BookShelf';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: []
  };

  // Fetches every book provided by the API
  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  // Returns books filtered by their respective shelves
  getShelfBooks(shelfName) {
    return this.state.books.filter((b) => b.shelf === shelfName)
  }

  // Moves a book to a different shelf
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      // Updates book
      book.shelf = newShelf;

      // Appends book to the end of the new shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }));
    });
  };

  // Updates the list of books shown on the search page based on input
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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title="Currently Reading"
                  books={this.getShelfBooks("currentlyReading")}
                  changeShelf={this.changeShelf}
                />
                <BookShelf
                  title="Want to Read"
                  books={this.getShelfBooks("wantToRead")}
                  changeShelf={this.changeShelf}
                />
                <BookShelf
                  title="Read"
                  books={this.getShelfBooks("read")}
                  changeShelf={this.changeShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>

        <Route path="/search" render={{( history }) => (
          <SearchPage
            books={this.state.searchBooks}
            updateQuery={this.updateQuery}
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
