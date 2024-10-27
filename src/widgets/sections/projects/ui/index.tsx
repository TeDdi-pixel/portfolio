import { Element } from "react-scroll";
import { Title } from "../../../../entities/sectionTitle";
import useWidth from "../../../../hooks/useWidth";
import AnimatedDiv from "../../../../shared/animatedDiv";
import { Photo, projects } from "../../../../pages/homePage/config";
import ProjectName from "./ProjectName";
import ProjectUrl from "./ProjectUrl";
import ProjectDescription from "./ProjectDescription";
import { Slider } from "../../../../entities/slider";
import DefaultSection from "../../../../shared/section/DefaultSection";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
type Project = {
  id: number;
  description: string;
  name: string;
  url: string;
  photos: Photo[];
  github: string;
};

export const ProjectsSection = () => {
  const { active } = useWidth(936);

  return (
    <div className="max-w-[1400px] mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] pt-[87.5px] md:pt-[143px]">
      <DefaultSection>
        <Element name="Projects" />
        <Title title="Projects" emoji="😇"/>

        {projects.map((project: Project) => (
          <div
            key={project.id}
            className={`flex justify-between ${
              active ? "flex-col gap-8 mb-[85px] last:mb-0" : "flex-row gap-16 mb-[175px] last:mb-0"
            } lg:gap-22 `}
          >
            <div className="flex flex-col">
              <div className="flex gap-[20px] items-center">
                <ProjectName name={project.name} />
                <ProjectUrl
                  url={project.github}
                  icon={<FaGithub className="w-[25px] h-[25px]" />}
                />
                <ProjectUrl
                  url={project.url}
                  icon={<TbExternalLink className="w-[25px] h-[25px]" />}
                />
              </div>
              <ProjectDescription
                description={project.description}
                active={active}
              />
            </div>
            <AnimatedDiv delay={0.6} y={50} x={0} isBlur>
              <Slider photos={project.photos} />
            </AnimatedDiv>
          </div>
        ))}
      </DefaultSection>
    </div>
  );
};
