import { useScroll, useTransform } from "framer-motion";

const useScrollAnimation = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return { opacity, scale, y };
};

export default useScrollAnimation;
