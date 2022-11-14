import React from "react";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";

const BookCard = ({
  id,
  title,
  author,
  image,
  chosenBy,
  ratings,
  meetDate,
}) => {
  const { openModal } = useGlobalContext();

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
        <button className="btn btn--blue" onClick={() => openModal(id)}>
          More info
        </button>
      </div>
    </article>
  );
};

export default BookCard;
