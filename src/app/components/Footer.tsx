import { Link } from "react-router-dom";
import { Factory, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center">
                <img
                  src="/hookimpex-logo.svg"
                  alt="Hookimpex Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hookimpex
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading manufacturer of industrial garment & textile machinery.
              Excellence in quality and innovation since decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/ironbox" className="text-muted-foreground hover:text-primary transition-colors">
                  Ironbox
                </Link>
              </li>
              <li>
                <Link to="/products/stain-remover" className="text-muted-foreground hover:text-primary transition-colors">
                  Stain Remover
                </Link>
              </li>
              <li>
                <Link to="/products/finishing-equipment" className="text-muted-foreground hover:text-primary transition-colors">
                  Finishing Equipment
                </Link>
              </li>
              <li>
                <Link to="/products/steam-generator" className="text-muted-foreground hover:text-primary transition-colors">
                  Steam Generator
                </Link>
              </li>
              <li>
                <Link to="/products/thread-sucking" className="text-muted-foreground hover:text-primary transition-colors">
                  Thread Sucking Machine
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  No.6 Veeramani Street, Periyar Nagar Extn, Madipakkam, Chennai
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919994295638" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9994295638
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:enquiry@hookimpex.com" className="text-muted-foreground hover:text-primary transition-colors">
                  enquiry@hookimpex.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hookimpex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}