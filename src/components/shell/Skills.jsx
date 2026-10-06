import { useState, useEffect, useRef } from "react";
import {
  FaReact,
  FaServer,
  FaPalette,
  FaMobileScreenButton,
  FaCss3Alt,
  FaHtml5,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiNodedotjs,
  SiFirebase,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { skillsData, projectsData } from "../../data/portfolioData";
import { gsap, revealSectionHeading, isReducedMotion } from "../../utils/animations";

// Icon mapper helper
const getSkillIcon = (iconName) => {
  switch (iconName) {
    case "FaReact":
      return <FaReact />;
    case "SiJavascript":
      return <SiJavascript />;
    case "SiHtml5":
      return <FaHtml5 />;
    case "SiCss3":
      return <FaCss3Alt />;
    case "FaMobileScreenButton":
      return <FaMobileScreenButton />;
    case "SiNodedotjs":
      return <SiNodedotjs />;
    case "SiFirebase":
      return <SiFirebase />;
    case "FaServer":
      return <FaServer />;
    case "SiGithub":
      return <SiGithub />;
    case "SiVite":
      return <SiVite />;
    case "FaPalette":
      return <FaPalette />;
    default:
      return <FaReact />;
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(() => skillsData[0].items[0]);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const detailPanelRef = useRef(null);

  const categories = ["All", "Frontend", "Backend & Database", "Tools & Workflow"];

  const allSkills = skillsData.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const displayedSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  // GSAP Heading Reveal on Mount
  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        revealSectionHeading(headingRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // GSAP Stagger when Category Changes
  useEffect(() => {
    if (isReducedMotion() || !gridRef.current) return;

    const tiles = gridRef.current.querySelectorAll(".skill-tile");
    gsap.fromTo(
      tiles,
      { opacity: 0, y: 16, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.05,
        ease: "power2.out",
        overwrite: "auto",
      }
    );
  }, [activeCategory]);

  // Animate skill detail panel on selection change
  useEffect(() => {
    if (isReducedMotion() || !detailPanelRef.current) return;

    gsap.fromTo(
      detailPanelRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, [selectedSkill]);

  // Find related projects for currently selected skill
  const relatedProjects = selectedSkill
    ? projectsData.filter((p) =>
        (selectedSkill.usedIn || []).includes(p.id) ||
        p.technologies.some((t) =>
          t.toLowerCase().includes(selectedSkill.name.toLowerCase().split(".")[0])
        )
      )
    : [];

  const scrollToProject = (projectId) => {
    const el = document.getElementById(projectId) || document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headingRef}>
          <div className="section-eyebrow">TECH STACK & CAPABILITIES</div>
          <h2 className="section-title">
            Interactive <span>Skills & Ecosystem</span>
          </h2>
          <p className="section-subtitle">
            Click or tap any technology card to view its hands-on architectural role and discover projects where it was applied.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Applied Context Panel */}
        {selectedSkill && (
          <div className="skill-interactive-panel" ref={detailPanelRef}>
            <div className="panel-badge-row">
              <span className="panel-status-pill">
                Active Selection: <strong>{selectedSkill.name}</strong>
              </span>
              <span className="panel-level-pill">{selectedSkill.tag}</span>
            </div>

            <div className="panel-content-grid">
              <div>
                <h3 className="panel-skill-title">
                  {selectedSkill.name} in Production
                </h3>
                <p className="panel-skill-desc">{selectedSkill.desc}</p>
              </div>

              <div className="panel-projects-wrap">
                <span className="panel-projects-label">
                  <FaLaptopCode /> Applied in Projects:
                </span>
                <div className="panel-projects-list">
                  {relatedProjects.length > 0 ? (
                    relatedProjects.map((p) => (
                      <button
                        key={p.id}
                        className="project-chip-btn"
                        onClick={() => scrollToProject(p.id)}
                        title={`Jump to ${p.title} project`}
                      >
                        {p.title} <FaArrowRight style={{ fontSize: "0.7rem" }} />
                      </button>
                    ))
                  ) : (
                    <span className="no-projects-text">
                      Used across freelance client architectures & open-source tools
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid" ref={gridRef}>
          {displayedSkills.map((skill, index) => {
            const isSelected = selectedSkill && selectedSkill.id === skill.id;

            return (
              <div
                className={`skill-tile interactive ${isSelected ? "selected-skill" : ""}`}
                key={index}
                onClick={() => setSelectedSkill(skill)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedSkill(skill);
                  }
                }}
              >
                <div className="skill-tile-header">
                  <div
                    className="skill-tile-icon"
                    style={{ color: skill.color }}
                  >
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="skill-badge">{skill.tag}</span>
                </div>

                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.desc}</p>

                <div className="skill-card-click-hint">
                  {isSelected ? "● Viewing Applied Projects" : "Click to view projects →"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
