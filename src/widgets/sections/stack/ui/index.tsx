import { Element } from "react-scroll";
import useWidth from "../../../../hooks/useWidth";
import { Title } from "../../../../entities/sectionTitle";
import { stackPhotos } from "../../../../pages/homePage/config";
import { motion } from "framer-motion";

export const StackSection = () => {
  const { active } = useWidth(432);
  const { active: active2 } = useWidth(1386);
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
                id={`photo-${photo.id}`}
                key={photo.id}
                className={`max-w-[100px] max-h-[100px] sm:max-w-[150px] sm:max-h-[150px] w-full h-full `}
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
                    delay:
                      photo.id === 0
                        ? 0.2
                        : photo.id === 1
                        ? 0.4
                        : photo.id * 0.2,
                  },
                }}
              >
                <img
                  src={photo.path}
                  alt={photo.alt}
                  className={`object-contain max-w-[100px] max-h-[100px] sm:max-w-[150px] sm:max-h-[150px] w-full h-full ${
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
