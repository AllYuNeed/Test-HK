import { Shield, Zap, Wrench, Award, HeadphonesIcon, Globe } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "20+ Years of Excellence",
    description: "Since 2004, we've been the backbone of India's garment industry — from Sunshine Garments Machinery to Hookimpex.",
    color: "#1e6bff",
  },
  {
    icon: Shield,
    title: "Industrial Grade Quality",
    description: "Every machine is built to withstand the demands of large-scale production with precision engineering and premium materials.",
    color: "#ff6b1e",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Innovation",
    description: "Our machinery incorporates the latest industrial technology — from PLC-controlled boilers to automated fusing systems.",
    color: "#00d4aa",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Professional installation and commissioning by our trained technical team across India.",
    color: "#1e6bff",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Technical Support",
    description: "Round-the-clock technical assistance ensures minimal downtime for your operations.",
    color: "#ff6b1e",
  },
  {
    icon: Globe,
    title: "Pan-India Network",
    description: "Service engineers stationed across India for rapid response and on-site support wherever you operate.",
    color: "#00d4aa",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-charcoal-900 relative overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(30,107,255,0.03) 0%, transparent 50%, rgba(255,107,30,0.02) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            Why Partner With Us
          </div>
          <h2
            className="mb-4 text-white"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: "1",
            }}
          >
            THE HOOKIMPEX
            <span className="block text-gradient-blue">ADVANTAGE</span>
          </h2>
          <p className="text-steel-400 text-base leading-relaxed">
            Trusted by India&apos;s leading hotels, garment manufacturers, and export houses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="specular-card glass border border-[rgba(255,255,255,0.06)] rounded-sm p-7 group hover:border-[rgba(30,107,255,0.2)] transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                style={{
                  background: `rgba(${reason.color === "#1e6bff" ? "30,107,255" : reason.color === "#ff6b1e" ? "255,107,30" : "0,212,170"}, 0.1)`,
                  border: `1px solid rgba(${reason.color === "#1e6bff" ? "30,107,255" : reason.color === "#ff6b1e" ? "255,107,30" : "0,212,170"}, 0.2)`,
                }}
              >
                <reason.icon size={20} style={{ color: reason.color }} />
              </div>

              <h3
                className="text-white text-base mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}
              >
                {reason.title}
              </h3>
              <p className="text-steel-400 text-sm leading-relaxed">{reason.description}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-sm"
                style={{ background: reason.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
