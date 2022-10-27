import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Le React.StrictMode est remplacé ici par BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
