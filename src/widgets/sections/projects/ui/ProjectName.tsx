import { m } from "framer-motion";
import { defaultAnimation } from "../../../../shared/defaultAnimation";
export const ProjectName = ({ name }: { name: string }) => {
  return (
    <m.div
      className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px]`}
      {...defaultAnimation({ margin: "-35px 0px -35px 0px" })}
    >
      {name}
    </m.div>
  );
};

export default ProjectName;
