import DefaultSection from "../../../../shared/section/DefaultSection";

import EducationTitle from "./EducationTitle";
import BgWrapper from "../../../../shared/section/BgWrapper";
import { AnimatedText } from "../../../../entities/animatedText";
import useSectionInView from "../../../../hooks/useSectionInView";

export const EducationSection = () => {
  const handleSectionId = useSectionInView();
  return (
    <BgWrapper bgColor="bg-gradient-purple" rounded>
      <div
        ref={handleSectionId}
        id="Education"
        className="max-w-[1400px] mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] pt-[87.5px] md:pt-[143px]"
      >
        <DefaultSection title="Education" emoji="🤓">
          <EducationTitle />
          <AnimatedText
            text={`On June 30, 2024, I graduated with honors from Kherson National
        Technical University, earning a bachelor's degree.`}
          />

          <AnimatedText text="Practice in DataArt. Date of practice: 07.02 – 20.02 of 2022-th" />
        </DefaultSection>
      </div>
    </BgWrapper>
  );
};
