export const headerLinkConfig = (linkIndex: number) => {
  return {
    viewport: { once: true },
    initial: { opacity: 0, x: 30, filter: "blur(5px)" },
    whileInView: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        delay: 0.1 * linkIndex,
      },
    },
  };
};
