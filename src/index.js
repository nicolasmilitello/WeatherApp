import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//? COMPONENTS:
import App from "./containers/App";

//? STYLES:
import "./globalStyle.css";
import "./normalize.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
