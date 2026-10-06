import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      className="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
