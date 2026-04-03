You are a world-class senior frontend architect, creative technologist, and motion designer.

You are working inside my existing Next.js website (already designed in Figma and deployed on Vercel).

Your mission:
Upgrade and restructure the entire website with premium architecture, realistic animations, correct product hierarchy, client pages, and advanced motion design using GSAP.

⚠️ IMPORTANT RULES:
- Do NOT break responsiveness.
- Do NOT remove existing design system.
- Keep SEO safe.
- Respect prefers-reduced-motion.
- Use Next.js App Router best practices.
- Return exact file diffs and clearly state new files created.
- Make everything data-driven (no hardcoded scattered content).

====================================================
SECTION 1 — GLOBAL ANIMATION & VISUAL FOUNDATION
====================================================

1) Install and configure GSAP + ScrollTrigger properly for Next.js.
2) Create reusable motion architecture:
   - lib/gsap.ts
   - hooks/useGsap.ts
   - motion presets (fadeUp, revealMask, staggerCards, parallaxY, magneticHover, liquidBlob)
3) Add Animated Cursor:
   - custom dot + follower
   - states: default, hover-link, hover-card, drag
   - magnetic button behavior
4) Add Parallax component using GSAP.
5) Add realistic shadows and lighting system:
   - layered soft shadows
   - depth change on hover
   - specular highlight sweep
6) Add Liquid Motion background accents:
   - SVG gooey blobs with GSAP animation
7) Add Gesture-based interactions:
   - drag/slide product gallery for mobile
8) Add ScrollTrigger Scrollytelling:
   - pinned hero (1 viewport)
   - stagger reveals
   - parallax layers
9) Ensure performance optimization (will-change, transform, opacity, next/image, no layout shift).

====================================================
SECTION 2 — HOME PAGE CHANGES
====================================================

1) Change text:
   "Industrial Excellence Since 1998"
   → Update year to 2004 only.
   If duplicated, refactor to single constant.

2) Products section:
   Remove all existing product categories except “Finishing Equipment”.
   Add:
   - Washing Machine
   - Fusing Machine

   Only 3 categories total should be displayed.

   Each card must include:
   - realistic image placeholder
   - hover tilt + lighting
   - magnetic button
   - smooth GSAP reveal
   - link to category route

====================================================
SECTION 3 — ABOUT US PAGE UPDATE
====================================================

Rewrite About page with:

- Brand started in 2004 as “Sunshine Garments Machinery”
- In 2026 evolved into “Hookimpex”

Tone:
Premium, inspiring, industrial heritage, innovation-focused.

Structure:
2–3 powerful paragraphs
3 core values:
- Quality
- Innovation
- Partnership

Add subtle ScrollTrigger fadeUp animations.

====================================================
SECTION 4 — COMPLETE PRODUCT ARCHITECTURE (DATA DRIVEN)
====================================================

Create central data source:
data/products.ts

Each product object must contain:
- categorySlug
- subcategorySlug
- productSlug
- productName
- shortDescription
- keyFeatures (5 bullets)
- specs (object)
- applications
- warranty
- serviceSupport
- heroImage
- galleryImages
- SEO fields

Create routes:

/products
/products/[category]
/products/[category]/[subcategory]
/products/[category]/[subcategory]/[product]

----------------------------------------------------
PRODUCT HIERARCHY (EXACT)
----------------------------------------------------

CATEGORY 1: Finishing Equipment

- Ironbox
  - 2128
  - STB200

- Stain Remover

- Steam Generator
  - Built-In Boiler (3kw)
  - Portable Boiler Manual (3kw)
  - Automatic Boiler:
      3kw
      6kw
      12kw
      18kw
      27kw
      36kw

- Thread Sucking Machine

- Vacuum Table
  - Small (2.5 * 4)
  - Buck Table (with buck)
  - Buck Table (without buck)
  - Large (5 * 4)

CATEGORY 2: Washing Machine
  - Washer
  - Dryer
  - Hydro Extractor

CATEGORY 3: Fusing Machine
  - Flatbed Fusing Press
  - Continuous Fusing Machine

----------------------------------------------------

UI Requirements:
- premium industrial style
- parallax hero images
- sticky specs sidebar
- scroll-triggered reveal
- gesture-based gallery
- realistic product images placeholder paths under /public/images/products/
- watermark footer with [LOGO_PATH] and [YOUR ADDRESS]

Create:
images/README.md
scripts/image-manifest.ts
with exact filenames and generation prompts for photorealistic industrial product renders.

====================================================
SECTION 5 — OUR CLIENTS PAGE + DYNAMIC CLIENT PAGES
====================================================

Create:
data/clients.ts

Routes:
 /clients
 /clients/[clientSlug]/[locationSlug]

Clients:

HYATT Regency → THE LAUNDRY BAG
Ahmedabad
Lucknow
Chennai
Bangalore
Hyderabad
Goa
Pune
Kolkata

Novotel
Shollinganallur
Chennai

Hilton Embassy
Bangalore

Westin
Kolkata
Mumbai

EVOLVE CLOTHING CO. PVT LMT
Perungudi
Padaalam

SRISTY GARMENTS
Maddhavaraam

MONACK EXPORT
Vellanur
Redhills

RK. INDUSTRIES IV
Guindy

Roj Leather
Perungudi

Sm Lulla Industries World Wide
Ekatuthaangal

Steamee
Chennai
Bangalore

Each client-location page must include:
- client name
- location
- Installed Solutions section (relevant product categories)
- parallax header
- scroll reveal
- breadcrumb navigation
- premium grid layout

Add search + filter by city on /clients.

Fix spelling inconsistencies in display text:
- Washing Machince → Washing Machine
- Fusing machince → Fusing Machine
- Hyderabed → Hyderabad
- Ahmadadbad → Ahmedabad
- Hiltion → Hilton

====================================================
SECTION 6 — PREMIUM INTERACTION SYSTEM
====================================================

Upgrade:
- Product cards → 3D tilt, soft shadow shift
- Buttons → magnetic hover + animated underline
- Images → zoom + contrast lift
- Add gooey liquid background behind headers

Reusable components only:
- ProductCard
- MagneticButton
- SpecularCard

====================================================
SECTION 7 — QA + VALIDATION
====================================================

- Validate all dynamic routes
- Ensure no broken links
- Add safe 404 page
- Log sitemap route list during build
- Ensure all slugs are unique
- Keep Lighthouse performance strong
- Make sure it should be deployable in vercel

====================================================

FINAL OUTPUT REQUIRED:
- Exact list of files created
- Exact diffs for modified files
- Final route map
- Image filename checklist
- Confirmation no hierarchy is missing