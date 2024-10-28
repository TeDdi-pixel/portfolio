import { m } from "framer-motion";
import { projectNameConfig } from "../config/projectName";
export const ProjectName = ({ name }: { name: string }) => {
  return (
    <m.div
      className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px]`}
      {...projectNameConfig}
    >
      {name}
    </m.div>
  );
};

export default ProjectName;
