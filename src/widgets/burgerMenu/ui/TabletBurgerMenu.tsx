import { m } from "framer-motion";
import { useHeaderStore } from "../../header/store";
import useWidth from "../../../hooks/useWidth";
import { pcBurgerAnimation } from "../config/pcBurgerAnimation";

export const TabletBurgerMenu = () => {
  const { burgerMenu, burgerLinkTaped, popUpNav } = useHeaderStore(
    (state) => state
  );
  const { active } = useWidth(632);

  return (
    <m.div
      {...pcBurgerAnimation(burgerMenu, burgerLinkTaped, popUpNav, active)}
      className="fixed z-10 bg-accent w-[51px] h-[51px] md:w-[60px] md:h-[60px] right-[25px] md:right-[21px] rounded-[20px]"
    ></m.div>
  );
};
