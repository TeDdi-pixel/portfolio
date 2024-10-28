export const sliderConfig = {
  viewport: { amount: 0.1, once: true },
  initial: {
    opacity: 0.5,
    scale: 0.95,
    y: 20,
    filter: `blur(5px)`,
  },
  whileInView: {
    scale: 1,
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};
