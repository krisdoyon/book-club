import { useState } from "react";
// DATA
import { members } from "./assets/members";
import bookData from "./assets/books.json";
// COMPONENTS
import Modal from "./components/Modal";
import Header from "./components/Header";
import Books from "./pages/books/Books";
import Stats from "./pages/stats/Stats";
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
        {page === "books" && (
          <Books bookData={bookData} openModal={openModal} />
        )}
        {page === "stats" && <Stats bookData={bookData} members={members} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
