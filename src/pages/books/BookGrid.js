import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  const { openModal, books } = props;
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookCard key={book.id} openModal={openModal} book={book} />;
      })}
    </div>
  );
};

export default BookList;
