import { m } from "framer-motion";
import { h1Config } from "../config/h1";
import Emoji from "./Emoji";

export const MainTitle = () => {
  return (
    <m.h1
      className="flex gap-3 pl-[5px] bp632:pl-0 ml-0 bp1373:ml-[7px] bp1480:ml-[22px] bp353:gap-7 w-full items-center justify-start text-accent text-[60px] bp580:text-[80px] bp710:text-[100px] mt-[125.75px] bp523:mt-[87.5px] md:mt-[35.75px] font-bold"
      {...h1Config}
    >
      Welcome
      <Emoji />
    </m.h1>
  );
};
