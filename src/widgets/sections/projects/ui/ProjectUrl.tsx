import { ReactNode } from "react";
import { m } from "framer-motion";
import { defaultAnimation } from "../../../../shared/defaultAnimation";
import { useCursor } from "../../../../features/cursorFollower/store";
import { IoChevronForward } from "react-icons/io5";
const ProjectUrl = ({ url, icon }: { url: string; icon: ReactNode }) => {
  const { setCursorType, setDefaultCursor, setCursorText } = useCursor(
    (state) => state
  );
  return (
    <m.div
      id="projectLink"
      onMouseEnter={(e) => {
        setCursorType((e.currentTarget as HTMLDivElement).id);
        setCursorText(<IoChevronForward />);
      }}
      onMouseLeave={() => {
        setDefaultCursor();
        setCursorText("");
      }}
      className="text-accent hover:text-texture transition-colors text-[16px] sm:text-[20px] md:text-[22px]"
      {...defaultAnimation({ margin: "-25px 0px -25px 0px" })}
    >
      <a
        href={url}
        target="_blank"
        className="underline decoration-texture w-[25px] h-[25px]"
      >
        {icon}
      </a>
    </m.div>
  );
};

export default ProjectUrl;
