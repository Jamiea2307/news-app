import { NavbarContainer, ListStyle } from "../Styles/navStyles";

import { useContext } from "react";
import { AppContext } from "../App";
import { ReactComponent as Hackernews } from "../Styles/Images/Y_Combinator_logo.svg";
import { ReactComponent as Reddit } from "../Styles/Images/Reddit_Mark_OnWhite.svg";

const NavBar = () => {
  const { dispatch } = useContext(AppContext);

  const changeInputValue = (newValue) => {
    dispatch({ type: "UPDATE_INPUT", data: newValue });
  };

  return (
    <NavbarContainer>
      {/* <div>
        <select name="site" onChange={(e) => changeInputValue(e)}>
          <option value="hackernews">Hacker News</option>
          <option value="reddit">Reddit</option>
        </select>
      </div> */}
      <ListStyle>
        <button onClick={() => changeInputValue("hackernews")}>
          <Hackernews />
        </button>
        <button onClick={() => changeInputValue("reddit")}>
          <Reddit />
        </button>
      </ListStyle>
    </NavbarContainer>
  );
};

export default NavBar;
