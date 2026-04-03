// Complete Product Data Architecture for Hookimpex

export interface ProductSpec {
  [key: string]: string | number;
}

export interface Product {
  categorySlug: string;
  subcategorySlug: string | null;
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
  seoTitle: string;
  seoDescription: string;
}

export interface Subcategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  subcategories: Subcategory[];
  directProducts: Product[];
}

// ====================================================
// CATEGORY 1: FINISHING EQUIPMENT
// ====================================================

const finishingEquipmentProducts: Product[] = [
  // Stain Remover (Direct Product)
  {
    categorySlug: "finishing-equipment",
    subcategorySlug: null,
    productSlug: "stain-remover",
    productName: "Stain Remover",
    shortDescription: "Professional stain removal system for industrial garment finishing",
    keyFeatures: [
      "Advanced stain removal technology",
      "Safe for all fabric types",
      "Quick drying formula",
      "Energy-efficient operation",
      "Easy maintenance design"
    ],
    specs: {
      "Power": "2.5 kW",
      "Voltage": "220V / 50Hz",
      "Tank Capacity": "15 Liters",
      "Weight": "45 kg",
      "Dimensions": "800 x 600 x 1200 mm"
    },
    applications: ["Garment Manufacturing", "Dry Cleaning", "Laundry Services", "Textile Industry"],
    warranty: "1 Year Comprehensive Warranty",
    serviceSupport: "24/7 Customer Support | On-site Service Available",
    heroImage: "/images/products/stain-remover/hero.jpg",
    galleryImages: [
      "/images/products/stain-remover/gallery-1.jpg",
      "/images/products/stain-remover/gallery-2.jpg",
      "/images/products/stain-remover/gallery-3.jpg"
    ],
    seoTitle: "Stain Remover - Industrial Garment Stain Removal | Hookimpex",
    seoDescription: "Professional stain removal system for garment finishing. Energy-efficient, safe for all fabrics."
  },
  
  // Thread Sucking Machine (Direct Product)
  {
    categorySlug: "finishing-equipment",
    subcategorySlug: null,
    productSlug: "thread-sucking-machine",
    productName: "Thread Sucking Machine",
    shortDescription: "Industrial thread and lint removal system for clean finishing",
    keyFeatures: [
      "Powerful suction system",
      "Large capacity collection bag",
      "Low noise operation",
      "Portable and lightweight",
      "Energy-saving motor"
    ],
    specs: {
      "Power": "1.5 kW",
      "Voltage": "220V / 50Hz",
      "Suction Capacity": "150 m³/h",
      "Bag Capacity": "20 Liters",
      "Weight": "25 kg",
      "Dimensions": "600 x 400 x 900 mm"
    },
    applications: ["Garment Manufacturing", "Textile Finishing", "Quality Control", "Production Lines"],
    warranty: "1 Year Comprehensive Warranty",
    serviceSupport: "24/7 Customer Support | Spare Parts Available",
    heroImage: "/images/products/thread-sucking/hero.jpg",
    galleryImages: [
      "/images/products/thread-sucking/gallery-1.jpg",
      "/images/products/thread-sucking/gallery-2.jpg"
    ],
    seoTitle: "Thread Sucking Machine - Industrial Lint Removal | Hookimpex",
    seoDescription: "Powerful thread and lint removal system for garment finishing. Low noise, high efficiency."
  }
];

