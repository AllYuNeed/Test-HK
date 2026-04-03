import { Target, Eye, Cog, Factory, Users, TrendingUp, Award, Lightbulb, Handshake } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  // Removed useFadeUp to avoid conflict with Motion animations
  
  const coreValues = [
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising standards in every machine we manufacture. From precision engineering to rigorous quality control, we ensure excellence at every step.",
      gradient: "from-primary to-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuous R&D and technological advancement drive our product development. We stay ahead of industry trends to deliver cutting-edge solutions.",
      gradient: "from-accent to-orange-600",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Long-term relationships built on trust, reliability, and mutual growth. Your success is our success, and we're committed to supporting you every step of the way.",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Consultation",
      description: "Understanding your specific industrial requirements",
    },
    {
      icon: Cog,
      title: "Engineering",
      description: "Precision design and manufacturing processes",
    },
    {
      icon: Factory,
      title: "Production",
      description: "State-of-the-art manufacturing facilities",
    },
    {
      icon: TrendingUp,
      title: "Delivery",
      description: "Installation, training, and ongoing support",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                Hookimpex
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two decades of manufacturing excellence, innovation, and unwavering commitment to industrial quality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-4">
                <Factory className="w-4 h-4" />
                <span>Our Journey Since 2004</span>
              </div>
              
              <h2 className="text-4xl font-bold">From Sunshine to Hookimpex</h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Founded in <strong className="text-foreground">2004 as "Sunshine Garments Machinery"</strong>, we began our journey with a singular vision: to bring innovation, reliability, and world-class quality to the garment processing industry. From our humble beginnings, we focused on understanding the real challenges faced by manufacturers and creating solutions that truly made a difference.
                </p>
                
                <p className="leading-relaxed">
                  Through two decades of relentless dedication to excellence, we've grown from a local machinery provider to a trusted name in industrial garment and textile equipment. Our commitment to precision engineering, customer satisfaction, and continuous innovation has earned us partnerships with leading manufacturers across India and beyond.
                </p>
                
                <p className="leading-relaxed">
                  In <strong className="text-foreground">2026, we evolved into "Hookimpex"</strong> — a brand that represents our expanded vision, technological advancement, and unwavering commitment to manufacturing excellence. This transformation reflects not just a new name, but a renewed promise: to lead the industry with cutting-edge solutions, sustainable practices, and unparalleled service that empowers our clients to achieve their highest potential.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all">
                  <div className="text-3xl font-bold text-primary mb-2">22+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all">
                  <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Installations</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-3xl p-4 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758269664127-1f744a56e06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJtZW50JTIwZmFjdG9yeSUyMGludGVyaW9yfGVufDF8fHx8MTc2NjI0ODQxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Factory Interior"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Manufacturing Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to delivery, every step is engineered for excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Image */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-3xl p-4 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYyNTQ5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manufacturing Facility"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}