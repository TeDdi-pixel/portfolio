import { motion } from "framer-motion";
import { personalInfoConfig } from "../config/personalInfo";
import useWidth from "../../../hooks/useWidth";

const PersonalInfo = () => {
  const { active } = useWidth(494);

  return (
    <motion.div
      {...personalInfoConfig}
      className="flex items-center flex-wrap justify-start gap-2.5"
    >
      <span className="block w-7 h-5 bg-texture rounded-full animate-spin-slow relative"></span>

      <div className="font-bold text-[22px] text-accent inline-block">
        Vladislav Valiuha
      </div>

      <div
        className={`text-[16px] text-accent inline-block ${
          active ? "pl-[34.5px]" : "pl-0"
        }`}
      >
        Front-end developer
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
