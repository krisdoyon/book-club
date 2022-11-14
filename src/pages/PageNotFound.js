import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <section className="container">
        <h2 className="heading-error">Oops...page not found</h2>
        <Link to="/" className="btn btn--blue">
          BACK HOME
        </Link>
      </section>
      ;
    </>
  );
};

export default PageNotFound;
