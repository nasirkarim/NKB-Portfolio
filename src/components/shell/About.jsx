import { useEffect, useRef } from "react";
import {
  FaCalendarDays,
  FaLocationDot,
  FaLanguage,
  FaBullseye,
  FaBolt,
  FaMobileScreenButton,
  FaPalette,
  FaCube,
} from "react-icons/fa6";
import { personalInfo } from "../../data/portfolioData";
import { gsap, revealSectionHeading, revealStaggeredCards, isReducedMotion } from "../../utils/animations";

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const strengthsRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      // 1. Reveal Section Heading
      if (headingRef.current) {
        revealSectionHeading(headingRef.current);
      }

      // 2. Stagger Strengths Cards
      if (strengthsRef.current) {
        const cards = strengthsRef.current.querySelectorAll(".strength-card");
        revealStaggeredCards(cards, strengthsRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quickFacts = [
    {
      icon: <FaCalendarDays />,
      label: "Date of Birth",
      value: personalInfo.dob,
    },
    {
      icon: <FaLocationDot />,
      label: "Location",
      value: personalInfo.location,
    },
    {
      icon: <FaLanguage />,
      label: "Spoken Languages",
      value: personalInfo.languages,
    },
    {
      icon: <FaBullseye />,
      label: "Core Focus",
      value: "React.js & High-Performance UI",
    },
  ];

  const strengths = [
    {
      icon: <FaBolt />,
      title: "Fast Performance",
      desc: "Optimized bundle sizes, zero layout shifts, and rapid interactive loading speeds.",
    },
    {
      icon: <FaMobileScreenButton />,
      title: "Mobile-First Responsive",
      desc: "Every layout adapts gracefully from small smartphones to ultrawide desktop monitors.",
    },
    {
      icon: <FaPalette />,
      title: "Modern UI Aesthetics",
      desc: "Carefully curated color palettes, elegant glassmorphism, and intuitive visual hierarchy.",
    },
    {
      icon: <FaCube />,
      title: "Clean Modular Code",
      desc: "Reusable component design, clear separation of concerns, and robust architecture.",
    },
  ];

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headingRef}>
          <div className="section-eyebrow">ABOUT ME</div>
          <h2 className="section-title">
            Passionate About <span>Exceptional Web Experiences</span>
          </h2>
          <p className="section-subtitle">
            A developer who bridges the gap between clean functional engineering and agency-grade user interface design.
          </p>
        </div>

        {/* Top Grid: Bio & Quick Facts */}
        <div className="about-grid">
          {/* Left: Bio Card */}
          <div className="about-bio-card">
            <h3>Hello, I'm Nasir Karim</h3>
            <p>
              I am a dedicated Website & Frontend Developer based in Pakistan. My journey started with a strong curiosity about how the web operates, which quickly evolved into an intensive craft through formal training at <strong>Saylani Mass IT Training (SMIT)</strong> and real-world freelance projects.
            </p>
            <p>
              I specialize in creating modern, responsive, and intuitive web applications using <strong>React</strong>, <strong>JavaScript (ES6+)</strong>, and <strong>Modern CSS</strong>. Whether building a complex asset management tool, a dynamic task board, or a high-converting business landing page, I prioritize performance, clean maintainable code, and delighting users.
            </p>

            <div className="about-highlight-quote">
              "Great web design is where pixel-perfect aesthetics meet frictionless usability and lightning-fast speed."
            </div>

            <p>
              Currently expanding my full-stack capabilities while actively collaborating with clients and engineering teams worldwide to bring ambitious ideas to reality.
            </p>
          </div>

          {/* Right: Quick Facts List */}
          <div className="facts-grid">
            {quickFacts.map((fact, index) => (
              <div className="fact-item" key={index}>
                <div className="fact-icon-box">{fact.icon}</div>
                <div className="fact-content">
                  <strong>{fact.label}</strong>
                  <span>{fact.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strengths Grid */}
        <div className="strengths-grid" ref={strengthsRef}>
          {strengths.map((item, index) => (
            <div className="strength-card" key={index}>
              <div className="strength-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;