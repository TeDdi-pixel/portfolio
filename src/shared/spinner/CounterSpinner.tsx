import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  marginLeft: "8px",
};

const CounterSpinner = () => {
  return (
    <ClipLoader
      color={"#FFC807"}
      loading={true}
      size={30}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default CounterSpinner;
