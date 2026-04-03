import { ReactNode } from "react";
import { useMagnetic } from "../../hooks/useGsap";
import { Link } from "react-router-dom";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const magneticRef = useMagnetic(strength);

  const variantStyles = {
    primary: "bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-xl hover:shadow-primary/30",
    secondary: "bg-gradient-to-r from-accent to-orange-600 text-white hover:shadow-xl hover:shadow-accent/30",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const baseStyles = `
    px-8 py-4 rounded-lg font-semibold
    transition-all duration-300
    relative overflow-hidden
    group
    ${variantStyles[variant]}
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        ref={magneticRef as any}
        className={baseStyles}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={magneticRef as any}
      onClick={onClick}
      className={baseStyles}
    >
      {content}
    </button>
  );
}
