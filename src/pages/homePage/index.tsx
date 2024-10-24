import {
  ProjectsSection,
  StackSection,
  SummarySection,
} from "../../widgets/sections";
import { Header } from "../../widgets/header";
import { useEffect, useRef } from "react";
import { useHeaderStore } from "../../widgets/header/store";
import { ContactsSection } from "../../widgets/sections/contacts";
import { EducationSection } from "../../widgets/sections/education/ui";

const HomePage = () => {
  // const { active } = useWidth(1024);
  const { burgerMenu } = useHeaderStore((state) => state);
  const homePageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (burgerMenu) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [burgerMenu]);

  return (
    <div ref={homePageRef}>
      <div className="mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] max-w-[1400px]">
        <Header />
        <SummarySection />
      </div>

      <StackSection />

      <div className="mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] max-w-[1400px]">
        <ProjectsSection />
        <EducationSection />
      </div>
      <ContactsSection />
    </div>
  );
};

export default HomePage;
