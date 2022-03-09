import React from "react";

//? STYLES:
import {
  Container,
  TextContainer,
  Text,
  CreditsContainer,
  Credits,
} from "./FooterSC";

function Footer() {
  return (
    <Container>
      <TextContainer>
        <Text>WeatherApp</Text>
        <Text>2022 ©</Text>
      </TextContainer>

      <CreditsContainer>
        <Credits>Powered by OpenWeather API.</Credits>
        <Credits>Developed by Nicolas Militello.</Credits>
      </CreditsContainer>
    </Container>
  );
}

export default Footer;
