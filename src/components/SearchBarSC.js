import styled from "styled-components";

export const SearchForm = styled.form`
  width: 50%;

  @media screen and (max-width: 375px) {
    width: 100%;
  } ;
`;

export const InputCity = styled.input`
  background-color: inherit;
  border-radius: 10px;
  border: 1px #0c0431;
  color: var(--inputFontColor);
  font-family: var(--inputFont);
  padding: 0;
`;

export const AddCity = styled.button`
  box-shadow: none;
  background: none;
  background-color: none;
  border-radius: 21px;
  border: none;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  color: var(--addButtonColor);
  font-size: 22px;
  padding: 0px 0px;
  text-decoration: none;
  margin-left: 2%;

  &:hover {
    transition-duration: 1s;
    color: var(--hoverAddButton);
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
