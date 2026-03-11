import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, getCategoryBySlug } from "@/data/products";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.categorySlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.categoryName} | Hookimpex`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: cat.categoryName },
            ]}
          />
          <h1
            className="mt-6 mb-4 text-white"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: "0.95",
            }}
          >
            {cat.categoryName.toUpperCase()}
          </h1>
          <p className="text-steel-400 text-base max-w-2xl">{cat.description}</p>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.subcategories.map((sub) => (
              <Link
                key={sub.subcategorySlug}
                href={`/products/${cat.categorySlug}/${sub.subcategorySlug}`}
                className="group specular-card card-3d glass border border-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden hover:border-[rgba(30,107,255,0.3)] transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="h-48 img-placeholder relative">
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="text-5xl text-[#1e6bff] opacity-20"
                      style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
                    >
                      {sub.subcategoryName.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className="text-[10px] tracking-widest text-steel-400"
                      style={{ fontFamily: "Share Tech Mono, monospace" }}
                    >
                      {sub.products.length} VARIANT{sub.products.length > 1 ? "S" : ""}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2
                    className="text-white text-xl mb-3 group-hover:text-[#4d8fff] transition-colors"
                    style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}
                  >
                    {sub.subcategoryName}
                  </h2>
                  <p className="text-steel-400 text-sm leading-relaxed mb-5">{sub.description}</p>

                  {/* Product list */}
                  <div className="space-y-1 mb-5">
                    {sub.products.slice(0, 3).map((p) => (
                      <div key={p.productSlug} className="flex items-center gap-2 text-xs text-steel-400">
                        <div className="w-1 h-1 bg-[#1e6bff] rounded-full" />
                        {p.productName}
                      </div>
                    ))}
                    {sub.products.length > 3 && (
                      <div className="text-xs text-steel-400 pl-3">+{sub.products.length - 3} more</div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[#1e6bff] text-sm group-hover:gap-3 transition-all">
                    <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>
                      EXPLORE
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
