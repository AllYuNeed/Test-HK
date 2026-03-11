import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clients } from "@/data/clients";

export default function ClientsPreview() {
  const featuredClients = clients.slice(0, 8);
  
  return (
    <section className="section-padding bg-charcoal-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div
              className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              Trusted Partners
            </div>
            <h2
              className="text-white"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: "1",
              }}
            >
              OUR CLIENTS
              <span className="block text-gradient-blue">ACROSS INDIA</span>
            </h2>
          </div>
          <Link
            href="/clients"
            className="flex items-center gap-2 text-steel-400 hover:text-white text-sm transition-colors hover-underline shrink-0"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}
          >
            VIEW ALL CLIENTS <ArrowRight size={14} />
          </Link>
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredClients.map((client) => (
            <Link
              key={client.clientSlug}
              href={`/clients`}
              className="group glass border border-[rgba(255,255,255,0.06)] rounded-sm p-5 hover:border-[rgba(30,107,255,0.3)] transition-all duration-300 hover:bg-[rgba(30,107,255,0.04)]"
            >
              <div
                className="text-white text-sm mb-2 group-hover:text-[#4d8fff] transition-colors leading-tight"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}
              >
                {client.clientName}
              </div>
              <div className="flex items-center gap-1.5">
                <div
                  className="w-1 h-1 rounded-full"
                  style={{
                    background: client.clientType === "hospitality" ? "#1e6bff" : 
                      client.clientType === "garment" ? "#ff6b1e" : 
                      client.clientType === "export" ? "#00d4aa" : "#8a9ab0",
                  }}
                />
                <span
                  className="text-[10px] tracking-widest uppercase text-steel-400"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  {client.clientType}
                </span>
              </div>
              <div
                className="text-[10px] text-steel-400 mt-1.5"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                {client.locations.length} location{client.locations.length > 1 ? "s" : ""}
              </div>
            </Link>
          ))}
        </div>

        {/* Client type legend */}
        <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-[rgba(255,255,255,0.05)]">
          {[
            { type: "Hospitality", color: "#1e6bff" },
            { type: "Garment", color: "#ff6b1e" },
            { type: "Export", color: "#00d4aa" },
            { type: "Industrial", color: "#8a9ab0" },
          ].map(({ type, color }) => (
            <div key={type} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span
                className="text-[10px] tracking-widest text-steel-400 uppercase"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
