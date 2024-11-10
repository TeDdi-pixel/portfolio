import { ReactNode } from "react";
import { m } from "framer-motion";
import { defaultAnimation } from "./defaultAnimation";

type Props = {
  children: ReactNode;
  skillId: number;
};
const SkillWrapper = ({ children, skillId }: Props) => {
  return (
    <m.div
      className="bg-texture flex items-center gap-[10px] px-[15px] md:px-[20px] py-[10px] rounded-md w-full bp461:w-auto justify-center bp461:justify-start"
      id={`photo-${skillId}`}
      {...defaultAnimation({direction: 20,margin: "20px 0px 0px 20px"})}
    >
      {children}
    </m.div>
  );
};
export default SkillWrapper;
