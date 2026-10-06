import { useState, useEffect, useRef } from "react";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCircleInfo,
  FaXmark,
  FaCheck,
  FaTriangleExclamation,
  FaLightbulb,
  FaUserGear,
  FaLayerGroup,
} from "react-icons/fa6";
import { projectsData } from "../../data/portfolioData";
import { gsap, revealSectionHeading, isReducedMotion } from "../../utils/animations";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  const filterTabs = ["All", "React Apps", "Web Apps", "JavaScript"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  // GSAP Heading Reveal
  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        revealSectionHeading(headingRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP Stagger Entrance on Filter Change
  useEffect(() => {
    if (isReducedMotion() || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".project-card-item");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 18, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.07,
        ease: "power2.out",
        overwrite: "auto",
      }
    );
  }, [activeFilter]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headingRef}>
          <div className="section-eyebrow">PORTFOLIO WORK</div>
          <h2 className="section-title">
            Featured <span>Projects & Case Studies</span>
          </h2>
          <p className="section-subtitle">
            A selection of modern web applications and client solutions I've developed using React, JavaScript, and responsive design systems.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="projects-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab-btn ${activeFilter === tab ? "active" : ""}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" ref={gridRef}>
          {filteredProjects.map((project) => (
            <div className="project-card-item" key={project.id} id={project.id}>
              {/* Browser Mockup Top Bar */}
              <div className="project-browser-bar">
                <div className="browser-dots">
                  <span className="browser-dot dot-red"></span>
                  <span className="browser-dot dot-yellow"></span>
                  <span className="browser-dot dot-green"></span>
                </div>
                <span className="browser-url-pill">
                  {project.id}.nk.dev
                </span>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <span className="project-category-tag">{project.category}</span>
                <h3 className="project-item-title">{project.title}</h3>
                <h4 className="project-item-subtitle">{project.subtitle}</h4>

                <p className="project-item-desc">{project.description}</p>

                {/* Tech Badges */}
                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span className="tech-badge" key={idx}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-card-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-action btn-demo"
                    title={`View live demo of ${project.title}`}
                  >
                    <FaArrowUpRightFromSquare /> Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-action btn-code"
                    title={`View GitHub source code for ${project.title}`}
                  >
                    <FaGithub /> Code
                  </a>

                  <button
                    className="btn-card-action btn-details"
                    onClick={() => setSelectedProject(project)}
                    title={`View Case Study & technical details for ${project.title}`}
                  >
                    <FaCircleInfo /> Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Project Case Study Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-study-title"
        >
          <div
            className="modal-dialog-box case-study-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <FaXmark />
            </button>

            {/* Modal Header */}
            <div className="modal-header">
              <span className="project-category-tag">
                {selectedProject.category} • Case Study
              </span>
              <h3 className="modal-title" id="modal-case-study-title">
                {selectedProject.title}
              </h3>
              <p className="modal-subtitle">{selectedProject.subtitle}</p>
            </div>

            {/* Overview */}
            <div className="case-study-section">
              <h4 className="modal-section-title">
                <FaLayerGroup style={{ color: "var(--primary)" }} /> Project Overview
              </h4>
              <p className="project-item-desc" style={{ fontSize: "1rem" }}>
                {selectedProject.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="case-study-grid-2">
              <div className="case-study-card problem-card">
                <h5 className="case-study-card-title">
                  <FaTriangleExclamation style={{ color: "#f59e0b" }} /> The Problem
                </h5>
                <p className="case-study-card-text">
                  {selectedProject.problem || "Modern operational processes lacked automated digital tracking, creating bottlenecks."}
                </p>
              </div>

              <div className="case-study-card solution-card">
                <h5 className="case-study-card-title">
                  <FaLightbulb style={{ color: "#10b981" }} /> The Solution
                </h5>
                <p className="case-study-card-text">
                  {selectedProject.solution || "Engineered an accessible web interface with responsive state management and clean layout architecture."}
                </p>
              </div>
            </div>

            {/* My Contribution */}
            {selectedProject.myContribution && (
              <div className="case-study-section" style={{ marginTop: "20px" }}>
                <h4 className="modal-section-title">
                  <FaUserGear style={{ color: "var(--accent)" }} /> My Engineering Contribution
                </h4>
                <p className="project-item-desc">
                  {selectedProject.myContribution}
                </p>
              </div>
            )}

            {/* Key Features / Architectural Highlights */}
            <div className="case-study-section">
              <h4 className="modal-section-title">Key Architectural Highlights</h4>
              <ul className="modal-highlights-list">
                {selectedProject.highlights.map((highlight, idx) => (
                  <li className="modal-highlight-item" key={idx}>
                    <FaCheck style={{ color: "var(--emerald)", marginTop: "4px" }} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="case-study-section">
              <h4 className="modal-section-title">Technologies & Tools Used</h4>
              <div className="project-tech-stack" style={{ marginBottom: "20px" }}>
                {selectedProject.technologies.map((tech, idx) => (
                  <span className="tech-badge" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="modal-footer-actions">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FaArrowUpRightFromSquare /> Open Live Demo
              </a>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub /> View Source on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;