import React, { useState } from "react";

//? STYLES:
import { SearchForm, InputCity, AddCity } from "./SearchBarSC";

//? ICONS:
import { IoMdAdd } from "react-icons/io";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(city, e) {
    e.preventDefault();
    onSearch(city);
    setCity("");
  }

  return (
    <SearchForm
      onSubmit={(e) => {
        handleSubmit(city, e);
      }}
    >
      <InputCity
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <AddCity className="addCityButton" type="submit">
        <IoMdAdd />
      </AddCity>
    </SearchForm>
  );
}
