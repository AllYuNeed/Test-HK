import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Building2, MapPin, Search, Filter } from "lucide-react";
import { clients, getAllCities, filterClientsByCity, getTotalLocations } from "../../data/clients";
import { useFadeUp, useStagger } from "../../hooks/useGsap";

export function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  
  const heroRef = useFadeUp(0);
  const cardsRef = useStagger(".client-card", 0.1);
  
  const cities = getAllCities();
  
  const filteredClients = clients.filter(client => {
    const matchesSearch = client.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === "all" || 
                       client.locations.some(loc => loc.city.toLowerCase() === selectedCity.toLowerCase());
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={heroRef as any}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-6">
              <Building2 className="w-4 h-4" />
              <span>Trusted Partnerships</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                Clients
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Proud to serve leading brands across hospitality, garment manufacturing, and textile industries
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary">{clients.length}</div>
                <div className="text-sm text-muted-foreground mt-1">Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">{getTotalLocations()}</div>
                <div className="text-sm text-muted-foreground mt-1">Locations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500">{cities.length}</div>
                <div className="text-sm text-muted-foreground mt-1">Cities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-card/30 border-y border-border/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            
            {/* City Filter */}
            <div className="relative md:w-64">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city.toLowerCase()}>{city}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredClients.length}</span> of{" "}
            <span className="font-semibold text-foreground">{clients.length}</span> clients
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredClients.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No clients found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div ref={cardsRef as any} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClients.map((client) => (
                <div
                  key={client.clientSlug}
                  className="client-card group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {client.clientName}
                      </h3>
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {client.industry}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6">
                      {client.description}
                    </p>

                    {/* Locations */}
                    <div className="space-y-2">
                      <div className="text-sm font-semibold mb-3">
                        {client.locations.length} Location{client.locations.length !== 1 ? 's' : ''}
                      </div>
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                        {client.locations.map((location) => (
                          <Link
                            key={location.locationSlug}
                            to={`/clients/${client.clientSlug}/${location.locationSlug}`}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors group/location"
                          >
                            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm group-hover/location:text-primary transition-colors">
                              {location.locationName}, {location.city}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
