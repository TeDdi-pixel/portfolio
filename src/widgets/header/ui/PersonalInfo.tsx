import { m } from "framer-motion";
import { personalInfoConfig } from "../config/personalInfo";

const PersonalInfo = () => {
  return (
    <m.div
      {...personalInfoConfig}
      className="flex items-center flex-wrap justify-start gap-2.5"
    >
      <span className="hidden bp632:block w-7 h-5 bg-texture rounded-full animate-spin-slow relative"></span>
      <div className="font-bold text-[22px] text-accent inline-block">
        Valuga Vladislav
      </div>
      <div className="text-[16px] inline-block text-accent-foreground">
        Front-end developer
      </div>
    </m.div>
  );
};

export default PersonalInfo;
