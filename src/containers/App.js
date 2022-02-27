import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    if (cities.length === 30) {
      alert(
        "You can not add more than 30 cities. Please delete some of them and try it again."
      );
    } else {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
      )
        .then((r) => r.json())
        .then((recurso) => {
          //console.log(recurso);
          if (recurso.main !== undefined) {
            let repeated = cities?.filter((c) => c.id === recurso.id);
            if (repeated.length) {
              alert(`${recurso.name} is already added to WeatherApp.`);
            } else {
              const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                feelsLike: recurso.main.feels_like,
                humidity: recurso.main.humidity,
                pressure: recurso.main.pressure,
                sunrise: recurso.sys.sunrise,
                sunset: recurso.sys.sunset,
              };
              setCities((oldCities) => [...oldCities, ciudad]);
            }
          } else {
            alert("City not found");
          }
        });
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Cards cities={cities} onClose={onClose} />}
        />
      </Switch>
    </div>
  );
}

export default App;
