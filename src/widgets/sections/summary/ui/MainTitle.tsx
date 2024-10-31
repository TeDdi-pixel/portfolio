import { m } from "framer-motion";
import { h1Config } from "../config/h1";
import AnimatedEmoji from "../../../../entities/sectionTitle/ui/AnimatedEmoji";
import useWidth from "../../../../hooks/useWidth";

export const MainTitle = () => {
  const { active } = useWidth(579);
  return (
    <m.h1
      className={`text-left w-full  flex items-center text-accent text-[45px] bp580:text-[80px] bp1138:text-[100px] mt-[125.75px] bp523:mt-[87.5px] md:mt-[35.75px] font-bold h-full min-h-[150px]`}
      {...h1Config}
    >
      Welcome
      <AnimatedEmoji emoji="✨" width={!active ? 150 : 100} />
    </m.h1>
  );
};
