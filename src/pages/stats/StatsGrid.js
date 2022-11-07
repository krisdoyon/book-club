import React from "react";

const getStats = function (books) {
  const totalAudioHours =
    Math.round(
      books
        .map((book) => book.stats.audioHours)
        .reduce((acc, cur) => acc + cur, 0) * 10
    ) / 10;

  const totalPages = books
    .map((book) => book.stats.pageCount)
    .reduce((acc, cur) => acc + cur, 0);

  const totalWords = books
    .map((book) => book.stats.wordCount)
    .reduce((acc, cur) => acc + cur, 0);

  const ratingsArr = books
    .map((book) => book.ratings.avg)
    .filter((rating) => rating !== 0);

  const avgRating =
    Math.round(
      (ratingsArr.reduce((acc, cur) => acc + cur, 0) / ratingsArr.length) * 10
    ) / 10;

  return {
    totalBooks: books.length,
    totalAudioHours,
    totalPages,
    totalWords,
    avgRating,
  };
};

const StatsGrid = (props) => {
  const { books } = props;
  const { totalBooks, totalPages, totalWords, totalAudioHours, avgRating } =
    getStats(books);
  return (
    <div className="stats-grid">
      <span className="stats-grid__label">Total books:</span>
      <span className="stats-grid__value">{totalBooks}</span>
      <span className="stats-grid__label">Total pages read:</span>
      <span className="stats-grid__value">{totalPages.toLocaleString()}</span>
      <span className="stats-grid__label">Total words:</span>
      <span className="stats-grid__value">{totalWords.toLocaleString()}</span>
      <span className="stats-grid__label">Total hours listened:</span>
      <span className="stats-grid__value">
        {totalAudioHours.toLocaleString()}
      </span>
      <span className="stats-grid__label">Overall average rating:</span>
      <span className="stats-grid__value">{avgRating || "n/a"}</span>
    </div>
  );
};

export default StatsGrid;
