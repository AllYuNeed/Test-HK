import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0b0d 0%, #0d1019 100%)" }} />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div
          className="text-[120px] leading-none text-gradient-blue mb-4 opacity-20"
          style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
        >
          404
        </div>
        <div
          className="text-[10px] tracking-[0.3em] text-[#1e6bff] uppercase mb-4"
          style={{ fontFamily: "Share Tech Mono, monospace" }}
        >
          Page Not Found
        </div>
        <h1
          className="text-white text-3xl mb-4"
          style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700 }}
        >
          THIS PAGE DOESN&apos;T EXIST
        </h1>
        <p className="text-steel-400 mb-8">
          The page you&apos;re looking for has either moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton href="/" variant="primary">Go Home</MagneticButton>
          <MagneticButton href="/products" variant="secondary">Browse Products</MagneticButton>
        </div>
      </div>
    </div>
  );
}
