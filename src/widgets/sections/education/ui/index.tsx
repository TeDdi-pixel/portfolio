import { Element } from "react-scroll";
import { Title } from "../../../../entities/sectionTitle";
import DefaultSection from "../../../../shared/section/DefaultSection";
import AnimatedText from "../../resume/AnimatedText";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <div className="max-w-[1400px] mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] pt-[87.5px] md:pt-[143px]">
      <DefaultSection>
        <Element name="Education" />
        <Title title="Education" emoji="🤓" />
        <motion.div
          className="text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2"
          viewport={{ margin: "-35px 0px -35px 0px" }}
          initial={{
            opacity: 0,
            scale: 0.85,
            x: -50,
            filter: `blur(5px)`,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.3,
              delay: 0.1,
            },
          }}
        >
          Software engineering
        </motion.div>

        <AnimatedText
          text={`On June 30, 2024, I graduated with honors from Kherson National
        Technical University, earning a bachelor's degree.`}
        />

        <AnimatedText text="Practice in DataArt. Date of practice: 07.02 – 20.02.2022" />
      </DefaultSection>
    </div>
  );
};
