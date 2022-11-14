import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map((book) => {
        return <BookCard key={book.id} {...book} />;
      })}
    </div>
  );
};

export default BookList;
