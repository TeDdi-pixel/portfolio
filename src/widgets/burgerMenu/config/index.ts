export const burgerConfig = {
  viewport: { margin: "-23px 0px -100px 0px", once: true },
  initial: {
    opacity: 0,
    // filter: `blur(10px)`,
  },
  whileInView: {
    opacity: 1,
    // filter: "blur(0px)",
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};
