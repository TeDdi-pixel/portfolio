export const educationTitleConfig = {
  viewport: { margin: "-35px 0px -35px 0px", once: true },
  initial: {
    opacity: 0,
    scale: 0.85,
    x: -50,
    filter: `blur(5px)`,
  },
  whileInView: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};
