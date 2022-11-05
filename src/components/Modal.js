import React from "react";

const Modal = (props) => {
  const { title, author, ratings } = props.book;
  return (
    <div className="modal">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div class="ratings">
        <p>Connor: {ratings.connor || "n/a"}</p>
        <p>Joe: {ratings.joe || "n/a"}</p>
        <p>Kris: {ratings.kris || "n/a"}</p>
        <p>Rusty: {ratings.rusty || "n/a"}</p>
      </div>
      <button onClick={props.closeModal}>CLOSE</button>
    </div>
  );
};

export default Modal;
