import { motion } from "framer-motion";
import { TypeEmoji } from "../config/emoji";
import useWidth from "../../../hooks/useWidth";
import AnimatedEmoji from "./AnimatedEmoji";
import { titleWrapperConfig } from "../config/titleWrapper";
type Props = {
  title: string;
  className?: string;
  emoji: TypeEmoji;
};

export const Title = ({ title, className, emoji }: Props) => {
  const { active } = useWidth(767);
  return (
    <motion.div
      className={`font-bold flex items-center gap-5 text-[30px] sm:text-[40px] md:text-[50px] text-accent mb-[25px] sm:mb-[35px] lg:mb-[55px] 
        ${className}
      `}
      {...titleWrapperConfig(active)}
    >
      {title}
      <AnimatedEmoji emoji={emoji} active={active} />
    </motion.div>
  );
};
