import { Element } from "react-scroll";
import { Title } from "../../../../entities/sectionTitle";
import { stackPhotos } from "../../../../pages/homePage/config";
import BgWrapper from "../../../../shared/section/BgWrapper";
import SkillWrapper from "./SkillWrapper";
import SkillPhoto from "./SkillPhoto";

export const HardSkillsSection = () => {
  return (
    <BgWrapper bgColor="bg-background" py>
      <section className="mx-auto my-0 max-w-[1400px] relative w-full scroll-pt-[45.5px] px-[15px] bp500:px-[34.5px]">
        <Element name="Hard skills" />
        <div className=" px-[15px] md:px-[30px] lg:px-[50px] ">
          <Title title="Hard skills" emoji="🚀" />
          <div className="flex gap-4 md:gap-[20px] items-center flex-wrap justify-center bp1386:justify-start">
            {stackPhotos.map((photo) => (
              <SkillWrapper key={photo.id} photoId={photo.id}>
                <span className="text-accent text-[20px] bp461:text-[16px] md:text-[18px] lg:text-[23px]">
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
