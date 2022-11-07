const fs = require("fs");
const path = require("path");

function writeJSON() {
  const contents = fs.readFileSync(
    path.resolve(__dirname, `./assets/book-club.csv`),
    "utf-8"
  );
  const contentsArr = contents.split(/\r\n/);
  const headers = contentsArr.splice(0, 1)[0].split(",");

  const books = contentsArr.map((row) => {
    const items = row.split(",");
    const book = {};
    headers.forEach((header, i) => {
      book[`${header}`] = items[i];
    });
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      image: `${book.image}.jpg`,
      chosenBy: book.chosenBy,
      meetDate: book.meetDate,
      stats: {
        publishYear: book.publishYear,
        audioHours: +book.audioHours,
        pageCount: +book.pageCount,
        wordCount: +book.wordCount,
        fiction: book.fiction === "true" ? true : false,
      },
      ratings: {
        connor: +book.connor || null,
        joe: +book.joe || null,
        kris: +book.kris || null,
        rusty: +book.rusty || null,
        avg: +book.avg || 0,
      },
    };
  });
  fs.writeFileSync(
    path.resolve(__dirname, `./assets/books.json`),
    JSON.stringify(books)
  );
}

writeJSON();
