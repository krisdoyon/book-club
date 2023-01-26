import React, { useState } from "react";
import RatingsGraph from "./RatingsGraph";
import Slider from "./Slider";
import StatsGrid from "./StatsGrid";
import { useGetBooksQuery } from "../../features/apiSlice";

const filterBooks = (books, filters) => {
  let newBooks = [...books];
  if (filters.year !== "all") {
    newBooks = newBooks.filter(
      (book) => book.meetDate.slice(-4) === filters.year
    );
  }
  if (filters.fiction !== "all") {
    newBooks = newBooks.filter(
      (book) => book.stats.fiction.toString() === filters.fiction
    );
  }
  if (filters.choice !== "all") {
    newBooks = newBooks.filter((book) => book.chosenBy === filters.choice);
  }
  return newBooks;
};

const Stats = () => {
  const { data: allBooks = [] } = useGetBooksQuery();
  const [filters, setFilters] = useState({
    year: "all",
    fiction: "all",
    choice: "all",
  });

  const currentBooks = filterBooks(allBooks, filters);

  return (
    <section className="container">
      <header>
        <h1 className="heading-primary">Stats</h1>
      </header>
      <div className="container__body">
        <div className="select-wrapper">
          <label htmlFor="stats-year-select">Filter year:</label>
          <select
            className="select"
            defaultValue="all"
            id="stats-year-select"
            onChange={(e) =>
              setFilters((prevFilters) => ({
                ...prevFilters,
                year: e.target.value,
              }))
            }
          >
            <option value="all">All</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
          <label htmlFor="stats-fiction-select">Filter fiction:</label>
          <select
            className="select"
            defaultValue="all"
            id="stats-fiction-select"
            onChange={(e) =>
              setFilters((prevFilters) => ({
                ...prevFilters,
                fiction: e.target.value,
              }))
            }
          >
            <option value="all">All</option>
            <option value="true">Fiction</option>
            <option value="false">Non-fiction</option>
          </select>
          <label htmlFor="stats-choice-select">Filter choice:</label>
          <select
            className="select"
            defaultValue="all"
            id="stats-choice-select"
            onChange={(e) =>
              setFilters((prevFilters) => ({
                ...prevFilters,
                choice: e.target.value,
              }))
            }
          >
            <option value="all">All</option>
            <option value="connor">Connor's picks</option>
            <option value="joe">Joe's picks</option>
            <option value="kris">Kris' picks</option>
            <option value="rusty">Rusty's picks</option>
          </select>
        </div>
        <StatsGrid books={currentBooks} />
        <RatingsGraph books={currentBooks} yearFilter={filters.year} />
        <Slider />
      </div>
    </section>
  );
};

export default Stats;
