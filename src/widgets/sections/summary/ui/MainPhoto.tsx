import { m } from "framer-motion";
import { imgWrapperConfig } from "../config/imgWrapper";
const MainPhoto = () => {
  return (
    <m.div
      {...imgWrapperConfig}
      className="mx-auto bp912:mx-0 w-[280px] h-[280px] xl:w-[480px] xl:h-[430px] rounded-full bp912:rounded-3xl overflow-hidden shadow-custom2"
    >
      <img
        src="./main_photo.webp"
        alt="main_photo"
        className="object-cover w-full h-full"
      />
    </m.div>
  );
};

export default MainPhoto;
