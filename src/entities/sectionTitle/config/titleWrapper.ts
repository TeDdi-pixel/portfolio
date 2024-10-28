export const titleWrapperConfig = (active: boolean) => {
  return {
    viewport: {
      margin: active ? "-30px 0px 0px 0px" : "-15px 0px 0px 0px",
      amount: 0.9,
      once: true,
    },
    initial: {
      opacity: 0,
      x: -10,
      filter: "blur(10px)",
      scale: 0.95,
    },
    whileInView: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };
};
