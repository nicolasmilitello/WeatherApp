import React from "react";

//? COMPONENTS:
import SearchBar from "./SearchBar.jsx";

//? STYLES:
import { SuperContainer, Container, Logo } from "./NavSC";

function Nav({ onSearch }) {
  return (
    <SuperContainer>
      <Container>
        <Logo>WeatherApp</Logo>
        <SearchBar onSearch={onSearch} />
      </Container>
    </SuperContainer>
  );
}

export default Nav;
