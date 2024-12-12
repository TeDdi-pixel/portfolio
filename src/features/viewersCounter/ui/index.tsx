import { useEffect, useState } from "react";
import { getCounter, updateCounter } from "../modul/api";
import { isUniqueUser, setUniqueUser } from "../lib/utils";
import { animate, useMotionValue, useTransform, m } from "framer-motion";
import { defaultAnimation } from "../../../shared/defaultAnimation";
import { FaEye } from "react-icons/fa";

export const ViewersCounter = () => {
  const [viewersCounter, setViewersCounter] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);
  const counter = useMotionValue(0);
  const animatedCounter = useTransform(counter, Math.round);

  useEffect(() => {
    const updateUsersCount = async () => {
      try {
        const currentCount = await getCounter();
        if (!isUniqueUser()) {
          setUniqueUser();
          const newCount = currentCount + 1;
          await updateCounter(newCount);
          setViewersCounter(newCount);
        } else {
          setViewersCounter(currentCount);
        }
      } catch (error) {
        console.error("Error updating users count:", error);
      }
    };

    updateUsersCount();
  }, []);

  useEffect(() => {
    const animation = setTimeout(
      () =>
        animate(counter, viewersCounter, {
          duration: 7,
          ease: [0.42, 0, 0.58, 1],
        }),
      500
    );
    return () => clearTimeout(animation);
  }, [viewersCounter]);

  useEffect(() => {
    const unsubscribe = animatedCounter.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [animatedCounter]);

  return (
    <m.div
      className="fixed bottom-5 right-5 z-1000 px-[13px] bp632:px-[20px] py-[6.5px] bp632:py-[10px] bg-background2 rounded-md shadow-custom2 flex items-center gap-[3px] justify-center"
      {...defaultAnimation({ margin: "20px 0px 0px 0px", direction: 15 })}
    >
      <FaEye className="w-[24px] h-[24px] text-white" />
      <span className="text-[20px] text-texture font-bold min-w-[40px] text-center">
        {displayValue}
      </span>
    </m.div>
  );
};
