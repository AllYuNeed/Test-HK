import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-[rgba(255,255,255,0.06)]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div
                className="font-display text-2xl tracking-wider mb-1"
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
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Formerly Sunshine Garments Machinery (Est. 2004). India&apos;s trusted partner for industrial garment and textile machinery.
            </p>
            <div className="flex gap-3">
              {["FB", "LI", "TW", "YT"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 glass rounded-sm flex items-center justify-center text-[10px] font-mono text-steel-400 hover:text-white hover:border-[rgba(30,107,255,0.5)] cursor-pointer transition-all"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              className="font-display text-white text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.15em" }}
            >
              Products
            </h4>
            <ul className="space-y-3">
              {[
                ["Finishing Equipment", "/products/finishing-equipment"],
                ["Ironbox", "/products/finishing-equipment/ironbox"],
                ["Steam Generator", "/products/finishing-equipment/steam-generator"],
                ["Thread Sucking Machine", "/products/finishing-equipment/thread-sucking-machine"],
                ["Washing Machine", "/products/washing-machine"],
                ["Fusing Machine", "/products/fusing-machine"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-steel-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-[#1e6bff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="font-display text-white text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.15em" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {[
                ["About Us", "/about"],
                ["Our Clients", "/clients"],
                ["Contact Us", "/contact"],
                ["Get a Quote", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-steel-400 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-[#1e6bff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display text-white text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.15em" }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 group text-steel-400 hover:text-white transition-colors"
              >
                <Phone size={14} className="mt-0.5 shrink-0 text-[#1e6bff]" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@hookimpex.com"
                className="flex items-start gap-3 group text-steel-400 hover:text-white transition-colors"
              >
                <Mail size={14} className="mt-0.5 shrink-0 text-[#1e6bff]" />
                <span className="text-sm">info@hookimpex.com</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex items-start gap-3 group text-steel-400 hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="mt-0.5 shrink-0 text-[#00d4aa]" />
                <span className="text-sm">WhatsApp Us</span>
              </a>
              <div className="flex items-start gap-3 text-steel-400">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#ff6b1e]" />
                <span className="text-sm leading-relaxed">
                  Chennai, Tamil Nadu<br />India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[11px] text-steel-400 tracking-wide"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            © {new Date().getFullYear()} HOOKIMPEX. ALL RIGHTS RESERVED.
          </p>
          <p
            className="text-[11px] text-steel-400 tracking-wide"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            FORMERLY SUNSHINE GARMENTS MACHINERY EST. 2004
          </p>
        </div>
      </div>
    </footer>
  );
}
