import { Element } from "react-scroll";
import useWidth from "../../../../hooks/useWidth";
// import { Title } from "../../../../entities/sectionTitle";
import AnimatedDiv from "../../../../shared/animatedDiv";
import DefaultSection from "../../../../shared/section/DefaultSection";
import AnimatedText from "../AnimatedText";
import ReactEmojis from "@souhaildev/reactemojis";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const SummarySection = () => {
  const { active } = useWidth(1296);
  const { active: active2 } = useWidth(500);
  const [firstAnimation, setFirstAnimation] = useState<boolean>(true);
  useEffect(() => {
    if (firstAnimation) {
      setTimeout(() => {
        setFirstAnimation(false);
      }, 1100);
    }
  });
  return (
    <DefaultSection>
      <Element name="Summary" />
      {/* <Title
        title="Hello"
        mb={`mb-[15px] sm:mb-[15px] ${
          active ? "lg:mb-[10px]" : "lg:mb-[0px]"
        } ${active2 ? "mt-[125.75px]" : "mt-[87.5px]"}`}
      /> */}

        <motion.h1
          viewport={{ margin: "20px 0px -100px 0px", amount: 0.5 }}
          initial={{
            opacity: 0,
            x: -10,
            filter: "blur(10px)",
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: {
              duration: firstAnimation ? 0.8 : 0.3,
              delay: firstAnimation ? 0.4 : 0,
            },
          }}
          className={`flex gap-7 items-end text-accent text-[80px] sm:text-[100px] mb-[15px] sm:mb-[15px] font-bold ${
            active ? "lg:mb-[10px]" : "lg:mb-[0px]"
          } ${active2 ? "mt-[125.75px]" : "mt-[87.5px]"}`}
        >
          Hello
          <ReactEmojis
            emoji="✨"
            emojiStyle="2"
            className="w-[50px] h-[50px]"
            style={{ width: "150px", height: "150px" }}
          />
        </motion.h1>
      <div
        className={`flex flex-col md:flex-row justify-between items-center gap-12 xl:gap-44`}
      >
        <AnimatedText
          text=" I am a web developer with considerable experience in building engaging
  and responsive front-end solutions. My expertise spans key aspects of
  modern front-end development, including working with cutting-edge
  frameworks and libraries. For me, web development is not just a job —
  it’s a passion that drives me to continuously learn and improve. I
  strive to create solutions that not only meet business goals but also
  enhance user experience and deliver real value."
        />

        <AnimatedDiv
          isBlur
          duration={0.8}
          delay={0.5}
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
    </DefaultSection>
  );
};