const ironboxSubcategory: Subcategory = {
  slug: "ironbox",
  name: "Ironbox",
  description: "Professional ironing and pressing solutions",
  image: "/images/products/ironbox/category.jpg",
  products: [
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "ironbox",
      productSlug: "2128",
      productName: "Ironbox 2128",
      shortDescription: "Compact professional ironing press for small to medium operations",
      keyFeatures: [
        "Compact design for space efficiency",
        "Digital temperature control",
        "Quick heating system",
        "Steam injection capability",
        "Safety auto-shutoff"
      ],
      specs: {
        "Model": "2128",
        "Power": "3 kW",
        "Voltage": "220V / 50Hz",
        "Pressing Area": "800 x 400 mm",
        "Temperature Range": "50-250°C",
        "Weight": "85 kg",
        "Dimensions": "1200 x 600 x 1400 mm"
      },
      applications: ["Boutiques", "Small Garment Units", "Dry Cleaners", "Tailor Shops"],
      warranty: "2 Year Comprehensive Warranty",
      serviceSupport: "On-site Installation | 24/7 Technical Support",
      heroImage: "/images/products/ironbox/2128/hero.jpg",
      galleryImages: [
        "/images/products/ironbox/2128/gallery-1.jpg",
        "/images/products/ironbox/2128/gallery-2.jpg",
        "/images/products/ironbox/2128/gallery-3.jpg"
      ],
      seoTitle: "Ironbox 2128 - Compact Professional Ironing Press | Hookimpex",
      seoDescription: "Compact professional ironbox with digital control and steam injection. Perfect for small operations."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "ironbox",
      productSlug: "stb200",
      productName: "Ironbox STB200",
      shortDescription: "Heavy-duty industrial ironing press for large-scale operations",
      keyFeatures: [
        "Heavy-duty construction",
        "Large pressing area",
        "Advanced steam system",
        "Precision temperature control",
        "Durable heating elements"
      ],
      specs: {
        "Model": "STB200",
        "Power": "5 kW",
        "Voltage": "380V / 50Hz",
        "Pressing Area": "1200 x 600 mm",
        "Temperature Range": "50-300°C",
        "Weight": "150 kg",
        "Dimensions": "1600 x 800 x 1600 mm"
      },
      applications: ["Large Garment Factories", "Industrial Laundries", "Hotels", "Textile Manufacturing"],
      warranty: "2 Year Comprehensive Warranty",
      serviceSupport: "On-site Installation | Annual Maintenance | 24/7 Support",
      heroImage: "/images/products/ironbox/stb200/hero.jpg",
      galleryImages: [
        "/images/products/ironbox/stb200/gallery-1.jpg",
        "/images/products/ironbox/stb200/gallery-2.jpg",
        "/images/products/ironbox/stb200/gallery-3.jpg",
        "/images/products/ironbox/stb200/gallery-4.jpg"
      ],
      seoTitle: "Ironbox STB200 - Heavy-Duty Industrial Press | Hookimpex",
      seoDescription: "Heavy-duty industrial ironbox for large-scale operations. Advanced steam system and precision control."
    }
  ]
};

