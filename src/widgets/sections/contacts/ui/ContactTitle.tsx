import { m } from "framer-motion";
import { ReactNode } from "react";
import { defaultAnimation } from "../../../../shared/defaultAnimation";

type Props = {
  contactTitle: string | ReactNode;
};

const ContactTitle = ({ contactTitle }: Props) => {
  return (
    <m.div
      className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2`}
      {...defaultAnimation({ margin: "-35px 0px -35px 0px", direction: -20 })}
    >
      {contactTitle}
    </m.div>
  );
};

export default ContactTitle;
