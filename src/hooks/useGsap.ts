// GSAP React Hook for easy animation integration

import { useEffect, useRef, MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { checkReducedMotion } from "../lib/gsap";

export type GsapAnimationCallback = (element: HTMLElement) => gsap.core.Tween | gsap.core.Timeline | void;

// ====================================================
// useGsap Hook - Main animation hook
// ====================================================

export const useGsap = (
  callback: GsapAnimationCallback,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    if (checkReducedMotion()) return;

    const animation = callback(elementRef.current);

    return () => {
      if (animation) {
        if ("kill" in animation) {
          animation.kill();
        }
      }
    };
  }, dependencies);

  return elementRef;
};

// ====================================================
// useScrollTrigger Hook - For scroll-based animations
// ====================================================

export const useScrollTrigger = (
  callback: (element: HTMLElement, ctx: gsap.Context) => void,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    if (checkReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (elementRef.current) {
        callback(elementRef.current, ctx);
      }
    }, elementRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === elementRef.current) {
          trigger.kill();
        }
      });
    };
  }, dependencies);

  return elementRef;
};

// ====================================================
// useTilt Hook - 3D tilt effect on mouse move
// ====================================================

export const useTilt = (maxTilt: number = 10) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (checkReducedMotion()) return;

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
  }, [maxTilt]);

  return elementRef;
};

// ====================================================
// useMagnetic Hook - Magnetic hover effect
// ====================================================

export const useMagnetic = (strength: number = 0.3) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (checkReducedMotion()) return;

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
  }, [strength]);

  return elementRef;
};

// ====================================================
// useParallax Hook - Parallax scroll effect
// ====================================================

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (checkReducedMotion()) return;

    const tween = gsap.to(element, {
      y: () => element.offsetHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return elementRef;
};

// ====================================================
// useFadeUp Hook - Fade up on scroll
// ====================================================

export const useFadeUp = (delay: number = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (checkReducedMotion()) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.from(element, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, [delay]);

  return elementRef;
};

// ====================================================
// useStagger Hook - Stagger animation for children
// ====================================================

export const useStagger = (
  selector: string = ".stagger-item",
  staggerAmount: number = 0.1
): MutableRefObject<HTMLElement | null> => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (checkReducedMotion()) return;

    const items = container.querySelectorAll(selector);

    gsap.from(items, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.6,
      stagger: staggerAmount,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [selector, staggerAmount]);

  return containerRef;
};
