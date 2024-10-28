import { AnimatedText } from "../../../../entities/animatedText";

const ProjectDescription = ({ description }: { description: string }) => {
  return <AnimatedText text={description} />;
};

export default ProjectDescription;
