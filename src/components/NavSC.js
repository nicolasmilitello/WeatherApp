import styled from "styled-components";

export const SuperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  margin: 0px;
  backdrop-filter: blur(20px);
  background-color: rgba(159, 160, 189, 0.075);
  border-bottom: 2px var(--borderColorCardsAndNav) solid;

  @media screen and (max-width: 500px) {
    height: 16vh;
    justify-content: center;
    flex-direction: column;
  } ;
`;

export const Logo = styled.span`
  font-family: var(--logoFont);
  width: 50%;
  color: var(--logoNavColor);
  font-size: 25px;
  cursor: default;
`;
