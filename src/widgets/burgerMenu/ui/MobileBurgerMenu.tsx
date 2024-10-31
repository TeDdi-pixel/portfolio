import { backdropBlurConfig } from "../config/backdropBlur";
import { m } from "framer-motion";

export const MbBurgerMenu = () => {
  return (
    <m.div
      {...backdropBlurConfig}
      className={`fixed inset-0 z-10 bg-black backdrop-blur-sm`}
    ></m.div>
  );
};
