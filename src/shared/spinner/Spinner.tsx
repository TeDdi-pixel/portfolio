import GridLoader from "react-spinners/GridLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  left: "50%",
  transform: "translate(-50%,-50%)",
  top: "50%",
};

const Spinner = () => {
  return (
    <GridLoader
      color={"#FFC807"}
      loading={true}
      size={15}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
