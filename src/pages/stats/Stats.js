import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import Slider from "./Slider";
import StatsGrid from "./StatsGrid";

const Stats = () => {
  const { members, allBooks } = useGlobalContext();
  const [books, setBooks] = useState(allBooks);

  const sortChangeHandler = (e) => {
    const sortYear = e.target.value;
    if (sortYear === "all") {
      setBooks(allBooks);
      return;
    }
    const filteredBooks = [...allBooks].filter(
      (book) => book.meetDate.slice(-4) === sortYear
    );
    setBooks(filteredBooks);
  };

  return (
    <section className="container">
      <header>
        <h1 className="heading-primary">Stats</h1>
      </header>
      <div className="container__body">
        <div className="select-wrapper">
          <label htmlFor="stats-sort-select">Filter by year:</label>
          <select
            className="select"
            defaultValue="date-descending"
            id="stats-sort-select"
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
