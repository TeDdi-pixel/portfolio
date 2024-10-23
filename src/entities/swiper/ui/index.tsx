import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import useWidth from "../../../hooks/useWidth";
import { Photo } from "../../../pages/homePage/config";

type SliderProps = {
  photos: Photo[];
};

export const Slider = ({ photos }: SliderProps) => {
  const { active, width } = useWidth(936);

  let calculatedWidth = "700px";

  if (width <= 432) {
    calculatedWidth = `${width - 30 * 2}px`;
  } else if (width <= 767) {
    calculatedWidth = `${width - 44.5 * 2}px`;
  } else if (width <= 936) {
    calculatedWidth = `${width - 64.5 * 2}px`;
  } else if (width <= 1024) {
    calculatedWidth = `${width - 372 - (30 + 34.5) * 2}px`;
  } else if (width <= 1360) {
    calculatedWidth = `${width - 488 - (50 + 34.5) * 2}px`;
  }

  console.log(calculatedWidth);
  return (
    <Swiper
      style={{ maxWidth: calculatedWidth }}
      className={`max-w-[${calculatedWidth}] ${
        active ? "h-[300px] md:h-[350px]" : "h-[300px]"
      } xl:h-[350px] rounded-lg bg-foreground cursor-grab`}
      modules={[Autoplay, Scrollbar, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "progressbar",
      }}
      loop
      slidesPerView={1}
      spaceBetween={30}
    >
      {photos.map((photo: Photo) => (
        <SwiperSlide
          style={{ maxWidth: calculatedWidth }}
          key={photo.id}
          className={`${
            active ? "max-h-[300px] md:max-h-[350px]" : "max-h-[300px]"
          } xl:max-h-[350px] w-full h-full`}
        >
          <img
            src={photo.path}
            alt={photo.alt}
            style={{ maxWidth: calculatedWidth }}
            className={`object-cover ${
              active ? "max-h-[300px] md:max-h-[350px]" : "max-h-[300px]"
            } xl:max-h-[350px] w-full h-full`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
