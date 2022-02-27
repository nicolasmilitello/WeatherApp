import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//? COMPONENTS:
import WeatherApp from "./containers/App";

//? STYLES:
import "./globalStyle.css";
import "./normalize.css";

ReactDOM.render(
  <BrowserRouter>
    <WeatherApp />
  </BrowserRouter>,
  document.getElementById("root")
);
