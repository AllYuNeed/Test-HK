import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

// Product Pages
import { ProductsListing } from "./pages/ProductsListing";
import { CategoryPage } from "./pages/CategoryPage";
import { SubcategoryPage } from "./pages/SubcategoryPage";
import { ProductDetail } from "./pages/ProductDetail";

// Client Pages
import { ClientsPage } from "./pages/ClientsPage";
import { ClientLocationPage } from "./pages/ClientLocationPage";

// 404 Page
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />
        <main className="flex-1">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Product Routes */}
            <Route path="/products" element={<ProductsListing />} />
            <Route path="/products/:category" element={<CategoryPage />} />
            <Route path="/products/:category/:subcategory" element={<SubcategoryPage />} />
            <Route path="/products/:category/:subcategory/:product" element={<ProductDetail />} />
            
            {/* Direct product route (no subcategory) */}
            <Route path="/products/:category/:product" element={<ProductDetail />} />
            
            {/* Client Routes */}
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/clients/:clientSlug/:locationSlug" element={<ClientLocationPage />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}