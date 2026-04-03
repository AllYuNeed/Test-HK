import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
          <div className="relative text-[150px] lg:text-[200px] font-bold bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent leading-none">
            404
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton
            onClick={() => window.history.back()}
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </MagneticButton>
          <MagneticButton href="/" variant="primary">
            <Home className="w-4 h-4" />
            Go Home
          </MagneticButton>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/products" className="text-primary hover:underline">
              Products
            </Link>
            <Link to="/clients" className="text-primary hover:underline">
              Clients
            </Link>
            <Link to="/about" className="text-primary hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
