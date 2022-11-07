import React, { useState, useEffect } from "react";

const Header = (props) => {
  const { page, setPage } = props;

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <button
              className={`btn nav__btn ${
                page === "books" ? `nav__btn--active` : ""
              }`}
              onClick={() => setPage("books")}
            >
              Books
            </button>
          </li>

          <li className="nav__list-item">
            <button
              className={`btn nav__btn ${
                page === "stats" ? `nav__btn--active` : ""
              }`}
              onClick={() => setPage("stats")}
            >
              Stats
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
