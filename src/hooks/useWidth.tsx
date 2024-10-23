import { useCallback, useEffect, useState } from "react";

const useWidth = (selectedWidth?: number) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
    if(!selectedWidth) return
    if (width <= selectedWidth) {
      setActive(true);
    } else setActive(false);
  }, [selectedWidth, width]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const callBackScroll = useCallback(() => {
    const position = window.scrollY;
    setScrollPosition(position);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", callBackScroll, { passive: true });
    handleResize();
    return () => {
      window.removeEventListener("scroll", callBackScroll);
    };
  }, [handleResize, callBackScroll]);

  return { width, active,scrollPosition };
};

export default useWidth;
