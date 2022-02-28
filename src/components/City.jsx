import React from "react";

//? STYLES:
import {
  ContainerCity,
  ButtonContainer,
  ReturnButton,
  MainDataCity,
  Title,
  LocationIcon,
  Name,
  DataCity,
  WeatherCityIcon,
  DetailsContainer,
  Grid,
  DetailsIcon,
  DetailsTitle,
  DataDetails,
} from "./CitySC";

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
    <ContainerCity>
      <ButtonContainer>
        <ReturnButton onClick={(e) => min.handleShow(e)}>
          <BiArrowBack />
        </ReturnButton>
      </ButtonContainer>

      <MainDataCity>
        <Title>
          <LocationIcon>
            <MdOutlineLocationOn />
          </LocationIcon>

          <Name>{min.name}</Name>
        </Title>

        <DataCity>
          <WeatherCityIcon>{min.img}</WeatherCityIcon>

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
        </DataCity>

        <DetailsContainer>
          <Grid>
            <DetailsIcon>
              <BsThermometerHalf />
              <DetailsTitle>Feels like</DetailsTitle>
            </DetailsIcon>
            <DataDetails>{Math.floor(min.feelsLike - 273)} ºC</DataDetails>
          </Grid>

          <Grid>
            <DetailsIcon>
              <WiHumidity />
              <DetailsTitle>Humidity</DetailsTitle>
            </DetailsIcon>
            <DataDetails>{min.humidity} %</DataDetails>
          </Grid>

          <Grid>
            <DetailsIcon>
              <WiBarometer />
              <DetailsTitle>Pressure</DetailsTitle>
            </DetailsIcon>
            <DataDetails>{min.pressure} hPa</DataDetails>
          </Grid>

          <Grid>
            <DetailsIcon>
              <WiStrongWind />
              <DetailsTitle>Wind</DetailsTitle>
            </DetailsIcon>
            <DataDetails>{min.wind} km/h</DataDetails>
          </Grid>
        </DetailsContainer>
      </MainDataCity>
    </ContainerCity>
  );
}
