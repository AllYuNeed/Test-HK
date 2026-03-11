"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-sm text-white placeholder-steel-400 focus:border-[rgba(30,107,255,0.5)] focus:outline-none focus:bg-[rgba(30,107,255,0.04)] transition-all text-sm";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            Get In Touch
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
            CONTACT
            <span className="block text-gradient-blue">HOOKIMPEX</span>
          </h1>
          <p className="text-steel-400 text-base max-w-xl">
            Talk to our team about industrial machinery, service support, or product inquiries.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2
                className="text-white text-xl mb-8"
                style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                SEND US A MESSAGE
              </h2>

              {submitted ? (
                <div className="glass border border-[rgba(0,212,170,0.3)] rounded-sm p-8 flex items-center gap-4">
                  <CheckCircle size={32} className="text-[#00d4aa] shrink-0" />
                  <div>
                    <div className="text-white text-lg" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}>
                      Message Sent!
                    </div>
                    <p className="text-steel-400 text-sm">Our team will get back to you within 24 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-[11px] tracking-widest text-steel-400 uppercase mb-2"
                        style={{ fontFamily: "Share Tech Mono, monospace" }}
                      >
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[11px] tracking-widest text-steel-400 uppercase mb-2"
                        style={{ fontFamily: "Share Tech Mono, monospace" }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-[11px] tracking-widest text-steel-400 uppercase mb-2"
                        style={{ fontFamily: "Share Tech Mono, monospace" }}
                      >
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[11px] tracking-widest text-steel-400 uppercase mb-2"
                        style={{ fontFamily: "Share Tech Mono, monospace" }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[11px] tracking-widest text-steel-400 uppercase mb-2"
                      style={{ fontFamily: "Share Tech Mono, monospace" }}
                    >
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled className="bg-charcoal-800">Select inquiry type</option>
                      <option value="product" className="bg-charcoal-800">Product Inquiry</option>
                      <option value="quote" className="bg-charcoal-800">Request a Quote</option>
                      <option value="service" className="bg-charcoal-800">Service & Maintenance</option>
                      <option value="installation" className="bg-charcoal-800">Installation Support</option>
                      <option value="other" className="bg-charcoal-800">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-[11px] tracking-widest text-steel-400 uppercase mb-2"
                      style={{ fontFamily: "Share Tech Mono, monospace" }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your requirements or inquiry..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div>
                    <MagneticButton variant="primary" size="lg">
                      <Send size={16} /> Send Message
                    </MagneticButton>
                  </div>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <h3
                className="text-white text-sm tracking-widest uppercase"
                style={{ fontFamily: "Share Tech Mono, monospace" }}
              >
                Contact Information
              </h3>

              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 98765 43210",
                  href: "tel:+919876543210",
                  color: "#1e6bff",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@hookimpex.com",
                  href: "mailto:info@hookimpex.com",
                  color: "#1e6bff",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "Chat with us",
                  href: "https://wa.me/919876543210",
                  color: "#00d4aa",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Chennai, Tamil Nadu, India",
                  href: "#",
                  color: "#ff6b1e",
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 glass border border-[rgba(255,255,255,0.06)] rounded-sm p-5 hover:border-[rgba(30,107,255,0.25)] transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                    style={{
                      background: `rgba(${color === "#1e6bff" ? "30,107,255" : color === "#ff6b1e" ? "255,107,30" : "0,212,170"}, 0.1)`,
                      border: `1px solid rgba(${color === "#1e6bff" ? "30,107,255" : color === "#ff6b1e" ? "255,107,30" : "0,212,170"}, 0.25)`,
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] tracking-widest text-steel-400 uppercase mb-1"
                      style={{ fontFamily: "Share Tech Mono, monospace" }}
                    >
                      {label}
                    </div>
                    <div className="text-white text-sm group-hover:text-[#4d8fff] transition-colors">{value}</div>
                  </div>
                </a>
              ))}

              {/* Business hours */}
              <div className="glass border border-[rgba(255,255,255,0.06)] rounded-sm p-5">
                <div
                  className="text-[10px] tracking-widest text-steel-400 uppercase mb-4"
                  style={{ fontFamily: "Share Tech Mono, monospace" }}
                >
                  Business Hours
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ["Mon – Fri", "9:00 AM – 6:00 PM"],
                    ["Saturday", "9:00 AM – 2:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-steel-400">{day}</span>
                      <span className="text-white">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0">
        <div
          className="w-full h-64 glass-dark border-t border-[rgba(255,255,255,0.05)] flex items-center justify-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #111318 0%, #1a1d24 100%)" }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative z-10 text-center">
            <MapPin size={32} className="text-[#1e6bff] mx-auto mb-3 opacity-50" />
            <div
              className="text-steel-400 text-sm tracking-widest"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              CHENNAI, TAMIL NADU, INDIA
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
