import { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import { useGetBooksQuery } from "../../features/apiSlice";
import BookGrid from "./BookGrid";
import BookTable from "./BookTable";

const filterAndSortBooks = (books, filter, sort) => {
  let newBooks = [...books];
  if (filter !== "all") {
    newBooks = books.filter((book) => book.chosenBy === filter);
  }
  if (sort === "date-descending") {
    return newBooks.sort((a, b) => new Date(b.meetDate) - new Date(a.meetDate));
  }
  if (sort === "date-ascending") {
    return newBooks.sort((a, b) => new Date(a.meetDate) - new Date(b.meetDate));
  }
  if (sort === "rating-descending") {
    return newBooks.sort((a, b) => b.ratings.avg - a.ratings.avg);
  }
  if (sort === "rating-ascending") {
    return newBooks.sort((a, b) => a.ratings.avg - b.ratings.avg);
  }
  return newBooks;
};

const Books = () => {
  const { data: allBooks = [] } = useGetBooksQuery();
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date-descending");

  const displayBooks = filterAndSortBooks(allBooks, filter, sort);

  return (
    <section className="container">
      <h1 className="heading-primary">Books</h1>
      <div className="container__body">
        <div className="books-controls-wrapper">
          <div className="select-wrapper">
            <label htmlFor="books-filter-select">Filter:</label>
            <select
              className="select"
              defaultValue="date-descending"
              id="books-filter-select"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="connor">Connor's picks</option>
              <option value="joe">Joe's picks</option>
              <option value="kris">Kris' picks</option>
              <option value="rusty">Rusty's picks</option>
            </select>
            <label htmlFor="books-sort-select">Sort:</label>
            <select
              className="select"
              defaultValue="date-descending"
              id="books-sort-select"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="date-descending">Date (descending)</option>
              <option value="date-ascending">Date (ascending)</option>
              <option value="rating-descending">Rating (high to low)</option>
              <option value="rating-ascending">Rating (low to high)</option>
            </select>
          </div>
          <div className="books-buttons-wrapper">
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
        </div>
        {view === "table" && <BookTable books={displayBooks} />}
        {view === "grid" && <BookGrid books={displayBooks} />}
      </div>
    </section>
  );
};

export default Books;