const steamGeneratorSubcategory: Subcategory = {
  slug: "steam-generator",
  name: "Steam Generator",
  description: "Industrial steam generation systems",
  image: "/images/products/steam-generator/category.jpg",
  products: [
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "steam-generator",
      productSlug: "built-in-boiler-3kw",
      productName: "Built-In Boiler (3kW)",
      shortDescription: "Compact built-in steam boiler for integrated systems",
      keyFeatures: [
        "Space-saving built-in design",
        "Quick steam generation",
        "Auto water level control",
        "Energy-efficient heating",
        "Overheating protection"
      ],
      specs: {
        "Power": "3 kW",
        "Voltage": "220V / 50Hz",
        "Steam Output": "4.5 kg/h",
        "Pressure": "4 Bar",
        "Tank Capacity": "8 Liters",
        "Weight": "35 kg",
        "Dimensions": "400 x 300 x 500 mm"
      },
      applications: ["Ironing Tables", "Small Pressing Units", "Boutiques", "Tailoring Shops"],
      warranty: "1 Year Comprehensive Warranty",
      serviceSupport: "Installation Support | Technical Helpline",
      heroImage: "/images/products/steam-generator/built-in-3kw/hero.jpg",
      galleryImages: [
        "/images/products/steam-generator/built-in-3kw/gallery-1.jpg",
        "/images/products/steam-generator/built-in-3kw/gallery-2.jpg"
      ],
      seoTitle: "Built-In Boiler 3kW - Compact Steam Generator | Hookimpex",
      seoDescription: "Compact built-in steam boiler with auto water level control. Perfect for integrated systems."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "steam-generator",
      productSlug: "portable-boiler-manual-3kw",
      productName: "Portable Boiler Manual (3kW)",
      shortDescription: "Portable manual steam boiler for flexible operations",
      keyFeatures: [
        "Portable design with wheels",
        "Manual water filling",
        "Quick startup time",
        "Pressure gauge included",
        "Safety valve system"
      ],
      specs: {
        "Power": "3 kW",
        "Voltage": "220V / 50Hz",
        "Steam Output": "4.5 kg/h",
        "Pressure": "4 Bar",
        "Tank Capacity": "10 Liters",
        "Weight": "40 kg",
        "Dimensions": "500 x 400 x 700 mm"
      },
      applications: ["Mobile Units", "Small Laundries", "Dry Cleaners", "Home Textile Business"],
      warranty: "1 Year Comprehensive Warranty",
      serviceSupport: "User Manual | Technical Support",
      heroImage: "/images/products/steam-generator/portable-manual-3kw/hero.jpg",
      galleryImages: [
        "/images/products/steam-generator/portable-manual-3kw/gallery-1.jpg",
        "/images/products/steam-generator/portable-manual-3kw/gallery-2.jpg"
      ],
      seoTitle: "Portable Boiler Manual 3kW - Mobile Steam Generator | Hookimpex",
      seoDescription: "Portable manual steam boiler on wheels. Quick startup, manual water filling, safety features."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "steam-generator",
      productSlug: "automatic-boiler-3kw",
      productName: "Automatic Boiler 3kW",
      shortDescription: "Automatic steam boiler with water level control",
      keyFeatures: [
        "Automatic water feeding system",
        "Digital control panel",
        "Low water alarm",
        "Continuous operation capability",
        "Energy-efficient design"
      ],
      specs: {
        "Power": "3 kW",
        "Voltage": "220V / 50Hz",
        "Steam Output": "5 kg/h",
        "Pressure": "5 Bar",
        "Tank Capacity": "12 Liters",
        "Weight": "55 kg",
        "Dimensions": "600 x 450 x 800 mm"
      },
      applications: ["Garment Factories", "Laundries", "Hotels", "Textile Units"],
      warranty: "2 Year Comprehensive Warranty",
      serviceSupport: "Installation | Annual Maintenance | 24/7 Support",
      heroImage: "/images/products/steam-generator/automatic-3kw/hero.jpg",
      galleryImages: [
        "/images/products/steam-generator/automatic-3kw/gallery-1.jpg",
        "/images/products/steam-generator/automatic-3kw/gallery-2.jpg",
        "/images/products/steam-generator/automatic-3kw/gallery-3.jpg"
      ],
      seoTitle: "Automatic Boiler 3kW - Auto Steam Generator | Hookimpex",
      seoDescription: "Automatic steam boiler with digital control and auto water feeding. Continuous operation capability."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "steam-generator",
      productSlug: "automatic-boiler-6kw",
      productName: "Automatic Boiler 6kW",
      shortDescription: "Medium capacity automatic steam generator",
      keyFeatures: [
        "Double heating capacity",
        "Automatic water management",
        "Digital monitoring system",
        "Multi-point steam outlets",
        "Energy-saving mode"
      ],
      specs: {
        "Power": "6 kW",
        "Voltage": "380V / 50Hz",
        "Steam Output": "9 kg/h",
        "Pressure": "6 Bar",
        "Tank Capacity": "18 Liters",
        "Weight": "75 kg",
        "Dimensions": "700 x 500 x 900 mm"
      },
      applications: ["Medium Garment Units", "Commercial Laundries", "Hotels", "Hospitals"],
      warranty: "2 Year Comprehensive Warranty",
      serviceSupport: "Professional Installation | Quarterly Maintenance | 24/7 Helpline",
      heroImage: "/images/products/steam-generator/automatic-6kw/hero.jpg",
      galleryImages: [
        "/images/products/steam-generator/automatic-6kw/gallery-1.jpg",
        "/images/products/steam-generator/automatic-6kw/gallery-2.jpg",
        "/images/products/steam-generator/automatic-6kw/gallery-3.jpg"
      ],
      seoTitle: "Automatic Boiler 6kW - Medium Capacity Steam Generator | Hookimpex",
      seoDescription: "6kW automatic steam boiler with digital monitoring and multi-point outlets. Energy-efficient design."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "steam-generator",
      productSlug: "automatic-boiler-12kw",
      productName: "Automatic Boiler 12kW",
      shortDescription: "High capacity steam generator for industrial use",
      keyFeatures: [
        "High steam output capacity",
        "Advanced control system",
        "Multiple safety features",
        "Water softener compatible",
        "Low maintenance design"
      ],
      specs: {
        "Power": "12 kW",
        "Voltage": "380V / 50Hz",
        "Steam Output": "18 kg/h",
        "Pressure": "7 Bar",
        "Tank Capacity": "30 Liters",
        "Weight": "120 kg",
        "Dimensions": "900 x 600 x 1100 mm"
      },
      applications: ["Large Garment Factories", "Industrial Laundries", "Hotels & Resorts", "Textile Mills"],
      warranty: "3 Year Comprehensive Warranty",
      serviceSupport: "Professional Installation | Monthly Maintenance | Dedicated Support",
      heroImage: "/images/products/steam-generator/automatic-12kw/hero.jpg",
      galleryImages: [
        "/images/products/steam-generator/automatic-12kw/gallery-1.jpg",
        "/images/products/steam-generator/automatic-12kw/gallery-2.jpg",
        "/images/products/steam-generator/automatic-12kw/gallery-3.jpg",
        "/images/products/steam-generator/automatic-12kw/gallery-4.jpg"
      ],
      seoTitle: "Automatic Boiler 12kW - High Capacity Steam Generator | Hookimpex",
      seoDescription: "12kW industrial steam boiler with advanced controls and multiple safety features. Water softener compatible."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "steam-generator",
      productSlug: "automatic-boiler-18kw",
      productName: "Automatic Boiler 18kW",
      shortDescription: "Heavy-duty industrial steam generation system",
      keyFeatures: [
        "Heavy-duty industrial grade",
        "PLC control system",
        "Multiple steam distribution points",
        "Auto descaling system",
        "Remote monitoring capable"
      ],
      specs: {
        "Power": "18 kW",
        "Voltage": "380V / 50Hz",
        "Steam Output": "27 kg/h",
        "Pressure": "8 Bar",
        "Tank Capacity": "45 Liters",
        "Weight": "180 kg",
        "Dimensions": "1100 x 700 x 1300 mm"
      },
      applications: ["Large Scale Manufacturing", "Industrial Complexes", "Commercial Laundries", "Processing Units"],
      warranty: "3 Year Comprehensive Warranty",
      serviceSupport: "Full Installation | Monthly Servicing | Priority Support | Remote Diagnostics",
      heroImage: "/images/products/steam-generator/automatic-18kw/hero.jpg",
      galleryImages: [
        "/images/products/steam-generator/automatic-18kw/gallery-1.jpg",
        "/images/products/steam-generator/automatic-18kw/gallery-2.jpg",
        "/images/products/steam-generator/automatic-18kw/gallery-3.jpg"
      ],
      seoTitle: "Automatic Boiler 18kW - Heavy-Duty Steam Generator | Hookimpex",
      seoDescription: "18kW heavy-duty steam boiler with PLC control and remote monitoring. Auto descaling system included."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "steam-generator",
      productSlug: "automatic-boiler-27kw",
      productName: "Automatic Boiler 27kW",
      shortDescription: "Premium high-capacity steam generation system",
      keyFeatures: [
        "Premium industrial capacity",
        "Advanced PLC automation",
        "Intelligent steam distribution",
        "Self-diagnostic system",
        "IoT monitoring ready"
      ],
      specs: {
        "Power": "27 kW",
        "Voltage": "380V / 50Hz",
        "Steam Output": "40 kg/h",
        "Pressure": "8 Bar",
        "Tank Capacity": "60 Liters",
        "Weight": "240 kg",
        "Dimensions": "1300 x 800 x 1500 mm"
      },
      applications: ["Industrial Manufacturing", "Large Textile Mills", "Hotel Chains", "Processing Plants"],
      warranty: "3 Year Comprehensive Warranty + 2 Year Extended Support",
      serviceSupport: "Turnkey Installation | Bi-weekly Maintenance | 24/7 Priority Support | IoT Dashboard",
      heroImage: "/images/products/steam-generator/automatic-27kw/hero.jpg",
      galleryImages: [
        "/images/products/steam-generator/automatic-27kw/gallery-1.jpg",
        "/images/products/steam-generator/automatic-27kw/gallery-2.jpg",
        "/images/products/steam-generator/automatic-27kw/gallery-3.jpg",
        "/images/products/steam-generator/automatic-27kw/gallery-4.jpg"
      ],
      seoTitle: "Automatic Boiler 27kW - Premium Industrial Steam Generator | Hookimpex",
      seoDescription: "27kW premium steam boiler with PLC automation and IoT monitoring. Self-diagnostic system included."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "steam-generator",
      productSlug: "automatic-boiler-36kw",
      productName: "Automatic Boiler 36kW",
      shortDescription: "Ultra high-capacity industrial steam powerhouse",
      keyFeatures: [
        "Ultra high steam capacity",
        "Fully automated operation",
        "Multi-zone steam distribution",
        "Predictive maintenance AI",
        "Full IoT integration"
      ],
      specs: {
        "Power": "36 kW",
        "Voltage": "380V / 50Hz",
        "Steam Output": "54 kg/h",
        "Pressure": "10 Bar",
        "Tank Capacity": "80 Liters",
        "Weight": "320 kg",
        "Dimensions": "1500 x 900 x 1700 mm"
      },
      applications: ["Large Industrial Complexes", "Mega Textile Mills", "Resort Chains", "Industrial Parks"],
      warranty: "5 Year Comprehensive Warranty",
      serviceSupport: "Complete Turnkey Solution | Weekly Maintenance | 24/7 Dedicated Support | AI Monitoring",
      heroImage: "/images/products/steam-generator/automatic-36kw/hero.jpg",
      galleryImages: [
        "/images/products/steam-generator/automatic-36kw/gallery-1.jpg",
        "/images/products/steam-generator/automatic-36kw/gallery-2.jpg",
        "/images/products/steam-generator/automatic-36kw/gallery-3.jpg",
        "/images/products/steam-generator/automatic-36kw/gallery-4.jpg",
        "/images/products/steam-generator/automatic-36kw/gallery-5.jpg"
      ],
      seoTitle: "Automatic Boiler 36kW - Ultra Capacity Steam Generator | Hookimpex",
      seoDescription: "36kW ultra high-capacity steam boiler with AI predictive maintenance and full IoT integration."
    }
  ]
};

