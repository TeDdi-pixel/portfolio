import { m } from "framer-motion";
import { burgerBGAnimation } from "../config/burgerBGAnimation";

export const BurgerMenuBG = () => {

  return (
    <m.div
      {...burgerBGAnimation()}
      className="fixed top-1/2 left-1/2 z-10 bg-accent w-[100px] h-[100px] right-[25px] md:right-[21px] rounded-full blur-[1px]"
    ></m.div>
  );
};
