import { Element } from "react-scroll";
import DefaultSection from "../../../../shared/section/DefaultSection";
import { MainTitle } from "./MainTitle";
import MainPhoto from "./MainPhoto";
import { MainText } from "./MainText";
import HandDown from "./HandDown";

export const SummarySection = () => {
  return (
    <DefaultSection pb={false}>
      <Element name="Summary" />

      <div className="flex items-center flex-col bp900:flex-row gap-12 xl:gap-44 pb-[87.5px] bp900:pb-[143px]">
        <div className="flex flex-col w-full justify-between items-center bp1296:gap-[0px] sm:gap-[15px]">
          <MainTitle />
          <MainText />
        </div>
        <MainPhoto />
      </div>
      <HandDown />
    </DefaultSection>
  );
};
