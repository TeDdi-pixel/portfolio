export const burgerBGAnimation = () => {
  const commonTransition = {
    type: "spring",
    damping: 70, 
    stiffness: 120, 
    restDelta: 0.005,
  };

  const commonProps = {
    transition: {
      duration: 0.3,
      ...commonTransition,
    },
  };

  const initial = {
    opacity: 1,
    scale: 0,
    x: '-50%',
    y: '-50%'
  };

  const animate = {
    scale: 20,
    x: '-50%',
    y: '-50%',
    ...commonProps,
  };

  const exit = {
    opacity: 0,
    scale: 3,
    x: '-50%',
    y: '-50%',
    transition: {
      duration: 0.4, 
      ease: "linear",
    },
  };

  return { initial, animate, exit };
};
