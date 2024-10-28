import { ReactNode } from "react";
import { m } from "framer-motion";
import { stackPhotoWrapperConfig } from "../config";
import useWidth from "../../../../hooks/useWidth";

type Props = {
  children: ReactNode;
  photoId: number;
};

const SkillWrapper = ({ children, photoId }: Props) => {
  const { active } = useWidth(461);

  const handleDelay = (photoId: number): { delay: number; active: boolean } => {
    if (photoId === 0) return { delay: 0.05, active };
    if (photoId === 1) return { delay: 0.06, active };
    return { delay: photoId * 0.03, active };
  };

  return (
    <m.div
      className="bg-texture flex items-center gap-[10px] px-[15px] md:px-[20px] py-[10px] rounded-md w-full bp461:w-auto justify-center bp461:justify-start"
      id={`photo-${photoId}`}
      {...stackPhotoWrapperConfig(handleDelay(photoId))}
    >
      {children}
    </m.div>
  );
};

export default SkillWrapper;
