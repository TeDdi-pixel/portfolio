import { motion } from "framer-motion";
import { animatedTextConfig } from "./config/animatedText";

const AnimatedText = ({ text }: { text: string }) => {
  const lines = text
    .trim()
    .split("\n")
    .map((line) => line.trim());

  return (
    <motion.div className="text-accent text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words">
      {lines.map((line, index) => (
        <motion.span key={index} {...animatedTextConfig(index)}>
          {line}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
