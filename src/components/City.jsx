import React from "react";

//? STYLES:
import "./City.css";

//? ICONS:
import { WiHumidity, WiBarometer, WiStrongWind } from "react-icons/wi";
import {
  BsThermometerHalf,
  BsThermometerSnow,
  BsThermometerSun,
} from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

export default function City(min) {
  return (
    <div className="background">
      <div className="buttonContainer">
        <button className="closeButton" onClick={(e) => min.handleShow(e)}>
          <div className="buttonText">
            <BiArrowBack />
          </div>
        </button>
      </div>
      <div className="containerCity">
        <div className="name">
          <div className="locationIcon">
            <MdOutlineLocationOn />
          </div>
          <h2 className="cityName">{min.name}</h2>
        </div>

        <div className="info">
          <div className="weatherIcon">{min.img}</div>
          <div>
            <div>
              {Math.floor(min.temp - 273) < 12 ? (
                <BsThermometerSnow />
              ) : (
                <BsThermometerSun />
              )}
            </div>
            <div>{Math.floor(min.temp - 273)}ºC</div>
            <div>{min.weather}</div>
          </div>
        </div>

        <div className="itemsContainer">
          <div className="grid">
            <div className="icon">
              <BsThermometerHalf />
              <div className="gridTitle">Feels like</div>
            </div>
            <div className="dataCity">{Math.floor(min.feelsLike - 273)} ºC</div>
          </div>

          <div className="grid">
            <div className="icon">
              <WiHumidity />
              <div className="gridTitle">Humidity</div>
            </div>
            <div className="dataCity">{min.humidity} %</div>
          </div>

          <div className="grid">
            <div className="icon">
              <WiBarometer />
              <div className="gridTitle">Pressure</div>
            </div>
            <div className="dataCity">{min.pressure} hPa</div>
          </div>

          <div className="grid">
            <div className="icon">
              <WiStrongWind />
              <div className="gridTitle">Wind</div>
            </div>
            <div className="dataCity">{min.wind} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
