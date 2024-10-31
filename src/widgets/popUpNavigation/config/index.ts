export const popUpNavigationConfig = (burgerLinkTaped: boolean) => {
  return {
    initial: {
      opacity: 0,
      y: -10,
      x: -30,
      filter: "blur(1px)",
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
      scale: 1,
    },
    exit: { opacity: 0, y: -10, x: -30, filter: "blur(5px)", scale: 0.9 },
    transition: {
      duration: !burgerLinkTaped ? 0.2 : 0.6,
      type: "spring",
      stiffness: 300,
      damping: burgerLinkTaped ? 10 : 20,
    },
  };
};
