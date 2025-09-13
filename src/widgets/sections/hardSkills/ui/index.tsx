import { Element } from "react-scroll";
import { Title } from "../../../../entities/sectionTitle";
import { stackPhotos } from "../../../../pages/homePage/config";
import BgWrapper from "../../../../shared/section/BgWrapper";
import SkillPhoto from "./SkillPhoto";
import SkillWrapper from "../../../../shared/SkillWrapper";
import useSectionInView from "../../../../hooks/useSectionInView";

export const HardSkillsSection = () => {
  const handleSectionId = useSectionInView();

  return (
    <BgWrapper bgColor="bg-background" py animation>
      <section
        ref={handleSectionId}
        id="Hard skills"
        className="mx-auto my-0 max-w-[1400px] relative w-full scroll-pt-[45.5px] px-[15px] bp500:px-[34.5px]"
      >
        <Element name="Hard skills" />
        <div className="px-[15px] md:px-[30px] lg:px-[50px] ">
          <Title title="Hard skills" emoji="🚀" />
          <div className="flex gap-4 md:gap-[20px] items-center flex-wrap justify-center bp1386:justify-start select-none">
            {stackPhotos.map((photo) => (
              <SkillWrapper key={photo.id} skillId={photo.id}>
                <span className="text-accent text-[19px] bp461:text-[16px] md:text-[18px] lg:text-[23px]">
                  {photo.tooltip}
                </span>
                <SkillPhoto photoPath={photo.path} photoAlt={photo.alt} />
              </SkillWrapper>
            ))}
          </div>
        </div>
      </section>
    </BgWrapper>
  );
};

export default HardSkillsSection;
