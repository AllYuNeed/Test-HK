import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { getCategoryBySlug, getSubcategoryBySlug } from "../../data/products";
import { useStagger } from "../../hooks/useGsap";

export function SubcategoryPage() {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  // Removed useFadeUp to avoid conflict with Motion animations
  const cardsRef = useStagger(".product-item", 0.1);

  if (!category || !subcategory) return <Navigate to="/products" />;
  
  const categoryData = getCategoryBySlug(category);
  const subcategoryData = getSubcategoryBySlug(category, subcategory);
  
  if (!categoryData || !subcategoryData) return <Navigate to="/products" />;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/products/${category}`} className="hover:text-primary transition-colors">
              {categoryData.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{subcategoryData.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-6">
              <span>{categoryData.name}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                {subcategoryData.name}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {subcategoryData.description}
            </p>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">{subcategoryData.products.length}</span> products available
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={cardsRef as any} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategoryData.products.map((product) => (
              <Link
                key={product.productSlug}
                to={`/products/${category}/${subcategory}/${product.productSlug}`}
                className="product-item group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src={product.heroImage}
                      alt={product.productName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {product.productName}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    
                    {/* Key Specs Preview */}
                    {Object.keys(product.specs).length > 0 && (
                      <div className="mb-4 space-y-1">
                        {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
