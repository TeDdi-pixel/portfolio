import { contactLinkConfig } from "../config/link";
import { m } from "framer-motion";

type Props = {
  contactId: number;
  contactLink: string;
};

const ContactLink = ({ contactId, contactLink }: Props) => {
  return (
    <m.div
      className="text-accent-foreground text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[15px]"
      {...contactLinkConfig(contactId)}
    >
      {contactLink && (
        <a href={contactLink} className="hover:underline hover:decoration-texture">
          {contactLink}
        </a>
      )}
    </m.div>
  );
};

export default ContactLink;
