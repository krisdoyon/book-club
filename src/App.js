import { useState } from "react";
import { users } from "./assets/users";
import books from "./assets/books.json";
import BookList from "./components/BookList";
import Modal from "./components/Modal";
import "./sass/main.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBook, setModalBook] = useState({});

  const openModal = (book) => {
    setIsModalOpen(true);
    setModalBook(book);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <Modal book={modalBook} closeModal={closeModal} />}
      <main className="container">
        <h1>Book Club</h1>
        <BookList openModal={openModal} books={books} />
      </main>
    </>
  );
}

export default App;
