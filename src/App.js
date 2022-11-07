import { useState } from "react";
// DATA
import { members } from "./assets/members";
// COMPONENTS
import Modal from "./components/Modal";
import Header from "./components/Header";
import Books from "./components/Books";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
// SASS
import "./sass/main.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBook, setModalBook] = useState({});
  const [page, setPage] = useState("books");

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
      <Header page={page} setPage={setPage} />
      <main>
        {page === "books" && <Books openModal={openModal} />}
        {page === "stats" && <Stats members={members} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
