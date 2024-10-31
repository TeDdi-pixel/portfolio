import { ReactNode } from "react";
import { Element } from "react-scroll";
import { Title } from "../../entities/sectionTitle";
import { TypeEmoji } from "../../entities/sectionTitle/config/emoji";

type Props = {
  children: ReactNode;
  title: string;
  emoji: TypeEmoji;
};

const DefaultSection = ({ children, title, emoji }: Props) => {
  return (
    <section className="px-[15px] bp500:px-[34.5px] relative w-full scroll-pt-[45.5px] sm:px-[34.5px] max-w-[1400px] pb-[87.5px] md:pb-[143px]">
      <Element name={title} />
      <Title title={title} emoji={emoji} />
      {children}
    </section>
  );
};

export default DefaultSection;
