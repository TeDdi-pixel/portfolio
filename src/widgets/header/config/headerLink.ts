export const headerLinkConfig = (linkIndex: number) => {
  return {
    viewport: { once: true },
    initial: { opacity: 0, scale: 0.7, transform: "translateX(30px)" },
    whileInView: {
      opacity: 1,
      scale: 1,
      transform: "translateX(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        delay: 0.1 * linkIndex,
      },
    },
  };
};
