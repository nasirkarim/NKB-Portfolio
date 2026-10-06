import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaXmark, FaWhatsapp, FaMagnifyingGlass } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { gsap } from "gsap";

const navItems = [
  { label: "Home", target: "home", path: "/" },
  { label: "About", target: "about", path: "/about" },
  { label: "Skills", target: "skills", path: "/" },
  { label: "Services", target: "services", path: "/services" },
  { label: "Projects", target: "projects", path: "/projects" },
  { label: "Experience", target: "experience", path: "/resume" },
  { label: "GitHub", target: "github", path: "/" },
  { label: "Blogs", target: "blogs", path: "/blogs" },
  { label: "Contact", target: "contact", path: "/contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const drawerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle sticky scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section when on home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sectionIds = ["home", "about", "skills", "services", "projects", "experience", "github", "certifications", "contact"];
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [location.pathname]);

  // Mobile Menu Opening Animation & ESC / Body Scroll Lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (drawerRef.current) {
        const links = drawerRef.current.querySelectorAll(".nav-link-item, .hire-btn, .mobile-cmd-btn");
        gsap.fromTo(
          links,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: "power2.out" }
        );
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (item, e) => {
    setMobileMenuOpen(false);

    if (location.pathname === "/") {
      const el = document.getElementById(item.target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(item.target);
        return;
      }
    }

    if (item.target === "home") {
      navigate("/");
    } else if (item.path !== "/" && location.pathname !== item.path) {
      navigate(item.path);
    } else {
      navigate(`/#${item.target}`);
      setTimeout(() => {
        const el = document.getElementById(item.target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="brand-badge">NK</div>
          <span className="brand-text">
            Nasir Karim<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive =
              location.pathname === "/"
                ? activeSection === item.target
                : location.pathname === item.path;

            return (
              <a
                key={item.label}
                href={`#${item.target}`}
                className={`nav-link-item ${isActive ? "active" : ""}`}
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Nav Actions */}
        <div className="nav-actions">
          {/* Command Palette Trigger Button */}
          <button
            className="cmd-palette-trigger-btn"
            onClick={triggerCommandPalette}
            title="Open Command Palette (Ctrl+K)"
            aria-label="Open Command Palette"
          >
            <FaMagnifyingGlass style={{ fontSize: "0.85rem" }} />
            <span className="cmd-kbd-tag">⌘K</span>
          </button>

          {/* Theme Switcher */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hire Me CTA Button */}
          <a
            href="https://wa.me/923362046062?text=Hi%20Nasir,%20I%20would%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="hire-btn desktop-btn"
          >
            <span className="hire-pulse-dot"></span>
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        ref={drawerRef}
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
      >
        <button
          className="mobile-cmd-btn"
          onClick={() => {
            setMobileMenuOpen(false);
            triggerCommandPalette();
          }}
        >
          <FaMagnifyingGlass /> Quick Command Search (Ctrl+K)
        </button>

        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.target}`}
            className="nav-link-item"
            onClick={(e) => handleNavClick(item, e)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://wa.me/923362046062?text=Hi%20Nasir,%20I%20would%20like%20to%20discuss%20a%20project!"
          target="_blank"
          rel="noopener noreferrer"
          className="hire-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Navbar;