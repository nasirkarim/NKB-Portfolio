import { useState, useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaPaperPlane,
  FaCopy,
  FaCheck,
} from "react-icons/fa6";
import { personalInfo } from "../../data/portfolioData";
import { gsap, revealSectionHeading, isReducedMotion } from "../../utils/animations";

const Freelance = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        revealSectionHeading(headingRef.current);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // WhatsApp submission - preserves Nasir's original WhatsApp flow
  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    const whatsappNumber = "923362046062";
    const text = `*New Client Inquiry via Portfolio*
-----------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || "Not specified"}
💼 Service: ${formData.service}
-----------------------------
📝 Message:
${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setSubmittedStatus("Inquiry opened in WhatsApp!");
    setTimeout(() => setSubmittedStatus(null), 5000);
  };

  // Standard Send Form submission
  const handleDirectSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmittedStatus("Thank you! Opening your email client to send message.");
    setTimeout(() => setSubmittedStatus(null), 5000);
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" ref={headingRef}>
          <div className="section-eyebrow">GET IN TOUCH</div>
          <h2 className="section-title">
            Let's Discuss <span>Your Next Project</span>
          </h2>
          <p className="section-subtitle">
            Always available for freelance opportunities, full-time positions, or consulting. Drop a message below or connect directly.
          </p>
        </div>

        <div className="contact-split-grid">
          {/* Left: Contact Info Sidebar */}
          <div className="contact-sidebar">
            {/* WhatsApp Card */}
            <div className="contact-direct-card">
              <div className="direct-icon-box whatsapp-color">
                <FaWhatsapp />
              </div>
              <div className="direct-info-meta">
                <strong>Instant Messaging</strong>
                <a
                  href="https://wa.me/923362046062"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personalInfo.phone}
                </a>
                <small>Quick response on WhatsApp</small>
              </div>
            </div>

            {/* Email Card with Copy Feature */}
            <div className="contact-direct-card">
              <div className="direct-icon-box">
                <FaEnvelope />
              </div>
              <div className="direct-info-meta">
                <strong>Email Address</strong>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                <small>Checked daily</small>
              </div>
              <button
                className="copy-pill-btn"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copied ? <FaCheck /> : <FaCopy />}{" "}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-direct-card">
              <div className="direct-icon-box">
                <FaPhone />
              </div>
              <div className="direct-info-meta">
                <strong>Direct Call</strong>
                <p>{personalInfo.phoneAlt} / {personalInfo.phone}</p>
                <small>Monday to Saturday</small>
              </div>
            </div>

            {/* Schedule & Location Card */}
            <div className="contact-direct-card">
              <div className="direct-icon-box">
                <FaClock />
              </div>
              <div className="direct-info-meta">
                <strong>Working Hours & Location</strong>
                <p>{personalInfo.schedule}</p>
                <small>{personalInfo.location}</small>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="social-profiles-box">
              <h4>Connect Across Social Platforms</h4>
              <div className="social-links-row">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-link"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-link"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-link"
                  aria-label="Twitter / X Profile"
                  title="Twitter / X"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle-link"
                  aria-label="WhatsApp Chat"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-card">
            <h3>Send Me a Message</h3>
            <p>
              Fill out this form and choose whether to send directly via WhatsApp or Email.
            </p>

            <form onSubmit={handleWhatsAppSend}>
              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-label">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-field-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-input"
                    placeholder="+92 300 0000000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-label">Required Service</label>
                  <select
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="React Web Applications">React Web Applications</option>
                    <option value="UI/UX Implementation">UI/UX Implementation</option>
                    <option value="API & Cloud Integration">API & Cloud Integration</option>
                    <option value="Performance Optimization">Performance Optimization</option>
                    <option value="Code Refactoring & Fixes">Code Refactoring & Fixes</option>
                    <option value="Full-Time Frontend Role">Full-Time Frontend Role</option>
                  </select>
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-label">Your Project Details / Message *</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Describe your goals, timeline, and requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-submit-actions">
                <button type="submit" className="btn-whatsapp-submit">
                  <FaWhatsapp /> Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="btn-secondary"
                >
                  <FaPaperPlane /> Send via Email
                </button>
              </div>

              {submittedStatus && (
                <div className="toast-feedback success">
                  <FaCheck /> {submittedStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;