export const h1Config = {
  viewport: { margin: "-10px 0px -100px 0px", amount: 0.5, once: true },
  initial: {
    opacity: 0,
    x: 0,
    filter: "blur(10px)",
    scale: 0.95,
  },
  whileInView: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};
