export const imgWrapperConfig = {
  viewport: { once: true },
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: `blur(10px)`,
  },
  whileInView: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};
