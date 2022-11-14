// REACT
import React from "react";
import ReactDOM from "react-dom/client";
// ROUTER
import { BrowserRouter as Router } from "react-router-dom";
// CONTEXT PROVIDER
import { AppProvider } from "./context/context";
// COMPONENTS
import ScrollToTop from "./helpers/ScrollToTop";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <ScrollToTop />
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);
