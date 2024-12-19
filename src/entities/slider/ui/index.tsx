import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useWidth from "../../../hooks/useWidth";
import { Photo } from "../../../pages/homePage/config";
import useSliderWidth from "../../../hooks/useSliderWidth";
import { sliderConfig } from "../config";
import LazyImg from "../../../shared/lazyImg/LazyImg";
import { useCursor } from "../../../features/cursorFollower/store";
import { useRef, useState } from "react";
import { IoCaretForward, IoCaretBack } from "react-icons/io5";

type SliderProps = {
  photos: Photo[];
};

export const Slider = ({ photos }: SliderProps) => {
  const { setCursorType, setDefaultCursor, setCursorText, isTouchDevice } =
    useCursor((state) => state);
  const { active } = useWidth(936);
  const swiperWidth = useSliderWidth(700);
  const coordinatesRef = useRef({ x: 0, y: 0 });
  const cursorTypeRef = useRef<string>("default");
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const slide = event.currentTarget.getBoundingClientRect();
    const halfWidth = slide.width / 2;
    coordinatesRef.current.x = event.clientX - slide.left;

    if (coordinatesRef.current.x < halfWidth) {
      if (cursorTypeRef.current === "sliderLeft") return;
      cursorTypeRef.current = "sliderLeft";
      setCursorType("sliderLeft");
      setCursorText(<IoCaretBack className="text-white" />);
    } else {
      if (cursorTypeRef.current === "sliderRight") return;
      cursorTypeRef.current = "sliderRight";
      setCursorType("sliderRight");
      setCursorText(<IoCaretForward className="text-white" />);
    }
  };

  const handleMouseClick = () => {
    if (!swiperInstance) return;

    if (cursorTypeRef.current === "sliderLeft") {
      swiperInstance.slidePrev();
    } else {
      swiperInstance.slideNext();
    }

    if (cursorTypeRef.current === "sliderLeft") {
      setCursorType("sliderLeft");
      setCursorText(<IoCaretBack className="text-white" />);
    } else {
      setCursorType("sliderRight");
      setCursorText(<IoCaretForward className="text-white" />);
    }
  };

  return (
    <Swiper
      {...sliderConfig}
      onSwiper={setSwiperInstance}
      style={{ maxWidth: swiperWidth }}
      className={`${
        active ? "h-[300px] md:h-[350px]" : "h-[300px]"
      } max-w-[${swiperWidth}] xl:h-[350px] rounded-lg bg-foreground cursor-none`}
    >
      {photos.map((photo: Photo) => (
        <SwiperSlide
          onMouseLeave={() => {
            setDefaultCursor();
            setCursorText("");
          }}
          onMouseMove={handleMouseMove}
          onClick={handleMouseClick}
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
      {isTouchDevice && (
        <>
          <button onClick={() => swiperInstance?.slidePrev()}></button>
          <button onClick={() => swiperInstance?.slideNext()}></button>
        </>
      )}
    </Swiper>
  );
};
