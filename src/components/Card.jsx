import React, { useState } from "react";

//? COMPONENTS:
import City from "../components/City.jsx";

//? STYLES:
import {
  Container,
  Icon,
  CloseButton,
  CardBody,
  CardTitle,
  Data,
  WeatherIcon,
  DetailsButton,
} from "./CardSC";

//? ICONS:
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
  onClose,
  id,
}) {
  let dayOrNight = img[2];

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
    <Container day={dayOrNight === "d" ? 1 : 0}>
      <Icon>
        <CloseButton day={dayOrNight === "d" ? 1 : 0} onClick={onClose}>
          <IoIosClose />
        </CloseButton>
      </Icon>

      <CardBody>
        <CardTitle>{name}</CardTitle>

        <Data>
          <div>
            <FaTemperatureLow />
            <p>{min - 273}°C</p>
          </div>

          <div>
            <FaTemperatureHigh />
            <p>{max - 273}°C</p>
          </div>

          <div>
            <WeatherIcon>{img}</WeatherIcon>
          </div>
        </Data>

        <DetailsButton
          day={dayOrNight === "d" ? 1 : 0}
          onClick={(e) => handleShow(e)}
        >
          <FiMoreHorizontal />
        </DetailsButton>
      </CardBody>

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
          dayOrNight={dayOrNight}
          handleShow={handleShow}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}
