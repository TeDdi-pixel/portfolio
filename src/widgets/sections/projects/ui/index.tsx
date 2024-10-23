import { Element } from "react-scroll";
import Section from "../../../../shared/section";
import { Title } from "../../../../entities/sectionTitle";
import useWidth from "../../../../hooks/useWidth";
import AnimatedDiv from "../../../../shared/animatedDiv";
import { Slider } from "../../../../entities/swiper";
import { Photo, projects } from "../../../../pages/homePage/config";
import ProjectName from "./ProjectName";
import ProjectUrl from "./ProjectUrl";
import ProjectDescription from "./ProjectDescription";

type Project = {
  id: number;
  description: string;
  name: string;
  url: string;
  photos: Photo[];
};

export const ProjectsSection = () => {
  const { active } = useWidth(936);

  return (
    <Section>
      <Element name="Projects" />
      <Title title="Projects" />

      {projects.map((project: Project) => (
        <div
          key={project.id}
          className={`flex justify-between ${
            active ? "flex-col gap-8 mb-[85px]" : "flex-row gap-16 mb-[175px]"
          }  lg:gap-22 `}
        >
          <div className="flex flex-col">
            <ProjectName name={project.name} />
            <ProjectUrl url={project.url} active={active} />
            <ProjectDescription
              description={project.description}
              active={active}
            />
          </div>
          <AnimatedDiv delay={0.8} y={50} x={0} isBlur>
            <Slider photos={project.photos} />
          </AnimatedDiv>
        </div>
      ))}
    </Section>
  );
};
