import { ReactNode } from "react";
import { m } from "framer-motion";
import { defaultAnimation } from "../../../../shared/defaultAnimation";
import { useCursor } from "../../../../features/cursorFollower/store";

const ProjectUrl = ({
  url,
  icon,
  id,
}: {
  url: string;
  icon: ReactNode;
  id: string;
}) => {
  const { setCursorType, setDefaultCursor, setCursorText } = useCursor(
    (state) => state
  );
  return (
    <m.div
      id={id}
      onMouseEnter={(e) => {
        setCursorType((e.currentTarget as HTMLDivElement).id);
        setCursorText(
          id === "projectGitHub" ? (
            <div className="flex gap-4 items-center">
              Open in <span className="scale-[1.5]">{icon}</span>
            </div>
          ) : (
            "Open project"
          )
        );
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
