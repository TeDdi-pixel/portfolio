import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import useWidth from "../../../hooks/useWidth";
import { Photo } from "../../../pages/homePage/config";
import useSliderWidth from "../../../hooks/useSliderWidth";
import { sliderConfig } from "../config";
import LazyImg from "../../../shared/lazyImg/LazyImg";

type SliderProps = {
  photos: Photo[];
};

export const Slider = ({ photos }: SliderProps) => {
  const { active } = useWidth(936);
  const swiper = useSwiper();
  const swiperWidth = useSliderWidth(700);

  return (
    <Swiper
      {...sliderConfig}
      style={{ maxWidth: swiperWidth }}
      className={`${
        active ? "h-[300px] md:h-[350px]" : "h-[300px]"
      } max-w-[${swiperWidth}] xl:h-[350px] rounded-lg bg-foreground cursor-grab`}
    >
      {photos.map((photo: Photo) => (
        <SwiperSlide
          style={{ maxWidth: swiperWidth }}
          key={photo.id}
          className={`${
            active
              ? "max-h-[300px] md:max-h-[350px]"
              : "max-h-[300px] bg-slate-900"
          } xl:max-h-[350px] w-full h-full select-none`}
        >
          <LazyImg
            src={photo.path}
            alt={photo.alt}
            style={{ maxWidth: swiperWidth }}
            active={active}
          />
        </SwiperSlide>
      ))}
      <button onClick={() => swiper.slidePrev}></button>
      <button onClick={() => swiper.slideNext}></button>
    </Swiper>
  );
};
