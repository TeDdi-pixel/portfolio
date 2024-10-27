export const projectNameConfig = {
  viewport: { margin: "-35px 0px -35px 0px" },
  initial: {
    opacity: 0,
    scale: 0.85,
    filter: "blur(5px)",
  },
  whileInView: {
    opacity: 1,
    filter: "blur(0px)",
    scale:1,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};
