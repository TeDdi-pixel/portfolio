import { Element } from "react-scroll";
import { Title } from "../../../../entities/sectionTitle";
import { Photo, projects } from "../../../../pages/homePage/config";
import ProjectName from "./ProjectName";
import ProjectUrl from "./ProjectUrl";
import ProjectDescription from "./ProjectDescription";
import { Slider } from "../../../../entities/slider";
import DefaultSection from "../../../../shared/section/DefaultSection";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";
import { sliderConfig } from "../config/slider";

type Project = {
  id: number;
  description: string;
  name: string;
  url: string;
  photos: Photo[];
  github: string;
};

export const ProjectsSection = () => {
  return (
    <div className="bg-gradient-blue rounded-3xl">
      <div className="max-w-[1400px] mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] pt-[87.5px] md:pt-[143px]">
        <DefaultSection>
          <Element name="Projects" />
          <Title title="Projects" emoji="😇" />

          {projects.map((project: Project) => (
            <div
              key={project.id}
              className={`flex justify-between flex-col bp936:flex-row gap-8 bp936:gap-16 lg:gap-22 mb-[85px] bp936:mb-[90px] last:mb-0`}
            >
              <div className="flex flex-col">
                <div className="flex gap-[20px] items-center mb-4">
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
                <ProjectDescription description={project.description} />
              </div>

              <motion.div {...sliderConfig}>
                <Slider photos={project.photos} />
              </motion.div>
            </div>
          ))}
        </DefaultSection>
      </div>
    </div>
  );
};
