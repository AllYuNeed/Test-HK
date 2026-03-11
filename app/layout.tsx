import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Hookimpex | Industrial Garment & Textile Machinery",
    template: "%s | Hookimpex",
  },
  description: "Hookimpex — Premium industrial garment and textile machinery. Steam generators, finishing equipment, washing machines, and fusing machines. Formerly Sunshine Garments Machinery since 2004.",
  keywords: ["hookimpex", "garment machinery", "textile machinery", "steam generator", "finishing equipment", "industrial iron", "fusing machine"],
  authors: [{ name: "Hookimpex" }],
  creator: "Hookimpex",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hookimpex.com",
    siteName: "Hookimpex",
    title: "Hookimpex | Industrial Garment & Textile Machinery",
    description: "Premium industrial garment and textile machinery for professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hookimpex | Industrial Garment Machinery",
    description: "Premium industrial garment and textile machinery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-charcoal-950 text-white overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
