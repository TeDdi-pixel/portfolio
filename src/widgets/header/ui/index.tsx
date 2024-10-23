import { useState } from "react";
import useWidth from "../../../hooks/useWidth";
import AnimatedDiv from "../../../shared/animatedDiv";
import { PopUpNavigation } from "../../popUpNavigation";
import { HeaderNavigation } from "./HeaderNavigation";
import { links } from "../config";
// import { BurgerMenu } from "../../burgerMenu";
// type Props = {
//   open: boolean;
//   setOpen: (status: boolean) => void;
// };

export const Header = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(
    links[0].text
  );

  const { active, scrollPosition } = useWidth(876);
  const { active: active2 } = useWidth(500);
  return (
    <header
      className={`flex justify-between pt-[30px] mb-[87.5px] md:mb-[143.5px] gap-8`}
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
            active2 ? "pl-[34.5px]" : "pl-0"
          }`}
        >
          Front-end developer
        </div>
      </AnimatedDiv>
      {!active ? (
        <HeaderNavigation setSelectedLink={setSelectedLink} />
      ) : null
      // <BurgerMenu open={open} setOpen={setOpen} />
      }
      {scrollPosition >= 63 ? (
        <PopUpNavigation
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
      ) : null}
    </header>
  );
};
