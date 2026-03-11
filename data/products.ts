export interface ProductSpec {
  [key: string]: string | number;
}

export interface Product {
  productSlug: string;
  productName: string;
  shortDescription: string;
  keyFeatures: string[];
  specs: ProductSpec;
  applications: string[];
  warranty: string;
  serviceSupport: string;
  heroImage: string;
  galleryImages: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface SubCategory {
  subcategorySlug: string;
  subcategoryName: string;
  description: string;
  products: Product[];
}

export interface Category {
  categorySlug: string;
  categoryName: string;
  description: string;
  heroImage: string;
  subcategories: SubCategory[];
}

export const BRAND_YEAR = 2004;
export const BRAND_ORIGINAL_NAME = "Sunshine Garments Machinery";
export const BRAND_NAME = "Hookimpex";
export const BRAND_TAGLINE = "Manufacturing Excellence in Garment Machinery";

export const categories: Category[] = [
  {
    categorySlug: "finishing-equipment",
    categoryName: "Finishing Equipment",
    description: "Professional-grade finishing solutions for garment manufacturing. From precision ironing to industrial steam generation.",
    heroImage: "/images/products/finishing-equipment-hero.jpg",
    subcategories: [
      {
        subcategorySlug: "ironbox",
        subcategoryName: "Ironbox",
        description: "Industrial-grade steam irons for professional garment finishing",
        products: [
          {
            productSlug: "2128",
            productName: "Ironbox 2128",
            shortDescription: "Heavy-duty professional steam iron with precision temperature control for industrial garment finishing",
            keyFeatures: [
              "2800W heating element for rapid heat-up",
              "Stainless steel soleplate with anti-scratch coating",
              "Precision thermostat with digital temperature display",
              "Continuous steam output up to 50g/min",
              "Ergonomic heat-resistant handle for extended use"
            ],
            specs: {
              "Power": "2800W",
              "Steam Output": "50g/min",
              "Water Tank": "300ml",
              "Temperature Range": "60°C – 220°C",
              "Weight": "1.8kg",
              "Cord Length": "2.5m",
              "Voltage": "220-240V / 50Hz"
            },
            applications: ["Garment factories", "Textile mills", "Dry cleaning", "Industrial laundries", "Hotel housekeeping"],
            warranty: "2 years manufacturer warranty",
            serviceSupport: "Pan-India service network with 48-hour response",
            heroImage: "/images/products/ironbox-2128-hero.jpg",
            galleryImages: [
              "/images/products/ironbox-2128-1.jpg",
              "/images/products/ironbox-2128-2.jpg",
              "/images/products/ironbox-2128-3.jpg"
            ],
            seo: {
              title: "Ironbox 2128 | Industrial Steam Iron | Hookimpex",
              description: "Professional 2800W industrial steam iron with precision temperature control. Ideal for garment factories and textile mills.",
              keywords: ["industrial iron", "steam iron", "garment iron", "2128 iron", "professional iron"]
            }
          },
          {
            productSlug: "stb200",
            productName: "Ironbox STB200",
            shortDescription: "Advanced steam iron with boiler system for continuous professional garment pressing",
            keyFeatures: [
              "Integrated 200ml pressure boiler system",
              "Constant steam pressure at 3.5 bar",
              "Titanium-coated soleplate for smooth gliding",
              "Auto-shutoff safety system",
              "Heavy-duty industrial construction"
            ],
            specs: {
              "Power": "3200W",
              "Boiler Pressure": "3.5 bar",
              "Steam Output": "80g/min",
              "Water Tank": "200ml",
              "Temperature Range": "80°C – 240°C",
              "Weight": "2.2kg",
              "Voltage": "220-240V / 50Hz"
            },
            applications: ["Premium garment finishing", "Formal wear pressing", "Upholstery", "Industrial textile processing"],
            warranty: "2 years manufacturer warranty",
            serviceSupport: "Pan-India service network with 48-hour response",
            heroImage: "/images/products/ironbox-stb200-hero.jpg",
            galleryImages: [
              "/images/products/ironbox-stb200-1.jpg",
              "/images/products/ironbox-stb200-2.jpg"
            ],
            seo: {
              title: "Ironbox STB200 | Boiler Steam Iron | Hookimpex",
              description: "Advanced steam iron with integrated boiler system for continuous professional garment pressing at 3.5 bar pressure.",
              keywords: ["boiler iron", "steam iron STB200", "pressure iron", "industrial iron boiler"]
            }
          }
        ]
      },
      {
        subcategorySlug: "stain-remover",
        subcategoryName: "Stain Remover",
        description: "Precision stain removal machines for professional garment care",
        products: [
          {
            productSlug: "stain-remover-pro",
            productName: "Stain Remover Pro",
            shortDescription: "Industrial stain removal station with multi-chemical capability and precision spray control",
            keyFeatures: [
              "Multi-solvent capability (water, chemical, air, steam)",
              "Precision micro-nozzle spray system",
              "Illuminated work area for stain visibility",
              "Chemical-resistant work surface",
              "Foot-pedal operation for hands-free control"
            ],
            specs: {
              "Working Surface": "600 x 400mm",
              "Steam Pressure": "2 bar",
              "Chemical Tank": "2L",
              "Water Tank": "5L",
              "Power": "1800W",
              "Dimensions": "700 x 500 x 900mm",
              "Weight": "35kg"
            },
            applications: ["Garment factories", "Dry cleaners", "Laundry services", "Hotel services", "Export garment houses"],
            warranty: "18 months manufacturer warranty",
            serviceSupport: "Dedicated service team with spare parts availability",
            heroImage: "/images/products/stain-remover-hero.jpg",
            galleryImages: [
              "/images/products/stain-remover-1.jpg",
              "/images/products/stain-remover-2.jpg"
            ],
            seo: {
              title: "Industrial Stain Remover | Professional Garment Care | Hookimpex",
              description: "Industrial stain removal station with multi-solvent capability for professional garment factories and laundry services.",
              keywords: ["stain remover machine", "industrial stain removal", "garment stain", "professional stain remover"]
            }
          }
        ]
      },
      {
        subcategorySlug: "steam-generator",
        subcategoryName: "Steam Generator",
        description: "High-performance steam generation systems from compact to industrial-scale",
        products: [
          {
            productSlug: "built-in-boiler-3kw",
            productName: "Built-In Boiler (3kW)",
            shortDescription: "Compact built-in steam boiler for integrated garment pressing systems",
            keyFeatures: [
              "Compact built-in design for space efficiency",
              "Rapid heat-up in under 4 minutes",
              "Auto water-level control",
              "Pressure safety valve system",
              "Stainless steel boiler body"
            ],
            specs: {
              "Power": "3kW",
              "Max Pressure": "3.5 bar",
              "Tank Capacity": "2L",
              "Steam Output": "3kg/hr",
              "Heat-Up Time": "4 minutes",
              "Voltage": "220V / 50Hz",
              "Weight": "12kg"
            },
            applications: ["Small garment units", "Boutique operations", "Integrated pressing systems"],
            warranty: "2 years",
            serviceSupport: "National service network",
            heroImage: "/images/products/steam-gen-builtin-3kw.jpg",
            galleryImages: ["/images/products/steam-gen-builtin-3kw-1.jpg"],
            seo: {
              title: "Built-In Boiler 3kW | Steam Generator | Hookimpex",
              description: "Compact 3kW built-in steam boiler for integrated garment pressing systems.",
              keywords: ["built-in boiler", "3kw steam generator", "garment steam"]
            }
          },
          {
            productSlug: "portable-boiler-manual-3kw",
            productName: "Portable Boiler Manual (3kW)",
            shortDescription: "Portable manual steam boiler for flexible garment pressing operations",
            keyFeatures: [
              "Portable design with carry handle",
              "Manual water fill for controlled operation",
              "Quick-connect steam hose fittings",
              "Pressure gauge with safety cutoff",
              "Robust steel construction"
            ],
            specs: {
              "Power": "3kW",
              "Max Pressure": "3.5 bar",
              "Tank Capacity": "3L",
              "Steam Output": "3kg/hr",
              "Dimensions": "300 x 250 x 400mm",
              "Voltage": "220V / 50Hz",
              "Weight": "8kg"
            },
            applications: ["On-site pressing", "Mobile garment service", "Flexible factory layouts"],
            warranty: "2 years",
            serviceSupport: "National service network",
            heroImage: "/images/products/steam-gen-portable-3kw.jpg",
            galleryImages: ["/images/products/steam-gen-portable-3kw-1.jpg"],
            seo: {
              title: "Portable Boiler Manual 3kW | Hookimpex",
              description: "Portable 3kW manual steam boiler for flexible garment pressing operations.",
              keywords: ["portable boiler", "manual steam boiler", "portable steam generator"]
            }
          },
          {
            productSlug: "automatic-boiler-3kw",
            productName: "Automatic Boiler (3kW)",
            shortDescription: "Automatic steam boiler with intelligent pressure control for small garment factories",
            keyFeatures: [
              "Fully automatic water level management",
              "Intelligent pressure regulation",
              "Digital pressure display",
              "Safety auto-shutoff system",
              "Compact industrial design"
            ],
            specs: {
              "Power": "3kW",
              "Max Pressure": "4 bar",
              "Tank Capacity": "5L",
              "Steam Output": "3kg/hr",
              "Voltage": "220V / 50Hz",
              "Weight": "18kg"
            },
            applications: ["Small garment factories", "Tailoring houses", "Boutique operations"],
            warranty: "3 years",
            serviceSupport: "24/7 technical support",
            heroImage: "/images/products/steam-gen-auto-3kw.jpg",
            galleryImages: ["/images/products/steam-gen-auto-3kw-1.jpg"],
            seo: {
              title: "Automatic Boiler 3kW | Steam Generator | Hookimpex",
              description: "Automatic 3kW steam boiler with intelligent pressure control for garment factories.",
              keywords: ["automatic boiler 3kw", "auto steam generator", "garment boiler"]
            }
          },
          {
            productSlug: "automatic-boiler-6kw",
            productName: "Automatic Boiler (6kW)",
            shortDescription: "Mid-range automatic steam boiler for medium-scale garment manufacturing",
            keyFeatures: [
              "Dual-element 6kW heating system",
              "Automatic water feed system",
              "Multi-point steam distribution",
              "Industrial-grade pressure vessel",
              "Energy-efficient thermal insulation"
            ],
            specs: {
              "Power": "6kW",
              "Max Pressure": "4 bar",
              "Tank Capacity": "8L",
              "Steam Output": "6kg/hr",
              "Voltage": "380V / 3-phase",
              "Weight": "28kg"
            },
            applications: ["Medium garment factories", "Export houses", "Industrial laundries"],
            warranty: "3 years",
            serviceSupport: "24/7 technical support",
            heroImage: "/images/products/steam-gen-auto-6kw.jpg",
            galleryImages: ["/images/products/steam-gen-auto-6kw-1.jpg"],
            seo: {
              title: "Automatic Boiler 6kW | Steam Generator | Hookimpex",
              description: "6kW automatic steam boiler for medium-scale garment manufacturing with multi-point steam distribution.",
              keywords: ["automatic boiler 6kw", "6kw steam generator", "medium steam boiler"]
            }
          },
          {
            productSlug: "automatic-boiler-12kw",
            productName: "Automatic Boiler (12kW)",
            shortDescription: "High-capacity automatic steam boiler for large-scale garment production lines",
            keyFeatures: [
              "12kW triple-element heating system",
              "PLC-controlled automation",
              "Multi-outlet steam distribution network",
              "Real-time pressure monitoring display",
              "Industrial safety certification"
            ],
            specs: {
              "Power": "12kW",
              "Max Pressure": "5 bar",
              "Tank Capacity": "15L",
              "Steam Output": "12kg/hr",
              "Voltage": "380V / 3-phase",
              "Weight": "55kg"
            },
            applications: ["Large garment factories", "Industrial textile mills", "Hotel chains"],
            warranty: "3 years",
            serviceSupport: "Priority support with dedicated engineer",
            heroImage: "/images/products/steam-gen-auto-12kw.jpg",
            galleryImages: ["/images/products/steam-gen-auto-12kw-1.jpg"],
            seo: {
              title: "Automatic Boiler 12kW | Industrial Steam Generator | Hookimpex",
              description: "12kW PLC-controlled automatic steam boiler for large-scale garment production with multi-outlet distribution.",
              keywords: ["automatic boiler 12kw", "industrial steam boiler", "large steam generator"]
            }
          },
          {
            productSlug: "automatic-boiler-18kw",
            productName: "Automatic Boiler (18kW)",
            shortDescription: "Industrial-grade 18kW automatic steam boiler for high-volume garment operations",
            keyFeatures: [
              "18kW industrial heating configuration",
              "Advanced PLC automation system",
              "8-outlet steam distribution",
              "Remote monitoring capability",
              "ASME-certified pressure vessel"
            ],
            specs: {
              "Power": "18kW",
              "Max Pressure": "5 bar",
              "Tank Capacity": "25L",
              "Steam Output": "18kg/hr",
              "Voltage": "380V / 3-phase",
              "Weight": "85kg"
            },
            applications: ["Large export garment houses", "Industrial complexes", "Commercial laundry chains"],
            warranty: "3 years + extended plan available",
            serviceSupport: "Priority support with dedicated engineer",
            heroImage: "/images/products/steam-gen-auto-18kw.jpg",
            galleryImages: ["/images/products/steam-gen-auto-18kw-1.jpg"],
            seo: {
              title: "Automatic Boiler 18kW | Heavy Industrial Steam | Hookimpex",
              description: "18kW industrial automatic steam boiler with 8-outlet distribution for high-volume garment operations.",
              keywords: ["18kw steam boiler", "industrial steam generator", "heavy duty boiler"]
            }
          },
          {
            productSlug: "automatic-boiler-27kw",
            productName: "Automatic Boiler (27kW)",
            shortDescription: "Heavy-duty 27kW automatic steam boiler for industrial-scale garment processing",
            keyFeatures: [
              "27kW heavy industrial heating array",
              "Integrated PLC management system",
              "12-outlet steam distribution network",
              "Industrial touchscreen controls",
              "Complete safety automation"
            ],
            specs: {
              "Power": "27kW",
              "Max Pressure": "6 bar",
              "Tank Capacity": "40L",
              "Steam Output": "27kg/hr",
              "Voltage": "380V / 3-phase",
              "Weight": "130kg"
            },
            applications: ["Large-scale garment complexes", "Industrial processing plants", "Five-star hotel groups"],
            warranty: "3 years + extended plan available",
            serviceSupport: "Priority enterprise support",
            heroImage: "/images/products/steam-gen-auto-27kw.jpg",
            galleryImages: ["/images/products/steam-gen-auto-27kw-1.jpg"],
            seo: {
              title: "Automatic Boiler 27kW | Enterprise Steam Solution | Hookimpex",
              description: "27kW heavy-duty automatic steam boiler for industrial-scale garment processing with 12-outlet distribution.",
              keywords: ["27kw boiler", "heavy industrial steam", "enterprise steam generator"]
            }
          },
          {
            productSlug: "automatic-boiler-36kw",
            productName: "Automatic Boiler (36kW)",
            shortDescription: "Maximum-capacity 36kW automatic steam boiler — the flagship industrial steam solution",
            keyFeatures: [
              "36kW maximum-capacity heating system",
              "Full industrial PLC automation",
              "16-outlet central steam distribution",
              "Cloud-connected performance monitoring",
              "Premium industrial build with 5-year frame warranty"
            ],
            specs: {
              "Power": "36kW",
              "Max Pressure": "6 bar",
              "Tank Capacity": "60L",
              "Steam Output": "36kg/hr",
              "Voltage": "380V / 3-phase",
              "Weight": "180kg"
            },
            applications: ["Major garment manufacturing plants", "Industrial complexes", "Hospitality enterprise groups"],
            warranty: "5 years manufacturer warranty",
            serviceSupport: "24/7 enterprise support with SLA",
            heroImage: "/images/products/steam-gen-auto-36kw.jpg",
            galleryImages: ["/images/products/steam-gen-auto-36kw-1.jpg"],
            seo: {
              title: "Automatic Boiler 36kW | Flagship Industrial Steam | Hookimpex",
              description: "36kW flagship automatic steam boiler — maximum capacity with cloud monitoring for major garment manufacturing plants.",
              keywords: ["36kw steam boiler", "flagship industrial steam", "maximum capacity boiler"]
            }
          }
        ]
      },
      {
        subcategorySlug: "thread-sucking-machine",
        subcategoryName: "Thread Sucking Machine",
        description: "Automated thread removal solutions for efficient garment post-production",
        products: [
          {
            productSlug: "thread-sucker-pro",
            productName: "Thread Sucking Machine Pro",
            shortDescription: "High-efficiency automated thread removal machine for professional garment finishing lines",
            keyFeatures: [
              "High-velocity suction system (2800 RPM)",
              "Precision nozzle for tight seam thread removal",
              "Large-capacity lint filter with auto-clean",
              "Variable speed control for delicate fabrics",
              "Industrial brushless motor for long-life operation"
            ],
            specs: {
              "Motor Power": "750W",
              "Suction RPM": "2800",
              "Filter Capacity": "5L",
              "Working Width": "800mm",
              "Dimensions": "600 x 400 x 1100mm",
              "Weight": "28kg",
              "Voltage": "220V / 50Hz"
            },
            applications: ["Garment factories", "Export houses", "Finishing departments", "Textile mills"],
            warranty: "2 years",
            serviceSupport: "Pan-India service with spare parts",
            heroImage: "/images/products/thread-sucker-hero.jpg",
            galleryImages: [
              "/images/products/thread-sucker-1.jpg",
              "/images/products/thread-sucker-2.jpg"
            ],
            seo: {
              title: "Thread Sucking Machine | Automated Thread Removal | Hookimpex",
              description: "Industrial thread sucking machine with 2800 RPM suction for automated thread removal in garment factories.",
              keywords: ["thread sucking machine", "thread remover", "automated thread removal", "garment thread machine"]
            }
          }
        ]
      },
      {
        subcategorySlug: "vacuum-table",
        subcategoryName: "Vacuum Table",
        description: "Professional vacuum pressing tables for precision garment finishing",
        products: [
          {
            productSlug: "vacuum-table-small",
            productName: "Vacuum Table Small (2.5 × 4)",
            shortDescription: "Compact vacuum pressing table ideal for small garment units and detailed finishing work",
            keyFeatures: [
              "2.5 × 4 ft working surface",
              "Integrated vacuum suction system",
              "Perforated steel top for uniform airflow",
              "Adjustable height legs",
              "Foot-pedal vacuum control"
            ],
            specs: {
              "Table Size": "2.5 × 4 ft",
              "Suction Power": "550W",
              "Vacuum Pressure": "-0.06 MPa",
              "Top Material": "Perforated Steel",
              "Height": "Adjustable 80–95cm",
              "Weight": "45kg"
            },
            applications: ["Small garment units", "Tailoring houses", "Sample rooms"],
            warranty: "2 years",
            serviceSupport: "Pan-India service network",
            heroImage: "/images/products/vacuum-table-small-hero.jpg",
            galleryImages: ["/images/products/vacuum-table-small-1.jpg"],
            seo: {
              title: "Vacuum Table Small 2.5x4 | Garment Pressing | Hookimpex",
              description: "Compact 2.5x4 ft vacuum pressing table for small garment units with integrated suction system.",
              keywords: ["vacuum table", "small vacuum table", "garment pressing table", "vacuum pressing"]
            }
          },
          {
            productSlug: "buck-table-with-buck",
            productName: "Buck Table (With Buck)",
            shortDescription: "Professional buck pressing table with integrated shirt/jacket buck for precision garment shaping",
            keyFeatures: [
              "Full pressing table with integrated buck form",
              "Adjustable buck angle and height",
              "Steam-heated pressing surface",
              "High-capacity vacuum suction",
              "Professional industrial construction"
            ],
            specs: {
              "Table Size": "4 × 4 ft",
              "Buck Dimensions": "50 × 40cm",
              "Suction Power": "750W",
              "Steam Input": "3 bar",
              "Height": "Adjustable 85–100cm",
              "Weight": "85kg"
            },
            applications: ["Shirt factories", "Jacket manufacturing", "Formal wear finishing", "Export houses"],
            warranty: "2 years",
            serviceSupport: "Pan-India service network",
            heroImage: "/images/products/buck-table-with-buck-hero.jpg",
            galleryImages: ["/images/products/buck-table-with-buck-1.jpg"],
            seo: {
              title: "Buck Table With Buck | Professional Pressing | Hookimpex",
              description: "Professional buck pressing table with integrated buck form for precision shirt and jacket finishing.",
              keywords: ["buck table", "shirt pressing table", "jacket pressing", "buck pressing table"]
            }
          },
          {
            productSlug: "buck-table-without-buck",
            productName: "Buck Table (Without Buck)",
            shortDescription: "Versatile vacuum pressing table platform adaptable for multiple garment types",
            keyFeatures: [
              "Heavy-duty pressing table base",
              "Universal mounting for accessories",
              "High-flow vacuum system",
              "Steam-ready surface",
              "Modular design for attachments"
            ],
            specs: {
              "Table Size": "4 × 4 ft",
              "Suction Power": "750W",
              "Steam Input": "3 bar",
              "Height": "Adjustable 85–100cm",
              "Weight": "65kg"
            },
            applications: ["Multi-product garment factories", "Versatile finishing departments"],
            warranty: "2 years",
            serviceSupport: "Pan-India service network",
            heroImage: "/images/products/buck-table-without-buck-hero.jpg",
            galleryImages: ["/images/products/buck-table-without-buck-1.jpg"],
            seo: {
              title: "Buck Table Without Buck | Versatile Pressing | Hookimpex",
              description: "Versatile vacuum pressing table base for multiple garment types with universal mounting system.",
              keywords: ["buck table", "vacuum pressing table", "versatile pressing table"]
            }
          },
          {
            productSlug: "vacuum-table-large",
            productName: "Vacuum Table Large (5 × 4)",
            shortDescription: "Large-format vacuum pressing table for heavy garments and industrial-scale operations",
            keyFeatures: [
              "5 × 4 ft wide working surface",
              "Industrial dual-motor vacuum system",
              "Heat-resistant perforated pressing top",
              "Electric height adjustment",
              "Integrated steam connection ports"
            ],
            specs: {
              "Table Size": "5 × 4 ft",
              "Suction Power": "1100W (dual motor)",
              "Vacuum Pressure": "-0.08 MPa",
              "Top Material": "Heat-resistant perforated steel",
              "Height": "Electric adjust 80–100cm",
              "Weight": "95kg"
            },
            applications: ["Outerwear manufacturing", "Industrial finishing lines", "Large garment factories"],
            warranty: "2 years",
            serviceSupport: "Pan-India service with installation support",
            heroImage: "/images/products/vacuum-table-large-hero.jpg",
            galleryImages: ["/images/products/vacuum-table-large-1.jpg"],
            seo: {
              title: "Vacuum Table Large 5x4 | Industrial Pressing | Hookimpex",
              description: "Large 5x4 ft industrial vacuum pressing table with dual-motor system for heavy garments.",
              keywords: ["large vacuum table", "industrial pressing table", "5x4 vacuum table"]
            }
          }
        ]
      }
    ]
  },
  {
    categorySlug: "washing-machine",
    categoryName: "Washing Machine",
    description: "Industrial-grade washing and drying solutions for professional laundry and garment care facilities.",
    heroImage: "/images/products/washing-machine-hero.jpg",
    subcategories: [
      {
        subcategorySlug: "washer",
        subcategoryName: "Washer",
        description: "High-capacity industrial washing machines for professional laundry operations",
        products: [
          {
            productSlug: "industrial-washer",
            productName: "Industrial Washer",
            shortDescription: "Heavy-duty industrial washer with large-capacity drum for professional laundry and garment care",
            keyFeatures: [
              "Large-capacity stainless steel drum",
              "Variable speed G-force extraction",
              "Programmable wash cycles (up to 20 programs)",
              "Energy-efficient heating system",
              "Industrial-grade drive motor"
            ],
            specs: {
              "Capacity": "25kg",
              "Drum Speed": "0–1200 RPM",
              "Heating Power": "9kW",
              "Water Connection": "3/4 inch inlet",
              "Voltage": "380V / 3-phase",
              "Dimensions": "950 × 800 × 1150mm",
              "Weight": "320kg"
            },
            applications: ["Hotel laundries", "Industrial laundry services", "Garment washing factories", "Hospital linen"],
            warranty: "2 years",
            serviceSupport: "Pan-India service with 48-hour response",
            heroImage: "/images/products/washer-hero.jpg",
            galleryImages: ["/images/products/washer-1.jpg", "/images/products/washer-2.jpg"],
            seo: {
              title: "Industrial Washer | Heavy-Duty Washing Machine | Hookimpex",
              description: "25kg capacity industrial washer with programmable cycles for professional laundry operations.",
              keywords: ["industrial washer", "heavy duty washing machine", "commercial washer", "laundry machine"]
            }
          }
        ]
      },
      {
        subcategorySlug: "dryer",
        subcategoryName: "Dryer",
        description: "High-efficiency industrial tumble dryers for rapid professional garment drying",
        products: [
          {
            productSlug: "industrial-dryer",
            productName: "Industrial Dryer",
            shortDescription: "High-efficiency industrial tumble dryer with precise temperature control for rapid garment drying",
            keyFeatures: [
              "Large-capacity drying drum with reversing action",
              "Precise digital temperature control",
              "Multiple heat settings (ambient to 90°C)",
              "Advanced lint filtration system",
              "Automatic over-temperature protection"
            ],
            specs: {
              "Capacity": "25kg",
              "Heating Power": "12kW",
              "Airflow": "2000 m³/hr",
              "Temperature Range": "Ambient to 90°C",
              "Voltage": "380V / 3-phase",
              "Dimensions": "1050 × 850 × 1350mm",
              "Weight": "280kg"
            },
            applications: ["Commercial laundries", "Hotel operations", "Garment factories", "Industrial linen services"],
            warranty: "2 years",
            serviceSupport: "Pan-India service network",
            heroImage: "/images/products/dryer-hero.jpg",
            galleryImages: ["/images/products/dryer-1.jpg"],
            seo: {
              title: "Industrial Dryer | Commercial Tumble Dryer | Hookimpex",
              description: "25kg industrial tumble dryer with precision temperature control for commercial laundry operations.",
              keywords: ["industrial dryer", "commercial dryer", "tumble dryer", "laundry dryer"]
            }
          }
        ]
      },
      {
        subcategorySlug: "hydro-extractor",
        subcategoryName: "Hydro Extractor",
        description: "High-speed centrifugal water extraction machines for rapid moisture removal",
        products: [
          {
            productSlug: "hydro-extractor",
            productName: "Hydro Extractor",
            shortDescription: "Industrial high-speed hydro extractor for rapid water removal from garments and textiles",
            keyFeatures: [
              "High-speed centrifugal extraction up to 900G",
              "Stainless steel extraction basket",
              "Auto-balance vibration control",
              "Safety lid lock mechanism",
              "Programmable extraction cycles"
            ],
            specs: {
              "Capacity": "15kg",
              "Extraction Speed": "800 RPM (900G)",
              "Motor Power": "3kW",
              "Basket Diameter": "680mm",
              "Voltage": "380V / 3-phase",
              "Weight": "180kg"
            },
            applications: ["Laundry pre-drying", "Garment factories", "Linen services", "Industrial textile processing"],
            warranty: "2 years",
            serviceSupport: "Pan-India service network",
            heroImage: "/images/products/hydro-extractor-hero.jpg",
            galleryImages: ["/images/products/hydro-extractor-1.jpg"],
            seo: {
              title: "Hydro Extractor | Industrial Water Extraction | Hookimpex",
              description: "High-speed 900G industrial hydro extractor for rapid moisture removal from garments and textiles.",
              keywords: ["hydro extractor", "centrifugal extractor", "water extractor", "laundry extractor"]
            }
          }
        ]
      }
    ]
  },
  {
    categorySlug: "fusing-machine",
    categoryName: "Fusing Machine",
    description: "Precision fusing machines for professional interlining application in garment manufacturing.",
    heroImage: "/images/products/fusing-machine-hero.jpg",
    subcategories: [
      {
        subcategorySlug: "flatbed-fusing-press",
        subcategoryName: "Flatbed Fusing Press",
        description: "Manual and automatic flatbed fusing press for precise interlining bonding",
        products: [
          {
            productSlug: "flatbed-fusing-press",
            productName: "Flatbed Fusing Press",
            shortDescription: "Professional flatbed fusing press with precision temperature and pressure control for interlining bonding",
            keyFeatures: [
              "Even heat distribution across full platen",
              "Digital temperature control (±1°C accuracy)",
              "Adjustable pressure system (0–4 kg/cm²)",
              "Pneumatic press operation",
              "Teflon-coated pressing surface"
            ],
            specs: {
              "Platen Size": "400 × 600mm",
              "Temperature Range": "0–220°C",
              "Max Pressure": "4 kg/cm²",
              "Heating Power": "2.4kW",
              "Voltage": "220V / 50Hz",
              "Dimensions": "700 × 700 × 1100mm",
              "Weight": "120kg"
            },
            applications: ["Collar fusing", "Cuff fusing", "Waistband bonding", "Front facing attachment"],
            warranty: "2 years",
            serviceSupport: "Pan-India service with spare parts",
            heroImage: "/images/products/flatbed-fusing-press-hero.jpg",
            galleryImages: ["/images/products/flatbed-fusing-press-1.jpg"],
            seo: {
              title: "Flatbed Fusing Press | Interlining Machine | Hookimpex",
              description: "Professional flatbed fusing press with digital temperature control for precise interlining bonding.",
              keywords: ["flatbed fusing press", "interlining machine", "fusing press", "garment fusing"]
            }
          }
        ]
      },
      {
        subcategorySlug: "continuous-fusing-machine",
        subcategoryName: "Continuous Fusing Machine",
        description: "High-production continuous band fusing machines for large-scale garment manufacturing",
        products: [
          {
            productSlug: "continuous-fusing-machine",
            productName: "Continuous Fusing Machine",
            shortDescription: "Industrial continuous belt fusing machine for high-volume interlining applications",
            keyFeatures: [
              "Continuous belt conveyor system for high-volume production",
              "Programmable fusing profiles (temperature, speed, pressure)",
              "Upper and lower heated belt system",
              "Digital control panel with recipe storage",
              "Automatic cooling section for immediate handling"
            ],
            specs: {
              "Belt Width": "600mm",
              "Speed Range": "1–8m/min",
              "Max Temperature": "220°C",
              "Production Capacity": "200 pieces/hr",
              "Heating Power": "8kW",
              "Voltage": "380V / 3-phase",
              "Weight": "350kg"
            },
            applications: ["High-volume garment factories", "Export houses", "Industrial fusing lines", "Mass production facilities"],
            warranty: "2 years + extended plan",
            serviceSupport: "Priority service with dedicated engineer",
            heroImage: "/images/products/continuous-fusing-hero.jpg",
            galleryImages: ["/images/products/continuous-fusing-1.jpg", "/images/products/continuous-fusing-2.jpg"],
            seo: {
              title: "Continuous Fusing Machine | High-Volume Fusing | Hookimpex",
              description: "Industrial continuous belt fusing machine with 200 pieces/hr capacity for high-volume garment manufacturing.",
              keywords: ["continuous fusing machine", "belt fusing machine", "industrial fusing", "high volume fusing"]
            }
          }
        ]
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.categorySlug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): SubCategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(s => s.subcategorySlug === subcategorySlug);
}

export function getProductBySlug(categorySlug: string, subcategorySlug: string, productSlug: string): Product | undefined {
  const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);
  return subcategory?.products.find(p => p.productSlug === productSlug);
}

export function getAllProductRoutes(): { category: string; subcategory: string; product: string }[] {
  const routes: { category: string; subcategory: string; product: string }[] = [];
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      for (const prod of sub.products) {
        routes.push({
          category: cat.categorySlug,
          subcategory: sub.subcategorySlug,
          product: prod.productSlug,
        });
      }
    }
  }
  return routes;
}
