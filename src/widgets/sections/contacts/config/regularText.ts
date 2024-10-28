export const regularTextConfig = (contactId: number) => {
  return {
    viewport: { margin: "-25px 0px -25px 0px", once: true },
    initial: {
      opacity: 0,
      scale: 0.85,
      x: -50,
      filter: `blur(5px)`,
    },
    whileInView: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.1 * contactId * 0.5,
      },
    },
  };
};
