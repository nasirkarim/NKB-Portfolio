import { useEffect } from "react";
import ServicesSection from "../components/shell/Services";
import Freelancing from "../components/shell/Freelancing";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="container page-banner">
        <div className="section-eyebrow">WHAT I OFFER</div>
        <h1 className="page-banner-title">
          Professional <span>Services</span>
        </h1>
        <p className="page-banner-desc">
          From custom website development to full-fledged React web applications, explore how I can support your goals.
        </p>
      </div>

      <ServicesSection />
      <Freelancing />
    </div>
  );
}

export default Services;