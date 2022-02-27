import React from "react";

//? COMPONENTS:
import SearchBar from "./SearchBar.jsx";

//? STYLES:
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="superContainer">
      <nav className="navContainer">
        <span className="appName">WeatherApp</span>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
}

export default Nav;
