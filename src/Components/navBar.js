import { NavbarContainer, ListStyle } from "../Styles/navStyles";

import { useContext } from "react";
import { AppContext } from "../App";
import { ReactComponent as Hackernews } from "../Styles/Images/Y_Combinator_logo.svg";
import { ReactComponent as Reddit } from "../Styles/Images/Reddit_logo_full_1SVG.svg";

const NavBar = () => {
  const { dispatch } = useContext(AppContext);

  const changeInputValue = (newValue) => {
    dispatch({ type: "UPDATE_INPUT", data: newValue.target.value });
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
        <Hackernews />
        <Reddit />
      </ListStyle>
    </NavbarContainer>
  );
};

export default NavBar;