const vacuumTableSubcategory: Subcategory = {
  slug: "vacuum-table",
  name: "Vacuum Table",
  description: "Professional vacuum tables for garment finishing",
  image: "/images/products/vacuum-table/category.jpg",
  products: [
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "vacuum-table",
      productSlug: "small-2-5x4",
      productName: "Vacuum Table Small (2.5 x 4)",
      shortDescription: "Compact vacuum table for small to medium garment finishing",
      keyFeatures: [
        "Compact space-saving design",
        "Powerful suction system",
        "Heat-resistant surface",
        "Adjustable height",
        "Energy-efficient motor"
      ],
      specs: {
        "Dimensions": "2.5 x 4 ft",
        "Power": "1.5 kW",
        "Voltage": "220V / 50Hz",
        "Suction Capacity": "180 m³/h",
        "Weight": "60 kg",
        "Surface Material": "Heat-resistant mesh"
      },
      applications: ["Boutiques", "Small Garment Units", "Tailoring Shops", "Dry Cleaners"],
      warranty: "1 Year Comprehensive Warranty",
      serviceSupport: "Installation Guide | Technical Support",
      heroImage: "/images/products/vacuum-table/small-2-5x4/hero.jpg",
      galleryImages: [
        "/images/products/vacuum-table/small-2-5x4/gallery-1.jpg",
        "/images/products/vacuum-table/small-2-5x4/gallery-2.jpg"
      ],
      seoTitle: "Vacuum Table Small 2.5x4 - Compact Finishing Table | Hookimpex",
      seoDescription: "Compact vacuum table with powerful suction for small garment finishing operations."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "vacuum-table",
      productSlug: "buck-table-with-buck",
      productName: "Buck Table (with Buck)",
      shortDescription: "Professional vacuum table with integrated buck form",
      keyFeatures: [
        "Integrated buck form included",
        "Professional finishing capability",
        "Adjustable buck positioning",
        "High-power vacuum system",
        "Durable construction"
      ],
      specs: {
        "Dimensions": "3 x 4 ft",
        "Power": "2 kW",
        "Voltage": "220V / 50Hz",
        "Suction Capacity": "220 m³/h",
        "Weight": "85 kg",
        "Surface Material": "Premium mesh with buck mount"
      },
      applications: ["Shirt Finishing", "Garment Manufacturing", "Professional Laundries", "Export Units"],
      warranty: "2 Year Comprehensive Warranty",
      serviceSupport: "Professional Installation | Training | Technical Support",
      heroImage: "/images/products/vacuum-table/buck-with/hero.jpg",
      galleryImages: [
        "/images/products/vacuum-table/buck-with/gallery-1.jpg",
        "/images/products/vacuum-table/buck-with/gallery-2.jpg",
        "/images/products/vacuum-table/buck-with/gallery-3.jpg"
      ],
      seoTitle: "Buck Table with Buck - Professional Vacuum Finishing | Hookimpex",
      seoDescription: "Professional vacuum table with integrated buck form for shirt and garment finishing."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "vacuum-table",
      productSlug: "buck-table-without-buck",
      productName: "Buck Table (without Buck)",
      shortDescription: "Versatile vacuum table ready for custom buck installation",
      keyFeatures: [
        "Buck-ready mounting system",
        "Flexible configuration",
        "High-capacity suction",
        "Premium build quality",
        "Easy buck attachment"
      ],
      specs: {
        "Dimensions": "3 x 4 ft",
        "Power": "2 kW",
        "Voltage": "220V / 50Hz",
        "Suction Capacity": "220 m³/h",
        "Weight": "75 kg",
        "Surface Material": "Premium mesh with mounting points"
      },
      applications: ["Custom Finishing Setups", "Multi-purpose Units", "Garment Factories", "Laundries"],
      warranty: "2 Year Comprehensive Warranty",
      serviceSupport: "Installation Support | Buck Mounting Guide | Technical Helpline",
      heroImage: "/images/products/vacuum-table/buck-without/hero.jpg",
      galleryImages: [
        "/images/products/vacuum-table/buck-without/gallery-1.jpg",
        "/images/products/vacuum-table/buck-without/gallery-2.jpg"
      ],
      seoTitle: "Buck Table without Buck - Versatile Vacuum Table | Hookimpex",
      seoDescription: "Versatile vacuum table with buck-ready mounting system for custom finishing configurations."
    },
    {
      categorySlug: "finishing-equipment",
      subcategorySlug: "vacuum-table",
      productSlug: "large-5x4",
      productName: "Vacuum Table Large (5 x 4)",
      shortDescription: "Large industrial vacuum table for high-volume operations",
      keyFeatures: [
        "Extra-large working surface",
        "Heavy-duty construction",
        "Industrial-grade motor",
        "Multi-zone suction control",
        "Reinforced frame"
      ],
      specs: {
        "Dimensions": "5 x 4 ft",
        "Power": "3 kW",
        "Voltage": "380V / 50Hz",
        "Suction Capacity": "300 m³/h",
        "Weight": "120 kg",
        "Surface Material": "Industrial mesh grid"
      },
      applications: ["Large Garment Factories", "Industrial Laundries", "Export Houses", "Mass Production Units"],
      warranty: "2 Year Comprehensive Warranty",
      serviceSupport: "Professional Installation | Annual Maintenance | Priority Support",
      heroImage: "/images/products/vacuum-table/large-5x4/hero.jpg",
      galleryImages: [
        "/images/products/vacuum-table/large-5x4/gallery-1.jpg",
        "/images/products/vacuum-table/large-5x4/gallery-2.jpg",
        "/images/products/vacuum-table/large-5x4/gallery-3.jpg"
      ],
      seoTitle: "Vacuum Table Large 5x4 - Industrial Finishing Table | Hookimpex",
      seoDescription: "Large industrial vacuum table with multi-zone suction control for high-volume operations."
    }
  ]
};

