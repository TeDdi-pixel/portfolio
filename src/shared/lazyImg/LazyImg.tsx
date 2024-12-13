import { CSSProperties, useState } from "react";
import Spinner from "../spinner/Spinner";

type Props = {
  src: string;
  style: CSSProperties;
  active: boolean;
  alt: string;
};

const LazyImg = ({ src, style, active, alt }: Props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <>
      {!isLoaded && <Spinner />}
      <img
        loading="lazy"
        src={src}
        alt={alt}
        style={style}
        onLoad={() => setIsLoaded(true)}
        className={`object-cover xl:max-h-[350px] w-full h-full ${
          active ? "max-h-[300px] md:max-h-[350px]" : "max-h-[300px]"
        }`}
      />
    </>
  );
};

export default LazyImg;
