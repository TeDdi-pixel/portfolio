import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactEmojis from "@souhaildev/reactemojis";
import { TypeEmoji } from "../config/emoji";
import useWidth from "../../../hooks/useWidth";
// import useScrollAnimation from "../../../hooks/useScrollAnimation";

type Props = {
  title: string;
  className?: string;
  emoji: TypeEmoji 
    
};

export const Title = ({ title, className, emoji }: Props) => {
  const {active} = useWidth(767)
  const [firstAnimation, setFirstAnimation] = useState<boolean>(true);
  useEffect(() => {
    if (firstAnimation) {
      setTimeout(() => {
        setFirstAnimation(false);
      }, 1100);
    }
  });
  return (
    // ${
    //   mb ?? "mb-[25px] sm:mb-[35px] lg:mb-[55px]"
    // }

    <motion.div
      className={`font-bold flex items-center gap-5 text-[30px] sm:text-[40px] md:text-[50px] text-accent mb-[25px] sm:mb-[35px] lg:mb-[55px] 
        ${className}
      `}
      viewport={{ margin: active?"-30px 0px -100px 0px":"-15px 0px -50px 0px", amount: 0.5 }}
      initial={{
        opacity: 0,
        x: -30,
        filter: "blur(10px)",
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        x: 0,
        transition: {
          duration: firstAnimation ? 0.8 : 0.3,
          delay: firstAnimation ? 0.4 : 0,
        },
      }}
    >
      {title}

      <ReactEmojis
        emoji={emoji}
        emojiStyle="2"
        className="w-[50px] h-[50px]"
        style={{ width: "75px", height: "75px" }}
      />
    </motion.div>
  );
};
