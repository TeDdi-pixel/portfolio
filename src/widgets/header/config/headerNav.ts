export const headerNavConfig = {
  viewport: { margin: "-23px 0px -100px 0px", once: true },
  initial: {
    opacity: 0,
    transform: "translateX(20px)",
  },
  whileInView: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: {
      duration: 0.3,
      delay: 0.1,
    }, 
  },
};
