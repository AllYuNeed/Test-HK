// GSAP Configuration and Utility Functions

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ====================================================
// MOTION PRESETS
// ====================================================

export const fadeUp = (element: gsap.TweenTarget, options: gsap.TweenVars = {}) => {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out",
    ...options,
  });
};

export const fadeIn = (element: gsap.TweenTarget, options: gsap.TweenVars = {}) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    ...options,
  });
};

export const revealMask = (element: gsap.TweenTarget, options: gsap.TweenVars = {}) => {
  return gsap.from(element, {
    clipPath: "inset(0% 100% 0% 0%)",
    duration: 1.2,
    ease: "power4.out",
    ...options,
  });
};

export const staggerCards = (elements: gsap.TweenTarget, options: gsap.TweenVars = {}) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 40,
    scale: 0.95,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out(1.2)",
    ...options,
  });
};

export const parallaxY = (element: gsap.TweenTarget, distance: number = 100) => {
  return gsap.to(element, {
    y: distance,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const scaleIn = (element: gsap.TweenTarget, options: gsap.TweenVars = {}) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.4)",
    ...options,
  });
};

// ====================================================
// SCROLL TRIGGER UTILITIES
// ====================================================

export const createScrollTrigger = (
  element: gsap.DOMTarget,
  animation: gsap.core.Tween | gsap.core.Timeline,
  options: ScrollTrigger.Vars = {}
) => {
  return ScrollTrigger.create({
    trigger: element,
    start: "top 80%",
    end: "bottom 20%",
    animation: animation,
    ...options,
  });
};

export const pinSection = (
  element: gsap.DOMTarget,
  options: ScrollTrigger.Vars = {}
) => {
  return ScrollTrigger.create({
    trigger: element,
    pin: true,
    start: "top top",
    end: "+=100%",
    ...options,
  });
};

// ====================================================
// HOVER ANIMATIONS
// ====================================================

export const magneticHover = (element: HTMLElement, strength: number = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };
  
  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);
  
  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

export const tiltCard = (element: HTMLElement, maxTilt: number = 10) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;
    
    gsap.to(element, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };
  
  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);
  
  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

// ====================================================
// UTILITY FUNCTIONS
// ====================================================

export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};

export const checkReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// ====================================================
// TIMELINE HELPERS
// ====================================================

export const createTimeline = (options: gsap.TimelineVars = {}) => {
  return gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.6,
    },
    ...options,
  });
};

export default gsap;
