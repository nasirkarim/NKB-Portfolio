import { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaGraduationCap, FaCheck } from "react-icons/fa6";
import { experienceData, educationData } from "../../data/portfolioData";
import { gsap, revealSectionHeading, isReducedMotion } from "../../utils/animations";

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const treeRef = useRef(null);

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

  // GSAP Stagger Nodes on Tab Switch
  useEffect(() => {
    if (isReducedMotion() || !treeRef.current) return;

    const nodes = treeRef.current.querySelectorAll(".timeline-node-card");
    gsap.fromTo(
      nodes,
      { opacity: 0, x: -16 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.09,
        ease: "power2.out",
        overwrite: "auto",
      }
    );
  }, [activeTab]);

  return (
    <section className="timeline-section" id="experience" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headingRef}>
          <div className="section-eyebrow">CAREER MILESTONES</div>
          <h2 className="section-title">
            Experience & <span>Education</span>
          </h2>
          <p className="section-subtitle">
            My professional timeline, continuous education at Saylani Mass IT Training, and hands-on software development experience.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="timeline-tabs-nav">
          <button
            className={`timeline-tab-switch ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <FaBriefcase /> Work Experience
          </button>

          <button
            className={`timeline-tab-switch ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <FaGraduationCap /> Education & Training
          </button>
        </div>

        {/* Timeline Content */}
        <div
          className="timeline-tree"
          ref={treeRef}
          id={activeTab === "education" ? "education" : "work-experience"}
        >
          {activeTab === "experience" ? (
            experienceData.map((item, index) => (
              <div className="timeline-node-card" key={index}>
                <div className="timeline-pin"></div>

                <div className="timeline-node-top">
                  <h3 className="timeline-role-title">{item.role}</h3>
                  <span className="timeline-badge-pill">{item.period}</span>
                </div>

                <div className="timeline-company-row">
                  <span>{item.company}</span>
                  <span>•</span>
                  <span>{item.type}</span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <ul className="timeline-bullets">
                  {item.responsibilities.map((resp, idx) => (
                    <li className="timeline-bullet-item" key={idx}>
                      <FaCheck className="timeline-bullet-icon" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tags-wrap">
                  {item.tags.map((tag, idx) => (
                    <span className="tech-badge" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            educationData.map((item, index) => (
              <div className="timeline-node-card" key={index}>
                <div className="timeline-pin"></div>

                <div className="timeline-node-top">
                  <h3 className="timeline-role-title">{item.degree}</h3>
                  <span className="timeline-badge-pill">{item.period}</span>
                </div>

                <div className="timeline-company-row">
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span>{item.status}</span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <ul className="timeline-bullets">
                  {item.highlights.map((highlight, idx) => (
                    <li className="timeline-bullet-item" key={idx}>
                      <FaCheck className="timeline-bullet-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;