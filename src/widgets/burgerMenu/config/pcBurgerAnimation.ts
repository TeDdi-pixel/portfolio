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
  };

  const commonProps = {
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
    ...commonProps,
  };

  const exit = {
    transform: "translateX(-50%)",
    left: "50%",
    opacity: popUpNav ? 1 : 0,
    height: popUpNav ? 48.5 : 0,
    top: popUpNav ? "0.75rem" : -200,
    transition: {
      duration: 1,
      ...commonTransition,
    },
    width: active ? 198 : 598,
  };

  return { initial, animate, exit };
};
