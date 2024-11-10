export const sliderConfig = {
  viewport: { amount: 0.1, once: true },
  initial: {
    opacity: 0,
    scale: 0.95,
    transform: 'translateY(20px)',
  },
  whileInView: {
    scale: 1,
    transform: 'translateY(0px)',
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
};
