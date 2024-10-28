import { Element } from "react-scroll";
import DefaultSection from "../../../../shared/section/DefaultSection";
import { MainTitle } from "./MainTitle";
import MainPhoto from "./MainPhoto";
import { MainText } from "./MainText";

export const SummarySection = () => {
  return (
    <DefaultSection>
      <Element name="Summary" />

      <MainTitle />
      <div
        className={`flex flex-col md:flex-row justify-between items-center gap-12 xl:gap-44`}
      >
        <MainText />
        <MainPhoto />
      </div>
    </DefaultSection>
  );
};
