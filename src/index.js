import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Containers/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <h1 className="header">Hello Index</h1>
  </React.StrictMode>
);
