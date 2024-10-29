import useWidth from "../../../hooks/useWidth";
import { PopUpNavigation } from "../../popUpNavigation";
import { HeaderNavigation } from "./HeaderNavigation";
import { useHeaderStore } from "../store";
import { BurgerMenu } from "../../burgerMenu";
import PersonalInfo from "./PersonalInfo";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const { active, scrollPosition } = useWidth(632);
  const { burgerMenu } = useHeaderStore((state) => state);

  return (
    <header className="flex justify-between gap-6 items-center max-w-[1400px] w-full mx-auto fixed bp632:relative bp632:pt-[30px] top-0 left-0 bp632:left-auto bp632:top-auto px-[30px] bp500:px-[49.5px] bp632:px-0 z-[200] bg-background bp632:bg-transparent py-[20px] shadow-custom bp632:shadow-none">
      <PersonalInfo />
      <AnimatePresence>
        {scrollPosition >= 63 && !burgerMenu && !active ? (
          <PopUpNavigation />
        ) : null}
      </AnimatePresence>
      <HeaderNavigation />
      <BurgerMenu />
    </header>
  );
};
