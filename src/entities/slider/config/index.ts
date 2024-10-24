import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { PaginationOptions } from "swiper/types";

export const sliderConfig = {
  modules: [Autoplay, Scrollbar, Pagination, Navigation],
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    type: "progressbar",
  } as PaginationOptions,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: true,
};
