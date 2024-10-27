import { useEffect, useState } from "react";

const useFirstAnimation = () => {
  const [firstAnimation, setFirstAnimation] = useState<boolean>(true);
  useEffect(() => {
    if (firstAnimation) {
      setTimeout(() => {
        setFirstAnimation(false);
      }, 1100);
    }
  });
  return firstAnimation;
};

export default useFirstAnimation;
