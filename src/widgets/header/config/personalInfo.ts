export const personalInfoConfig = (firstAnimation: boolean) => {
  return {
    viewport: { margin: "-23px 0px -100px 0px" },
    initial: {
      opacity: 0,
      x: firstAnimation ? -50 : -20,
      filter: `blur(10px)`,
    },
    whileInView: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      transition: {
        duration: firstAnimation ? 0.5 : 0.3,
        delay: firstAnimation ? 0.5 : 0.1,
      },
    },
  };
};
