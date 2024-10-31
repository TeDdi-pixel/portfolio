import { Element } from "react-scroll";
import { Title } from "../../../../entities/sectionTitle";
import { stackPhotos } from "../../../../pages/homePage/config";
import BgWrapper from "../../../../shared/section/BgWrapper";
import SkillPhoto from "./SkillPhoto";
import { useRef, useState } from "react";
import SkillWrapper from "../../../../shared/SkillWrapper";
import useSectionInView from "../../../../hooks/useSectionInView";
import useWidth from "../../../../hooks/useWidth";
import { Reorder } from "framer-motion";

export const HardSkillsSection = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const handleSectionId = useSectionInView();
  const { active } = useWidth(460);
  const [items, setItems] = useState(stackPhotos);

  return (
    <BgWrapper bgColor="bg-background" py animation>
      <section
        ref={handleSectionId}
        id="Hard skills"
        className="mx-auto my-0 max-w-[1400px] relative w-full scroll-pt-[45.5px] px-[15px] bp500:px-[34.5px]"
      >
        <Element name="Hard skills" />
        <div className=" px-[15px] md:px-[30px] lg:px-[50px] ">
          <Title title="Hard skills" emoji="🚀" />
          {!active ? (
            <div
              ref={constraintsRef}
              className="flex gap-4 md:gap-[20px] items-center flex-wrap justify-center bp1386:justify-start select-none"
            >
              {stackPhotos.map((photo) => (
                <SkillWrapper
                  ref={constraintsRef}
                  key={photo.id}
                  skillId={photo.id}
                >
                  <span className="text-accent text-[20px] bp461:text-[16px] md:text-[18px] lg:text-[23px]">
                    {photo.tooltip}
                  </span>
                  <SkillPhoto photoPath={photo.path} photoAlt={photo.alt} />
                </SkillWrapper>
              ))}
            </div>
          ) : (
            <Reorder.Group
              axis="y"
              values={items}
              onReorder={setItems}
              className="flex gap-4 md:gap-[20px] items-center flex-wrap justify-center bp1386:justify-start select-none"
            >
              {items.map((photo) => (
                <Reorder.Item
                  key={photo.id}
                  value={photo}
                  className="cursor-grab bg-texture flex items-center justify-center bp461:justify-start gap-[10px] px-[15px] md:px-[20px] py-[10px] rounded-md w-full bp461:w-auto"
                >
                  <span className="text-accent text-[20px] bp461:text-[16px] md:text-[18px] lg:text-[23px]">
                    {photo.tooltip}
                  </span>
                  <SkillPhoto photoPath={photo.path} photoAlt={photo.alt} />
                </Reorder.Item>
              ))}
            </Reorder.Group>
          )}
        </div>
      </section>
    </BgWrapper>
  );
};
