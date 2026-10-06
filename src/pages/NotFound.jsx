import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaHouse, FaCompass } from "react-icons/fa6";
import { gsap, isReducedMotion } from "../utils/animations";

function NotFound() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".not-found-code",
        { opacity: 0, scale: 0.85, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.5)" }
      );
      gsap.fromTo(
        ".not-found-title, .not-found-desc, .not-found-btn",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="not-found-page" ref={containerRef}>
      <div className="container not-found-container">
        <div className="not-found-icon-box">
          <FaCompass />
        </div>

        <div className="not-found-code">404</div>

        <h1 className="not-found-title">Looks like you took a wrong turn.</h1>

        <p className="not-found-desc">
          The page or route you're looking for doesn't exist, has been relocated, or is temporarily unavailable. Let's get you back on track.
        </p>

        <Link to="/" className="btn-primary not-found-btn">
          <FaHouse /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
