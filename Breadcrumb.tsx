import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProductsOverview from "@/components/sections/ProductsOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsSection from "@/components/sections/StatsSection";
import ClientsPreview from "@/components/sections/ClientsPreview";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Hookimpex | Industrial Garment & Textile Machinery Since 2004",
  description: "India's trusted industrial garment machinery provider. Steam generators, finishing equipment, washing machines, and fusing machines for professional operations.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsOverview />
      <WhyChooseUs />
      <ClientsPreview />
      <CTASection />
    </>
  );
}
