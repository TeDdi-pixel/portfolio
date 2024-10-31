import { ReactNode } from "react";
import { Reorder } from "framer-motion";
import { stackPhotoWrapperConfig } from "../widgets/sections/hardSkills/config";

type TypeItem = {
  id: number;
  alt: string;
  path: string;
  tooltip: string;
};

type Props = { children: ReactNode; skillId: number; item: TypeItem };

const ReorderSkillsWrapper = ({ children, skillId, item }: Props) => {
  return (
    <Reorder.Item
      value={item}
      className="cursor-grab bg-texture flex items-center gap-[10px] px-[15px] md:px-[20px] py-[10px] rounded-md w-full bp461:w-auto justify-center bp461:justify-start"
      id={`photo-${skillId}`}
      {...stackPhotoWrapperConfig}
    >
      {children}
    </Reorder.Item>
  );
};

export default ReorderSkillsWrapper;
