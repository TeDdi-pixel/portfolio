export const liConfig = (index: number) => {
  return {
    initial: { scale: 0.8, opacity: 0, zIndex: -100 },
    animate: {
      scale: 1,
      opacity: 1,
      y: -10,
      zIndex: 100,
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      y: 0,
      zIndex: -100,
    },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.1 + 0.1 * index
    },
  };
};
