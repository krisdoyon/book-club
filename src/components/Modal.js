import React from "react";
import {
  FaMusic,
  FaBookOpen,
  FaRegCalendar,
  FaSlackHash,
} from "react-icons/fa";

const Modal = (props) => {
  const { title, author, ratings, image } = props.book;
  const { audioHours, wordCount, pageCount, publishYear } = props.book.stats;
  return (
    <>
      <div class="overlay" onClick={props.closeModal}></div>
      <div className="modal">
        <button className="btn modal__btn-close" onClick={props.closeModal}>
          &times;
        </button>
        <img src={`./img/${image}`} alt={title} />
        <div className="modal__body">
          <header>
            <h2 className="modal__title">{title}</h2>
            <h3 className="modal__author">by {author}</h3>
          </header>
          <div className="modal__info">
            <p className="modal__stat">
              <FaRegCalendar className="modal__icon" />
              <span>
                Published in <strong>{publishYear}</strong>
              </span>
            </p>
            <p className="modal__stat">
              <span className="modal__letter-icon">C</span>
              {ratings.connor || "n/a"}
            </p>

            <p className="modal__stat">
              <FaMusic className="modal__icon" />
              <span>
                <strong>{Math.round(audioHours * 10) / 10}</strong> hrs
              </span>
            </p>
            <p className="modal__stat">
              <span className="modal__letter-icon">J</span>
              {ratings.joe || "n/a"}
            </p>

            <p className="modal__stat">
              <FaSlackHash className="modal__icon" />
              <span>
                <strong>{wordCount.toLocaleString()}</strong> words
              </span>
            </p>
            <p className="modal__stat">
              <span className="modal__letter-icon">K</span>
              {ratings.kris || "n/a"}
            </p>

            <p className="modal__stat">
              <FaBookOpen className="modal__icon" />
              <span>
                <strong>{pageCount.toLocaleString()}</strong> pages
              </span>
            </p>
            <p className="modal__stat">
              <span className="modal__letter-icon">R</span>
              {ratings.rusty || "n/a"}
            </p>

            {/* <div className="modal__ratings"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
