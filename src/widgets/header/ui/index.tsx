import useWidth from "../../../hooks/useWidth";
import { PopUpNavigation } from "../../popUpNavigation";
import { HeaderNavigation } from "./HeaderNavigation";
import { useHeaderStore } from "../store";
import { BurgerMenu } from "../../burgerMenu";
import PersonalInfo from "./PersonalInfo";

export const Header = () => {
  const { active, scrollPosition } = useWidth(632);
  const { burgerMenu } = useHeaderStore((state) => state);

  return (
    <header
      className={`flex justify-between gap-6 items-center max-w-[1400px] w-full ${
        active
          ? "fixed top-0 left-0 px-[15px] z-[200] bg-background py-[20px] shadow-custom"
          : "relative pt-[30px]"
      }`}
    >
      <PersonalInfo />
      <HeaderNavigation />
      <BurgerMenu />
      {scrollPosition >= 63 && !burgerMenu && !active ? (
        <PopUpNavigation />
      ) : null}
    </header>
  );
};
