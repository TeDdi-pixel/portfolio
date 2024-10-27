import { Element } from "react-scroll";
import useWidth from "../../../../hooks/useWidth";
import { Title } from "../../../../entities/sectionTitle";
import { stackPhotos } from "../../../../pages/homePage/config";
import { motion } from "framer-motion";
import { stackPhotoWrapperConfig } from "../config";
import useFirstAnimation from "../../../../hooks/useFirstAnimation";
export const StackSection = () => {
  const { active } = useWidth(500);
  const { active: active2 } = useWidth(1386);
  const { active: active3 } = useWidth(461);
  const firstAnimation = useFirstAnimation();
  const handleDelay = (photoId: number): { delay: number; active: boolean } => {
    if (photoId === 0) return { delay: 0.05, active: active3 };
    if (photoId === 1) return { delay: 0.06, active: active3 };
    return { delay: photoId * (firstAnimation ? 0.03 : 0.01), active: active3 };
  };

  return (
    <div className="bg-background py-[87.5px] md:py-[143px]">
      <section
        className={`mx-auto my-0 max-w-[1400px] relative w-full scroll-pt-[45.5px] ${
          active ? "px-[15px]" : "px-[34.5px]"
        }  sm:px-[34.5px]`}
      >
        <Element name="Hard skills" />
        <div className=" px-[15px] md:px-[30px] lg:px-[50px] ">
          <Title title="Hard skills" emoji="🚀" />
          <div
            className={`flex gap-4 md:gap-[20px] items-center ${
              active2 ? "justify-center" : "justify-start"
            } flex-wrap`}
          >
            {stackPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                className={`flex items-center gap-[10px] bg-purple px-[15px] md:px-[20px] py-[10px] rounded-md ${
                  active3 ? "w-full justify-center" : ""
                }`}
                id={`photo-${photo.id}`}
                {...stackPhotoWrapperConfig(handleDelay(photo.id))}
              >
                <span
                  className={`text-accent text-[16px] md:text-[18px] lg:text-[23px] ${
                    active3 ? "text-[20px]" : ""
                  }`}
                >
                  {photo.tooltip}
                </span>
                <img
                  src={photo.path}
                  alt={photo.alt}
                  className={`object-contain max-w-[40px] max-h-[40px] sm:max-w-[50px] sm:max-h-[50px] w-full ${
                    photo.alt === "js_logo" ? "rounded-[5px]" : ""
                  } ${
                    photo.alt === "FSD_logo" || photo.alt === "Zustand_logo"
                      ? "h-[50px]"
                      : ""
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
