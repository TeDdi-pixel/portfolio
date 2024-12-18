import { useCursor } from "../../../../features/cursorFollower/store";
import { defaultAnimation } from "../../../../shared/defaultAnimation";
import { m } from "framer-motion";
export const MainText = () => {
  const { setDefaultCursor, setCursorType } = useCursor((state) => state);
  const lines =
    "I am a web developer with considerable experience in building engaging and responsive front-end solutions. My expertise spans key aspects of modern front-end development, including working with cutting-edge frameworks and libraries. With <b>one year of commercial experience</b>, I have honed my skills in delivering high-quality projects in a professional environment. For me, web development is not just a job — it’s a passion that drives me to continuously learn and improve. I strive to create solutions that not only meet business goals but also enhance user experience and deliver real value."
      .trim()
      .split("\n")
      .map((line) => line.trim());

  return (
    <div className="text-accent-foreground text-[16px] md:text-[18px] xl:text-[23px] max-w-[778px] text-balance">
      {lines.map((line, index) => (
        <m.div
          key={index}
          id="text"
          onMouseEnter={(e) => setCursorType((e.target as HTMLDivElement).id)}
          onMouseLeave={setDefaultCursor}
          {...defaultAnimation({ margin: "20px 0px 0px 0px", index })}
        >
          <span dangerouslySetInnerHTML={{ __html: line }} />
        </m.div>
      ))}
    </div>
  );
};
