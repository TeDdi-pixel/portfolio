import AnimatedDiv from "../../../../shared/animatedDiv";

const ProjectUrl = ({ url, active }: { url: string; active: boolean }) => {
  return (
    <AnimatedDiv
      className={`${
        active ? "sm:text-[20px] md:text-[22px]" : ""
      } text-accent text-[16px] md:text-[17px] lg:text-[20px] mb-3`}
      delay={0.6}
      x={-50}
      isBlur
    >
      <a href={url} className="underline">
        {url}
      </a>
    </AnimatedDiv>
  );
};

export default ProjectUrl;
