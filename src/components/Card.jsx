import React, { useState } from "react";
//import Ciudad from "../components/Ciudad.jsx";
import City from "../components/City.jsx";
import "./Card.css";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiRainMix,
  WiNightAltRainMix,
  WiDayShowers,
  WiStormShowers,
  WiDaySnow,
  WiNightSnow,
} from "react-icons/wi";
import { RiMistFill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Card({
  min,
  max,
  name,
  img,
  wind,
  temp,
  weather,
  feelsLike,
  humidity,
  pressure,
  // clouds,
  // sunrise,
  // sunset,
  onClose,
  id,
}) {
  let dayOrNight = img[2];
  // console.log(dayOrNight);
  if (img.charAt(2) === "d") {
    switch (img) {
      case "01d":
        img = <WiDaySunny />;
        break;
      case "02d":
        img = <WiDayCloudy />;
        break;
      case "03d":
        img = <WiCloud />;
        break;
      case "04d":
        img = <WiCloudy />;
        break;
      case "09d":
        img = <WiRainMix />;
        break;
      case "10d":
        img = <WiDayShowers />;
        break;
      case "11d":
        img = <WiStormShowers />;
        break;
      case "13d":
        img = <WiDaySnow />;
        break;
      case "50d":
        img = <RiMistFill />;
        break;
      default:
    }
  } else {
    switch (img) {
      case "01n":
        img = <WiNightClear />;
        break;
      case "02n":
        img = <WiNightAltCloudy />;
        break;
      case "03n":
        img = <WiCloud />;
        break;
      case "04n":
        img = <WiCloudy />;
        break;
      case "09n":
        img = <WiRainMix />;
        break;
      case "10n":
        img = <WiNightAltRainMix />;
        break;
      case "11n":
        img = <WiStormShowers />;
        break;
      case "13n":
        img = <WiNightSnow />;
        break;
      case "50n":
        img = <RiMistFill />;
        break;
      default:
    }
  }

  const [show, setShow] = useState(false);

  function handleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  return (
    <div className={dayOrNight === "d" ? "dayCard" : "nightCard"}>
      <div id="closeIcon" className="row">
        <div className="buttonContainerHome">
          <button
            className={
              dayOrNight === "d" ? "closeButtonHomeDay" : "closeButtonHomeNight"
            }
            onClick={onClose}
          >
            <div className="buttonTextHome">
              <IoIosClose />
            </div>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <div className="data">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <FaTemperatureLow />
            <p>{min - 273}°C</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <FaTemperatureHigh />
            <p>{max - 273}°C</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="iconoClima">{img}</div>
          </div>
        </div>
        <div>
          <button
            className={
              dayOrNight === "d" ? "detailsButtonDay" : "detailsButtonNight"
            }
            onClick={(e) => handleShow(e)}
          >
            <FiMoreHorizontal />
          </button>
        </div>
      </div>
      {show ? (
        <City
          id={id}
          max={max}
          min={min}
          name={name}
          img={img}
          wind={wind}
          temp={temp}
          weather={weather}
          feelsLike={feelsLike}
          humidity={humidity}
          pressure={pressure}
          // clouds={clouds}
          // sunrise={sunrise}
          // sunset={sunset}
          dayOrNight={dayOrNight}
          handleShow={handleShow}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
