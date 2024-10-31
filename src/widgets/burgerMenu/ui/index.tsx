import { useHeaderStore } from "../../header/store";
import { AnimatePresence } from "framer-motion";
import { TabletBurgerMenu } from "./TabletBurgerMenu";
import BurgerMenuIcon from "./BurgerMenuIcon";
import LinksList from "./LinksList";
import useWidth from "../../../hooks/useWidth";
import { MbBurgerMenu } from "./MobileBurgerMenu";

export const BurgerMenu = () => {
  const { burgerMenu } = useHeaderStore((state) => state);
  const { active } = useWidth(425);
  return (
    <>
      <BurgerMenuIcon />
      <AnimatePresence mode="wait">
        {burgerMenu && (
          <>
            {active ? <MbBurgerMenu /> : <TabletBurgerMenu />}
            <LinksList />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
