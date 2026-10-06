import { useState, useEffect, useRef } from "react";
import {
  FaAward,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaXmark,
  FaShieldHalved,
  FaCalendarDays,
} from "react-icons/fa6";
import { certificationsData } from "../../data/portfolioData";
import { gsap, revealSectionHeading, isReducedMotion } from "../../utils/animations";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  // GSAP Heading Reveal
  useEffect(() => {
    if (isReducedMotion() || !certificationsData || certificationsData.length === 0) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        revealSectionHeading(headingRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle ESC key and prevent body scrolling when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  // Safe check if no certifications exist
  if (!certificationsData || certificationsData.length === 0) {
    return null;
  }

  return (
    <section className="certifications-section" id="certifications" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headingRef}>
          <div className="section-eyebrow">CREDENTIALS & TRAINING</div>
          <h2 className="section-title">
            Certifications & <span>Credentials</span>
          </h2>
          <p className="section-subtitle">
            Formal training milestones and verified coursework from recognized institutions including Saylani Mass IT Training.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div
              className="cert-card interactive"
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedCert(cert);
                }
              }}
            >
              <div className="cert-top-row">
                <div className="cert-icon-box">
                  <FaAward />
                </div>
                <span className="cert-status-badge">
                  <FaShieldHalved /> {cert.status}
                </span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>

              <div className="cert-date-row">
                <span>
                  <FaCalendarDays /> Issued: {cert.issuedDate}
                </span>
                <span className="cert-id-tag">ID: {cert.credentialId}</span>
              </div>

              <p className="cert-desc">{cert.description}</p>

              <div className="cert-skills-wrap">
                {cert.skillsCovered.map((s, idx) => (
                  <span className="tech-badge" key={idx}>
                    {s}
                  </span>
                ))}
              </div>

              <button className="cert-view-btn">
                View Credential Details <FaArrowUpRightFromSquare style={{ fontSize: "0.75rem" }} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-dialog-box cert-lightbox-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedCert(null)}
              aria-label="Close modal"
            >
              <FaXmark />
            </button>

            <div className="modal-header">
              <span className="project-category-tag">Verified Educational Milestone</span>
              <h3 className="modal-title">{selectedCert.title}</h3>
              <p className="modal-subtitle">{selectedCert.issuer}</p>
            </div>

            <div className="cert-meta-details-box">
              <div className="cert-meta-item">
                <strong>Credential ID</strong>
                <span>{selectedCert.credentialId}</span>
              </div>
              <div className="cert-meta-item">
                <strong>Issued Date</strong>
                <span>{selectedCert.issuedDate}</span>
              </div>
              <div className="cert-meta-item">
                <strong>Verification Status</strong>
                <span style={{ color: "var(--emerald)" }}>
                  <FaCheck /> {selectedCert.status}
                </span>
              </div>
            </div>

            <h4 className="modal-section-title">Curriculum Scope & Competencies</h4>
            <p className="project-item-desc" style={{ fontSize: "1rem" }}>
              {selectedCert.description}
            </p>

            <div className="project-tech-stack" style={{ margin: "20px 0" }}>
              {selectedCert.skillsCovered.map((skill, idx) => (
                <span className="tech-badge" key={idx}>
                  {skill}
                </span>
              ))}
            </div>

            {selectedCert.verifyUrl && (
              <div className="modal-footer-actions">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FaArrowUpRightFromSquare /> Official Institutional Portal
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
