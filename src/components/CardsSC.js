import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InitialMessageAddCities = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--InitialMessageAddCitiesColor)
  font-family: var(--InitialMessageAddCitiesFont);
  height: 50vh;
  font-size: 18.7px;
  cursor: default;
`;

export const Logo = styled.div`
  font-family: var(--logoFont);
  color: var(--InitialMessageAddCitiesColor);
  font-size: 40px;
  line-height: 28px;
`;
