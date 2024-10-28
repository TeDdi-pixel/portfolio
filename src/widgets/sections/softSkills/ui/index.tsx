import DefaultSection from "../../../../shared/section/DefaultSection";
import { Element } from "react-scroll";
import { Title } from "../../../../entities/sectionTitle";
import { softSkills } from "../config";
import SkillWrapper from "./SkillWrapper";

export const SoftSkillsSection = () => {
  return (
    <div className="w-full h-auto bg-chat animate-scrollBackground3">
      <div className="max-w-[1400px] mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] pt-[87.5px] md:pt-[143px]">
        <DefaultSection>
          <Element name="Soft skills" />
          <Title title="Soft skills" emoji="⭐" />

          <div className="flex gap-4 md:gap-[20px] items-center justify-center bp1232:justify-start flex-wrap">
            {softSkills.map((skill) => (
              <SkillWrapper key={skill.id} skillId={skill.id}>
                <span className="text-accent text-[16px] bp461:text-[20px] md:text-[18px] lg:text-[23px] text-center">
                  {skill.name}
                </span>
              </SkillWrapper>
            ))}
          </div>
        </DefaultSection>
      </div>
    </div>
  );
};
