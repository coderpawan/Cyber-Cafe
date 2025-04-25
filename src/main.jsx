import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
