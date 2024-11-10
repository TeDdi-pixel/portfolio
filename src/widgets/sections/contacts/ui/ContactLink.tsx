import { defaultAnimation } from "../../../../shared/defaultAnimation";
import { m } from "framer-motion";

const ContactLink = ({ contactLink }: { contactLink: string }) => {
  return (
    <m.div
      className="text-accent-foreground text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[15px]"
      {...defaultAnimation({ margin: "-25px 0px -25px 0px" })}
    >
      {contactLink && (
        <a
          href={contactLink}
          className="hover:underline hover:decoration-texture"
        >
          {contactLink}
        </a>
      )}
    </m.div>
  );
};

export default ContactLink;
