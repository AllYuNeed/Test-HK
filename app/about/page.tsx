import type { Metadata } from "next";
import { Award, Target, Handshake, TrendingUp } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Industrial Machinery Heritage Since 2004",
  description: "Hookimpex — formerly Sunshine Garments Machinery. Learn about our 20+ year heritage in industrial garment and textile machinery.",
};

const values = [
  {
    icon: Award,
    title: "Quality",
    description: "Every machine that leaves our facility meets stringent industrial standards. We source only the finest components and apply rigorous quality control — because in manufacturing, downtime is never acceptable.",
    color: "#1e6bff",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "From manually-operated boilers to fully automated PLC-controlled steam systems — we continuously evolve. Our product range mirrors the advancement of the global garment industry.",
    color: "#ff6b1e",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We don't just sell machinery. We build long-term operational relationships with our clients — from installation to ongoing technical support. Your success is our benchmark.",
    color: "#00d4aa",
  },
];

const milestones = [
  { year: "2004", event: "Founded as Sunshine Garments Machinery, Chennai" },
  { year: "2008", event: "Expanded to serve five-star hospitality sector" },
  { year: "2014", event: "500+ installations milestone across South India" },
  { year: "2019", event: "Pan-India service network established" },
  { year: "2024", event: "Evolved brand to HOOKIMPEX — global vision, industrial heart" },
  { year: "2026", event: "Officially launched Hookimpex — advanced product range" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(30,107,255,0.07) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div
              className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-6"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              Our Story
            </div>
            <h1
              className="mb-8"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                lineHeight: "0.95",
              }}
            >
              <span className="text-white">TWO DECADES OF</span>
              <br />
              <span className="text-gradient-blue">INDUSTRIAL PRECISION</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-steel-300 text-base leading-relaxed">
                <p>
                  In 2004, we set out with a single purpose: to bring world-class industrial garment machinery within reach of India's manufacturing sector. We began as{" "}
                  <strong className="text-white">Sunshine Garments Machinery</strong> — a name that carried our founding spirit of clarity, reliability, and warmth in every partnership we built across the industry.
                </p>
                <p>
                  For over two decades, we worked alongside garment factories, five-star hotel laundries, and export houses — understanding their specific needs, witnessing the evolution of textile manufacturing, and building our reputation one machine at a time. Our product range expanded from finishing irons to complete steam generation systems, fusing machines, and industrial washing solutions.
                </p>
                <p>
                  In 2026, we took a bold step forward. <strong className="text-white">Hookimpex</strong> was born — a new identity that carries our legacy into a global era. The name reflects the precision of industrial hooks, the intricacy of textile operations, and the import-export ambition that defines modern manufacturing. Premium machinery. Trusted expertise. Built for the industry that never stops.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#1e6bff] via-[rgba(30,107,255,0.3)] to-transparent" />
              <div className="space-y-8 pl-12">
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative group">
                    <div className="absolute -left-[2.2rem] top-1 w-3 h-3 rounded-full bg-charcoal-900 border-2 border-[#1e6bff] group-hover:bg-[#1e6bff] transition-colors" />
                    <div
                      className="text-[#1e6bff] text-xs tracking-widest mb-1"
                      style={{ fontFamily: "Share Tech Mono, monospace" }}
                    >
                      {m.year}
                    </div>
                    <div
                      className="text-white text-sm"
                      style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600 }}
                    >
                      {m.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div
              className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              What Drives Us
            </div>
            <h2
              className="text-white"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: "1",
              }}
            >
              OUR CORE VALUES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="specular-card glass border border-[rgba(255,255,255,0.06)] rounded-sm p-8 text-center group hover:border-[rgba(30,107,255,0.2)] transition-all"
              >
                <div
                  className="w-16 h-16 rounded-sm mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{
                    background: `rgba(${value.color === "#1e6bff" ? "30,107,255" : value.color === "#ff6b1e" ? "255,107,30" : "0,212,170"}, 0.1)`,
                    border: `1px solid rgba(${value.color === "#1e6bff" ? "30,107,255" : value.color === "#ff6b1e" ? "255,107,30" : "0,212,170"}, 0.25)`,
                  }}
                >
                  <value.icon size={28} style={{ color: value.color }} />
                </div>
                <h3
                  className="text-white text-xl mb-4"
                  style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  {value.title.toUpperCase()}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass border border-[rgba(30,107,255,0.2)] rounded-sm p-10">
              <div
                className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                Our Mission
              </div>
              <h3
                className="text-white text-2xl mb-5"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
              >
                EQUIPPING INDIA&apos;S MANUFACTURERS
              </h3>
              <p className="text-steel-400 text-base leading-relaxed">
                To provide India&apos;s garment and textile industry with industrial machinery that matches global benchmarks &mdash; delivering quality, reliability, and technical excellence at every step of the manufacturing process.
              </p>
            </div>

            <div className="glass border border-[rgba(255,107,30,0.2)] rounded-sm p-10">
              <div
                className="text-[10px] tracking-[0.3em] text-[#ff6b1e] uppercase mb-4"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                Our Vision
              </div>
              <h3
                className="text-white text-2xl mb-5"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
              >
                GLOBAL INDUSTRIAL LEADERSHIP
              </h3>
              <p className="text-steel-400 text-base leading-relaxed">
                To be the most trusted name in industrial garment machinery across South Asia — expanding our product range, service network, and technological capability to serve manufacturers from boutique studios to large-scale export complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
