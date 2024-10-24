import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  x?: number | string;
  y?: number | string;
  duration?: number;
  isBlur?: boolean;
  delay?: number;
  id?: string;
  onClick?: () => void;
};

const AnimatedDiv = ({
  children,
  id,
  className,
  x = -50,
  y = 0,
  duration = 0.75,
  isBlur = false,
  delay = 0.5,
  onClick,
}: Props) => {
  return (
    <motion.div
      onClick={onClick}
      id={id}
      className={className}
      viewport={{ once: true }}
      initial={{
        opacity: 0,
        x: x,
        y: y,
        filter: `blur(${isBlur ? "10px" : 0})`,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
        transition: {
          duration: duration,
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
