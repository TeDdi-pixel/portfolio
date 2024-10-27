export const stackPhotoWrapperConfig = (delay: number) => {
  return {
    viewport:{margin:'-10px 0px -50px 0px', amount: 0.7},
    initial: {
      opacity: 0.6,
      scale: 0.8,
      filter: "blur(15px)",
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        delay: delay,
      },
    },
  };
};
