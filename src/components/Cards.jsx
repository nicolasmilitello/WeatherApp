import React from "react";

//? COMPONENTS:
import Card from "./Card.jsx";

//? STYLES:
import { Container, InitialMessageAddCities, Logo } from "./CardsSC";

export default function Cards({ cities, onClose }) {
  return (
    <>
      {cities.length ? (
        <Container>
          {cities.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              max={c.max}
              min={c.min}
              name={c.name}
              img={c.img}
              wind={c.wind}
              temp={c.temp}
              weather={c.weather}
              feelsLike={c.feelsLike}
              humidity={c.humidity}
              pressure={c.pressure}
              onClose={() => onClose(c.id)}
            />
          ))}
        </Container>
      ) : (
        <InitialMessageAddCities>
          Look for cities to add to
          <Logo> WeatherApp</Logo>
        </InitialMessageAddCities>
      )}
    </>
  );
}
