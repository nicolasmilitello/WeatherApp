import React from "react";

//? STYLES:
import "./Ciudad.css";

//? ICONS:
import { WiHumidity, WiBarometer, WiStrongWind } from "react-icons/wi";
import {
  BsThermometerHalf,
  BsThermometerSnow,
  BsThermometerSun,
} from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Ciudad(min) {
  // function unixTimeToHours(unixTime) {
  //   let unix_timestamp = unixTime;
  //   var date = new Date(unix_timestamp * 1000);
  //   var hours = date.getHours();
  //   var minutes = "0" + date.getMinutes();
  //   var seconds = "0" + date.getSeconds();

  //   return hours + ":" + minutes.slice(-2) + ":" + seconds.slice(-2);
  // }

  return (
    <div className="background">
      <div className="containerCiudad">
        <div className={min.dayOrNight === "d" ? "ciudadDia" : "ciudadNoche"}>
          <div className="buttonContainer">
            <button className="closeButton" onClick={(e) => min.handleShow(e)}>
              <div className="buttonText">
                <IoIosClose />
              </div>
            </button>
          </div>

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
              <div>{Math.floor(min.temp - 273)} ºC</div>
              <div>{min.weather}</div>
            </div>
          </div>

          <div className="itemsContainer">
            <div className="grid">
              <div className="icon">
                <BsThermometerHalf />
                <div className="gridTitle">Feels like</div>
              </div>
              <div>{Math.floor(min.feelsLike - 273)} ºC</div>
            </div>

            <div className="grid">
              <div className="icon">
                <WiHumidity />
                <div className="gridTitle">Humidity</div>
              </div>
              <div>{min.humidity} %</div>
            </div>

            <div className="grid">
              <div className="icon">
                <WiBarometer />
                <div className="gridTitle">Pressure</div>
              </div>
              <div>{min.pressure} hPa</div>
            </div>

            <div className="grid">
              <div className="icon">
                <WiStrongWind />
                <div className="gridTitle">Wind</div>
              </div>
              <div>{min.wind} km/h</div>
            </div>

            {/* <div className="grid">
              <div className="icon">
                <AiOutlineCloud />
                <div className="gridTitle">Nubosity</div>
              </div>
              <div>{min.clouds}</div>
            </div>

            <div className="grid">
              <div className="icon">
                <BsSunrise />
                <div className="gridTitle">Sunrise</div>
              </div>
              <div>{unixTimeToHours(Number(min.sunrise))}</div>
            </div>

            <div className="grid">
              <div className="icon">
                <BsSunset />
                <div className="gridTitle">Sunset</div>
              </div>
              <div>{unixTimeToHours(Number(min.sunset))}</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
