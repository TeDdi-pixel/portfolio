import { motion } from "framer-motion";
import { projectNameConfig } from "../config/projectName";
export const ProjectName = ({ name }: { name: string }) => {
  return (
    <motion.div
      className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2`}
      {...projectNameConfig}
    >
      {name}
    </motion.div>
  );
};

export default ProjectName;
