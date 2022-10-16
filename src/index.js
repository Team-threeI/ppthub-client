import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import Header from "./app/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <hr />
    <App />
  </React.StrictMode>,
);
