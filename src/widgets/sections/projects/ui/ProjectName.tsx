import AnimatedDiv from "../../../../shared/animatedDiv";

export const ProjectName = ({ name }: { name: string }) => {
  return (
    <AnimatedDiv
      className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2`}
      delay={0.3}
      x={-50}
      isBlur
    >
      {name}
    </AnimatedDiv>
  );
};

export default ProjectName;
