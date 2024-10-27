export const animatedTextConfig = (index: number) => {
  return {
    viewport: { margin: "20px 0px 0px 0px", once: true },
    initial: {
      opacity: 0.5,
      filter: "blur(5px)",
      scale: 0.5,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        delay: 0.2 + index * 0.05,
      },
    },
  };
};
