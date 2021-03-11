import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F5F3E7",
  fontColor: "#000",
  borderColor: "#000",
  themeButton: "#152028",
  themeButtonFont: "#fff",
  linkColor: "#0000EE",
  linkVisited: "#551A8B",
  spinnerColor: "#152028",
  navBar: "#555555",
  navBarSiteSelected: "#cdc9c3",
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
  navBar: "#1d1f1e",
  navBarSiteSelected: "#3d566e",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
	}
`;
