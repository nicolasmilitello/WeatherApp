import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(city, e) {
    e.preventDefault();
    onSearch(city);
    setCity("");
  }

  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        handleSubmit(city, e);
      }}
    >
      <input
        className="inputCity"
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="addCityButton" type="submit">
        <IoMdAdd />
      </button>
    </form>
  );
}
