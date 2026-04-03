import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTilt } from "../../hooks/useGsap";
import { MagneticButton } from "./MagneticButton";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: string;
}

export function ProductCard({ title, description, image, link, icon }: ProductCardProps) {
  const tiltRef = useTilt(8);

  return (
    <div
      ref={tiltRef as any}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500"
      style={{
        transformStyle: "preserve-3d",
        transform: "perspective(1000px)",
      }}
    >
      {/* Specular highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Soft shadow effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10" />

      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:contrast-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80`;
          }}
        />
        
        {/* Icon overlay */}
        {icon && (
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
            {icon}
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-2">
          {description}
        </p>

        {/* Animated underline button */}
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-primary font-semibold group/btn relative overflow-hidden"
        >
          <span className="relative z-10">Explore Products</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/btn:w-full transition-all duration-300" />
        </Link>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
