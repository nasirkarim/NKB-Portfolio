import { useEffect } from "react";
import EducationExperience from "../components/shell/EducationExperience";
import Freelancing from "../components/shell/Freelancing";
import { FaDownload } from "react-icons/fa6";
import { personalInfo } from "../data/portfolioData";

function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container page-banner">
        <div className="section-eyebrow">CAREER & CREDENTIALS</div>
        <h1 className="page-banner-title">
          My <span>Resume & Journey</span>
        </h1>
        <p className="page-banner-desc" style={{ marginBottom: "24px" }}>
          Full timeline of my practical web development experience, Saylani Mass IT Training, and academic qualifications.
        </p>

        <a
          href={personalInfo.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: "inline-flex" }}
        >
          <FaDownload /> Download Complete CV (PDF)
        </a>
      </div>

      <EducationExperience />
      <Freelancing />
    </div>
  );
}

export default Resume;