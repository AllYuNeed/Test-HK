import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProductRoutes, getCategoryBySlug, getSubcategoryBySlug, getProductBySlug } from "@/data/products";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MagneticButton from "@/components/ui/MagneticButton";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, Phone, MessageCircle, Shield, Clock } from "lucide-react";

interface Props {
  params: Promise<{ category: string; subcategory: string; product: string }>;
}

export async function generateStaticParams() {
  return getAllProductRoutes().map((r) => ({
    category: r.category,
    subcategory: r.subcategory,
    product: r.product,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subcategory, product: productSlug } = await params;
  const product = getProductBySlug(category, subcategory, productSlug);
  if (!product) return { title: "Not Found" };
  return { title: product.seo.title, description: product.seo.description, keywords: product.seo.keywords };
}

export default async function ProductPage({ params }: Props) {
  const { category, subcategory, product: productSlug } = await params;
  const cat = getCategoryBySlug(category);
  const sub = getSubcategoryBySlug(category, subcategory);
  const product = getProductBySlug(category, subcategory, productSlug);
  if (!cat || !sub || !product) notFound();

  return (
    <>
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: cat.categoryName, href: `/products/${cat.categorySlug}` },
            { label: sub.subcategoryName, href: `/products/${cat.categorySlug}/${sub.subcategorySlug}` },
            { label: product.productName },
          ]} />

          <div className="mt-10 grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="glass border border-[rgba(255,255,255,0.07)] rounded-sm overflow-hidden">
                <div className="aspect-square img-placeholder flex items-center justify-center relative" style={{ minHeight: "380px" }}>
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  <div className="relative z-10 text-center p-10">
                    <div className="text-8xl text-[#1e6bff] opacity-15 mb-4" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}>
                      {product.productName.substring(0, 3).toUpperCase()}
                    </div>
                    <div className="text-steel-400 text-sm" style={{ fontFamily: "Share Tech Mono, monospace" }}>Product Image Coming Soon</div>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#1e6bff] to-transparent mx-auto mt-3" />
                  </div>
                  {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map(pos => (
                    <div key={pos} className={`absolute ${pos} w-6 h-6`}>
                      <div className="absolute top-0 left-0 w-3 h-px bg-[#1e6bff] opacity-60" />
                      <div className="absolute top-0 left-0 w-px h-3 bg-[#1e6bff] opacity-60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="tag-badge mb-4 inline-block">{cat.categoryName}</div>
              <h1 className="text-white mb-4" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: "1.1" }}>
                {product.productName}
              </h1>
              <p className="text-steel-300 text-base leading-relaxed mb-8">{product.shortDescription}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                <MagneticButton href="/contact" variant="primary" size="md">
                  <Phone size={16} /> Request Quote
                </MagneticButton>
                <MagneticButton href="https://wa.me/919876543210" variant="secondary" size="md" external>
                  <MessageCircle size={16} /> WhatsApp
                </MagneticButton>
              </div>

              <div className="mb-8">
                <h3 className="text-white text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "Share Tech Mono, monospace" }}>Key Features</h3>
                <ul className="space-y-3">
                  {product.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#00d4aa] mt-0.5 shrink-0" />
                      <span className="text-steel-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass border border-[rgba(255,255,255,0.06)] rounded-sm p-4 flex items-start gap-3">
                  <Shield size={16} className="text-[#1e6bff] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] tracking-widest text-steel-400 uppercase mb-1" style={{ fontFamily: "Share Tech Mono, monospace" }}>Warranty</div>
                    <div className="text-white text-xs">{product.warranty}</div>
                  </div>
                </div>
                <div className="glass border border-[rgba(255,255,255,0.06)] rounded-sm p-4 flex items-start gap-3">
                  <Clock size={16} className="text-[#ff6b1e] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] tracking-widest text-steel-400 uppercase mb-1" style={{ fontFamily: "Share Tech Mono, monospace" }}>Support</div>
                    <div className="text-white text-xs">{product.serviceSupport}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-white text-xl mb-6 pb-4 border-b border-[rgba(255,255,255,0.07)]" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}>
                TECHNICAL SPECIFICATIONS
              </h2>
              <div className="space-y-0 border border-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden">
                {Object.entries(product.specs).map(([key, val], i) => (
                  <div key={key} className={`flex items-center justify-between px-5 py-3 ${i % 2 === 0 ? "bg-[rgba(255,255,255,0.02)]" : "bg-transparent"} hover:bg-[rgba(30,107,255,0.04)] transition-colors`}>
                    <span className="text-steel-400 text-sm" style={{ fontFamily: "Share Tech Mono, monospace" }}>{key}</span>
                    <span className="text-white text-sm font-medium" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}>{String(val)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-white text-xl mb-6 pb-4 border-b border-[rgba(255,255,255,0.07)]" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}>
                INDUSTRIAL APPLICATIONS
              </h2>
              <div className="space-y-3">
                {product.applications.map((app, i) => (
                  <div key={app} className="flex items-center gap-4 glass border border-[rgba(255,255,255,0.05)] rounded-sm px-5 py-4 hover:border-[rgba(30,107,255,0.2)] transition-colors">
                    <div className="w-6 h-6 rounded-sm bg-[rgba(30,107,255,0.1)] border border-[rgba(30,107,255,0.2)] flex items-center justify-center text-[10px] text-[#1e6bff] shrink-0" style={{ fontFamily: "Share Tech Mono, monospace" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className="text-steel-300 text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
