import React from "react";

const BookTable = ({ books }) => {
  return (
    <div className="book-table__wrapper">
      <table className="book-table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Choice</th>
            <th>Meeting Date</th>
            <th style={{ width: "5%" }}>Avg</th>
            <th style={{ width: "5%" }}>Connor</th>
            <th style={{ width: "5%" }}>Joe</th>
            <th style={{ width: "5%" }}>Kris</th>
            <th style={{ width: "5%" }}>Rusty</th>
            <th style={{ width: "5%" }}>Page Count</th>
            <th style={{ width: "5%" }}>Word Count</th>
            <th style={{ width: "5%" }}>Audio Hours</th>
            <th style={{ width: "5%" }}>Publish Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td style={{ textAlign: "left" }}>{book.title}</td>
              <td style={{ textAlign: "left" }}>{book.author}</td>
              <td style={{ textAlign: "left" }}>
                {book.chosenBy.slice(0, 1).toUpperCase() +
                  book.chosenBy.slice(1)}
              </td>
              <td>{book.meetDate}</td>
              <td>{book.ratings.avg || "n/a"}</td>
              <td>{book.ratings.connor || "n/a"}</td>
              <td>{book.ratings.joe || "n/a"}</td>
              <td>{book.ratings.kris || "n/a"}</td>
              <td>{book.ratings.rusty || "n/a"}</td>
              <td>{book.stats.pageCount.toLocaleString()}</td>
              <td>{book.stats.wordCount.toLocaleString()}</td>
              <td>{Math.round(book.stats.audioHours * 10) / 10}</td>
              <td>{book.stats.publishYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
