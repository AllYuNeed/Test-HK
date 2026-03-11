import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

const FEATURED_CATEGORIES = categories.map(cat => ({
  slug: cat.categorySlug,
  name: cat.categoryName,
  description: cat.description,
  href: `/products/${cat.categorySlug}`,
  count: cat.subcategories.length,
  highlight: cat.categorySlug === "finishing-equipment" ? "Most Popular" : undefined,
}));

export default function ProductsOverview() {
  return (
    <section className="section-padding bg-charcoal-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 0%, rgba(30,107,255,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div
            className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            Our Product Range
          </div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: "1",
            }}
          >
            <span className="text-white">INDUSTRIAL </span>
            <span className="text-gradient-blue">MACHINERY</span>
            <br />
            <span className="text-white">FOR PROFESSIONALS</span>
          </h2>
          <p className="text-steel-400 text-base leading-relaxed">
            Three comprehensive product categories covering every aspect of garment manufacturing — from finishing to fusing.
          </p>
        </div>

        {/* Product Category Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_CATEGORIES.map((cat, i) => (
            <Link key={cat.slug} href={cat.href} className="group block">
              <div className="specular-card glass border border-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden h-full hover:border-[rgba(30,107,255,0.3)] transition-all duration-400 card-3d">
                {/* Image placeholder */}
                <div
                  className="h-52 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, #111318 0%, ${
                      i === 0 ? "rgba(30,107,255,0.1)" : i === 1 ? "rgba(255,107,30,0.08)" : "rgba(0,212,170,0.08)"
                    } 100%)`,
                  }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-center"
                      style={{ animation: `float ${5 + i}s ease-in-out infinite`, animationDelay: `${i * 0.8}s` }}
                    >
                      {/* Category icon SVGs */}
                      {cat.slug === "finishing-equipment" && (
                        <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                          <rect x="10" y="50" width="80" height="8" rx="2" fill="rgba(30,107,255,0.4)" />
                          <path d="M15 50 Q30 30 50 28 Q70 26 85 40 L82 50Z" fill="rgba(30,107,255,0.6)" />
                          <path d="M40 28 Q45 10 55 10 Q62 10 62 28" stroke="rgba(30,107,255,0.8)" strokeWidth="5" fill="none" strokeLinecap="round" />
                          <circle cx="25" cy="54" r="2" fill="rgba(0,0,0,0.5)" />
                          <circle cx="35" cy="54" r="2" fill="rgba(0,0,0,0.5)" />
                          <circle cx="45" cy="54" r="2" fill="rgba(0,0,0,0.5)" />
                          <path d="M35 28 Q33 15 37 8 Q41 0 35 0" stroke="rgba(0,212,170,0.7)" strokeWidth="1.5" fill="none" />
                        </svg>
                      )}
                      {cat.slug === "washing-machine" && (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                          <rect x="8" y="8" width="64" height="64" rx="6" fill="rgba(255,107,30,0.15)" stroke="rgba(255,107,30,0.4)" strokeWidth="2" />
                          <circle cx="40" cy="44" r="18" stroke="rgba(255,107,30,0.7)" strokeWidth="2" />
                          <circle cx="40" cy="44" r="10" stroke="rgba(255,107,30,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
                          <circle cx="20" cy="20" r="3" fill="rgba(255,107,30,0.5)" />
                          <circle cx="30" cy="20" r="2" fill="rgba(255,107,30,0.3)" />
                          <rect x="48" y="17" width="14" height="6" rx="1" fill="rgba(255,107,30,0.3)" />
                        </svg>
                      )}
                      {cat.slug === "fusing-machine" && (
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                          <rect x="5" y="20" width="70" height="45" rx="3" fill="rgba(0,212,170,0.1)" stroke="rgba(0,212,170,0.4)" strokeWidth="2" />
                          <rect x="5" y="20" width="70" height="12" rx="3" fill="rgba(0,212,170,0.2)" />
                          <rect x="15" y="38" width="50" height="18" rx="2" fill="rgba(0,212,170,0.15)" />
                          <line x1="0" y1="43" x2="5" y2="43" stroke="rgba(0,212,170,0.6)" strokeWidth="2" />
                          <line x1="75" y1="43" x2="80" y2="43" stroke="rgba(0,212,170,0.6)" strokeWidth="2" />
                          {[0,1,2,3].map(i => <rect key={i} x={18+i*13} y="41" width="8" height="2" rx="1" fill="rgba(0,212,170,0.5)" />)}
                        </svg>
                      )}
                    </div>
                  </div>
                  {cat.highlight && (
                    <div className="absolute top-3 left-3 tag-badge">{cat.highlight}</div>
                  )}
                  <div className="absolute top-3 right-3 text-[10px] text-steel-400 font-mono" style={{ fontFamily: "Share Tech Mono, monospace" }}>
                    {cat.count} SUBCATEGORIES
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-white text-xl mb-3 group-hover:text-gradient-blue transition-all"
                    style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    {cat.name.toUpperCase()}
                  </h3>
                  <p className="text-steel-400 text-sm leading-relaxed mb-5">{cat.description}</p>
                  <div className="flex items-center gap-2 text-[#1e6bff] text-sm font-display group-hover:gap-3 transition-all">
                    <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>
                      EXPLORE RANGE
                    </span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-steel-400 hover:text-white text-sm transition-colors hover-underline"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}
          >
            VIEW ALL PRODUCTS <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
