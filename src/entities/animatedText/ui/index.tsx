import { m } from "framer-motion";
import { defaultAnimation } from "../../../shared/defaultAnimation";

export const AnimatedText = ({ text }: { text: string }) => {
  const lines = text
    .trim()
    .split("\n")
    .map((line) => line.trim());

  return (
    <div className="text-accent-foreground text-[16px] md:text-[18px] xl:text-[23px] max-w-[778px] text-balance">
      {lines.map((line, index) => (
        <m.span
          key={index}
          {...defaultAnimation({ margin: "20px 0px 0px 0px", index })}
        >
          <span dangerouslySetInnerHTML={{ __html: line }} />
        </m.span>
      ))}
    </div>
  );
};
