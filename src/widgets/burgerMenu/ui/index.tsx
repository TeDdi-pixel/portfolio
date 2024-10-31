import { useHeaderStore } from "../../header/store";
import { AnimatePresence } from "framer-motion";
import { BackgroundCircle } from "./BackgroundCircle";
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
            <BackgroundCircle />
            <LinksList />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
