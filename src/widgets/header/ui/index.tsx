import useWidth from "../../../hooks/useWidth";
import { PopUpNavigation } from "../../popUpNavigation";
import { HeaderNavigation } from "./HeaderNavigation";
import { useHeaderStore } from "../store";
import { BurgerMenu } from "../../burgerMenu";
import PersonalInfo from "./PersonalInfo";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PopUpNavigationTrigger } from "../../popUpNavigation/ui/PopUpNavigationTrigger";
import { useEffect } from "react";

export const Header = () => {
  const { active } = useWidth(632);
  const { burgerMenu, setPopUpNav, popUpNav } = useHeaderStore(
    (state) => state
  );
  const { ref, inView } = useInView();

  useEffect(() => {
    setPopUpNav(!inView && !burgerMenu && !active);
  }, [inView, burgerMenu, active, setPopUpNav]);

  return (
    <header className="flex justify-between gap-6 items-center max-w-[1400px] w-full mx-auto fixed bp632:relative bp632:pt-[30px] top-0 left-0 bp632:left-auto bp632:top-auto px-[30px] bp500:px-[49.5px] bp632:px-0 z-[200] bg-background bp632:bg-transparent py-[20px] shadow-custom bp632:shadow-none">
      <PopUpNavigationTrigger ref={ref} />
      <PersonalInfo />
      <AnimatePresence>{popUpNav ? <PopUpNavigation /> : null}</AnimatePresence>
      <HeaderNavigation />
      <BurgerMenu />
    </header>
  );
};
