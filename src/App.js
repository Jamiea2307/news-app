import { createContext, useReducer } from "react";
import NewsComponent from "./Components/newsComponent";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Styles/themes";
import { useTheme } from "./Hooks/useTheme";
import NavBar from "./Components/navBar";
import { CheckboxInput } from "./Styles/appStyles";
import { siteNameReducer } from "./Reducers/siteNameReducer";

export const AppContext = createContext();

const initialState = {
  siteSelected: "hackernews",
};

const App = () => {
  const [state, dispatch] = useReducer(siteNameReducer(), initialState);
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === "Light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppContext.Provider value={{ state, dispatch }}>
        <NavBar />
        {/* <CheckboxInput onClick={toggleTheme}>{theme} Theme</CheckboxInput> */}
        <NewsComponent selectedSite={{ state }} />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
