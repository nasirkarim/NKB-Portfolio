import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa6";
import { personalInfo } from "../../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="nav-brand" onClick={scrollToTop}>
              <div className="brand-badge">NK</div>
              <span className="brand-text">
                Nasir Karim<span className="brand-dot">.</span>
              </span>
            </Link>
            <p>
              Senior Website & Frontend Developer specializing in React, modern JavaScript, and responsive design systems. Dedicated to delivering high-impact digital solutions.
            </p>
            <div className="social-links-row">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-link"
                aria-label="Twitter / X"
              >
                <FaXTwitter />
              </a>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="#home"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                >
                  Tech Skills
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                >
                  Featured Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Experience & Career Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Career & Work</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href="#experience"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experience");
                  }}
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experience");
                  }}
                >
                  Education (SMIT)
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  Download Resume
                </a>
              </li>
              <li>
                <Link to="/blogs" className="footer-nav-link">
                  Articles & Blogs
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Direct Contact</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="footer-nav-link"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923362046062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span className="footer-nav-link" style={{ cursor: "default" }}>
                  {personalInfo.location}
                </span>
              </li>
              <li>
                <span className="footer-nav-link" style={{ cursor: "default" }}>
                  Mon - Sat, 9am - 7pm PKT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>
            © {new Date().getFullYear()} Nasir Karim. Crafted with{" "}
            <FaHeart className="footer-heart" /> for modern web standards.
          </p>
          <p>
            Frontend Developer • React & UI/UX Specialist • Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;