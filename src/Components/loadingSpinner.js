import "../Styles/spinner.css";
import { SpinnerContainer } from "../Styles/spinner";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerContainer>
  );
};
