export const stackPhotoWrapperConfig = (delay: number) => {
  return {
    viewport: { amount: 0.3, once: true },
    initial: {
      opacity: 0,
      scale: 0.7,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {duration: 0.3, delay: delay },
    },
  };
};
