import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsComponent from "./Components/newsComponent";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Styles/themes";
import { CheckboxInput } from "./Styles/appStyles";
import { useTheme } from "./Hooks/useTheme";
import NavBar from "./Components/navBar";

const App = () => {
  const [currentSite, setCurrentSite] = useState("");
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === "Light" ? lightTheme : darkTheme;

  const dropDownChange = (e) => {
    setCurrentSite(e.target.value);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <NavBar />
      <select
        name="site"
        value={currentSite}
        onChange={(e) => dropDownChange(e)}
      >
        <option selected></option>
        <option value="hackernews">Hacker News</option>
        <option value="reddit">Reddit</option>
      </select>
      {/* <CheckboxInput onClick={toggleTheme}>{theme} Theme</CheckboxInput> */}
      <NewsComponent selectedSite={currentSite} />
    </ThemeProvider>
  );
  // (
  //   <Router>
  //     <Switch>
  //       <Route path="/" />
  //     </Switch>
  //   </Router>
  // );
};

export default App;
