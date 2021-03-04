import { createContext, useReducer } from "react";
import { useTheme } from "./Hooks/useTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostsContainer from "./Components/postsContainer.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Styles/themes";
import NavBar from "./Components/navBar";
import { CheckboxInput } from "./Styles/appStyles";
import { siteNameReducer } from "./Reducers/siteNameReducer";
import { sites } from "./Data/sites";
import { CommentsContainer } from "./Components/commentsContainer";

export const AppContext = createContext();

const initialState = {
  siteSelected: sites.HackerNews,
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
        <Router>
          <Switch>
            <Route path="/" exact>
              <PostsContainer selectedSite={{ state }} />
            </Route>
            <Route path="/comments/:id" component={CommentsContainer} />
          </Switch>
        </Router>
        {/* <CheckboxInput onClick={toggleTheme}>{theme} Theme</CheckboxInput> */}
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
