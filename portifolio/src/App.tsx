import { useEffect } from "react";
import Topbar from "./components/Topbar";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import SkillsBlock from "./components/SkillsBlock";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsBlock from "./components/ProjectsBlock";
import ContactBlock from "./components/ContactBlock";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  useEffect(() => {
    document.body.classList.add("page-loaded");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Topbar />
      <main>
        <IntroSection />
        <AboutSection />
        <ProjectsBlock />
        <ExperienceTimeline />
        <SkillsBlock />
        <ContactBlock />
      </main>
      <SiteFooter />
    </>
  );
}
