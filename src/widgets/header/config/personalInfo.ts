export const personalInfoConfig = {
  viewport: { margin: "-23px 0px -100px 0px", once: true },
  initial: {
    opacity: 0,
    x: -20,
    filter: `blur(10px)`,
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
