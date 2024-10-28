import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  bgColor: string;
  py?: boolean;
  rounded?: boolean;
};

const BgWrapper = ({ children, bgColor, py, rounded }: Props) => {
  return (
    <div
      className={`${bgColor} ${py ? "py-[87.5px] md:py-[143px]" : ""} ${
        rounded ? "rounded-3xl" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default BgWrapper;
