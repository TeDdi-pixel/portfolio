import useWidth from "./useWidth";

const useSliderWidth = (defaultWidth: number) => {
  const { width: pageWidth } = useWidth();
  let swiperWidth;

  switch (true) {
    case pageWidth <= 500:
      swiperWidth = pageWidth - 30 * 2;
      break;
    case pageWidth <= 767:
      swiperWidth = pageWidth - 44.5 * 2;
      break;
    case pageWidth <= 936:
      swiperWidth = pageWidth - 64.5 * 2;
      break;
    case pageWidth <= 1024:
      swiperWidth = pageWidth - 372 - (30 + 34.5) * 2;
      break;
    case pageWidth <= 1360:
      swiperWidth = pageWidth - 488 - (50 + 34.5) * 2;
      break;
    default:
      swiperWidth = defaultWidth;
  }
  return `${swiperWidth}px`;
};

export default useSliderWidth;
