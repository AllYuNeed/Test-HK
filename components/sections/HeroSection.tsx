"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Zap, Shield, Award } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { BRAND_YEAR } from "@/data/products";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 10 + 8,
}));

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 40%, #091020 100%)",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute blob"
          style={{
            width: "600px",
            height: "600px",
            top: "-200px",
            right: "-100px",
            background: "radial-gradient(ellipse, rgba(30, 107, 255, 0.08) 0%, transparent 70%)",
            animation: "blob-morph 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute blob"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-100px",
            left: "-100px",
            background: "radial-gradient(ellipse, rgba(255, 107, 30, 0.06) 0%, transparent 70%)",
            animation: "blob-morph 15s ease-in-out infinite reverse",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute blob"
          style={{
            width: "300px",
            height: "300px",
            top: "30%",
            left: "30%",
            background: "radial-gradient(ellipse, rgba(0, 212, 170, 0.04) 0%, transparent 70%)",
            animation: "blob-morph 10s ease-in-out infinite",
            animationDelay: "5s",
          }}
        />
      </div>

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-[#1e6bff]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: 0.2,
                animation: `float ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Horizontal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[20, 40, 60, 80].map((y) => (
          <div
            key={y}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${y}%`,
              background: `linear-gradient(90deg, transparent, rgba(30, 107, 255, 0.${y > 50 ? "03" : "05"}), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Tag */}
            <div
              className="inline-flex items-center gap-3 mb-8 animate-fade-in"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <div className="tag-badge">
                Industrial Excellence Since {BRAND_YEAR}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#00d4aa] rounded-full animate-pulse-slow" />
                <span
                  className="text-[10px] tracking-widest text-[#00d4aa] uppercase"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  Pan-India Service
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 leading-none"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                lineHeight: "0.95",
              }}
            >
              <span
                className="block text-white animate-slide-up"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                MANUFACTURING
              </span>
              <span
                className="block text-gradient-blue animate-slide-up"
                style={{ animationDelay: "0.35s", animationFillMode: "both" }}
              >
                EXCELLENCE
              </span>
              <span
                className="block text-white animate-slide-up"
                style={{ animationDelay: "0.5s", animationFillMode: "both" }}
              >
                IN GARMENT
              </span>
              <span
                className="block text-gradient-orange animate-slide-up"
                style={{ animationDelay: "0.65s", animationFillMode: "both" }}
              >
                MACHINERY
              </span>
            </h1>

            <p
              className="text-steel-300 text-lg leading-relaxed mb-10 max-w-xl animate-fade-in"
              style={{ animationDelay: "0.8s", animationFillMode: "both" }}
            >
              India&apos;s premier supplier of industrial garment and textile machinery. 
              From steam generators to fusing machines &mdash; built for professionals who demand the best.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-12 animate-fade-in"
              style={{ animationDelay: "1s", animationFillMode: "both" }}
            >
              <MagneticButton href="/products" variant="primary" size="lg">
                View Products <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton href="/contact" variant="secondary" size="lg">
                Contact Us
              </MagneticButton>
            </div>

            {/* Feature badges */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "1.2s", animationFillMode: "both" }}
            >
              {[
                { icon: Shield, label: "ISO Certified" },
                { icon: Award, label: "20+ Years" },
                { icon: Zap, label: "Pan-India Service" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-xs text-steel-400"
                >
                  <div className="w-6 h-6 rounded-sm bg-[rgba(30,107,255,0.1)] border border-[rgba(30,107,255,0.2)] flex items-center justify-center">
                    <Icon size={12} className="text-[#1e6bff]" />
                  </div>
                  <span style={{ fontFamily: "Share Tech Mono, monospace", letterSpacing: "0.1em" }}>
                    {label.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Machine Visual */}
          <div
            className="relative animate-fade-in hidden lg:block"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full glow-blue opacity-20 blur-xl" />

            {/* Main machine render placeholder */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="glass border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden p-1">
                <div
                  className="aspect-square rounded-md overflow-hidden relative"
                  style={{
                    background: "linear-gradient(135deg, #111318 0%, #1a1d24 50%, #0f1116 100%)",
                  }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-30" />

                  {/* Central machine illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="relative"
                      style={{ animation: "float 6s ease-in-out infinite" }}
                    >
                      {/* Steam iron SVG illustration */}
                      <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Iron base */}
                        <ellipse cx="160" cy="230" rx="100" ry="12" fill="rgba(30,107,255,0.1)" />
                        {/* Iron body */}
                        <path d="M60 180 Q80 140 160 130 Q240 120 270 160 L260 190 Q240 200 160 200 Q80 200 70 185Z" fill="url(#ironGrad)" />
                        <path d="M60 180 Q80 140 160 130 Q240 120 270 160 L260 190 Q240 200 160 200 Q80 200 70 185Z" fill="url(#ironShine)" />
                        {/* Handle */}
                        <path d="M130 130 Q145 90 175 90 Q195 90 195 115 L195 130" stroke="rgba(30,107,255,0.8)" strokeWidth="14" fill="none" strokeLinecap="round" />
                        {/* Steam holes */}
                        {[0, 1, 2, 3, 4].map(i => (
                          <circle key={i} cx={100 + i * 30} cy={188} r="3" fill="rgba(0,0,0,0.4)" />
                        ))}
                        {/* Steam wisps */}
                        {[0, 1, 2].map(i => (
                          <path
                            key={i}
                            d={`M${130 + i * 30} 170 Q${125 + i * 30} 140 ${132 + i * 30} 120 Q${138 + i * 30} 100 ${128 + i * 30} 80`}
                            stroke="rgba(0,212,170,0.6)"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            style={{ animation: `float ${3 + i * 0.7}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
                          />
                        ))}
                        {/* Cord */}
                        <path d="M195 120 Q230 100 260 110 Q280 115 290 140" stroke="rgba(100,120,150,0.6)" strokeWidth="4" fill="none" />

                        <defs>
                          <linearGradient id="ironGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e3a5f" />
                            <stop offset="50%" stopColor="#1e6bff" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#0d1a30" />
                          </linearGradient>
                          <linearGradient id="ironShine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                            <stop offset="30%" stopColor="rgba(255,255,255,0.1)" />
                            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Corner accent lights */}
                  {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(pos => (
                    <div
                      key={pos}
                      className={`absolute ${pos} w-8 h-8`}
                    >
                      <div className="absolute top-0 left-0 w-4 h-px bg-[#1e6bff] opacity-60" />
                      <div className="absolute top-0 left-0 w-px h-4 bg-[#1e6bff] opacity-60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating spec badges */}
              <div
                className="absolute -left-8 top-1/4 glass border border-[rgba(255,255,255,0.08)] rounded-sm px-3 py-2 text-xs"
                style={{ animation: "float 5s ease-in-out infinite", animationDelay: "1s" }}
              >
                <div
                  className="text-[#00d4aa] font-mono text-[10px] tracking-widest"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  STEAM OUTPUT
                </div>
                <div
                  className="text-white text-lg"
                  style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
                >
                  50g/min
                </div>
              </div>

              <div
                className="absolute -right-4 bottom-1/4 glass border border-[rgba(255,255,255,0.08)] rounded-sm px-3 py-2 text-xs"
                style={{ animation: "float 7s ease-in-out infinite", animationDelay: "2s" }}
              >
                <div
                  className="text-[#ff6b1e] font-mono text-[10px] tracking-widest"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  POWER
                </div>
                <div
                  className="text-white text-lg"
                  style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
                >
                  36kW Max
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel-400 animate-bounce">
        <span
          className="text-[9px] tracking-widest uppercase"
          style={{ fontFamily: "Share Tech Mono, monospace" }}
        >
          Scroll
        </span>
        <ChevronDown size={16} />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-950 to-transparent" />
    </section>
  );
}
