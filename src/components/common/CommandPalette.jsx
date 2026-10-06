import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMagnifyingGlass,
  FaHouse,
  FaUser,
  FaCode,
  FaBriefcase,
  FaLaptopCode,
  FaEnvelope,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaXmark,
  FaArrowRight,
} from "react-icons/fa6";
import { personalInfo } from "../../data/portfolioData";
import { useTheme } from "../../context/ThemeContext";
import { gsap } from "gsap";

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const paletteRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleClose = () => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  };

  const commands = [
    {
      id: "home",
      title: "Go to Home",
      subtitle: "Hero, introduction, and highlights",
      icon: <FaHouse />,
      action: () => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      id: "about",
      title: "Go to About Me",
      subtitle: "Biography, background, and strengths",
      icon: <FaUser />,
      action: () => {
        navigate("/#about");
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "skills",
      title: "Go to Skills & Tech Stack",
      subtitle: "React, JavaScript, Node.js, CSS3",
      icon: <FaCode />,
      action: () => {
        navigate("/#skills");
        const el = document.getElementById("skills");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "projects",
      title: "Go to Projects",
      subtitle: "MaintainIQ, Baloch Works, Trello Clone",
      icon: <FaLaptopCode />,
      action: () => {
        navigate("/#projects");
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "experience",
      title: "Go to Experience & Timeline",
      subtitle: "Career milestones and Saylani IT education",
      icon: <FaBriefcase />,
      action: () => {
        navigate("/#experience");
        const el = document.getElementById("experience");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "contact",
      title: "Go to Contact & Inquiries",
      subtitle: "Direct WhatsApp, email, message form",
      icon: <FaEnvelope />,
      action: () => {
        navigate("/#contact");
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "download-cv",
      title: "Download Nasir's CV",
      subtitle: "Open PDF resume on Google Drive",
      icon: <FaDownload />,
      action: () => {
        window.open(personalInfo.cvUrl, "_blank");
      },
    },
    {
      id: "github",
      title: "Open GitHub Profile",
      subtitle: "View source code and public repositories",
      icon: <FaGithub />,
      action: () => {
        window.open(personalInfo.github, "_blank");
      },
    },
    {
      id: "linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "Connect professionally on LinkedIn",
      icon: <FaLinkedin />,
      action: () => {
        window.open(personalInfo.linkedin, "_blank");
      },
    },
    {
      id: "theme-toggle",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      subtitle: "Toggle color appearance",
      icon: theme === "dark" ? <FaSun /> : <FaMoon />,
      action: () => {
        toggleTheme();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.subtitle.toLowerCase().includes(q) ||
      cmd.id.toLowerCase().includes(q)
    );
  });

  // Focus input and animate entrance with GSAP
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);

      if (paletteRef.current) {
        gsap.fromTo(
          paletteRef.current,
          { opacity: 0, scale: 0.94, y: -15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" }
        );
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard navigation inside palette
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        handleClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop command-palette-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="command-palette-card"
        ref={paletteRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Input Bar */}
        <div className="palette-input-wrap">
          <FaMagnifyingGlass className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command or search sections... (Press ESC to exit)"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button
            className="palette-close-btn"
            onClick={handleClose}
            aria-label="Close command palette"
          >
            <FaXmark />
          </button>
        </div>

        {/* Command List */}
        <div className="palette-list" role="listbox">
          {filteredCommands.length === 0 ? (
            <div className="palette-empty-state">
              No matching commands for "{query}"
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                role="option"
                aria-selected={idx === selectedIndex}
                className={`palette-item ${idx === selectedIndex ? "selected" : ""}`}
                onClick={() => {
                  cmd.action();
                  handleClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="palette-item-icon">{cmd.icon}</div>
                <div className="palette-item-info">
                  <span className="palette-item-title">{cmd.title}</span>
                  <span className="palette-item-sub">{cmd.subtitle}</span>
                </div>
                {idx === selectedIndex && (
                  <span className="palette-item-enter">
                    Jump <FaArrowRight style={{ fontSize: "0.75rem" }} />
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        {/* Palette Footer Shortcuts */}
        <div className="palette-footer-hint">
          <span><kbd className="palette-kbd">↑</kbd> <kbd className="palette-kbd">↓</kbd> to navigate</span>
          <span><kbd className="palette-kbd">Enter</kbd> to select</span>
          <span><kbd className="palette-kbd">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
