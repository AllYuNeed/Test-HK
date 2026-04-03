import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Home, Check, Phone, Mail, Package } from "lucide-react";
import { getProductBySlug, getCategoryBySlug } from "../../data/products";
import { MagneticButton } from "../components/MagneticButton";
import { useFadeUp } from "../../hooks/useGsap";

export function ProductDetail() {
  const { category, subcategory, product: productSlug } = useParams<{ 
    category: string; 
    subcategory?: string; 
    product: string 
  }>();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const heroRef = useFadeUp(0);

  if (!category || !productSlug) return <Navigate to="/products" />;
  
  const product = getProductBySlug(category, subcategory || null, productSlug);
  const categoryData = getCategoryBySlug(category);
  
  if (!product || !categoryData) return <Navigate to="/products" />;

  const allImages = [product.heroImage, ...product.galleryImages];

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
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/products/${category}`} className="hover:text-primary transition-colors">
              {categoryData.name}
            </Link>
            {subcategory && (
              <>
                <ChevronRight className="w-4 h-4" />
                <Link to={`/products/${category}/${subcategory}`} className="hover:text-primary transition-colors">
                  {subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              </>
            )}
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product.productName}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <motion.div
              ref={heroRef as any}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-border">
                <img
                  src={allImages[selectedImage]}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80`;
                  }}
                />
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? 'border-primary shadow-lg shadow-primary/30'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.productName} ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80`;
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm mb-4">
                  <Package className="w-3 h-3" />
                  <span>In Stock</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  {product.productName}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {product.shortDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <div className="space-y-3">
                  {product.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <MagneticButton href="/contact" variant="primary">
                  <Mail className="w-4 h-4" />
                  Request Quote
                </MagneticButton>
                <MagneticButton href="/contact" variant="outline">
                  <Phone className="w-4 h-4" />
                  Contact Sales
                </MagneticButton>
              </div>

              {/* Warranty & Support */}
              <div className="p-6 bg-card border border-border rounded-xl space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Warranty</div>
                    <div className="text-sm text-muted-foreground">{product.warranty}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Service & Support</div>
                    <div className="text-sm text-muted-foreground">{product.serviceSupport}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Specs Table */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="divide-y divide-border">
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-2 gap-4 p-4 hover:bg-primary/5 transition-colors"
                    >
                      <div className="font-medium">{key}</div>
                      <div className="text-muted-foreground">{value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Applications</h2>
              <div className="space-y-3">
                {product.applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{application}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in this product?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get in touch with our sales team for a detailed quote and consultation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton href="/contact" variant="primary">
              Contact Us Now
            </MagneticButton>
            <MagneticButton href="/products" variant="outline">
              View All Products
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
