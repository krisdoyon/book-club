import books from "./books.json";

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
  .filter((rating) => rating !== null);

const avgRating =
  Math.round(
    (ratingsArr.reduce((acc, cur) => acc + cur, 0) / ratingsArr.length) * 10
  ) / 10;

const stats = {
  totalBooks: books.length,
  totalAudioHours,
  totalPages,
  totalWords,
  avgRating,
};

export { stats };
