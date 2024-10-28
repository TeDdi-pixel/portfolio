import { useHeaderStore } from "../../header/store";
import { AnimatePresence } from "framer-motion";
import { BackdropBlur } from "./BackdropBlur";
import BurgerMenuIcon from "./BurgerMenuIcon";
import LinksList from "./LinksList";

export const BurgerMenu = () => {
  const { burgerMenu } = useHeaderStore((state) => state);

  return (
    <>
      <BurgerMenuIcon />
      <AnimatePresence mode="wait">
        {burgerMenu && (
          <>
            <BackdropBlur />
            <LinksList />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
