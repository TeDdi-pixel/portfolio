import { useCallback, useEffect, useState } from "react";

const useWidth = (selectedWidth?: number) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
    if (selectedWidth) {
      setActive(currentWidth <= selectedWidth);
    }
  }, [selectedWidth]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return { width, active };
};

export default useWidth;
