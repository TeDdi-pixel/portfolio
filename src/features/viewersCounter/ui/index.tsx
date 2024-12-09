import { useEffect, useState } from "react";
import { getCounter, updateCounter } from "../modul/api";
import { isUniqueUser, setUniqueUser } from "../lib/utils";
import { animate, useMotionValue, useTransform, m } from "framer-motion";
import { defaultAnimation } from "../../../shared/defaultAnimation";

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
      className="fixed min-w-[240px] bottom-5 right-5 z-1000 px-[35px] py-[10px] bg-background2 rounded-md shadow-custom2 flex items-center gap-[3px] justify-center"
      {...defaultAnimation({ margin: "20px 0px 0px 0px", direction: 15 })}
    >
      <span className="text-white text-[16px]">All-time viewers: </span>
      <span className="text-[20px] text-texture font-bold min-w-[38px] text-center">
        {displayValue}
      </span>
    </m.div>
  );
};
