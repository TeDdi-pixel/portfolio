export const regularTextConfig = (contactId: number) => {
  return {
    viewport: { margin: "-25px 0px -25px 0px", once: true },
    initial: {
      opacity: 0,
      scale: 0.85,
      filter: `blur(5px)`,
    },
    whileInView: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.1 * contactId * 0.5,
      },
    },
  };
};
