import AnimatedDiv from "../../../../shared/animatedDiv";
import { Title } from "../../../../entities/sectionTitle";
import { Element } from "react-scroll";
import useWidth from "../../../../hooks/useWidth";
import { contacts } from "../config";

export const ContactsSection = () => {
  const { active } = useWidth(500);

  return (
    <div className="bg-background2 py-[87.5px] md:py-[143px]">
      <section
        className={`mx-auto my-0 max-w-[1400px] relative w-full scroll-pt-[45.5px]  ${
          active ? "px-[15px]" : "px-[34.5px]"
        }  sm:px-[34.5px]`}
      >
        <Element name="Contacts" />

        <div className=" px-[15px] md:px-[30px] lg:px-[50px] ">
          <Title title="Contacts" />
          {contacts.map((contact) => (
            <div key={contact.id}>
              <AnimatedDiv
                className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2`}
                delay={0.3}
                x={-50}
                isBlur
              >
                {contact.title}
              </AnimatedDiv>
              <AnimatedDiv
                isBlur
                x={-50}
                delay={0.4}
                duration={0.8}
                className="text-accent text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[7px]"
              >
                {contact.text}
              </AnimatedDiv>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
