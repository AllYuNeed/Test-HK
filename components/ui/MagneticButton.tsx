"use client";
import { useRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "orange";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = "translate(0, 0)";
    btn.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary: "bg-[#1e6bff] text-white hover:bg-[#4d8fff] hover:shadow-[0_0_25px_rgba(30,107,255,0.4)]",
    secondary: "glass border border-[rgba(255,255,255,0.12)] text-white hover:border-[rgba(30,107,255,0.5)] hover:bg-[rgba(30,107,255,0.08)]",
    ghost: "text-steel-300 hover:text-white border border-transparent hover:border-[rgba(255,255,255,0.12)]",
    orange: "bg-[#ff6b1e] text-white hover:bg-[#ff8f4d] hover:shadow-[0_0_25px_rgba(255,107,30,0.4)]",
  };

  const baseClass = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-display tracking-wider uppercase cursor-pointer transition-all duration-300",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      {href ? (
        external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClass}
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
          >
            {children}
          </a>
        ) : (
          <Link
            href={href}
            className={baseClass}
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
          >
            {children}
          </Link>
        )
      ) : (
        <button
          onClick={onClick}
          className={baseClass}
          style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
        >
          {children}
        </button>
      )}
    </div>
  );

  return content;
}
