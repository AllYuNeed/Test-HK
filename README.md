# Hookimpex — Industrial Garment Machinery Website

Premium Next.js 14 website for Hookimpex (formerly Sunshine Garments Machinery, Est. 2004).

## 🚀 Deploy to Vercel

1. Push this folder to a GitHub repository
2. Connect to Vercel
3. Vercel auto-detects Next.js — click **Deploy**

## 🖥️ Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hookimpex/
├── app/
│   ├── page.tsx                    # Home page
│   ├── about/page.tsx              # About Us
│   ├── products/
│   │   ├── page.tsx                # Products listing
│   │   ├── [category]/page.tsx     # Category page
│   │   ├── [category]/[subcategory]/page.tsx
│   │   └── [category]/[subcategory]/[product]/page.tsx
│   ├── clients/
│   │   ├── page.tsx                # Clients listing (with search+filter)
│   │   └── [clientSlug]/[locationSlug]/page.tsx
│   ├── contact/page.tsx            # Contact form
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── sitemap.ts                  # Auto-generated sitemap
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky nav with dropdown
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx         # Animated hero
│   │   ├── StatsSection.tsx
│   │   ├── ProductsOverview.tsx    # 3 category cards
│   │   ├── WhyChooseUs.tsx
│   │   ├── ClientsPreview.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── CustomCursor.tsx        # Animated cursor
│       ├── MagneticButton.tsx      # Magnetic hover button
│       ├── ProductCard.tsx         # 3D product card
│       └── Breadcrumb.tsx
├── data/
│   ├── products.ts                 # Full product hierarchy
│   └── clients.ts                  # All client data
├── lib/
│   ├── motion.ts                   # Animation presets
│   └── utils.ts
└── public/
    ├── logo.png                    # Hookimpex logo
    └── images/products/README.md  # Image guide
```

## 📦 Product Hierarchy

### Category 1: Finishing Equipment
- Ironbox → 2128, STB200
- Stain Remover
- Steam Generator → Built-In (3kW), Portable Manual (3kW), Automatic (3/6/12/18/27/36kW)
- Thread Sucking Machine
- Vacuum Table → Small (2.5×4), Buck with Buck, Buck without Buck, Large (5×4)

### Category 2: Washing Machine
- Washer
- Dryer  
- Hydro Extractor

### Category 3: Fusing Machine
- Flatbed Fusing Press
- Continuous Fusing Machine

## 👥 Clients Data
11 clients, 25+ locations across India — Hyatt, Novotel, Hilton, Westin, Evolve Clothing, and more.

## 🎨 Design System
- **Colors**: Charcoal dark base, steel gray accents, electric blue (#1e6bff), orange (#ff6b1e), teal (#00d4aa)
- **Fonts**: Rajdhani (display), Barlow (body), Share Tech Mono (mono)
- **Effects**: Glassmorphism, 3D card tilt, magnetic buttons, animated cursor, floating particles

## 📷 Product Images
Add photorealistic product renders to `/public/images/products/`. See `/public/images/README.md` for exact filenames and AI prompt suggestions.

## 🌐 Route Map
- `/` — Home
- `/about` — About Us
- `/products` — All Products
- `/products/[category]` — Category listing
- `/products/[category]/[subcategory]` — Subcategory grid
- `/products/[category]/[subcategory]/[product]` — Product detail
- `/clients` — Clients with search/filter by city
- `/clients/[clientSlug]/[locationSlug]` — Client location detail
- `/contact` — Contact form
