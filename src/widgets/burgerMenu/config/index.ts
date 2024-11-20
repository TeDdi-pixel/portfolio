export const burgerConfig = {
  viewport: { margin: "-23px 0px -100px 0px", once: true },
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};
