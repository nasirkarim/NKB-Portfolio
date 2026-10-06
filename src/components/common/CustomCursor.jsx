import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Strictly disable on touch devices, mobile screens, or prefers-reduced-motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.innerWidth < 992;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || isMobile || isReduced) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const badge = badgeRef.current;
    if (!dot || !ring) return;

    // Hide default OS cursor on desktop non-touch devices
    document.body.classList.add("has-custom-cursor");

    // Coordinates and physics variables
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let prevMouseX = -100;
    let prevMouseY = -100;
    let isVisible = false;
    let isClicking = false;
    let currentMode = "default"; // 'default' | 'pointer' | 'view' | 'text-mode'
    let rafId = null;

    // Smooth physics loop with velocity stretching
    const render = () => {
      // Direct positioning for center dot (instant precision)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      // Smooth trailing lerp for ring (0.16 damping gives buttery luxury response)
      const ease = 0.16;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      // Calculate velocity for natural organic elongation
      const vx = mouseX - prevMouseX;
      const vy = mouseY - prevMouseY;
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      const speed = Math.sqrt(vx * vx + vy * vy);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);

      // Base scale depends on active hover state
      let baseScale = 1;
      if (currentMode === "pointer") baseScale = 1.45;
      else if (currentMode === "view") baseScale = 1.95;
      else if (currentMode === "text-mode") baseScale = 0;

      if (isClicking) {
        baseScale *= 0.8;
      }

      // Dynamic stretch based on velocity (subtle and high-end)
      const stretch = Math.min(speed * 0.003, 0.28);
      const scaleX = (baseScale * (1 + stretch)).toFixed(3);
      const scaleY = (baseScale * (1 - stretch)).toFixed(3);

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(${angle.toFixed(1)}deg) scale(${scaleX}, ${scaleY})`;

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        isVisible = true;
      }

      const target = e.target;
      if (!target) return;

      const isInput = target.closest("input, textarea, select, [contenteditable='true']");
      if (isInput) {
        if (currentMode !== "text-mode") {
          currentMode = "text-mode";
          ring.className = "custom-cursor-ring text-mode";
          dot.className = "custom-cursor-dot text-mode";
        }
        return;
      }

      const isCard = target.closest(".project-card-item, .cert-card, .github-repo-card");
      if (isCard) {
        if (currentMode !== "view") {
          currentMode = "view";
          ring.className = "custom-cursor-ring view";
          dot.className = "custom-cursor-dot view";
          if (badge) badge.textContent = "VIEW";
        }
        return;
      }

      const isInteractive = target.closest(
        "a, button, [role='button'], .filter-tab-btn, .timeline-tab-switch, .theme-toggle-btn, .mobile-toggle, .cmd-palette-trigger-btn, .skill-tile, .service-card-item, .interactive"
      );

      if (isInteractive) {
        if (currentMode !== "pointer") {
          currentMode = "pointer";
          ring.className = "custom-cursor-ring pointer";
          dot.className = "custom-cursor-dot pointer";
          if (badge) badge.textContent = "";
        }
      } else {
        if (currentMode !== "default") {
          currentMode = "default";
          ring.className = "custom-cursor-ring";
          dot.className = "custom-cursor-dot";
          if (badge) badge.textContent = "";
        }
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      ring.classList.add("clicking");
      dot.classList.add("clicking");
    };

    const onMouseUp = () => {
      isClicking = false;
      ring.classList.remove("clicking");
      dot.classList.remove("clicking");
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isVisible = false;
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      isVisible = true;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        <span ref={badgeRef} className="cursor-badge-text"></span>
      </div>
    </>
  );
};

export default CustomCursor;
