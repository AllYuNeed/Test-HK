"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/products";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: categories.map(c => ({
      label: c.categoryName,
      href: `/products/${c.categorySlug}`,
    })),
  },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[rgba(255,255,255,0.1)] group-hover:border-[rgba(30,107,255,0.5)] transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Hookimpex Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div>
            <div
              className="font-display font-700 text-xl tracking-wider leading-none"
              style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
            >
              <span className="text-gradient-blue">HOOK</span>
              <span className="text-white">IMPEX</span>
            </div>
            <div
              className="text-[9px] tracking-[0.2em] text-steel-400 uppercase"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              Industrial Machinery
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              {link.children ? (
                <div>
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-sm font-display text-sm tracking-wide transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-[#1e6bff]"
                        : "text-steel-300 hover:text-white"
                    }`}
                    style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52 glass-dark border border-[rgba(255,255,255,0.07)] rounded-sm shadow-xl py-2"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-xs tracking-wider text-steel-400 hover:text-[#1e6bff] font-mono uppercase transition-colors"
                        style={{ fontFamily: "Share Tech Mono, monospace" }}
                      >
                        All Products
                      </Link>
                      <div className="divider-industrial my-1" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm font-display transition-all duration-200 hover:bg-[rgba(30,107,255,0.08)] hover:text-white ${
                            isActive(child.href) ? "text-[#1e6bff]" : "text-steel-200"
                          }`}
                          style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 500 }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-sm font-display text-sm tracking-wide transition-all duration-200 hover-underline ${
                    isActive(link.href)
                      ? "text-[#1e6bff]"
                      : "text-steel-300 hover:text-white"
                  }`}
                  style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 bg-[#1e6bff] hover:bg-[#4d8fff] text-white font-display text-sm tracking-wider rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(30,107,255,0.4)]"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
          >
            GET QUOTE
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-steel-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-dark border-t border-[rgba(255,255,255,0.05)] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 font-display text-base tracking-wide border-b border-[rgba(255,255,255,0.05)] ${
                  isActive(link.href) ? "text-[#1e6bff]" : "text-steel-200"
                }`}
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 space-y-1 py-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-sm text-steel-400 hover:text-white transition-colors"
                    >
                      → {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="block mt-4 text-center py-3 bg-[#1e6bff] text-white font-display tracking-widest rounded-sm"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
          >
            GET QUOTE
          </Link>
        </div>
      )}
    </header>
  );
}
