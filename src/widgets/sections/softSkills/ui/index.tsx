import DefaultSection from "../../../../shared/section/DefaultSection";
import { softSkills } from "../config";
import { useRef, useState } from "react";
import SkillWrapper from "../../../../shared/SkillWrapper";
import useSectionInView from "../../../../hooks/useSectionInView";
import useWidth from "../../../../hooks/useWidth";
import { Reorder } from "framer-motion";

export const SoftSkillsSection = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const handleSectionId = useSectionInView();
  const { active } = useWidth(460);
  const [items, setItems] = useState(softSkills);

  return (
    <div
      ref={handleSectionId}
      id="Soft skills"
      className="w-full h-auto bg-chat animate-scrollBackground3"
    >
      <div className="max-w-[1400px] mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] pt-[87.5px] md:pt-[143px]">
        <DefaultSection title="Soft skills" emoji="⭐">
          {!active ? (
            <div
              ref={constraintsRef}
              className="flex gap-4 md:gap-[20px] items-center justify-center bp1232:justify-start flex-wrap"
            >
              {softSkills.map((skill) => (
                <SkillWrapper
                  ref={constraintsRef}
                  key={skill.id}
                  skillId={skill.id}
                >
                  <span className="text-accent text-[16px] bp461:text-[20px] md:text-[18px] lg:text-[23px] text-center">
                    {skill.name}
                  </span>
                </SkillWrapper>
              ))}
            </div>
          ) : (
            <Reorder.Group
              axis="y"
              values={items}
              onReorder={setItems}
              className="flex gap-4 md:gap-[20px] items-center justify-center bp1232:justify-start flex-wrap"
            >
              {items.map((skill) => ( 
                <Reorder.Item
                  key={skill.id}
                  value={skill}
                  className="cursor-grab bg-texture flex items-center justify-center bp461:justify-start gap-[10px] px-[15px] md:px-[20px] py-[10px] rounded-md w-full bp461:w-auto"
                >
                  <span className="text-accent text-[16px] bp461:text-[20px] md:text-[18px] lg:text-[23px] text-center">
                    {skill.name}
                  </span>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          )}
        </DefaultSection>
      </div>
    </div>
  );
};
