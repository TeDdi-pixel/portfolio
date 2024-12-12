export const burgerConfig = (scale: number) => {
  return {
    viewport: { margin: "-23px 0px -100px 0px", once: true },
    initial: {
      opacity: 0,
      transform: `translateX(15px) scale(${scale})`,
    },
    whileInView: {
      opacity: 1,
      transform: `translateX(0px) scale(${scale})`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        delay: 0.2,
      },
    },
  };
};
