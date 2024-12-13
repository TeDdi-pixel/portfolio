import { CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

const override: CSSProperties = {
  display: "block",
  position: "absolute",
  left: "50%",
  transform: "translate(-50%,-50%)",
  top: "50%",
};
const NavigationSpinner = () => {
  return (
    <BarLoader
      color={"#FFC807"}
      loading={true}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default NavigationSpinner;
