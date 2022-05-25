import { Fragment } from "react";
import Header from "./Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Socials from "./Socials/Socials";
import ProjectCard from "./Projects/ProjectCard";
import Projects from "./Projects/Projects";
import projects from "../projects";

function App() {
  return (
    <Fragment>
      <div className="container mx-auto mb-10">
        <Header
        // handleProjectsScroll = {}
        // handleAboutScroll ={}
        // handleContactScroll ={}
        />
        <LandingPage />
        <Socials />
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
    </Fragment>
  );
}

export default App;
