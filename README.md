# 🏭 Hookimpex - Industrial Machinery Website

Premium industrial garment & textile machinery website built with React, GSAP, and modern web technologies.

![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Version](https://img.shields.io/badge/Version-2.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88ce02)

---

## ✨ Features

- 🎨 **Premium 3D Design** - Industrial aesthetic with glassmorphism effects
- 🎬 **GSAP Animations** - Smooth scroll-triggered animations throughout
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🛍️ **48 Products** - Complete product catalog with 3-tier hierarchy
- 👥 **11 Clients** - Showcase with 29 locations across India
- 🔍 **Search & Filter** - Advanced client search and filtering
- ✉️ **Contact Form** - Functional email integration with Supabase & Resend
- 🚀 **Dynamic Routing** - React Router with parameterized routes
- ⚡ **Performance Optimized** - Fast loading, efficient animations
- ♿ **Accessible** - Respects prefers-reduced-motion

---

## 🚀 Quick Start

### **Deploy Now:**
```bash
git add .
git commit -m "Deploy complete Hookimpex website"
git push origin main
```

Vercel will automatically build and deploy your site in 2-3 minutes.

---

## 📁 Project Structure

```
hookimpex-website/
├── src/
│   ├── app/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── ProductsListing.tsx
│   │   │   ├── CategoryPage.tsx
│   │   │   ├── SubcategoryPage.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── ClientsPage.tsx
│   │   │   ├── ClientLocationPage.tsx
│   │   │   └── NotFound.tsx
│   │   └── App.tsx           # Main app with routing
│   ├── data/                 # Data sources
│   │   ├── products.ts       # 48 products
│   │   └── clients.ts        # 11 clients, 29 locations
│   ├── lib/                  # Utilities
│   │   └── gsap.ts           # GSAP presets
│   ├── hooks/                # Custom React hooks
│   │   └── useGsap.ts        # GSAP animation hooks
│   └── styles/               # Global styles
├── public/
│   └── images/               # Product & category images
├── supabase/                 # Backend functions
└── docs/                     # Documentation
    ├── DEPLOYMENT_INSTRUCTIONS.md
    ├── COMPLETE_IMPLEMENTATION_GUIDE.md
    ├── VERIFICATION_CHECKLIST.md
    └── /public/images/README.md
```

---

## 🗺️ Routes

### **Main Pages:**
- `/` - Home
- `/about` - About Us
- `/contact` - Contact
- `/products` - Products Listing
- `/clients` - Clients Listing

### **Product Pages (48 products):**
- `/products/:category` - Category pages
- `/products/:category/:subcategory` - Subcategory pages
- `/products/:category/:subcategory/:product` - Product details

**Example routes:**
- `/products/finishing-equipment`
- `/products/finishing-equipment/ironbox`
- `/products/finishing-equipment/ironbox/2128`
- `/products/washing-machine/washer`
- `/products/fusing-machine/flatbed-fusing-press`

### **Client Pages (29 locations):**
- `/clients/:clientSlug/:locationSlug` - Client location pages

**Example routes:**
- `/clients/hyatt-regency-the-laundry-bag/chennai`
- `/clients/novotel/shollinganallur`
- `/clients/hilton-embassy/bangalore`

---

## 🛠️ Tech Stack

### **Frontend:**
- React 18.3.1
- TypeScript
- React Router DOM 7.11.0
- GSAP 3.14.2 (animations)
- Motion (Framer Motion) 12.23.24
- Tailwind CSS 4.1.12
- Lucide React (icons)

### **Backend:**
- Supabase (Database, Auth, Edge Functions)
- Resend (Email delivery)
- Hono (Server framework)

### **Build & Deploy:**
- Vite 6.3.5
- Vercel (hosting)
- GitHub (version control)

---

## 📊 Statistics

**Content:**
- 48 Products across 3 categories
- 11 Clients with 29 locations
- 9 Cities covered
- 65+ Dynamic routes

**Code:**
- 20+ TypeScript files
- 15+ React components
- ~5,000+ Lines of code
- Type-safe architecture

---

## 🎨 Design System

### **Colors:**
- **Primary:** Blue (#0066FF spectrum)
- **Accent:** Orange (#FF6B00 spectrum)
- **Background:** Dark charcoal/graphite
- **Text:** High contrast whites and grays

### **Typography:**
- **Headings:** Bold, large, gradient text
- **Body:** Clean, readable, accessible
- **Spacing:** Generous whitespace

### **Effects:**
- 3D card tilts
- Magnetic button hover
- Glassmorphism
- Soft shadows with depth
- Gradient backgrounds
- Liquid blob animations

---

## 🔧 Development

### **Install Dependencies:**
```bash
pnpm install
```

### **Run Development Server:**
```bash
pnpm dev
```

### **Build for Production:**
```bash
pnpm build
```

---

## 📝 Adding Content

### **Add a New Product:**

1. Open `/src/data/products.ts`
2. Add product object to the appropriate category:

```typescript
{
  categorySlug: "finishing-equipment",
  subcategorySlug: "ironbox",
  productSlug: "new-model",
  productName: "New Ironbox Model",
  shortDescription: "Description here",
  keyFeatures: ["Feature 1", "Feature 2", ...],
  specs: { "Power": "5kW", ... },
  applications: ["Application 1", ...],
  warranty: "2 Year Warranty",
  serviceSupport: "24/7 Support",
  heroImage: "/images/products/...",
  galleryImages: [...],
  seoTitle: "SEO Title",
  seoDescription: "SEO Description"
}
```

3. No other files need changing - routing is automatic!

### **Add a New Client:**

1. Open `/src/data/clients.ts`
2. Add client object:

```typescript
{
  clientSlug: "new-client",
  clientName: "Client Name",
  industry: "Industry",
  description: "Description",
  locations: [
    {
      locationSlug: "location-name",
      locationName: "Location Name",
      city: "City",
      state: "State",
      installedSolutions: ["finishing-equipment", "washing-machine"]
    }
  ]
}
```

3. Automatic routing and display!

---

## 🖼️ Images

### **Current Status:**
- Fallback images from Unsplash are used
- Website works perfectly without custom images

### **To Add Custom Images:**
1. See `/public/images/README.md` for complete guide
2. Add images following the folder structure
3. No code changes needed - automatic loading

---

## 📧 Contact Form

### **Current Setup:**
- Sends to: `allyuneed37@gmail.com` (verified sender)
- Uses: Supabase Edge Functions + Resend API
- Stores: All submissions in database

### **To Forward to Business Email:**
1. Set up Gmail forwarding from allyuneed37@gmail.com → enquiry@hookimpex.com
2. Or verify hookimpex.com domain in Resend

---

## 🎯 Key Pages

### **Home Page:**
- Hero with call-to-action
- 3 main product categories
- Why choose us section
- Stats showcase
- Trust badges

### **About Page:**
- Company history (2004-2026)
- 3 core values: Quality, Innovation, Partnership
- Mission & vision
- Manufacturing process

### **Products:**
- Main listing (3 categories)
- Category pages
- Subcategory pages
- Individual product details with specs

### **Clients:**
- All clients listing
- Search functionality
- City filter
- Individual location pages with installed solutions

### **Contact:**
- Contact form with validation
- Business information
- Google Maps integration
- Social media links

---

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 📱 Mobile Features

- Responsive navigation
- Touch-friendly interactions
- Optimized images
- Smooth scrolling
- Accessible tap targets

---

## 🔐 Environment Variables

Already configured in Vercel:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`

---

## 📚 Documentation

Comprehensive guides available:
- `DEPLOYMENT_INSTRUCTIONS.md` - Step-by-step deployment
- `COMPLETE_IMPLEMENTATION_GUIDE.md` - Full technical details
- `VERIFICATION_CHECKLIST.md` - Pre-deployment checklist
- `IMPLEMENTATION_SUMMARY.md` - Development summary
- `/public/images/README.md` - Image guide

---

## 🤝 Support

**Business Contact:**
- Phone: 9994295638
- Email: enquiry@hookimpex.com
- Address: No.6 Veeramani Street, Periyar Nagar Extn, Madipakkam

**Technical Contact:**
- Developer Email: allyuneed37@gmail.com

---

## 📄 License

Proprietary - © 2024 Hookimpex. All rights reserved.

---

## 🎉 Credits

**Developed by:** AllYuNeed  
**Company:** Hookimpex (formerly Sunshine Garments Machinery)  
**Established:** 2004  
**Rebranded:** 2026  
**Version:** 2.0  
**Status:** Production Ready

---

## 🚀 Deploy

Ready to go live? Just push to GitHub:

```bash
git add .
git commit -m "Deploy Hookimpex website"
git push origin main
```

Vercel handles the rest!

---

**Made with ❤️ for Hookimpex**
