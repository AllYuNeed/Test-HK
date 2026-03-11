import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getSubcategoryBySlug } from "@/data/products";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductCard from "@/components/ui/ProductCard";
import CTASection from "@/components/sections/CTASection";

interface Props {
  params: Promise<{ category: string; subcategory: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      params.push({ category: cat.categorySlug, subcategory: sub.subcategorySlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subcategory } = await params;
  const sub = getSubcategoryBySlug(category, subcategory);
  if (!sub) return { title: "Not Found" };
  return { title: `${sub.subcategoryName} | Hookimpex`, description: sub.description };
}

export default async function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = await params;
  const cat = getCategoryBySlug(category);
  const sub = getSubcategoryBySlug(category, subcategory);
  if (!cat || !sub) notFound();

  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Breadcrumb items={[
            { label: "Products", href: "/products" },
            { label: cat.categoryName, href: `/products/${cat.categorySlug}` },
            { label: sub.subcategoryName },
          ]} />
          <h1 className="mt-6 mb-4 text-white" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: "0.95" }}>
            {sub.subcategoryName.toUpperCase()}
          </h1>
          <p className="text-steel-400 text-base max-w-2xl">{sub.description}</p>
        </div>
      </section>

      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sub.products.map((product) => (
              <ProductCard
                key={product.productSlug}
                title={product.productName}
                description={product.shortDescription}
                href={`/products/${cat.categorySlug}/${sub.subcategorySlug}/${product.productSlug}`}
                specs={Object.entries(product.specs).slice(0, 3).map(([label, value]) => ({ label, value: String(value) }))}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
