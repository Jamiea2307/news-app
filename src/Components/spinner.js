import "../Styles/spinner.css";
import { AppContext } from "../App";

export const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
