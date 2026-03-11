import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Industrial Machinery Products | Hookimpex",
  description: "Explore Hookimpex's full range of industrial garment machinery — finishing equipment, washing machines, and fusing machines.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            Full Product Range
          </div>
          <h1
            className="mb-4 text-white"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "0.95",
            }}
          >
            INDUSTRIAL MACHINERY
            <span className="block text-gradient-blue">CATALOGUE</span>
          </h1>
          <p className="text-steel-400 text-base max-w-2xl">
            Professional-grade machinery for every stage of garment manufacturing and laundry operations.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {categories.map((cat, catI) => (
              <div key={cat.categorySlug}>
                {/* Category header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[rgba(255,255,255,0.07)]">
                  <div>
                    <h2
                      className="text-white"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {cat.categoryName.toUpperCase()}
                    </h2>
                    <p className="text-steel-400 text-sm mt-1">{cat.description}</p>
                  </div>
                  <Link
                    href={`/products/${cat.categorySlug}`}
                    className="hidden md:flex items-center gap-2 text-[#1e6bff] text-sm hover-underline transition-all"
                    style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}
                  >
                    ALL {cat.categoryName.toUpperCase()} <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Subcategory grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cat.subcategories.map((sub) => (
                    <Link
                      key={sub.subcategorySlug}
                      href={`/products/${cat.categorySlug}/${sub.subcategorySlug}`}
                      className="group specular-card glass border border-[rgba(255,255,255,0.06)] rounded-sm p-5 hover:border-[rgba(30,107,255,0.3)] transition-all duration-300"
                    >
                      <div
                        className="text-white text-base mb-2 group-hover:text-[#4d8fff] transition-colors"
                        style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}
                      >
                        {sub.subcategoryName}
                      </div>
                      <p className="text-steel-400 text-xs leading-relaxed mb-4">{sub.description}</p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[10px] tracking-widest text-steel-400 uppercase"
                          style={{ fontFamily: "Share Tech Mono, monospace" }}
                        >
                          {sub.products.length} product{sub.products.length > 1 ? "s" : ""}
                        </span>
                        <ArrowRight size={12} className="text-[#1e6bff] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
