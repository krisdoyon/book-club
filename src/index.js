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

import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <ApiProvider api={apiSlice}>
        <AppProvider>
          <ScrollToTop />
          <App />
        </AppProvider>
      </ApiProvider>
    </Router>
  </React.StrictMode>
);
