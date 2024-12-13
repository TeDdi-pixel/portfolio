import { MainTitle } from "./MainTitle";
import MainPhoto from "./MainPhoto";
import { MainText } from "./MainText";
import HandDown from "./HandDown";
import { Element } from "react-scroll";
import useSectionInView from "../../../../hooks/useSectionInView";

const SummarySection = () => {
  const handleSectionId = useSectionInView();

  return (
    <section
      ref={handleSectionId}
      id="Summary"
      className="px-[15px] bp500:px-[34.5px] relative w-full max-w-[1400px]"
    >
      <Element name="Summary" />
      <div className="flex items-center gap-12 xl:gap-44 pb-[87.5px] bp900:pb-[143px] flex-wrap bp912:flex-nowrap">
        <div className="w-full">
          <MainTitle />
          <MainText />
        </div>
        <MainPhoto />
      </div>
      <HandDown />
    </section>
  );
};

export default SummarySection;
