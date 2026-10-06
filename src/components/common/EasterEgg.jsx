import { useState, useEffect, useRef } from "react";
import { FaTerminal, FaXmark, FaBolt } from "react-icons/fa6";
import { gsap } from "gsap";

const EasterEgg = () => {
  const [active, setActive] = useState(false);
  const toastRef = useRef(null);

  // 1. DevTools Console Greeting for curious developers / technical recruiters
  useEffect(() => {
    console.log(
      `%c🚀 Nasir Karim — Senior Frontend & React Developer
%cBuilt with React 19, Vite & GSAP.
Looking for high-performance responsive engineering?
Let's talk: jaannk93@gmail.com | WhatsApp: +92 3362046062`,
      "color: #6366f1; font-size: 16px; font-weight: bold; font-family: monospace;",
      "color: #06b6d4; font-size: 12px; font-family: monospace;"
    );
  }, []);

  // 2. Keyboard shortcut: Press `~` (tilde) or click NK badge 5 times
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }

      if (e.key === "~" || e.key === "`") {
        setActive(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // GSAP animation when active
  useEffect(() => {
    if (active && toastRef.current) {
      gsap.fromTo(
        toastRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "back.out(1.7)" }
      );

      const timer = setTimeout(() => {
        if (toastRef.current) {
          gsap.to(toastRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => setActive(false),
          });
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="dev-easter-egg-toast" ref={toastRef}>
      <div className="easter-egg-header">
        <span className="easter-egg-tag">
          <FaTerminal /> Dev Mode Unlocked
        </span>
        <button
          className="easter-egg-close"
          onClick={() => setActive(false)}
          aria-label="Close"
        >
          <FaXmark />
        </button>
      </div>

      <div className="easter-egg-body">
        <p>
          <FaBolt style={{ color: "#f59e0b" }} /> <strong>All Systems Operational:</strong> React 19 • Vite • GSAP 3 • 60 FPS Smooth Engine.
        </p>
        <span className="easter-egg-sub">
          Tip: Press <kbd className="palette-kbd">Ctrl+K</kbd> to launch the command palette!
        </span>
      </div>
    </div>
  );
};

export default EasterEgg;
