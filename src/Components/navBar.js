import { NavbarContainer, ListStyle } from "../Styles/navStyles";

import { useContext } from "react";
import { AppContext } from "../App";
import { ReactComponent as Hackernews } from "../Styles/Images/Y_Combinator_logo.svg";
import { ReactComponent as Reddit } from "../Styles/Images/Reddit_Mark_OnWhite.svg";
import { sites } from "../Data/sites";

const NavBar = () => {
  const { dispatch } = useContext(AppContext);

  const changeSiteValue = (currentSite) => {
    dispatch({ type: "UPDATE_SITE", data: currentSite });
  };

  return (
    <NavbarContainer>
      <ListStyle>
        <button onClick={() => changeSiteValue(sites.HackerNews)}>
          <Hackernews />
        </button>
        <button onClick={() => changeSiteValue(sites.Reddit)}>
          <Reddit />
        </button>
      </ListStyle>
    </NavbarContainer>
  );
};

export default NavBar;
