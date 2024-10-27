import { ReactNode } from "react";
import AnimatedDiv from "../../../../shared/animatedDiv";
import useWidth from "../../../../hooks/useWidth";

const ProjectUrl = ({ url, icon }: { url: string; icon: ReactNode }) => {
  const { active } = useWidth(936);
  return (
    <AnimatedDiv
      className={`${
        active ? "sm:text-[20px] md:text-[22px]" : ""
      } text-accent text-[16px] md:text-[17px] lg:text-[20px]`}
      delay={0.4}
      x={-50}
      isBlur
    >
      <a
        href={url}
        target="_blank"
        className="underline decoration-texture w-[25px] h-[25px]"
      >
        {icon}
      </a>
    </AnimatedDiv>
  );
};

export default ProjectUrl;
