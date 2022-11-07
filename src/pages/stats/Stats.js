import React, { useState } from "react";
import Slider from "./Slider";
import StatsGrid from "./StatsGrid";

const Stats = (props) => {
  const { members, bookData } = props;
  const [books, setBooks] = useState(bookData);

  const sortChangeHandler = (e) => {
    const sortYear = e.target.value;
    if (sortYear === "all") {
      setBooks(bookData);
      return;
    }
    const filteredBooks = [...bookData].filter(
      (book) => book.meetDate.slice(-4) === sortYear
    );
    setBooks(filteredBooks);
  };

  return (
    <section className="container">
      <header>
        <h1>Stats</h1>
      </header>
      <div className="container__body">
        <div className="books-select-wrapper">
          <label htmlFor="books-sort-select">Filter by year:</label>
          <select
            defaultValue="date-descending"
            id="books-sort-select"
            onChange={sortChangeHandler}
          >
            <option value="all">All years</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
        <StatsGrid books={books} />
        <Slider members={members} />
      </div>
    </section>
  );
};

export default Stats;
