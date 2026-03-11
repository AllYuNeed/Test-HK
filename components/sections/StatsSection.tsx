const stats = [
  { value: "20+", label: "Years Experience", sub: "Since 2004" },
  { value: "500+", label: "Installations", sub: "Pan India" },
  { value: "50+", label: "Hotel Clients", sub: "5-Star Properties" },
  { value: "24/7", label: "Service Support", sub: "Technical Team" },
];

export default function StatsSection() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 stripe-accent opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.05)]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-charcoal-900 px-8 py-8 text-center relative group hover:bg-charcoal-800 transition-colors"
            >
              <div
                className="stat-number text-5xl mb-1 group-hover:text-gradient-blue transition-all"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div
                className="text-white text-sm tracking-wide mb-1"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}
              >
                {stat.label}
              </div>
              <div
                className="text-[10px] text-steel-400 tracking-widest uppercase"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                {stat.sub}
              </div>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e6bff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
