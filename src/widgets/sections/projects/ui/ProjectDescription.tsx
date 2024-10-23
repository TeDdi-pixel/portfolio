import AnimatedDiv from "../../../../shared/animatedDiv";

const ProjectDescription = ({
  active,
  description,
}: {
  description: string;
  active: boolean;
}) => {
  return (
    <AnimatedDiv
      delay={0.7}
      x={-50}
      isBlur
      className={`text-accent text-[14px] ${
        active
          ? "sm:text-[20px] md:text-[22px]"
          : "md:text-[18px] sm:max-w-[372px]"
      } lg:text-[20px] break-words flex-shrink-0 lg:min-w-[433px]`}
    >
      {description}
    </AnimatedDiv>
  );
};

export default ProjectDescription;
