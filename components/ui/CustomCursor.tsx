"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      followerX = lerp(followerX, mouseX, 0.12);
      followerY = lerp(followerY, mouseY, 0.12);
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    const onLinkEnter = () => {
      dot.classList.add("scale-[3]");
      follower.classList.add("scale-[2]", "opacity-20");
    };
    const onLinkLeave = () => {
      dot.classList.remove("scale-[3]");
      follower.classList.remove("scale-[2]", "opacity-20");
    };

    document.addEventListener("mousemove", onMove, { passive: true });

    const links = document.querySelectorAll("a, button");
    links.forEach(l => {
      l.addEventListener("mouseenter", onLinkEnter);
      l.addEventListener("mouseleave", onLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#1e6bff] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
        style={{ willChange: "transform" }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[rgba(30,107,255,0.4)] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
