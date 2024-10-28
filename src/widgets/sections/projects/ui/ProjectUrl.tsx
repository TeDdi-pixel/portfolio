import { ReactNode } from "react";
import { m } from "framer-motion";
import { projectUrlConfig } from "../config/projectUrl";

const ProjectUrl = ({ url, icon }: { url: string; icon: ReactNode }) => {
  return (
    <m.div
      className="text-accent hover:text-texture transition-colors text-[16px] sm:text-[20px] md:text-[22px]"
      {...projectUrlConfig}
    >
      <a
        href={url}
        target="_blank"
        className="underline decoration-texture w-[25px] h-[25px]"
      >
        {icon}
      </a>
    </m.div>
  );
};

export default ProjectUrl;
