import AnimatedDiv from "../../../shared/animatedDiv";

type Props = { title: string; mb?: string };

export const Title = ({ title, mb }: Props) => {
  return (
    <AnimatedDiv
      duration={0.8}
      delay={0.3}
      isBlur
      className={`text-[30px] sm:text-[40px] md:text-[50px] text-accent ${
        mb ?? "mb-[25px] sm:mb-[35px] lg:mb-[55px]"
      }`}
    >
      {title}
    </AnimatedDiv>
  );
};
