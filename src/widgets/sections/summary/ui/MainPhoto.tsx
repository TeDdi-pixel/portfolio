import { m } from "framer-motion";
import { defaultAnimation } from "../../../../shared/defaultAnimation";
import { useState } from "react";
import Spinner from "../../../../shared/spinner/Spinner";
const MainPhoto = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <m.div
      {...defaultAnimation({ direction: 20 })}
      className="mx-auto bp912:mx-0 w-[280px] h-[280px] xl:w-[480px] xl:h-[430px] rounded-full bp912:rounded-3xl overflow-hidden shadow-custom2 bg-slate-900"
    >
      {!isLoaded && <Spinner />}
      <img
        src="./main_photo.webp"
        alt="main_photo"
        className="object-cover w-full h-full"
        onLoad={() => setIsLoaded(true)}
      />
    </m.div>
  );
};

export default MainPhoto;
