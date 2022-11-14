import React, { useState, useContext } from "react";
import allBooks from "../assets/books.json";
import { members } from "../assets/members";

const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBook, setModalBook] = useState(null);

  const openModal = (id) => {
    setIsModalOpen(true);
    const book = allBooks.find((book) => book.id === id);
    setModalBook(book);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalBook(null);
  };
  return (
    <appContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalBook,
        allBooks,
        members,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(appContext);
};

export { AppProvider, useGlobalContext };
