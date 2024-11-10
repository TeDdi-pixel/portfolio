import { m } from "framer-motion";
import { TypeEmoji } from "../config/emoji";
import useWidth from "../../../hooks/useWidth";
import AnimatedEmoji from "./AnimatedEmoji";
import { defaultAnimation } from "../../../shared/defaultAnimation";
type Props = {
  title: string;
  className?: string;
  emoji: TypeEmoji;
};

export const Title = ({ title, emoji }: Props) => {
  const { active } = useWidth(767);
  return (
    <m.h2
      className="min-h-[50px] sm:min-h-[75px] h-full font-bold flex items-center gap-5 text-[30px] sm:text-[40px] md:text-[50px] text-accent mb-[20px] sm:mb-[35px] lg:mb-[55px]"
      {...defaultAnimation({
        margin: active ? "-30px 0px 0px 0px" : "-15px 0px 0px 0px",
        direction: -15,
      })}
    >
      {title}
      <AnimatedEmoji emoji={emoji} width={!active ? 75 : 50} />
    </m.h2>
  );
};
