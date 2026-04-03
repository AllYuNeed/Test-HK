import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { getCategoryBySlug } from "../../data/products";
import { useStagger } from "../../hooks/useGsap";

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  // Removed useFadeUp to avoid conflict with Motion animations
  const cardsRef = useStagger(".product-item", 0.1);

  if (!category) return <Navigate to="/products" />;
  
  const categoryData = getCategoryBySlug(category);
  
  if (!categoryData) return <Navigate to="/products" />;

  const allProducts = [
    ...categoryData.directProducts,
    ...categoryData.subcategories.flatMap(sub => sub.products)
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{categoryData.name}</span>
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
            className="text-center mb-16"
          >
            <div className="text-6xl mb-4">{categoryData.icon}</div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
                {categoryData.name}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {categoryData.description}
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">{allProducts.length}</span> products available
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subcategories */}
      {categoryData.subcategories.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Product Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.slug}
                  to={`/products/${category}/${subcategory.slug}`}
                  className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {subcategory.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {subcategory.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">{subcategory.products.length}</span> products
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Direct Products */}
      {categoryData.directProducts.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Products</h2>
            <div ref={cardsRef as any} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.directProducts.map((product) => (
                <Link
                  key={product.productSlug}
                  to={`/products/${category}/${product.productSlug}`}
                  className="product-item group relative block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
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
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {product.productName}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products from Subcategories */}
      {categoryData.subcategories.length > 0 && (
        <section className="py-24 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">All Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.subcategories.map((subcategory) =>
                subcategory.products.map((product) => (
                  <Link
                    key={product.productSlug}
                    to={`/products/${category}/${subcategory.slug}/${product.productSlug}`}
                    className="group block p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:-translate-y-1"
                  >
                    <div className="text-xs text-muted-foreground mb-1">{subcategory.name}</div>
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {product.productName}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
