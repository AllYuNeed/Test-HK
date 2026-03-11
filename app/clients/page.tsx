"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Search, Building2, Factory, Package, Hotel } from "lucide-react";
import { clients, getAllCities } from "@/data/clients";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typeIcons: Record<string, React.ComponentType<any>> = {
  hospitality: Hotel,
  garment: Factory,
  export: Package,
  industrial: Building2,
};

const typeColors: Record<string, string> = {
  hospitality: "#1e6bff",
  garment: "#ff6b1e",
  export: "#00d4aa",
  industrial: "#8a9ab0",
};

export default function ClientsPage() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const cities = ["All", ...getAllCities()];

  const filtered = clients.filter((client) => {
    const matchesSearch = client.clientName.toLowerCase().includes(search.toLowerCase());
    const matchesCity =
      selectedCity === "All" ||
      client.locations.some((loc) => loc.city === selectedCity);
    return matchesSearch && matchesCity;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div
          className="absolute right-0 top-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(30,107,255,0.06) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            Our Installations
          </div>
          <h1
            className="mb-4 text-white"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: "0.95",
            }}
          >
            OUR CLIENTS
            <span className="block text-gradient-blue">ACROSS INDIA</span>
          </h1>
          <p className="text-steel-400 text-base max-w-2xl">
            Trusted by leading hotels, garment manufacturers, and export houses. Our machinery powers operations from Chennai to Mumbai.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-charcoal-900 border-b border-[rgba(255,255,255,0.06)] sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-400" />
              <input
                type="text"
                placeholder="Search clients..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-sm text-sm text-white placeholder-steel-400 focus:border-[rgba(30,107,255,0.5)] focus:outline-none transition-colors"
                style={{ fontFamily: "Barlow, sans-serif" }}
              />
            </div>

            {/* City filter */}
            <div className="flex gap-2 flex-wrap">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3 py-2 text-xs rounded-sm transition-all ${
                    selectedCity === city
                      ? "bg-[#1e6bff] text-white"
                      : "glass border border-[rgba(255,255,255,0.06)] text-steel-400 hover:text-white hover:border-[rgba(30,107,255,0.3)]"
                  }`}
                  style={{ fontFamily: "Share Tech Mono, monospace", letterSpacing: "0.08em" }}
                >
                  {city.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-steel-400">No clients found matching your criteria.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((client) => {
                const Icon = typeIcons[client.clientType] || Building2;
                const color = typeColors[client.clientType];
                const filteredLocations =
                  selectedCity === "All"
                    ? client.locations
                    : client.locations.filter((loc) => loc.city === selectedCity);

                return (
                  <div
                    key={client.clientSlug}
                    className="specular-card glass border border-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden hover:border-[rgba(30,107,255,0.25)] transition-all duration-300"
                  >
                    {/* Header */}
                    <div
                      className="p-5 border-b border-[rgba(255,255,255,0.05)]"
                      style={{ background: `rgba(${color === "#1e6bff" ? "30,107,255" : color === "#ff6b1e" ? "255,107,30" : color === "#00d4aa" ? "0,212,170" : "138,154,176"}, 0.04)` }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                          style={{
                            background: `rgba(${color === "#1e6bff" ? "30,107,255" : color === "#ff6b1e" ? "255,107,30" : color === "#00d4aa" ? "0,212,170" : "138,154,176"}, 0.1)`,
                            border: `1px solid rgba(${color === "#1e6bff" ? "30,107,255" : color === "#ff6b1e" ? "255,107,30" : color === "#00d4aa" ? "0,212,170" : "138,154,176"}, 0.3)`,
                          }}
                        >
                          <Icon size={18} style={{ color }} />
                        </div>
                        <div>
                          <h3
                            className="text-white text-sm leading-tight mb-1"
                            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}
                          >
                            {client.clientName}
                          </h3>
                          <span
                            className="text-[10px] tracking-widest uppercase"
                            style={{ color, fontFamily: "Share Tech Mono, monospace" }}
                          >
                            {client.clientType}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="p-4">
                      <div
                        className="text-[10px] tracking-widest text-steel-400 uppercase mb-3"
                        style={{ fontFamily: "Share Tech Mono, monospace" }}
                      >
                        Installations ({filteredLocations.length})
                      </div>
                      <div className="space-y-2">
                        {filteredLocations.map((loc) => (
                          <Link
                            key={loc.locationSlug}
                            href={`/clients/${client.clientSlug}/${loc.locationSlug}`}
                            className="flex items-center justify-between py-2 px-3 rounded-sm hover:bg-[rgba(30,107,255,0.06)] transition-colors group"
                          >
                            <div className="flex items-center gap-2">
                              <MapPin size={12} className="text-[#1e6bff] shrink-0" />
                              <span className="text-steel-300 text-xs group-hover:text-white transition-colors">
                                {loc.locationName}, {loc.city}
                              </span>
                            </div>
                            <span className="text-[#1e6bff] text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="px-4 pb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {Array.from(new Set(client.locations.flatMap(l => l.installedSolutions))).slice(0, 3).map((sol) => (
                          <span
                            key={sol}
                            className="text-[9px] px-2 py-1 rounded-sm border"
                            style={{
                              fontFamily: "Share Tech Mono, monospace",
                              letterSpacing: "0.1em",
                              background: "rgba(255,255,255,0.03)",
                              borderColor: "rgba(255,255,255,0.08)",
                              color: "#8a9ab0",
                            }}
                          >
                            {sol.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
