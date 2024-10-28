import { educationTitleConfig } from "../config/title";
import { m } from "framer-motion";

const EducationTitle = () => {
  return (
    <m.div
      className="text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2"
      {...educationTitleConfig}
    >
      Software engineering
    </m.div>
  );
};

export default EducationTitle;
