import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF8F0",
  fontColor: "#000",
  borderColor: "#000",
  themeButton: "#152028",
  themeButtonFont: "#fff",
  linkColor: "#0000EE",
  linkVisited: "#551A8B",
  spinnerColor: "#152028",
};

export const darkTheme = {
  body: "#152028",
  fontColor: "#fff",
  borderColor: "#fff",
  themeButton: "#FFF8F0",
  themeButtonFont: "#000",
  linkColor: "#fff",
  linkVisited: "#A6A6A6",
  spinnerColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
	}
`;
