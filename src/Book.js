import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
  propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    const { book } = this.props;
    return (
      
    )
  }
}

export default Book;
