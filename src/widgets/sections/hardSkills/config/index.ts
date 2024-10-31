export const stackPhotoWrapperConfig = {
  viewport: { amount: 0.3, once: true },
  initial: {
    opacity: 0.6,
    scale: 0.8,
    filter: "blur(10px)",
  },
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
  whileInView: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};
