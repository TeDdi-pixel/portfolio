import { m } from "framer-motion";
import { defaultAnimation } from "../../../../shared/defaultAnimation";
import { useCursor } from "../../../../features/cursorFollower/store";

const RegularContact = ({ contactText }: { contactText: string }) => {
  const { setCursorType, setDefaultCursor } = useCursor((state) => state);
  return (
    <m.div
      id="contact"
      onMouseEnter={(e) => {
        setCursorType((e.currentTarget as HTMLDivElement).id);
      }}
      onMouseLeave={() => {
        setDefaultCursor();
      }}
      {...defaultAnimation({ margin: "-25px 0px -25px 0px" })}
      className="text-accent-foreground text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[7px]"
    >
      {contactText}
    </m.div>
  );
};

export default RegularContact;
