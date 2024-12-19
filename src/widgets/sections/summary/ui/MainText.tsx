import { useCursor } from "../../../../features/cursorFollower/store";
import { defaultAnimation } from "../../../../shared/defaultAnimation";
import { m } from "framer-motion";
export const MainText = () => {
  const { setDefaultCursor, setCursorType } = useCursor((state) => state);
  return (
    <m.div
      {...defaultAnimation({ margin: "20px 0px 0px 0px" })}
      className="flex flex-col text-accent-foreground text-[16px] md:text-[18px] xl:text-[23px] max-w-[778px] text-balance"
    >
      <div
        id="text"
        onMouseEnter={(e) => setCursorType((e.target as HTMLDivElement).id)}
        onMouseLeave={setDefaultCursor}
      >
        I am a web developer with considerable experience in building engaging
        and responsive front-end solutions. My expertise spans key aspects of
        modern front-end development, including working with cutting-edge
        frameworks and libraries. With{" "}
        <span
          className="text-texture font-bold"
          id="textImportant"
          onMouseEnter={(e) => setCursorType((e.target as HTMLSpanElement).id)}
          onMouseLeave={setDefaultCursor}
        >
          one year of commercial experience
        </span>
        , I have honed my skills in delivering high-quality projects in a
        professional environment. For me, web development is not just a job —
        it’s a passion that drives me to continuously learn and improve. I
        strive to create solutions that not only meet business goals but also
        enhance user experience and deliver real value.
      </div>
    </m.div>
  );
};
