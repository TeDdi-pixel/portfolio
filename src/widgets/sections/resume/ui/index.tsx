import { Element } from "react-scroll";
import useWidth from "../../../../hooks/useWidth";
import Section from "../../../../shared/section";
import { Title } from "../../../../entities/sectionTitle";
import AnimatedDiv from "../../../../shared/animatedDiv";

export const SummarySection = () => {
  const { active } = useWidth(1296);
  return (
    <Section>
      <Element name="Summary" />
      <Title
        title="Summary"
        mb={`mb-[15px] sm:mb-[15px] ${
          active ? "lg:mb-[10px]" : "lg:mb-[0px]"
        } `}
      />
      <div
        className={`flex flex-col md:flex-row justify-center items-center gap-12 xl:gap-44`}
      >
        <AnimatedDiv
          x={-50}
          delay={0.6}
          duration={0.8}
          className="text-accent text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words"
        >
          I am a web developer with considerable experience in building engaging
          and responsive front-end solutions. My expertise spans key aspects of
          modern front-end development, including working with cutting-edge
          frameworks and libraries. For me, web development is not just a job —
          it’s a passion that drives me to continuously learn and improve. I
          strive to create solutions that not only meet business goals but also
          enhance user experience and deliver real value.
        </AnimatedDiv>

        <AnimatedDiv
          isBlur
          duration={0.8}
          delay={0.6}
          x={50}
          className="flex-shrink-0 max-w-[280px] max-h-[280px] w-full h-full  xl:max-w-[380px] xl:max-h-[380px]  rounded-full overflow-hidden relative "
        >
          <img
            src="./main_photo.webp"
            alt="main_photo"
            className="object-cover max-w-[280px] max-h-[280px]  xl:max-w-[380px] xl:max-h-[380px] w-full h-full"
          />
        </AnimatedDiv>
      </div>
    </Section>
  );
};
