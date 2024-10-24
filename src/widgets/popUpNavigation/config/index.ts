export const popUpNavigationConfig = {
  viewport: { once: true },
  initial: {
    opacity: 0,
    x: 0,
    y: -10,
    filter: "blur(2px)",
  },
  whileInView: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};
