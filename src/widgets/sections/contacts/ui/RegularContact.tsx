import { m } from "framer-motion";
import { defaultAnimation } from "../../../../shared/defaultAnimation";

const RegularContact = ({ contactText }: { contactText: string }) => {
  return (
    <m.div
      {...defaultAnimation({ margin: "-25px 0px -25px 0px" })}
      className="text-accent-foreground text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[7px]"
    >
      {contactText}
    </m.div>
  );
};

export default RegularContact;
