import { m } from "framer-motion";
import { regularTextConfig } from "../config/regularText";

type Props = {
  contactId: number;
  contactText: string;
};

const RegularContact = ({ contactId, contactText }: Props) => {
  return (
    <m.div
      {...regularTextConfig(contactId)}
      className="text-accent-foreground text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[7px]"
    >
      {contactText}
    </m.div>
  );
};

export default RegularContact;
