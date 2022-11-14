// ROUTER
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Modal from "./components/Modal";
import Books from "./pages/books/Books";
import Stats from "./pages/stats/Stats";
import Layout from "./pages/Layout";
// CONTEXT
import { useGlobalContext } from "./context/context";
// SASS
import "./sass/main.scss";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { isModalOpen } = useGlobalContext();
  return (
    <>
      {isModalOpen && <Modal />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="stats" element={<Stats />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
