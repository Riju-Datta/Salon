import React from "react";
import ReactDOM from "react-dom/client";
import App from "./index.jsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("LUMÉ: root element was not found.");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
