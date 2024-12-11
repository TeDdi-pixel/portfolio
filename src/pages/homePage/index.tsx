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
import { ViewsCount } from "../../features/viewsCount";

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
    <>
      <div className="flex items-center flex-col justify-between w-full mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] bg-gradient-purple min-h-[100vh] transition-[border-radius] duration-1000">
        <Header />
        <SummarySection />
      </div>

      <HardSkillsSection />
      <ProjectsSection />
      <SoftSkillsSection />
      <EducationSection />
      <ContactsSection />
      <ViewsCount />
    </>
  );
};

export default HomePage;
