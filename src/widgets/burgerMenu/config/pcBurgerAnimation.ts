export const pcBurgerAnimation = (
  burgerMenu: boolean,
  burgerLinkTaped: boolean,
  popUpNav: boolean,
  active: boolean
) => {
  const commonTransition = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    restDelta: 0.005,
    ease: [0, 0.71, 0.2, 1.01],
  };

  const commonProps = {
    borderRadius: burgerMenu ? 20 : 100,
    transition: {
      duration: 0.3,
      ...commonTransition,
    },
  };

  const initial = {
    opacity: burgerLinkTaped && popUpNav ? 1 : 0,
    transform: "translateX(-50%)",
    left: "50%",
    top: "0.75rem",
    width: active ? 198 : 598,
    height: 48.5,
  };

  const animate = {
    opacity: !burgerMenu && !burgerLinkTaped ? 0 : 1,
    top: 0,
    height: "100vh",
    width: burgerMenu ? "100%" : 598,
    filter: burgerMenu ? "blur(2px)" : "blur(0px)",
    ...commonProps,
  };

  const exit = {
    transform: "translateX(-50%)",
    left: "50%",
    opacity: popUpNav ? 1 : 0,
    height: popUpNav ? 48.5 : 0,
    top: popUpNav ? "0.75rem" : -200,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ...commonTransition,
    },
    borderRadius: 20,
    width: active ? 198 : 598,
  };

  return { initial, animate, exit };
};
