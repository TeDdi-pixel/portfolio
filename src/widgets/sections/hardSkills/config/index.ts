export const stackPhotoWrapperConfig = ({
  delay,
  active,
}: {
  delay: number;
  active: boolean;
}) => {
  return {
    viewport: { amount: 0.3, once: true },
    initial: {
      opacity: 0.6,
      scale: 0.8,
      filter: `blur(${active ? "0" : "10px"})`,
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
