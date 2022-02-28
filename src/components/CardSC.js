import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  width: 18rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 2px var(--borderCardColor) solid;
  border-bottom: 2px var(--borderBottomAndRightCardColor) solid;
  border-right: 2px var(--borderBottomAndRightCardColor) solid;
  cursor: default;

  ${(props) =>
    props.day
      ? `background-color: var(--backgroundDayCard); box-shadow: var(--shadowDayCard) 2px 8px 8px; color: black;`
      : `background-color: var(--backgroundNightCard); box-shadow: var(--shadowNightCard) 2px 8px 8px; color: white;`}
`;

export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;
  margin-top: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  margin-right: 2px;
  box-shadow: none;
  background: none;
  background-color: none;
  border-radius: 21px;
  border: none;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  font-size: 22px;
  padding: 0px 0px;
  text-decoration: none;

  ${(props) =>
    props.day
      ? `color: var(--buttonDayColor); &:hover {transition-duration: 1s;
  color: var(--hoverCloseButtonCard);}`
      : `color: var(--buttonNightColor); &:hover {transition-duration: 1s;
  color: var(--hoverCloseButtonCard);}`}
`;

export const CardBody = styled.div`
  margin-top: 2px !important;
  margin-bottom: 5px !important;
  padding-top: 0px !important;
`;

export const CardTitle = styled.h5`
  margin-bottom: 15px;
  font-family: var(--TitleCardFont);
`;

export const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  top: 7%;
`;

export const WeatherIcon = styled.div`
  font-size: 50px;
  position: relative;
  top: -23px;
`;

export const DetailsButton = styled.button`
  box-shadow: none;
  background: none;
  background-color: none;
  border-radius: 21px;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  padding: 0px 0px;
  text-decoration: none;

  ${(props) =>
    props.day
      ? `color: var(--buttonDayColor); &:hover {transition-duration: 1s;
  color: var(--hoverDetailsButtonDayCard);}`
      : `color: var(--buttonNightColor); &:hover {transition-duration: 1s;
  color: var(--hoverDetailsButtonNightCard);}`}

  &:active {
    position: relative;
    top: 1px;
  }
`;
