import { useEffect, useRef } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { attachMagneticEffect } from "../../utils/animations";

const Freelancing = () => {
  const whatsappBtnRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};
    if (whatsappBtnRef.current) {
      cleanup = attachMagneticEffect(whatsappBtnRef.current, 0.2);
    }
    return () => cleanup();
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-box">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">
              Have an Exciting Project or Position in Mind?
            </h2>
            <p className="cta-banner-desc">
              I am open for freelance projects, contracted development, and full-time frontend engineering roles. Let's discuss your requirements and engineer something extraordinary.
            </p>
          </div>

          <div className="cta-banner-actions">
            <a
              ref={whatsappBtnRef}
              href={`https://wa.me/923362046062?text=Hi%20Nasir,%20I%20have%20an%20exciting%20opportunity%20for%20you!`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaWhatsapp /> Quick WhatsApp Chat
            </a>

            <button
              onClick={scrollToContact}
              className="btn-secondary"
            >
              <FaEnvelope /> Send an Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelancing;