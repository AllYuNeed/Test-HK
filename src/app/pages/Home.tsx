import { Link } from "react-router-dom";
import { ArrowRight, Award, Headphones, Sparkles, Cog, Factory, Settings, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { ProductCard } from "../components/ProductCard";
import { MagneticButton } from "../components/MagneticButton";
import { categories } from "../../data/products";
import { useFadeUp, useStagger } from "../../hooks/useGsap";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  // Removed heroRef useFadeUp to avoid conflict with Motion animations
  const statsRef = useStagger(".stat-item", 0.1);
  const cardsRef = useStagger(".product-card", 0.15);

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Industry-leading machinery built with precision engineering and premium materials.",
    },
    {
      icon: Cog,
      title: "Innovation",
      description: "Cutting-edge technology and continuous R&D for superior performance.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated technical support and maintenance services worldwide.",
    },
  ];

  // Only show main 3 categories as per requirements
  const mainCategories = categories.map(cat => ({
    title: cat.name,
    description: cat.description,
    image: cat.image,
    link: `/products/${cat.slug}`,
    icon: cat.icon
  }));

  const stats = [
    { value: "22+", label: "Years Experience" },
    { value: "500+", label: "Global Clients" },
    { value: "1000+", label: "Installations" },
    { value: "99%", label: "Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        {/* Liquid blob background accents */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                <Factory className="w-4 h-4" />
                <span>Industrial Excellence Since 2004</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Manufacturing
                <span className="block bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent mt-2">
                  Excellence
                </span>
                <span className="block mt-2">in Garment Machinery</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Leading provider of heavy-duty industrial garment & textile machinery.
                Precision-engineered solutions for professional manufacturing operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 font-semibold"
                >
                  View Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-card border-2 border-border hover:border-primary/50 hover:bg-card/80 text-foreground rounded-lg transition-all duration-300 hover:-translate-y-1 font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-3xl blur-3xl opacity-30" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 md:p-8 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1733683296842-c5c32fe36a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZmFjdG9yeXxlbnwxfHx8fDE3NjYyOTkzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Industrial Machinery"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-card/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="mt-2 md:mt-3 text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Product Range</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your industrial garment processing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mainCategories.map((category, index) => (
              <motion.div
                key={category.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={category.link}
                  className="group block p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 h-full"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <Settings className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{category.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4">{category.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span className="text-sm font-semibold">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 lg:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose Hookimpex</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by manufacturers worldwide for quality, innovation, and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 md:p-8 bg-card border border-border rounded-2xl group hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 md:py-16 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {[
              { icon: ShieldCheck, text: "ISO Certified" },
              { icon: Award, text: "Industry Leader" },
              { icon: Factory, text: "Made to Order" },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 group cursor-default"
              >
                <badge.icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-semibold">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}