import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaDownload, FaEnvelope, FaReact, FaGithub } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { personalInfo } from "../../data/portfolioData";
import profileImg from "../../assets/nasirimage.png";
import { gsap, attachMagneticEffect, isReducedMotion, isTouchOrMobile } from "../../utils/animations";

const Hero = () => {
  const heroRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const avatarImgRef = useRef(null);
  const visualRef = useRef(null);

  // Role Typing Effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = personalInfo.taglines[roleIndex];
    const typingSpeed = isDeleting ? 38 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // GSAP Animations and Scoped Context
  useEffect(() => {
    if (isReducedMotion()) return;

    let cleanupMouseParallax = () => {};

    const ctx = gsap.context(() => {
      // 1. Image Smooth Reveal
      if (avatarImgRef.current) {
        gsap.fromTo(
          avatarImgRef.current,
          { opacity: 0, scale: 1.08 },
          { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out", delay: 0.1 }
        );
      }

      // 2. Stats cards subtle stagger entrance
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.3,
        }
      );

      // 3. Subtle Mouse-following parallax for floating pills on desktop fine-pointer only
      if (!isTouchOrMobile() && visualRef.current) {
        const visualEl = visualRef.current;
        const pills = visualEl.querySelectorAll(".floating-pill");

        const handleMouseMove = (e) => {
          const rect = visualEl.getBoundingClientRect();
          const relX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
          const relY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;

          pills.forEach((pill, idx) => {
            const factor = (idx + 1) * 6;
            gsap.to(pill, {
              x: relX * factor,
              y: relY * factor,
              duration: 0.5,
              ease: "power1.out",
              overwrite: "auto",
            });
          });
        };

        const handleMouseLeave = () => {
          pills.forEach((pill) => {
            gsap.to(pill, {
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              overwrite: "auto",
            });
          });
        };

        visualEl.addEventListener("mousemove", handleMouseMove, { passive: true });
        visualEl.addEventListener("mouseleave", handleMouseLeave);

        cleanupMouseParallax = () => {
          visualEl.removeEventListener("mousemove", handleMouseMove);
          visualEl.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, heroRef);

    // 4. Subtle Magnetic effect on Primary CTA Button (desktop only)
    let cleanupMagnetic = () => {};
    if (primaryBtnRef.current) {
      cleanupMagnetic = attachMagneticEffect(primaryBtnRef.current, 0.2);
    }

    return () => {
      ctx.revert();
      cleanupMouseParallax();
      cleanupMagnetic();
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="home" ref={heroRef}>
      <div className="container hero-grid">
        {/* Left Column: Hero Copy & Actions */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot"></span>
            {personalInfo.availability}
          </div>

          <p className="hero-greeting">
            Hello, welcome to my universe! I'm <span>{personalInfo.name}</span>
          </p>

          <h1 className="hero-title">
            Crafting <span className="hero-name-gradient">Modern & High-Impact</span> Web Experiences.
          </h1>

          <div className="hero-role-wrapper">
            <span>Specialized as a</span>{" "}
            <span className="hero-typing-role">{displayedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <button
              ref={primaryBtnRef}
              onClick={() => scrollToSection("projects")}
              className="btn-primary"
            >
              Explore My Work <FaArrowRight />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary"
            >
              <FaEnvelope /> Get in Touch
            </button>

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              title="Download Nasir Karim's Curriculum Vitae"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          {/* Quick Stats Ribbon */}
          <div className="hero-stats-ribbon">
            {personalInfo.stats.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Visual & Floating Pills */}
        <div className="hero-visual" ref={visualRef}>
          <div className="avatar-backdrop-glow"></div>

          <div className="hero-avatar-card">
            <div className="avatar-inner">
              <img
                ref={avatarImgRef}
                src={profileImg}
                alt={`${personalInfo.name} - Senior Frontend Developer`}
                className="hero-avatar-img"
                loading="eager"
              />
            </div>

            {/* Floating Pills */}
            <div className="floating-pill pill-react">
              <FaReact className="pill-icon" style={{ color: "#61DAFB" }} />
              <span>React Developer</span>
            </div>

            <div className="floating-pill pill-js">
              <SiJavascript className="pill-icon" style={{ color: "#F7DF1E" }} />
              <span>Modern JavaScript</span>
            </div>

            <div className="floating-pill pill-git">
              <FaGithub className="pill-icon" style={{ color: "#F05032" }} />
              <span>Git & GitHub</span>
            </div>

            <div className="floating-pill pill-saylani">
              <span className="pill-icon">🎓</span>
              <span>Saylani Scholar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Mouse Prompt */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("about");
        }}
        className="scroll-down-indicator"
        aria-label="Scroll down to About section"
      >
        <div className="scroll-mouse-icon">
          <div className="scroll-wheel"></div>
        </div>
        <span>SCROLL DOWN</span>
      </a>
    </section>
  );
};

export default Hero;