const finishingEquipmentCategory: Category = {
  slug: "finishing-equipment",
  name: "Finishing Equipment",
  description: "Complete range of industrial garment finishing machinery",
  icon: "✨",
  image: "/images/categories/finishing-equipment.jpg",
  subcategories: [ironboxSubcategory, steamGeneratorSubcategory, vacuumTableSubcategory],
  directProducts: finishingEquipmentProducts
};

// ====================================================
// CATEGORY 2: WASHING MACHINE
// ====================================================

const washingMachineProducts: Product[] = [
  {
    categorySlug: "washing-machine",
    subcategorySlug: null,
    productSlug: "washer",
    productName: "Industrial Washer",
    shortDescription: "Heavy-duty industrial washing machine for commercial laundries",
    keyFeatures: [
      "Large capacity drum",
      "Multiple wash programs",
      "Energy-efficient operation",
      "Stainless steel construction",
      "Digital control panel"
    ],
    specs: {
      "Capacity": "50 kg",
      "Power": "7.5 kW",
      "Voltage": "380V / 50Hz",
      "Drum Speed": "500 RPM",
      "Weight": "350 kg",
      "Dimensions": "1200 x 900 x 1400 mm"
    },
    applications: ["Hotels", "Hospitals", "Industrial Laundries", "Commercial Washing"],
    warranty: "3 Year Comprehensive Warranty",
    serviceSupport: "Professional Installation | Quarterly Maintenance | 24/7 Support",
    heroImage: "/images/products/washing/washer/hero.jpg",
    galleryImages: [
      "/images/products/washing/washer/gallery-1.jpg",
      "/images/products/washing/washer/gallery-2.jpg",
      "/images/products/washing/washer/gallery-3.jpg"
    ],
    seoTitle: "Industrial Washer 50kg - Commercial Washing Machine | Hookimpex",
    seoDescription: "Heavy-duty 50kg industrial washer with multiple programs and energy-efficient operation."
  },
  {
    categorySlug: "washing-machine",
    subcategorySlug: null,
    productSlug: "dryer",
    productName: "Industrial Dryer",
    shortDescription: "High-capacity industrial tumble dryer for fast drying",
    keyFeatures: [
      "High-capacity drying",
      "Reverse tumble action",
      "Temperature control",
      "Lint filtration system",
      "Energy-saving technology"
    ],
    specs: {
      "Capacity": "50 kg",
      "Power": "24 kW",
      "Voltage": "380V / 50Hz",
      "Drum Speed": "350 RPM",
      "Weight": "380 kg",
      "Dimensions": "1200 x 1000 x 1600 mm"
    },
    applications: ["Laundries", "Hotels", "Hospitals", "Textile Processing"],
    warranty: "3 Year Comprehensive Warranty",
    serviceSupport: "Installation | Regular Servicing | Priority Support",
    heroImage: "/images/products/washing/dryer/hero.jpg",
    galleryImages: [
      "/images/products/washing/dryer/gallery-1.jpg",
      "/images/products/washing/dryer/gallery-2.jpg",
      "/images/products/washing/dryer/gallery-3.jpg"
    ],
    seoTitle: "Industrial Dryer 50kg - Commercial Tumble Dryer | Hookimpex",
    seoDescription: "High-capacity 50kg industrial dryer with reverse tumble and energy-saving technology."
  },
  {
    categorySlug: "washing-machine",
    subcategorySlug: null,
    productSlug: "hydro-extractor",
    productName: "Hydro Extractor",
    shortDescription: "High-speed water extraction machine for industrial laundries",
    keyFeatures: [
      "High-speed extraction",
      "Reduced drying time",
      "Stainless steel basket",
      "Safety brake system",
      "Vibration dampening"
    ],
    specs: {
      "Capacity": "40 kg",
      "Power": "5 kW",
      "Voltage": "380V / 50Hz",
      "Spin Speed": "1200 RPM",
      "Weight": "280 kg",
      "Dimensions": "900 x 900 x 1200 mm"
    },
    applications: ["Laundries", "Textile Mills", "Dyeing Units", "Garment Washing"],
    warranty: "2 Year Comprehensive Warranty",
    serviceSupport: "Installation Support | Annual Maintenance | Technical Helpline",
    heroImage: "/images/products/washing/hydro-extractor/hero.jpg",
    galleryImages: [
      "/images/products/washing/hydro-extractor/gallery-1.jpg",
      "/images/products/washing/hydro-extractor/gallery-2.jpg"
    ],
    seoTitle: "Hydro Extractor 40kg - Industrial Water Extraction | Hookimpex",
    seoDescription: "High-speed 40kg hydro extractor for reduced drying time. Safety brake and vibration dampening."
  }
];

