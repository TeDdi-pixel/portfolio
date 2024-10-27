import { ReactNode } from "react";
import useWidth from "../../../../hooks/useWidth";
import { motion } from "framer-motion";
import { projectUrlConfig } from "../config/projectUrl";

const ProjectUrl = ({ url, icon }: { url: string; icon: ReactNode }) => {
  const { active } = useWidth(936);
  return (
    <motion.div
      className={`${
        active ? "sm:text-[20px] md:text-[22px]" : ""
      } text-accent text-[16px] md:text-[17px] lg:text-[20px]`}
      {...projectUrlConfig}
    >
      <a
        href={url}
        target="_blank"
        className="underline decoration-texture w-[25px] h-[25px]"
      >
        {icon}
      </a>
    </motion.div>
  );
};

export default ProjectUrl;
