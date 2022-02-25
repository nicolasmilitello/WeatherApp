import React from "react";

import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  return (
    <div>
      {cities.length ? (
        <div className="cards">
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
              // clouds={c.clouds}
              // sunrise={c.sunrise}
              // sunset={c.sunset}
              onClose={() => onClose(c.id)}
            />
          ))}
        </div>
      ) : (
        <div className="addCities">
          Look for cities to add to
          <div className="appLogo"> WeatherApp</div>
          {/* <div className="addCitiesPart">to start.</div> */}
        </div>
      )}
    </div>
  );
  // <div className="cards">
  //   {cities.map((c) => (
  //     <Card
  //       key={c.id}
  //       id={c.id}
  //       max={c.max}
  //       min={c.min}
  //       name={c.name}
  //       img={c.img}
  //       wind={c.wind}
  //       temp={c.temp}
  //       weather={c.weather}
  //       feelsLike={c.feelsLike}
  //       humidity={c.humidity}
  //       pressure={c.pressure}
  //       // clouds={c.clouds}
  //       // sunrise={c.sunrise}
  //       // sunset={c.sunset}
  //       onClose={() => onClose(c.id)}
  //     />
  //   ))}
  // </div>
}
