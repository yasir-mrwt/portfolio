/**
 * React Application Entry Point
 *
 * This file:
 * 1. Imports React 19 and ReactDOM
 * 2. Imports root App component
 * 3. Imports global styles
 * 4. Renders App to the DOM element with id 'root'
 *
 * React 19 uses createRoot for concurrent rendering,
 * which enables better performance and user experience.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Create root using React 19's concurrent mode
// This enables features like automatic batching and transitions
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