const washingMachineCategory: Category = {
  slug: "washing-machine",
  name: "Washing Machine",
  description: "Industrial washing and drying solutions",
  icon: "🌊",
  image: "/images/categories/washing-machine.jpg",
  subcategories: [],
  directProducts: washingMachineProducts
};

// ====================================================
// CATEGORY 3: FUSING MACHINE
// ====================================================

const fusingMachineProducts: Product[] = [
  {
    categorySlug: "fusing-machine",
    subcategorySlug: null,
    productSlug: "flatbed-fusing-press",
    productName: "Flatbed Fusing Press",
    shortDescription: "Precision flatbed fusing press for garment interlining",
    keyFeatures: [
      "Precision temperature control",
      "Uniform pressure distribution",
      "Digital timer system",
      "Large fusing area",
      "Energy-efficient heating"
    ],
    specs: {
      "Fusing Area": "1200 x 800 mm",
      "Power": "8 kW",
      "Voltage": "380V / 50Hz",
      "Temperature Range": "100-200°C",
      "Pressure": "0-5 Bar adjustable",
      "Weight": "450 kg",
      "Dimensions": "1800 x 1200 x 1600 mm"
    },
    applications: ["Garment Manufacturing", "Tailoring Units", "Export Houses", "Fashion Studios"],
    warranty: "3 Year Comprehensive Warranty",
    serviceSupport: "Professional Installation | Training | Quarterly Maintenance | 24/7 Support",
    heroImage: "/images/products/fusing/flatbed/hero.jpg",
    galleryImages: [
      "/images/products/fusing/flatbed/gallery-1.jpg",
      "/images/products/fusing/flatbed/gallery-2.jpg",
      "/images/products/fusing/flatbed/gallery-3.jpg"
    ],
    seoTitle: "Flatbed Fusing Press - Precision Garment Fusing | Hookimpex",
    seoDescription: "Precision flatbed fusing press with uniform pressure distribution and digital controls."
  },
  {
    categorySlug: "fusing-machine",
    subcategorySlug: null,
    productSlug: "continuous-fusing-machine",
    productName: "Continuous Fusing Machine",
    shortDescription: "High-speed continuous fusing system for mass production",
    keyFeatures: [
      "Continuous belt operation",
      "Adjustable speed control",
      "Multi-zone heating",
      "Automatic pressure system",
      "High production capacity"
    ],
    specs: {
      "Belt Width": "1600 mm",
      "Power": "15 kW",
      "Voltage": "380V / 50Hz",
      "Speed": "0-8 m/min adjustable",
      "Temperature Range": "100-220°C",
      "Weight": "850 kg",
      "Dimensions": "3500 x 2000 x 1800 mm"
    },
    applications: ["Mass Production", "Large Garment Factories", "Export Units", "Industrial Manufacturing"],
    warranty: "3 Year Comprehensive Warranty",
    serviceSupport: "Turnkey Installation | Operator Training | Monthly Servicing | Dedicated Support",
    heroImage: "/images/products/fusing/continuous/hero.jpg",
    galleryImages: [
      "/images/products/fusing/continuous/gallery-1.jpg",
      "/images/products/fusing/continuous/gallery-2.jpg",
      "/images/products/fusing/continuous/gallery-3.jpg",
      "/images/products/fusing/continuous/gallery-4.jpg"
    ],
    seoTitle: "Continuous Fusing Machine - High-Speed Industrial Fusing | Hookimpex",
    seoDescription: "High-speed continuous fusing machine with multi-zone heating for mass production operations."
  }
];

