import { m } from "framer-motion";
import { contactTitleConfig } from "../config/title";
import { ReactNode } from "react";

type Props = {
  contactId: number;
  contactTitle: string | ReactNode;
};

const ContactTitle = ({ contactId, contactTitle }: Props) => {
  return (
    <m.div
      className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2`}
      {...contactTitleConfig(contactId)}
    >
      {contactTitle}
    </m.div>
  );
};

export default ContactTitle;
