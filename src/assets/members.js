import books from "./books.json";

class Member {
  constructor(name) {
    this.name = name;
    this.#setBookRatings();
    this.#setChoiceRatings();
    this.#setPercentages();
  }

  #setBookRatings() {
    const ratings = books
      .map((book) => book.ratings[this.name])
      .filter((rating) => rating !== null);
    const low = Math.min(...ratings);
    const avg = ratings.reduce((acc, cur) => acc + cur, 0) / ratings.length;
    const high = Math.max(...ratings);
    this.bookRatings = {
      low: Math.round(low * 10) / 10,
      avg: Math.round(avg * 10) / 10,
      high: Math.round(high * 10) / 10,
    };
  }

  #setChoiceRatings() {
    const filteredBooks = books.filter((book) => book.chosenBy === this.name);
    const avgRatings = filteredBooks
      .map((book) => book.ratings.avg)
      .filter((avg) => avg !== 0);
    const low = Math.min(...avgRatings);
    const avg =
      avgRatings.reduce((acc, cur) => acc + cur, 0) / avgRatings.length;
    const high = Math.max(...avgRatings);
    this.choiceRatings = {
      low: Math.round(low * 10) / 10,
      avg: Math.round(avg * 10) / 10,
      high: Math.round(high * 10) / 10,
    };
  }

  #setPercentages() {
    const filteredBooks = books.filter((book) => book.chosenBy === this.name);
    const fictionArr = filteredBooks.map((book) => book.stats.fiction);
    const percentFiction =
      fictionArr.filter((item) => item === true).length / fictionArr.length;
    this.percentages = {
      fiction: Math.round(percentFiction * 100 * 10) / 10,
      nonFiction: Math.round((1 - percentFiction) * 100 * 10) / 10,
    };
  }
}

const connor = new Member("connor");
const joe = new Member("joe");
const kris = new Member("kris");
const rusty = new Member("rusty");
const members = [connor, joe, kris, rusty];

export { members };
