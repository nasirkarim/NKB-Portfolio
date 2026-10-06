import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/shell/Navbar";
import Footer from "./components/shell/Footer";
import CustomCursor from "./components/common/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";
import CommandPalette from "./components/common/CommandPalette";
import EasterEgg from "./components/common/EasterEgg";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import {
  gsap,
  createSubtleParallax,
  isReducedMotion,
  isTouchOrMobile,
  initResponsiveResizeHandler,
} from "./utils/animations";

function App() {
  const bgRef = useRef(null);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  // Resize and Orientation ScrollTrigger Refresh
  useEffect(() => {
    const cleanupResize = initResponsiveResizeHandler();
    return () => cleanupResize();
  }, []);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };

    const handleCustomOpen = () => {
      setIsPaletteOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  // Subtle Parallax on ambient background blobs (desktop only)
  useEffect(() => {
    if (isReducedMotion() || !bgRef.current || isTouchOrMobile()) return;

    const ctx = gsap.context(() => {
      const b1 = bgRef.current.querySelector(".blob-1");
      const b2 = bgRef.current.querySelector(".blob-2");
      const b3 = bgRef.current.querySelector(".blob-3");

      if (b1) createSubtleParallax(b1, -50);
      if (b2) createSubtleParallax(b2, 60);
      if (b3) createSubtleParallax(b3, -40);
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <ThemeProvider>
      {/* Scroll Progress Bar at Top */}
      <ScrollProgress />

      {/* Smooth Custom Interactive Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Developer Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
      />

      {/* Developer Mode Easter Egg */}
      <EasterEgg />

      {/* Ambient Animated Background Mesh & Grid */}
      <div className="ambient-bg" ref={bgRef} aria-hidden="true">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <div className="ambient-blob blob-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Sticky Blurred Glass Navigation */}
      <Navbar />

      {/* Route Views */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;