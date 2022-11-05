import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  const { books, openModal } = props;
  return (
    <section className="book-list">
      {books.map((book, i) => {
        return <BookCard key={i} openModal={openModal} book={book} />;
      })}
    </section>
  );
};

export default BookList;
