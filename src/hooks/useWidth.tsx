import { useCallback, useEffect, useState } from "react";

const useWidth = (selectedWidth?: number) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleResize = useCallback(() => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
    if (selectedWidth) {
      setActive(currentWidth <= selectedWidth);
    }
  }, [selectedWidth]);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);

  return { width, active, scrollPosition };
};

export default useWidth;
