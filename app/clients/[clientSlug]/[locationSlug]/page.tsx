import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clients, getClientBySlug, getClientLocationBySlug, getAllClientRoutes } from "@/data/clients";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MagneticButton from "@/components/ui/MagneticButton";
import { MapPin, Phone, MessageCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

interface Props {
  params: { clientSlug: string; locationSlug: string };
}

export async function generateStaticParams() {
  return getAllClientRoutes().map(r => ({
    clientSlug: r.client,
    locationSlug: r.location,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const client = getClientBySlug(params.clientSlug);
  const loc = getClientLocationBySlug(params.clientSlug, params.locationSlug);
  if (!client || !loc) return { title: "Not Found" };
  return {
    title: `${client.clientName} — ${loc.locationName} | Hookimpex Clients`,
    description: `Hookimpex machinery installed at ${client.clientName}, ${loc.locationName}, ${loc.city}.`,
  };
}

export default function ClientLocationPage({ params }: Props) {
  const client = getClientBySlug(params.clientSlug);
  const loc = getClientLocationBySlug(params.clientSlug, params.locationSlug);
  if (!client || !loc) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div
          className="absolute right-0 top-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(30,107,255,0.06) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Clients", href: "/clients" },
              { label: client.clientName },
              { label: loc.locationName },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="tag-badge">{client.clientType}</div>
              <div className="flex items-center gap-1.5 text-steel-400">
                <MapPin size={12} className="text-[#1e6bff]" />
                <span
                  className="text-[11px] tracking-widest"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  {loc.locationName}, {loc.city}
                </span>
              </div>
            </div>

            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                lineHeight: "1.05",
              }}
            >
              {client.clientName}
            </h1>

            <p className="text-steel-400 text-base leading-relaxed max-w-2xl">
              {client.description}
            </p>
          </div>
        </div>
      </section>

      {/* Installed Solutions */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2
                className="text-white mb-8"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  letterSpacing: "0.1em",
                }}
              >
                INSTALLED SOLUTIONS
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {loc.installedSolutions.map((solution) => (
                  <div
                    key={solution}
                    className="specular-card glass border border-[rgba(255,255,255,0.07)] rounded-sm p-5 hover:border-[rgba(30,107,255,0.3)] transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#00d4aa] shrink-0 mt-0.5" />
                      <div>
                        <div
                          className="text-white text-sm mb-1 group-hover:text-[#4d8fff] transition-colors"
                          style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}
                        >
                          {solution}
                        </div>
                        <div
                          className="text-[10px] tracking-widest text-steel-400 uppercase"
                          style={{ fontFamily: "Share Tech Mono, monospace" }}
                        >
                          Professional Installation
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Other locations */}
              {client.locations.length > 1 && (
                <div className="mt-12">
                  <h3
                    className="text-white text-sm tracking-widest mb-5 uppercase"
                    style={{ fontFamily: "Share Tech Mono, monospace" }}
                  >
                    Other {client.clientName} Locations
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {client.locations
                      .filter((l) => l.locationSlug !== loc.locationSlug)
                      .map((otherLoc) => (
                        <Link
                          key={otherLoc.locationSlug}
                          href={`/clients/${params.clientSlug}/${otherLoc.locationSlug}`}
                          className="flex items-center gap-1.5 px-3 py-2 glass border border-[rgba(255,255,255,0.07)] rounded-sm text-xs text-steel-400 hover:text-white hover:border-[rgba(30,107,255,0.3)] transition-all"
                        >
                          <MapPin size={10} className="text-[#1e6bff]" />
                          {otherLoc.locationName}, {otherLoc.city}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="glass border border-[rgba(255,255,255,0.07)] rounded-sm p-6">
                <h3
                  className="text-white text-sm tracking-widest mb-5 uppercase"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  Get Service Support
                </h3>
                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 text-steel-400 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-sm glass flex items-center justify-center">
                      <Phone size={14} className="text-[#1e6bff]" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: "Share Tech Mono, monospace" }}>
                      +91 98765 43210
                    </span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    className="flex items-center gap-3 text-steel-400 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-sm glass flex items-center justify-center">
                      <MessageCircle size={14} className="text-[#00d4aa]" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: "Share Tech Mono, monospace" }}>
                      WhatsApp
                    </span>
                  </a>
                </div>
                <MagneticButton href="/contact" variant="primary" size="sm" className="w-full justify-center">
                  Request Service
                </MagneticButton>
              </div>

              {/* Location info */}
              <div className="glass border border-[rgba(255,255,255,0.07)] rounded-sm p-6">
                <div
                  className="text-[10px] tracking-widest text-steel-400 uppercase mb-3"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  Installation Location
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#1e6bff] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white text-sm">{loc.locationName}</div>
                    <div className="text-steel-400 text-xs">{loc.city}, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
