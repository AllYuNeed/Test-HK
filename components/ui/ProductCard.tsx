"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  badge?: string;
  specs?: { label: string; value: string }[];
  className?: string;
}

export default function ProductCard({
  title,
  description,
  href,
  image,
  badge,
  specs,
  className,
}: ProductCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <div className="specular-card card-3d glass border border-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden h-full hover:border-[rgba(30,107,255,0.3)] transition-all duration-400">
        {/* Image area */}
        <div className="relative h-48 overflow-hidden img-placeholder">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Placeholder industrial pattern */}
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="relative z-10 text-center">
                <div
                  className="text-4xl text-[#1e6bff] opacity-30 mb-2"
                  style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
                >
                  {title.substring(0, 2).toUpperCase()}
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#1e6bff] to-transparent mx-auto" />
              </div>
            </div>
          )}
          {badge && (
            <div className="absolute top-3 left-3">
              <span className="tag-badge">{badge}</span>
            </div>
          )}
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[32px] border-l-transparent border-t-[32px] border-t-[rgba(30,107,255,0.6)]" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3
            className="text-white text-lg mb-2 group-hover:text-[#4d8fff] transition-colors"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}
          >
            {title}
          </h3>
          <p className="text-steel-400 text-sm leading-relaxed mb-4">{description}</p>

          {specs && specs.length > 0 && (
            <div className="space-y-1.5 mb-4 border-t border-[rgba(255,255,255,0.05)] pt-4">
              {specs.slice(0, 3).map((s) => (
                <div key={s.label} className="flex justify-between text-xs">
                  <span className="text-steel-400" style={{ fontFamily: "Share Tech Mono, monospace" }}>
                    {s.label}
                  </span>
                  <span className="text-white font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 text-[#1e6bff] text-sm font-display tracking-wide group-hover:gap-3 transition-all">
            <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}>VIEW DETAILS</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
