import { defaultAnimation } from "../../../../shared/defaultAnimation";
import { m } from "framer-motion";

const EducationTitle = () => {
  return (
    <m.div
      className="text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2"
      {...defaultAnimation({ margin: "-35px 0px -35px 0px" })}
    >
      Software engineering
    </m.div>
  );
};

export default EducationTitle;