const fusingMachineCategory: Category = {
  slug: "fusing-machine",
  name: "Fusing Machine",
  description: "Advanced fusing technology for garment manufacturing",
  icon: "🔥",
  image: "/images/categories/fusing-machine.jpg",
  subcategories: [],
  directProducts: fusingMachineProducts
};

// ====================================================
// EXPORT ALL DATA
// ====================================================

export const categories: Category[] = [
  finishingEquipmentCategory,
  washingMachineCategory,
  fusingMachineCategory
];

export const getAllProducts = (): Product[] => {
  const products: Product[] = [];
  
  categories.forEach(category => {
    // Add direct products
    products.push(...category.directProducts);
    
    // Add products from subcategories
    category.subcategories.forEach(subcategory => {
      products.push(...subcategory.products);
    });
  });
  
  return products;
};

export const getProductBySlug = (categorySlug: string, subcategorySlug: string | null, productSlug: string): Product | undefined => {
  const category = categories.find(c => c.slug === categorySlug);
  if (!category) return undefined;
  
  if (subcategorySlug) {
    const subcategory = category.subcategories.find(s => s.slug === subcategorySlug);
    if (!subcategory) return undefined;
    return subcategory.products.find(p => p.productSlug === productSlug);
  } else {
    return category.directProducts.find(p => p.productSlug === productSlug);
  }
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const getSubcategoryBySlug = (categorySlug: string, subcategorySlug: string): Subcategory | undefined => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return category.subcategories.find(s => s.slug === subcategorySlug);
};
