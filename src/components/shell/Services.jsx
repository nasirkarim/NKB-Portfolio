import { useEffect, useRef } from "react";
import {
  FaGlobe,
  FaReact,
  FaPalette,
  FaCloudBolt,
  FaBolt,
  FaCode,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa6";
import { servicesData } from "../../data/portfolioData";
import { gsap, revealSectionHeading, revealStaggeredCards, isReducedMotion } from "../../utils/animations";

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case "FaGlobe":
      return <FaGlobe />;
    case "FaReact":
      return <FaReact />;
    case "FaPalette":
      return <FaPalette />;
    case "FaCloudBolt":
      return <FaCloudBolt />;
    case "FaBolt":
      return <FaBolt />;
    case "FaCode":
      return <FaCode />;
    default:
      return <FaGlobe />;
  }
};

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        revealSectionHeading(headingRef.current);
      }
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".service-card-item");
        revealStaggeredCards(cards, gridRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInquire = (serviceTitle) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const serviceInput = document.querySelector("input[name='service']");
      if (serviceInput) {
        serviceInput.value = serviceTitle;
        serviceInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    } else {
      window.open(
        `https://wa.me/923362046062?text=Hi%20Nasir,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
          serviceTitle
        )}%20service.`,
        "_blank"
      );
    }
  };

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headingRef}>
          <div className="section-eyebrow">SERVICES & EXPERTISE</div>
          <h2 className="section-title">
            Tailored Solutions For <span>Your Digital Success</span>
          </h2>
          <p className="section-subtitle">
            Providing high-standard frontend development, responsive websites, and custom web applications tailored for modern businesses and individuals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid-layout" ref={gridRef}>
          {servicesData.map((service) => (
            <div className="service-card-item" key={service.id}>
              <div
                className="service-icon-wrapper"
                style={{ color: service.color, background: `${service.color}18` }}
              >
                {getServiceIcon(service.icon)}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <span className="service-subtitle">{service.subtitle}</span>

              <p className="service-text">{service.description}</p>

              <ul className="service-features-list">
                {service.features.map((feat, idx) => (
                  <li className="service-feature-point" key={idx}>
                    <FaCheck className="service-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className="service-inquire-btn"
                onClick={() => handleInquire(service.title)}
              >
                Inquire For This Service <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;