import { m } from "framer-motion";
import { backdropBlurConfig } from "../config/backdropBlur";

export const BackdropBlur = () => {
  return (
    <m.div
      {...backdropBlurConfig}
      className={`fixed inset-0 z-10 bg-black backdrop-blur-sm`}
    ></m.div>
  );
};

