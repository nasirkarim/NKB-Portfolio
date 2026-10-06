import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const isReducedMotion = () => {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
};

export const isTouchOrMobile = () => {
  return (
    typeof window !== "undefined" &&
    (window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 991px)").matches)
  );
};

/**
 * Handle screen orientation and window resize ScrollTrigger refreshes
 */
export const initResponsiveResizeHandler = () => {
  if (typeof window === "undefined") return () => {};

  let resizeTimer;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  };

  window.addEventListener("resize", handleResize, { passive: true });
  window.addEventListener("orientationchange", handleResize, { passive: true });

  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("orientationchange", handleResize);
  };
};

/**
 * Reveal section headers with smooth subtle slide & fade
 */
export const revealSectionHeading = (headingElement) => {
  if (!headingElement || isReducedMotion()) return null;

  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;

  return gsap.fromTo(
    headingElement,
    {
      opacity: 0,
      y: isSmallScreen ? 16 : 26,
    },
    {
      opacity: 1,
      y: 0,
      duration: isSmallScreen ? 0.6 : 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headingElement,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
};

/**
 * Staggered entrance for cards (Strengths, Skills, Services, Projects, Timeline)
 */
export const revealStaggeredCards = (cards, triggerEl) => {
  if (!cards || cards.length === 0 || isReducedMotion()) return null;

  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 768;

  return gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: isSmallScreen ? 18 : 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: isSmallScreen ? 0.5 : 0.65,
      stagger: isSmallScreen ? 0.05 : 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerEl || cards[0],
        start: "top 88%",
        toggleActions: "play none none none",
        once: true,
      },
    }
  );
};

/**
 * Subtle Parallax for decorative shapes / ambient mesh (desktop only)
 */
export const createSubtleParallax = (element, yDistance = -40) => {
  if (!element || isReducedMotion() || isTouchOrMobile()) return null;

  return gsap.to(element, {
    y: yDistance,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.2,
    },
  });
};

/**
 * Magnetic button interaction for primary CTA buttons (strictly desktop fine pointer only)
 */
export const attachMagneticEffect = (element, strength = 0.22) => {
  if (!element || isReducedMotion() || isTouchOrMobile()) return () => {};

  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;

    gsap.to(element, {
      x,
      y,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  };

  element.addEventListener("mousemove", handleMouseMove, { passive: true });
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

export { gsap, ScrollTrigger };
