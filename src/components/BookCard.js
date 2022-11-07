import React from "react";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";

const BookCard = (props) => {
  const { title, author, image, chosenBy, ratings, meetDate } = props.book;
  const { openModal } = props;

  const handleButtonClick = () => {
    openModal(props.book);
  };
  return (
    <article className="book-card">
      <div className="book-card__rating">{ratings.avg || "n/a"}</div>
      <img src={`./img/${image}`} alt={title} />
      <div className="book-card__info">
        <header>
          <h2 className="book-card__title">{title}</h2>
          <h3 className="book-card__author">by {author}</h3>
        </header>
        <div className="book-card__details">
          <p className="book-card__detail">
            <FaRegUser className="book-card__icon" /> <span>{chosenBy}</span>
          </p>
          <p className="book-card__detail">
            <FaRegCalendarAlt className="book-card__icon" /> {meetDate}
          </p>
        </div>
        <button className="btn btn--blue" onClick={handleButtonClick}>
          More info
        </button>
      </div>
    </article>
  );
};

export default BookCard;
