import styled from "styled-components";
import { JelloHorizontal } from "./Animations/JelloHorizontal";
import { FadeIn } from "./Animations/FadeIn";

export const ContainerCity = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  z-index: 1500;
`;

export const ReturnButton = styled.div`
  display: flex;
  box-shadow: none;
  background: none;
  background-color: none;
  border-radius: 21px;
  border: none;
  cursor: pointer;
  color: var(--returnButtonColor);
  font-size: 25px;
  padding: 0px 0px;
  text-decoration: none;

  &:hover {
    transition-duration: 1s;
    color: var(--hoverReturnButton);
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const MainDataCity = styled.div`
  height: 80vh;
  width: 60vw;
  display: flex;
  color: var(--detailsColor);
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1000px) and (orientation: landscape) {
    position: relative;
    top: 12%;
    height: 35vw;
    width: 90vw;
  } ;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const LocationIcon = styled.div`
  font-size: 36px;
  position: relative;
  top: -10.5px;

  ${JelloHorizontal}
`;

export const Name = styled.h2`
  font-family: var(--cityDetailsFont);
  font-weight: 600;
`;

export const DataCity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 2%;
  height: 30%;
  gap: 10%;

  @media screen and (orientation: portrait) {
    margin-right: 10%;
  } ;
`;

export const WeatherCityIcon = styled.div`
  position: relative;
  top: -15px;
  font-size: 150px;

  @media screen and (max-width: 1000px) and (orientation: landscape) {
    position: relative;
    top: -15px;
    font-size: 92px;
  } ;
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 3fr 3fr;
  gap: 1px 1px;
  grid-template-areas:
    ". ."
    ". ."
    ". .";
  margin-left: 10px;
  margin-right: 7px;
  margin-top: 10px;

  @media screen and (max-width: 1000px) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1px 1px 1px 1px;
  } ;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;
  height: 90%;
  margin-top: 20px;
  color: var(--detailsColor);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  background-color: var(--detailsGridBackgroundColor);
  box-shadow: var(--shadowDetailsGridColor) 2px 8px 8px;
  border: 1px var(--borderDetailsGridColor) solid;
  border-bottom: 2px var(--borderBottomAndRightDetailsGridColor) solid;
  border-right: 2px var(--borderBottomAndRightDetailsGridColor) solid;

  ${FadeIn}
`;

export const DetailsIcon = styled.div`
  display: flex;
  font-size: 20px;

  @media screen and (min-width: 1366px) {
    display: flex;
    font-size: 25px;
  } ;
`;

export const DetailsTitle = styled.div`
  font-family: var(--cityDetailsFont);
  font-size: 12px;

  @media screen and (min-width: 1366px) {
    font-size: 15px;
  } ;
`;

export const DataDetails = styled.div`
  font-size: 16px;
  width: 100%;

  @media screen and (min-width: 1366px) {
    font-size: 20px;
  } ;
`;
