export const projectUrlConfig = {
viewport: { margin: "-25px 0px -25px 0px" },
  initial: {
    opacity: 0,
    x: -10,
    filter: "blur(5px)",
  },
  whileInView: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};
