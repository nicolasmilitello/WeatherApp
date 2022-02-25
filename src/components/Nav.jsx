import React from "react";
import SearchBar from "./SearchBar.jsx";
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
