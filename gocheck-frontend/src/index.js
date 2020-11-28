import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SecretPage from "./SecretPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Route path="/secretpage" component={SecretPage} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
