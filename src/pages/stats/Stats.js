import React, { useReducer } from "react";
import { useGlobalContext } from "../../context/context";
import RatingsGraph from "./RatingsGraph";
import Slider from "./Slider";
import StatsGrid from "./StatsGrid";
import allBooks from "../../assets/books.json";

const filterBooks = (filters) => {
  const newBooks = allBooks
    .filter((book) => {
      if (filters.year === "all") {
        return true;
      } else {
        return book.meetDate.slice(-4) === filters.year;
      }
    })
    .filter((book) => {
      if (filters.fiction === "all") {
        return true;
      } else {
        return book.stats.fiction.toString() === filters.fiction;
      }
    })
    .filter((book) => {
      if (filters.choice === "all") {
        return true;
      } else {
        return book.chosenBy === filters.choice;
      }
    });
  return newBooks;
};

const statsReducer = (state, action) => {
  if (action.type === "SELECT_CHANGE") {
    const { newFilter, newFilterType } = action.payload;
    const newFilters = {
      year: newFilterType === "year" ? newFilter : state.filters.year,
      fiction: newFilterType === "fiction" ? newFilter : state.filters.fiction,
      choice: newFilterType === "choice" ? newFilter : state.filters.choice,
    };
    const newBooks = filterBooks(newFilters);

    return {
      ...state,
      filters: newFilters,
      books: newBooks,
    };
  }
};

const Stats = () => {
  const { allBooks } = useGlobalContext();

  const [state, dispatch] = useReducer(statsReducer, {
    books: allBooks,
    filters: {
      year: "all",
      fiction: "all",
      choice: "all",
    },
  });

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
              dispatch({
                type: "SELECT_CHANGE",
                payload: { newFilterType: "year", newFilter: e.target.value },
              })
            }
          >
            <option value="all">All</option>
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
              dispatch({
                type: "SELECT_CHANGE",
                payload: {
                  newFilterType: "fiction",
                  newFilter: e.target.value,
                },
              })
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
              dispatch({
                type: "SELECT_CHANGE",
                payload: { newFilterType: "choice", newFilter: e.target.value },
              })
            }
          >
            <option value="all">All</option>
            <option value="connor">Connor's picks</option>
            <option value="joe">Joe's picks</option>
            <option value="kris">Kris' picks</option>
            <option value="rusty">Rusty's picks</option>
          </select>
        </div>
        <StatsGrid books={state.books} />
        <RatingsGraph books={state.books} yearFilter={state.filters.year} />
        <Slider />
      </div>
    </section>
  );
};

export default Stats;
