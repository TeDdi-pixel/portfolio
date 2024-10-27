import AnimatedText from "../../resume/AnimatedText";

const ProjectDescription = ({ description }: { description: string }) => {
  return <AnimatedText text={description} />;
};

export default ProjectDescription;
