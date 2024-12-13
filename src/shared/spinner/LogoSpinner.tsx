import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
};

const LogoSpinner = () => {
  return (
    <ClipLoader
      color={"#FFC807"}
      loading={true}
      size={50}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LogoSpinner;
