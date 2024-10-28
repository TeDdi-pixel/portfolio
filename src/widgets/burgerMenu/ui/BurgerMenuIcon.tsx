import { m } from "framer-motion";
import { burgerConfig } from "../config";
import { useHeaderStore } from "../../header/store";
const BurgerMenuIcon = () => {
  const { burgerMenu, toggleBurgerMenu } = useHeaderStore((state) => state);

  return (
    <m.div
      id="nav-icon2"
      style={{ transform: burgerMenu ? "scale(1)" : "scale(0.75)" }}
      {...burgerConfig}
      className={`bp1050:hidden right-[15px] md:right-[30px] scale-75 sm:scale-100 ${
        burgerMenu ? "open" : ""
      }`}
      onClick={toggleBurgerMenu}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}></span>
      ))}
    </m.div>
  );
};

export default BurgerMenuIcon;
