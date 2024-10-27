import {
  ProjectsSection,
  StackSection,
  SummarySection,
} from "../../widgets/sections";
import { Header } from "../../widgets/header";
import { useEffect, useRef } from "react";
import { useHeaderStore } from "../../widgets/header/store";
import { ContactsSection } from "../../widgets/sections/contacts";
import { EducationSection } from "../../widgets/sections/education";

const HomePage = () => {
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
      <div className="flex items-center flex-col mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] bg-purple rounded-b-3xl min-h-[100vh]">
        <Header />
        <SummarySection />
      </div>

      <StackSection />

      <div className="bg-background2 w-full rounded-3xl">
        <ProjectsSection />
      </div>
      <div className="max-w-[1400px] mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] pt-[87.5px] md:pt-[143px]">
        <EducationSection />
      </div>
      <ContactsSection />
    </div>
  );
};

export default HomePage;
