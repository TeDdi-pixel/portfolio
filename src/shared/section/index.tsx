import { ReactNode } from "react";
import useWidth from "../../hooks/useWidth";

const Section = ({ children }: { children: ReactNode }) => {
  const { active } = useWidth(432);
  return (
    <section
      className={`relative w-full scroll-pt-[45.5px]  ${
        active ? "px-[15px]" : "px-[34.5px]"
      }  sm:px-[34.5px] mb-[87.5px] md:mb-[143px]`}
    >
      {children}
    </section>
  );
};

export default Section;
