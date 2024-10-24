import { Element } from "react-scroll";
import Section from "../../../../shared/section";
import { Title } from "../../../../entities/sectionTitle";
import AnimatedDiv from "../../../../shared/animatedDiv";

export const EducationSection = () => {
  return (
    <Section>
      <Element name="Education" />
      <Title title="Education" />
      <AnimatedDiv
        className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2`}
        delay={0.3}
        x={-50}
        isBlur
      >
        Software engineering
      </AnimatedDiv>
      <AnimatedDiv
        isBlur
        x={-50}
        delay={0.4}
        duration={0.8}
        className="text-accent text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[7px]"
      >
        On June 30, 2024, I graduated with honors from Kherson National
        Technical University, earning a bachelor's degree.
      </AnimatedDiv>
      <AnimatedDiv
        isBlur
        x={-50}
        delay={0.5}
        duration={0.8}
        className="text-accent text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words"
      >
        Practice in DataArt. Date of practice: 07.02 – 20.02.2022{" "}
      </AnimatedDiv>
    </Section>
  );
};
