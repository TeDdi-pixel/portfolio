export const popUpNavigationConfig = {
  initial: {
    opacity: 0,
    y: -10,
    x: -30,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    x: -30,
    scale: 0.9,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};
