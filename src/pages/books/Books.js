import React, { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import BookGrid from "./BookGrid";
import BookTable from "./BookTable";

const Books = (props) => {
  const { openModal, bookData } = props;
  const [view, setView] = useState("grid");
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
          <button
            className={`btn btn-view ${
              view === "grid" ? "btn-view--active" : ""
            }`}
            onClick={() => setView("grid")}
          >
            <MdGridOn className="btn-view__icon" />
            <span>Grid</span>
          </button>
          <button
            className={`btn btn-view ${
              view === "table" ? "btn-view--active" : ""
            }`}
            onClick={() => setView("table")}
          >
            <FaRegListAlt className="btn-view__icon" />
            <span>Table</span>
          </button>
        </div>
        {view === "table" && <BookTable openModal={openModal} books={books} />}
        {view === "grid" && <BookGrid openModal={openModal} books={books} />}
      </div>
    </section>
  );
};

export default Books;