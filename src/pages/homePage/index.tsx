import {
  ProjectsSection,
  SoftSkillsSection,
  HardSkillsSection,
  SummarySection,
} from "../../widgets/sections";
import { Header } from "../../widgets/header";
import { useEffect } from "react";
import { useHeaderStore } from "../../widgets/header/store";
import { ContactsSection } from "../../widgets/sections/contacts";
import { EducationSection } from "../../widgets/sections/education";

const HomePage = () => {
  const { burgerMenu } = useHeaderStore((state) => state);

  useEffect(() => {
    if (burgerMenu) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [burgerMenu]);

  return (
    <div>
      <div className="flex items-center flex-col mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] bg-purple rounded-b-3xl min-h-[100vh]">
        <Header />
        <SummarySection />
      </div>

      <HardSkillsSection />
      <ProjectsSection />
      <SoftSkillsSection />
      <EducationSection />
      <ContactsSection />
    </div>
  );
};

export default HomePage;
