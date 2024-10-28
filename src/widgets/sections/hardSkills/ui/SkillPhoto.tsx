type Props = {
  photoPath: string;
  photoAlt: string;
};

const SkillPhoto = ({ photoPath, photoAlt }: Props) => {
  return (
    <img
      src={photoPath}
      alt={photoAlt}
      className={`brightness-125 object-contain max-w-[40px] max-h-[40px] sm:max-w-[50px] sm:max-h-[50px] w-full ${
        photoAlt === "js_logo" ? "rounded-[5px]" : ""
      } ${
        photoAlt === "FSD_logo" || photoAlt === "Zustand_logo" ? "h-[50px]" : ""
      }`}
    />
  );
};

export default SkillPhoto;
