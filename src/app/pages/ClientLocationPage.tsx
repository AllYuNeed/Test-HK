import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Building2, MapPin, ChevronRight, Home, Package } from "lucide-react";
import { getClientBySlug, getClientLocation } from "../../data/clients";
import { getCategoryBySlug } from "../../data/products";
import { MagneticButton } from "../components/MagneticButton";
import { useFadeUp } from "../../hooks/useGsap";

export function ClientLocationPage() {
  const { clientSlug, locationSlug } = useParams<{ clientSlug: string; locationSlug: string }>();
  const heroRef = useFadeUp(0);

  if (!clientSlug || !locationSlug) return <Navigate to="/clients" />;
  
  const client = getClientBySlug(clientSlug);
  const location = getClientLocation(clientSlug, locationSlug);
  
  if (!client || !location) return <Navigate to="/clients" />;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/clients" className="hover:text-primary transition-colors">
              Clients
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">
              {client.clientName} - {location.locationName}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef as any}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {client.clientName}
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-xl text-muted-foreground mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{location.locationName}, {location.city}</span>
              {location.state && <span>• {location.state}</span>}
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm">
              {client.industry}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Client */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">About {client.clientName}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {client.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Installed Solutions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Installed Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Hookimpex machinery serving this location
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.installedSolutions.map((categorySlug, index) => {
              const category = getCategoryBySlug(categorySlug);
              if (!category) return null;

              return (
                <motion.div
                  key={categorySlug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/products/${category.slug}`}
                    className="group block p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                      <Package className="w-4 h-4" />
                      <span>View Products</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Details */}
      {location.description && (
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-border rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Location Details</h3>
              <p className="text-muted-foreground leading-relaxed">
                {location.description}
              </p>
              {location.installationYear && (
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-sm text-muted-foreground">Installation Year: </span>
                  <span className="font-semibold">{location.installationYear}</span>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Locations */}
      {client.locations.length > 1 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              Other {client.clientName} Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {client.locations
                .filter(loc => loc.locationSlug !== locationSlug)
                .map((loc) => (
                  <Link
                    key={loc.locationSlug}
                    to={`/clients/${clientSlug}/${loc.locationSlug}`}
                    className="p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {loc.locationName}
                        </div>
                        <div className="text-sm text-muted-foreground">{loc.city}</div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to equip your facility?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our growing list of satisfied clients with premium industrial machinery
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton href="/contact" variant="primary">
              Get in Touch
            </MagneticButton>
            <MagneticButton href="/products" variant="outline">
              Browse Products
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
