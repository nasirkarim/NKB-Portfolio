import { useEffect } from "react";
import ProjectsSection from "../components/shell/Projects";
import Freelancing from "../components/shell/Freelancing";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container page-banner">
        <div className="section-eyebrow">PORTFOLIO SHOWCASE</div>
        <h1 className="page-banner-title">
          Selected <span>Projects</span>
        </h1>
        <p className="page-banner-desc">
          Browse through my latest works, responsive web apps, and digital platforms built with modern technology.
        </p>
      </div>

      <ProjectsSection />
      <Freelancing />
    </div>
  );
}

export default Projects;