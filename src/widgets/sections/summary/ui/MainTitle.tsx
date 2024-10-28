import { m } from "framer-motion";
import { h1Config } from "../config/h1";
import Emoji from "./Emoji";

export const MainTitle = () => {
  return (
    <m.h1
      className="flex gap-3 bp353:gap-7 items-center text-accent text-[80px] sm:text-[100px] mb-[15px] lg:mb-[10px] bp1296:mb-[0px] mt-[125.75px] bp500:mt-[87.5px] md:mt-[125.75px] sm:mb-[15px] font-bold"
      {...h1Config}
    >
      <span>Hello</span>
      <Emoji />
    </m.h1>
  );
};
