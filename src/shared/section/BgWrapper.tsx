import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor: string;
  py?: boolean;
  rounded?: boolean;
  animation?: boolean;
};

const BgWrapper = ({ children, bgColor, py, rounded, animation }: Props) => {
  return (
    <div
      className={`${bgColor} ${py ? "py-[87.5px] md:py-[143px]" : ""} ${
        rounded ? "rounded-3xl" : ""
      } ${
        animation
          ? "w-full h-auto bg-react bg-size-custom bg-position-pattern filter-dimmed bg-opacity-15 animate-scrollBackground"
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export default BgWrapper;
