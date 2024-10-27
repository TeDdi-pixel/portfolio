export const animatedTextConfig = (firstAnimation: boolean, index: number) => {
  return {
    viewport: { margin: "20px 0px 0px 0px" },
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
        duration: firstAnimation ? 0.6 : 0.2,
        delay: firstAnimation ? 0.2 + index * 0.1 : 0.1,
      },
    },
  };
};
