import { ReactNode, useEffect, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { m } from "framer-motion";
import { useCursor } from "../store";
import { variants as cursorVariants } from "./../config";

const FollowerContainer = ({ children }: { children: ReactNode }) => {
  const {
    cursorType,
    isCursorEnabled,
    cursorText,
    setIsCursorEnabled,
    isTouchDevice,
    setIsTouchDevice,
  } = useCursor((state) => state);
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouchDevice);
      setIsCursorEnabled(!isTouchDevice);
    };
    checkTouchDevice();
  }, []);

  const mouseXPosition = mouse.clientX ?? 0;
  const mouseYPosition = mouse.clientY ?? 0;
  const cursorAppearance = cursorVariants(mouseXPosition, mouseYPosition);
  const variants = {
    default: cursorAppearance.default,
    title: cursorAppearance.title,
    mainTitle: cursorAppearance.mainTitle,
    emoji: cursorAppearance.emoji,
    text: cursorAppearance.text,
    textImportant: cursorAppearance.textImportant,
    navLinks: cursorAppearance.navLinks,
    popUpLinks: cursorAppearance.popUpLinks,
    cursorButton: cursorAppearance.cursorButton,
    projectLink: cursorAppearance.projectLink,
    performance: cursorAppearance.performance,
    contact: cursorAppearance.contact,
    sliderLeft: cursorAppearance.sliderLeft,
    sliderRight: cursorAppearance.sliderRight,
  };

  return (
    <div className="w-full h-full" ref={ref}>
      {children}
      {!isTouchDevice && isCursorEnabled && (
        <m.div
          variants={variants}
          className={`fixed z-[1010] flex content-center justify-center top-0 left-0 h-[20px] w-[20px] bg-purple rounded-full pointer-events-none text-white text-center text-[16px] ${
            cursorType === "default" ||
            cursorType === "performance" ||
            cursorType === "projectLink" ||
            cursorType === "text" ||
            cursorType === "sliderLeft" ||
            cursorType === "sliderRight"
              ? ""
              : "mix-blend-difference"
          }`}
          animate={cursorType}
        >
          <span className="text-[20px] flex w-full h-full items-center justify-center whitespace-nowrap">
            {cursorText}
          </span>
        </m.div>
      )}
    </div>
  );
};

export default FollowerContainer;
