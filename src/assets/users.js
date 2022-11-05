import books from "./books.json";

class User {
  constructor(name) {
    this.name = name;
    this.#setAverageBookRating();
    this.#setAverageChosenRating();
  }

  #setAverageBookRating() {
    const ratings = books
      .map((book) => book.ratings[this.name])
      .filter((rating) => rating !== null);
    const avg = ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
    this.avgBookRating = Math.round(avg * 10) / 10;
  }

  #setAverageChosenRating() {
    const filteredBooks = books.filter((book) => book.chosenBy === this.name);
    const ratings = filteredBooks
      .map((book) => book.ratings.avg)
      .filter((avg) => avg !== null);
    const avg = ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
    this.avgChoiceRating = Math.round(avg * 10) / 10;
  }
}

const connor = new User("connor");
const joe = new User("joe");
const kris = new User("kris");
const rusty = new User("rusty");
const users = [connor, joe, kris, rusty];

export { users };
