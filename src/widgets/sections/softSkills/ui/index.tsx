import DefaultSection from "../../../../shared/section/DefaultSection";
import { Element } from "react-scroll";
import { Title } from "../../../../entities/sectionTitle";
import { softSkills } from "../config";
import { motion } from "framer-motion";
import { stackPhotoWrapperConfig } from "../../hardSkills/config";
import useWidth from "../../../../hooks/useWidth";
import useFirstAnimation from "../../../../hooks/useFirstAnimation";

export const SoftSkillsSection = () => {
  const { active } = useWidth(461);
  const { active: active2 } = useWidth(1232);

  const firstAnimation = useFirstAnimation();
  const handleDelay = (photoId: number): { delay: number; active: boolean } => {
    if (photoId === 0) return { delay: 0.05, active };
    if (photoId === 1) return { delay: 0.06, active };
    return { delay: photoId * (firstAnimation ? 0.03 : 0.01), active };
  };

  return (
    <DefaultSection>
      <Element name="Soft skills" />
      <Title title="Soft skills" emoji="⭐" />
      <div
        className={`flex gap-4 md:gap-[20px] items-center ${
          active2 ? "justify-center" : "justify-start"
        } flex-wrap`}
      >
        {softSkills.map((skill) => (
          <motion.div
            key={skill.id}
            className={`flex items-center gap-[10px] bg-purple px-[15px] md:px-[20px] py-[10px] rounded-md ${
              active ? "w-full justify-center" : ""
            }`}
            id={`photo-${skill.id}`}
            {...stackPhotoWrapperConfig(handleDelay(skill.id))}
          >
            <span
              className={`text-accent text-[16px] md:text-[18px] lg:text-[23px] text-center ${
                active ? "text-[20px]" : ""
              }`}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </DefaultSection>
  );
};
