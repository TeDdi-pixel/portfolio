export const animatedTextConfig = (index: number) => {
  return {
    viewport: { margin: "20px 0px 0px 0px", once: true },
    initial: {
      opacity: 0,
      filter: "blur(5px)",
      scale: 0.5,
    },
    whileInView: {
      scale: 0.8,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        delay: 0.1 + index * 0.05,
      },
    },
  };
};
