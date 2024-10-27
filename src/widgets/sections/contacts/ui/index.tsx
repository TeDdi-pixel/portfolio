import { Title } from "../../../../entities/sectionTitle";
import { Element } from "react-scroll";
import useWidth from "../../../../hooks/useWidth";
import { contacts } from "../config";
import { motion } from "framer-motion";
export const ContactsSection = () => {
  const { active } = useWidth(500);
  const { active: active2 } = useWidth(1023);
  return (
    <div
      className="py-[87.5px] md:py-[143px] rounded-3xl"
      style={{ minHeight: `${active2 ? "calc(100vh - 53.75px)" : "100vh"}` }}
    >
      <section
        className={`mx-auto my-0 max-w-[1400px] relative w-full scroll-pt-[45.5px] ${
          active ? "px-[15px]" : "px-[34.5px]"
        }  sm:px-[34.5px]`}
      >
        <Element name="Contacts" />

        <div className="px-[15px] md:px-[30px] lg:px-[50px]">
          <Title title="Contacts" emoji="😏" />
          {contacts.map((contact) => (
            <div key={contact.id}>
              <motion.div
                className={`text-texture text-[24px] sm:text-[28px] lg:text-[32px] mb-2`}
                viewport={{ margin: "-35px 0px -35px 0px", once: true }}
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  x: -50,
                  filter: `blur(5px)`,
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  x: 0,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.1 * contact.id * 0.5,
                  },
                }}
              >
                {contact.title}
              </motion.div>
              {contact.link && (
                <motion.div
                  viewport={{ margin: "-25px 0px -25px 0px", once: true }}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    x: -50,
                    filter: `blur(5px)`,
                  }}
                  whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.1 * contact.id * 0.5,
                    },
                  }}
                  className="text-accent text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[15px]"
                >
                  <a
                    href={contact.link}
                    className="underline decoration-texture"
                  >
                    {contact.linkText}
                  </a>
                </motion.div>
              )}
              {contact.text && (
                <motion.div
                  viewport={{ margin: "-25px 0px -25px 0px", once: true }}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    x: -50,
                    filter: `blur(5px)`,
                  }}
                  whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.1 * contact.id * 0.5,
                    },
                  }}
                  className="text-accent text-[16px] md:text-[18px] lg:text-[23px] max-w-[778px] break-words mb-[7px]"
                >
                  {contact.text}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
