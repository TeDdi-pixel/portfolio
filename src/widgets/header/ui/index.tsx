import useWidth from "../../../hooks/useWidth";
import AnimatedDiv from "../../../shared/animatedDiv";
import { PopUpNavigation } from "../../popUpNavigation";
import { HeaderNavigation } from "./HeaderNavigation";
import { useHeaderStore } from "../store";
import { BurgerMenu } from "../../burgerMenu";

export const Header = () => {
  const { active, scrollPosition } = useWidth(500);
  const { burgerMenu } = useHeaderStore((state) => state);
  return (
    <header
      className={`${
        active
          ? "fixed top-0 left-0 px-[15px] z-[200] bg-background py-[20px] shadow-custom"
          : "relative pt-[30px]"
      } flex justify-between gap-6 items-center`}
    >
      <AnimatedDiv
        isBlur
        duration={0.5}
        className="flex items-center flex-wrap justify-start gap-2.5"
      >
        <span className="block w-7 h-7 bg-texture rounded-full"></span>
        <div className="font-bold text-[22px] text-accent inline-block">
          Vladislav Valiuha
        </div>
        <div
          className={`text-[16px] text-accent inline-block ${
            active ? "pl-[34.5px]" : "pl-0"
          }`}
        >
          Front-end developer
        </div>
      </AnimatedDiv>
      <HeaderNavigation />
      <BurgerMenu />
      {scrollPosition >= 63 && !burgerMenu && !active ? (
        <PopUpNavigation />
      ) : null}
    </header>
  );
};
