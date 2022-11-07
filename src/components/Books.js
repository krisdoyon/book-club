import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import bookData from "../assets/books.json";

const Books = (props) => {
  const { openModal } = props;

  const [books, setBooks] = useState(
    bookData.sort((a, b) => new Date(b.meetDate) - new Date(a.meetDate))
  );

  const sortChangeHandler = (e) => {
    const sortType = e.target.value;
    if (sortType === "date-descending") {
      setBooks(
        [...books].sort((a, b) => new Date(b.meetDate) - new Date(a.meetDate))
      );
    }
    if (sortType === "date-ascending") {
      setBooks(
        [...books].sort((a, b) => new Date(a.meetDate) - new Date(b.meetDate))
      );
    }
    if (sortType === "rating-descending") {
      setBooks([...books].sort((a, b) => b.ratings.avg - a.ratings.avg));
    }
    if (sortType === "rating-ascending") {
      setBooks([...books].sort((a, b) => a.ratings.avg - b.ratings.avg));
    }
  };

  return (
    <section className="container">
      <h1>Books</h1>
      <div className="container__body">
        <div className="books-select-wrapper">
          <label htmlFor="books-sort-select">Sort by:</label>
          <select
            defaultValue="date-descending"
            id="books-sort-select"
            onChange={sortChangeHandler}
          >
            <option value="date-descending">Date (descending)</option>
            <option value="date-ascending">Date (ascending)</option>
            <option value="rating-descending">Rating (high to low)</option>
            <option value="rating-ascending">Rating (low to high)</option>
          </select>
        </div>
        <BookList openModal={openModal} books={books} />
      </div>
    </section>
  );
};

export default Books;
