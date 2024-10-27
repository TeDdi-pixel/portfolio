import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
  const lines = text
    .trim()
    .split("\n")
    .map((line) => line.trim());

  return (
    <motion.div
      className="text-accent text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words"
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 0, y: 0, filter: "blur(10px)" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4 + index * 0.1,
            },
          }}
        >
          {line}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
