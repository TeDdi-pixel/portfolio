import { forwardRef, ReactNode } from "react";
import useWidth from "../../hooks/useWidth";

type Props = {
  children: ReactNode;
};

const DefaultSection = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    const { active } = useWidth(500);

    return (
      <section
        ref={ref}
        className={`${
          active ? "px-[15px]" : "px-[34.5px]"
        } relative w-full scroll-pt-[45.5px] sm:px-[34.5px] pb-[87.5px] md:pb-[143px] max-w-[1400px]`}
      >
        {children}
      </section>
    );
  }
);

export default DefaultSection;
