import { Title } from "../../../../entities/sectionTitle";
import { Element } from "react-scroll";
import useWidth from "../../../../hooks/useWidth";
import { contacts } from "../config";
import ContactTitle from "./ContactTitle";
import ContactLink from "./ContactLink";
import RegularContact from "./RegularContact";

export const ContactsSection = () => {
  const { active } = useWidth(1023);
  return (
    <div
      className="py-[87.5px] md:py-[143px] rounded-3xl w-full h-auto bg-contacts animate-scrollBackground2"
      style={{ minHeight: `${active ? "calc(100vh - 53.75px)" : "100vh"}` }}
    >
      <section
        className={`mx-auto my-0 max-w-[1400px] relative w-full scroll-pt-[45.5px] px-[15px] bp500:px-[34.5px]`}
      >
        <Element name="Contacts" />

        <div className="px-[15px] md:px-[30px] lg:px-[50px]">
          <Title title="Contacts" emoji="📞" />
          {contacts.map((contact) => (
            <div key={contact.id}>
              <ContactTitle
                contactId={contact.id}
                contactTitle={contact.title}
              />

              {contact.text && (
                <RegularContact
                  contactId={contact.id}
                  contactText={contact.text}
                />
              )}
              {contact.linkText && (
                <ContactLink
                  contactId={contact.id}
                  contactLink={contact.linkText}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
