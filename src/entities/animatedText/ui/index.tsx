import { m } from "framer-motion";
import { defaultAnimation } from "../../../shared/defaultAnimation";
import { useCursor } from "../../../features/cursorFollower/store";

export const AnimatedText = ({ text }: { text: string }) => {
  const { setDefaultCursor, setCursorType } = useCursor((state) => state);

  const lines = text
    .trim()
    .split("\n")
    .map((line) => line.trim());

  return (
    <div
      className="text-accent-foreground text-[16px] md:text-[18px] xl:text-[23px] max-w-[778px] text-balance"
      id="text"
      onMouseEnter={(e) => setCursorType((e.target as HTMLDivElement).id)}
      onMouseLeave={setDefaultCursor}
    >
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
