import { forwardRef, ReactNode, RefObject } from "react";
import { m } from "framer-motion";
import { stackPhotoWrapperConfig } from "../widgets/sections/hardSkills/config";

type Props = {
  children: ReactNode;
  skillId: number;
};

const SkillWrapper = forwardRef<HTMLDivElement, Props>(
  ({ children, skillId }: Props, ref) => {
    return (
      <m.div
        drag
        dragConstraints={ref as RefObject<HTMLElement>}
        dragElastic={1}
        dragSnapToOrigin={true}
        className="cursor-grab bg-texture flex items-center justify-center bp461:justify-start gap-[10px] px-[15px] md:px-[20px] py-[10px] rounded-md w-full bp461:w-auto"
        id={`photo-${skillId}`}
        {...stackPhotoWrapperConfig}
      >
        {children}
      </m.div>
    );
  }
);

export default SkillWrapper;
