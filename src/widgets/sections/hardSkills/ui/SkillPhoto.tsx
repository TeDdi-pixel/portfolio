import { useState } from "react";
import LogoSpinner from "../../../../shared/spinner/LogoSpinner";

type Props = {
  photoPath: string;
  photoAlt: string;
};

const SkillPhoto = ({ photoPath, photoAlt }: Props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <div className="max-w-[50px] w-full max-h-[50px] h-full">
      {!isLoaded && <LogoSpinner />}
      <img
        src={photoPath}
        alt={photoAlt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        draggable={false}
        className={`select-none brightness-125 object-contain max-w-[40px] max-h-[40px] sm:max-w-[50px] sm:max-h-[50px] w-full ${
          photoAlt === "js_logo" ? "rounded-[5px]" : ""
        } ${
          photoAlt === "FSD_logo" || photoAlt === "Zustand_logo"
            ? "h-[50px]"
            : ""
        }
        ${photoAlt === "next_logo" ? "rounded-full" : ""}
        `}
      />
    </div>
  );
};

export default SkillPhoto;
