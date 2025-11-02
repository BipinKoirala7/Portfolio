import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import GetInTouchSection from "./GetInTouchSection";
import GreetingsSection from "./GreetingsSection";
import ProjectsSection from "./ProjectsSection";
import ResumeSection from "./ResumeSection";
import SkillsSection from "./SkillsSection";

function HomeComponent() {
  return (
    <div className="flex flex-col gap-12">
      <GreetingsSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ResumeSection />
      <ProjectsSection />
      <GetInTouchSection />
    </div>
  );
}

export default HomeComponent;
