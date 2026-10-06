import { useEffect } from "react";
import Freelance from "../components/shell/Freelance";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container page-banner">
        <div className="section-eyebrow">COMMUNICATION & INQUIRIES</div>
        <h1 className="page-banner-title">
          Contact <span>Nasir Karim</span>
        </h1>
        <p className="page-banner-desc">
          Ready to kick off a new website, web application, or discuss a career opportunity? Get in touch directly below.
        </p>
      </div>

      <Freelance />
    </div>
  );
}

export default Contact;