import { Element } from "react-scroll";
import { Title } from "../../entities/sectionTitle";
import Section from "../../shared/section";
import {
  ProjectsSection,
  StackSection,
  SummarySection,
} from "../../widgets/sections";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";

const HomePage = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
    // className={`${
    //   menuOpen
    //     ? "fixed inset-0 z-20 bg-black opacity-50 backdrop-blur-sm"
    //     : ""
    // }`}
    >
      <div className="mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] max-w-[1400px]">
        <Header />
        <SummarySection />
      </div>

      <StackSection />

      <div className="mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] max-w-[1400px]">
        <div className="py-[87.5px] md:py-[143px]">
          <ProjectsSection />
        </div>
        <Section>
          <Element name="Contacts" />
          <Title title="Contacts" />
        </Section>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
