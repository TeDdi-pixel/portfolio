import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  pb?: boolean;
};

const DefaultSection = ({ children, pb=true }: Props) => {

  return (
    <section
      className={`px-[15px] bp500:px-[34.5px] relative w-full scroll-pt-[45.5px] sm:px-[34.5px] max-w-[1400px] ${
        pb ? "pb-[87.5px] md:pb-[143px]" : ""
      }`}
    >
      {children}
    </section>
  );
};

export default DefaultSection;
