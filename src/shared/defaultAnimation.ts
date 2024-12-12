type TypeArgs = {
  margin?: string;
  index?: number;
  direction?: number;
  amount?: string;
  scale?: number;
};

export const defaultAnimation = ({
  margin,
  index,
  direction = -15,
  scale,
}: TypeArgs) => {
  return {
    viewport: { once: true, margin: margin },
    initial: {
      opacity: 0,
      scale: scale ?? 0.8,
      transform: `translateX(${direction}px)`,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transform: "translateX(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        delay: index ? 0.1 + index * 0.05 : 0.2,
      },
    },
  };
};
