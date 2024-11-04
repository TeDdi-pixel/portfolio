export const liConfig = (index: number) => {
  return {
    initial: { scale: 0.8, opacity: 0, zIndex: -100 },//filter: "blur(10px)"
    animate: {
      scale: 1,
      opacity: 1,
      y: -10,
      zIndex: 100,
      // filter: "blur(0px)",
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 0,
      zIndex: -100,
      // filter: "blur(10px)",
    },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.1 + 0.1 * index
    },
  };
};
