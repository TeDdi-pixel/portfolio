import { ReactNode, useEffect, useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { m } from "framer-motion";
import { useCursor } from "../store";
import { useEmojis } from "../../../entities/sectionTitle/store";
const FollowerContainer = ({ children }: { children: ReactNode }) => {
  const { cursorType, isCursorEnabled, cursorText, setIsCursoreEnabled } =
    useCursor((state) => state);
  const { setIsEmojisEnabled } = useEmojis((state) => state);
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouchDevice);
      setIsEmojisEnabled(isTouchDevice);
      setIsCursoreEnabled(!isTouchDevice);
    };
    checkTouchDevice();
  }, []);

  const mouseXPosition = mouse.clientX ?? 0;
  const mouseYPosition = mouse.clientY ?? 0;

  const variants = {
    default: {
      opacity: mouse.clientX && mouse.clientY === 0 ? 0 : 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      backgroundColor: "hsl(49, 91%, 52%)",
      x: mouseXPosition - 10,
      y: mouseYPosition - 10,
    },
    title: {
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "rgba(255, 255, 255, 1)",
      height: 120,
      width: 120,
      fontSize: "18px",
      x: mouseXPosition - 60,
      y: mouseYPosition - 60,
      transition: {
        type: "spring",
      },
    },
    mainTitle: {
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "rgba(255, 255, 255, 1)",
      height: 160,
      width: 160,
      fontSize: "18px",
      x: mouseXPosition - 80,
      y: mouseYPosition - 80,
      transition: {
        type: "spring",
      },
    },
    emoji: {
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "rgba(255, 255, 255, 1)",
      height: 120,
      width: 120,
      fontSize: "18px",
      x: mouseXPosition - 60,
      y: mouseYPosition - 60,
      transition: {
        type: "spring",
      },
    },
    text: {
      opacity: 1,
      backgroundColor: "hsl(49, 91%, 52%)",
      color: "rgba(255, 255, 255, 1)",
      height: 40,
      width: 4,
      fontSize: "18px",
      x: mouseXPosition - 2,
      y: mouseYPosition - 20,
    },
    navLinks: {
      opacity: 0,
      height: 0,
      width: 0,
      x: mouseXPosition - 0,
      y: mouseYPosition - 0,
      transition: {
        type: "spring",
      },
    },
    popUpLinks: {
      opacity: 0,
      height: 0,
      width: 0,
      x: mouseXPosition - 0,
      y: mouseYPosition - 0,
      transition: {
        type: "spring",
      },
    },
    projectGitHub: {
      opacity: 1,
      backgroundColor: "rgba(0, 0, 0, 1)",
      color: "rgba(255, 255, 255, 1)",
      height: 60,
      width: 170,
      fontSize: "18px",
      x: mouseXPosition - 50,
      y: mouseYPosition - 70,
      transition: {
        type: "spring",
        bounce: 0.3,
        width: { duration: 0 },
        height: { duration: 0 },
      },
    },
    projectInBrowser: {
      opacity: 1,
      backgroundColor: "rgb(125, 91, 182)",
      color: "rgba(255, 255, 255, 1)",
      height: 60,
      width: 170,
      fontSize: "18px",
      x: mouseXPosition - 50,
      y: mouseYPosition - 70,
      transition: {
        type: "spring",
        bounce: 0.3,
        width: { duration: 0 },
        height: { duration: 0 },
      },
    },
  };

  return (
    <div className="w-full h-full" ref={ref}>
      {children}
      {!isTouchDevice && isCursorEnabled && (
        <m.div
          variants={variants}
          className={`fixed z-[1010] flex content-center justify-center top-0 left-0 h-[20px] w-[20px] bg-purple rounded-full pointer-events-none text-white text-center text-[16px] ${
            cursorType != "default" &&
            cursorType != "text" &&
            cursorType != "projectGitHub" &&
            cursorType != "projectInBrowser"
              ? "mix-blend-difference"
              : ""
          }`}
          animate={cursorType}
        >
          <span className="text-[20px] flex w-full h-full items-center justify-center">
            {cursorText}
          </span>
        </m.div>
      )}
    </div>
  );
};

export default FollowerContainer;
