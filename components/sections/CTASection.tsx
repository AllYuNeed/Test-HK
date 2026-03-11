import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a0f1a 0%, #0d1525 50%, #0a0b0d 100%)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {/* Blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(30,107,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-6"
          style={{ fontFamily: "Share Tech Mono, monospace" }}
        >
          Ready to Upgrade Your Operations?
        </div>
        <h2
          className="mb-6"
          style={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: "1",
          }}
        >
          <span className="text-white">GET IN TOUCH </span>
          <span className="text-gradient-blue">TODAY</span>
        </h2>
        <p className="text-steel-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Our team of industrial machinery experts is ready to help you find the perfect solution for your garment or laundry operation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <MagneticButton href="/contact" variant="primary" size="lg">
            Request a Quote <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton href="/products" variant="secondary" size="lg">
            Browse Products
          </MagneticButton>
        </div>

        {/* Contact options */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2.5 text-steel-400 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-sm glass border border-[rgba(255,255,255,0.08)] flex items-center justify-center group-hover:border-[rgba(30,107,255,0.5)] transition-colors">
              <Phone size={14} className="text-[#1e6bff]" />
            </div>
            <span className="text-sm" style={{ fontFamily: "Share Tech Mono, monospace" }}>
              +91 98765 43210
            </span>
          </a>
          <a
            href="mailto:info@hookimpex.com"
            className="flex items-center gap-2.5 text-steel-400 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-sm glass border border-[rgba(255,255,255,0.08)] flex items-center justify-center group-hover:border-[rgba(30,107,255,0.5)] transition-colors">
              <Mail size={14} className="text-[#1e6bff]" />
            </div>
            <span className="text-sm" style={{ fontFamily: "Share Tech Mono, monospace" }}>
              info@hookimpex.com
            </span>
          </a>
          <a
            href="https://wa.me/919876543210"
            className="flex items-center gap-2.5 text-steel-400 hover:text-white transition-colors group"
          >
            <div className="w-8 h-8 rounded-sm glass border border-[rgba(255,255,255,0.08)] flex items-center justify-center group-hover:border-[rgba(0,212,170,0.5)] transition-colors">
              <MessageCircle size={14} className="text-[#00d4aa]" />
            </div>
            <span className="text-sm" style={{ fontFamily: "Share Tech Mono, monospace" }}>
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
