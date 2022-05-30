import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Socials from "./Socials/Socials";
import ProjectCard from "./Projects/ProjectCard";
import Projects from "./Projects/Projects";
import projects from "./data/projects";
import SkillsCard from "./Skills/SkillsCard";
import Skills from "./Skills/Skills";
import skills from "./data/skills";
import About from "./About/About";
import { useRef } from "react";
function App() {
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  // Handling Scroll
  const handleProjectsScroll = () => {
    window.scrollTo({
      top: projectsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container mx-auto mb-10">
      <Header
        handleProjectsScroll={handleProjectsScroll}
        handleAboutScroll={handleAboutScroll}
        handleContactScroll={handleContactScroll}
      />
      <LandingPage />
      <Socials />
      <div ref={projectsRef}>
        <Projects>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
            />
          ))}
        </Projects>
      </div>
      <Skills>
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </Skills>
      <About />
      <div
        className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0"
        ref={aboutRef}
      >
        <h1 className="text-2xl text-bold">Contact.</h1>
        <div className="mt-5" ref={contactRef}>
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
        Made With ❤ by <a className="underline underline-offset-1">Mahmood</a>
      </h1>
    </div>
  );
}

export default App;
