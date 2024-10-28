export const liConfig = (index: number) => {
  return {
    initial: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
    animate: {
      scale: 1,
      opacity: 1,
      y: -10,
      filter: "blur(0px)",
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 0,
      filter: "blur(10px)",
    },
    transition: { duration: 0.4, delay: index * 0.1 - 0.1 },
  };
};
