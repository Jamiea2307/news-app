// import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsComponent from "./Components/newsComponent";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Styles/themes";
import { CheckboxInput } from "./Styles/appStyles";
import { useTheme } from "./Hooks/useTheme";

const App = () => {
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === "Light" ? lightTheme : darkTheme;

  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <CheckboxInput onClick={toggleTheme}>{theme} Theme</CheckboxInput>
        <NewsComponent />
      </ThemeProvider>
    </div>
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
