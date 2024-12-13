import { Header } from "../../widgets/header";
import { lazy, Suspense, useEffect } from "react";
import { useHeaderStore } from "../../widgets/header/store";
import { ViewersCounter } from "../../features/viewersCounter";
import Spinner from "../../shared/spinner/Spinner";
const SummarySection = lazy(() => import("../../widgets/sections/summary/ui"));
const HardSkillsSection = lazy(
  () => import("../../widgets/sections/hardSkills/ui")
);
const ProjectsSection = lazy(
  () => import("../../widgets/sections/projects/ui")
);
const SoftSkillsSection = lazy(
  () => import("../../widgets/sections/softSkills/ui")
);
const EducationSection = lazy(
  () => import("../../widgets/sections/education/ui")
);
const ContactsSection = lazy(
  () => import("../../widgets/sections/contacts/ui")
);

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

  const sections = [
    { id: 0, component: <HardSkillsSection /> },
    { id: 1, component: <ProjectsSection /> },
    { id: 2, component: <SoftSkillsSection /> },
    { id: 3, component: <EducationSection /> },
    { id: 4, component: <ContactsSection /> },
  ];

  return (
    <>
      <div className="flex items-center flex-col justify-between w-full mx-auto my-0 px-[15px] md:px-[30px] lg:px-[50px] bg-gradient-purple min-h-[100vh] transition-[border-radius] duration-1000">
        <Header />
        <Suspense fallback={<Spinner />}>
          <SummarySection />
        </Suspense>
      </div>

      {sections.map((section) => (
        <div key={section.id} className="min-h-[553px] relative">
          <Suspense fallback={<Spinner />}>{section.component}</Suspense>
        </div>
      ))}

      <ViewersCounter />
    </>
  );
};

export default HomePage;
