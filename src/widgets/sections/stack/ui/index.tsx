import { Element } from "react-scroll";
import useWidth from "../../../../hooks/useWidth";
import { Title } from "../../../../entities/sectionTitle";
import { stackPhotos } from "../../../../pages/homePage/config";
import { motion } from "framer-motion";

export const StackSection = () => {
  const { active } = useWidth(500);
  const { active: active2 } = useWidth(1386);
  const handleDelay = (photoId: number) => {
    let delay;
    if (photoId === 0) {
      delay = 0.1;
    } else if (photoId === 1) {
      delay = 0.2;
    } else delay = photoId * 0.15;
    return delay;
  };
  return (
    <div className="bg-background2 py-[87.5px] md:py-[143px]">
      <section
        className={`mx-auto my-0 max-w-[1400px] relative w-full scroll-pt-[45.5px]  ${
          active ? "px-[15px]" : "px-[34.5px]"
        }  sm:px-[34.5px]`}
      >
        <Element name="Stack" />
        <div className=" px-[15px] md:px-[30px] lg:px-[50px] ">
          <Title title="Technologies stack" />
          <div
            className={`flex gap-8 items-center ${
              active2 ? "justify-center" : "justify-start"
            } flex-wrap`}
          >
            {stackPhotos.map((photo) => (
              <motion.div
                className={`max-w-[100px] max-h-[100px] sm:max-w-[150px] sm:max-h-[150px] w-full h-full`}
                key={photo.id}
                id={`photo-${photo.id}`}
                viewport={{ once: true }}
                initial={{
                  opacity: 0,
                  scale: 0.2,
                  filter: "blur(25px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    delay: handleDelay(photo.id),
                  },
                }}
              >
                <img
                  src={photo.path}
                  alt={photo.alt}
                  className={`object-contain max-w-[100px] max-h-[100px] sm:max-w-[150px] sm:max-h-[150px] w-full h-full hover:scale-110 transition-transform ${
                    photo.alt === "js_logo" ? "rounded-[17px]" : ""
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
