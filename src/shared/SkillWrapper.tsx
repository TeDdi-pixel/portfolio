import { ReactNode } from "react";
import { m } from "framer-motion";
import { stackPhotoWrapperConfig } from "../widgets/sections/hardSkills/config";

type Props = {
  children: ReactNode;
  skillId: number;
};
const SkillWrapper = ({ children, skillId }: Props) => {
  const handleDelay = (skillId: number): number => {
    if (skillId === 0) return 0.05;
    if (skillId === 1) return 0.06;
    return skillId * 0.03;
  };
  return (
    <m.div
      className="bg-texture flex items-center gap-[10px] px-[15px] md:px-[20px] py-[10px] rounded-md w-full bp461:w-auto justify-center bp461:justify-start"
      id={`photo-${skillId}`}
      {...stackPhotoWrapperConfig(handleDelay(skillId))}
    >
      {children}
    </m.div>
  );
};
export default SkillWrapper;
