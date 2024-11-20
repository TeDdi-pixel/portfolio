import { useHeaderStore } from "../../header/store";
import { AnimatePresence } from "framer-motion";
import BurgerMenuIcon from "./BurgerMenuIcon";
import LinksList from "./LinksList";
import { BurgerMenuBG } from "./BurgerMenuBG";

export const BurgerMenu = () => {
  const { burgerMenu } = useHeaderStore((state) => state);
  return (
    <>
      <BurgerMenuIcon />
      <AnimatePresence mode="wait">
        {burgerMenu && (
          <>
            <BurgerMenuBG />
            <LinksList />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
