import { m } from "framer-motion";
import { animatedTextConfig } from "../config/animatedText";

export const AnimatedText = ({ text }: { text: string }) => {
  const lines = text
    .trim()
    .split("\n")
    .map((line) => line.trim());

  return (
    <div className="text-accent-foreground text-[16px] md:text-[18px] xl:text-[23px] max-w-[778px] text-balance">
      {lines.map((line, index) => (
        <m.span key={index} {...animatedTextConfig(index)}>
          {line}{" "}
        </m.span>
      ))}
    </div>
  );
};

