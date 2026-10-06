import { useEffect } from "react";
import AboutSection from "../components/shell/About";
import SkillsSection from "../components/shell/Skills";
import Freelancing from "../components/shell/Freelancing";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container page-banner">
        <div className="section-eyebrow">DISCOVER MY STORY</div>
        <h1 className="page-banner-title">
          About <span>Nasir Karim</span>
        </h1>
        <p className="page-banner-desc">
          Frontend Developer with a dedication to engineering responsive, modern, and accessible web experiences.
        </p>
      </div>

      <AboutSection />
      <SkillsSection />
      <Freelancing />
    </div>
  );
}

export default About;