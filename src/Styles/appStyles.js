import styled from "styled-components";

export const CheckboxInput = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.themeButton};
  color: ${(props) => props.theme.themeButtonFont};
`;
