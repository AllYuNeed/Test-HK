// Clients Data Architecture for Hookimpex

export interface ClientLocation {
  locationSlug: string;
  locationName: string;
  city: string;
  state?: string;
  installedSolutions: string[]; // Product category slugs
  installationYear?: number;
  description?: string;
  image?: string;
}

export interface Client {
  clientSlug: string;
  clientName: string;
  industry: string;
  logo?: string;
  description: string;
  locations: ClientLocation[];
}

export const clients: Client[] = [
  {
    clientSlug: "hyatt-regency-the-laundry-bag",
    clientName: "HYATT Regency → THE LAUNDRY BAG",
    industry: "Hospitality & Laundry Services",
    description: "Premium laundry solutions for Hyatt Regency properties across India",
    locations: [
      {
        locationSlug: "ahmedabad",
        locationName: "Ahmedabad",
        city: "Ahmedabad",
        state: "Gujarat",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "lucknow",
        locationName: "Lucknow",
        city: "Lucknow",
        state: "Uttar Pradesh",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "chennai",
        locationName: "Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "bangalore",
        locationName: "Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "hyderabad",
        locationName: "Hyderabad",
        city: "Hyderabad",
        state: "Telangana",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "goa",
        locationName: "Goa",
        city: "Goa",
        state: "Goa",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "pune",
        locationName: "Pune",
        city: "Pune",
        state: "Maharashtra",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "kolkata",
        locationName: "Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      }
    ]
  },
  {
    clientSlug: "novotel",
    clientName: "Novotel",
    industry: "Hospitality",
    description: "Luxury hotel chain with premium laundry services",
    locations: [
      {
        locationSlug: "shollinganallur",
        locationName: "Shollinganallur",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "chennai",
        locationName: "Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment"],
      }
    ]
  },
  {
    clientSlug: "hilton-embassy",
    clientName: "Hilton Embassy",
    industry: "Hospitality",
    description: "International luxury hotel chain",
    locations: [
      {
        locationSlug: "bangalore",
        locationName: "Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      }
    ]
  },
  {
    clientSlug: "westin",
    clientName: "Westin",
    industry: "Hospitality",
    description: "Premium hotel brand with global presence",
    locations: [
      {
        locationSlug: "kolkata",
        locationName: "Kolkata",
        city: "Kolkata",
        state: "West Bengal",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      },
      {
        locationSlug: "mumbai",
        locationName: "Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      }
    ]
  },
  {
    clientSlug: "evolve-clothing-co",
    clientName: "EVOLVE CLOTHING CO. PVT LTD",
    industry: "Garment Manufacturing",
    description: "Leading garment manufacturing and export company",
    locations: [
      {
        locationSlug: "perungudi",
        locationName: "Perungudi",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment", "fusing-machine"],
      },
      {
        locationSlug: "padaalam",
        locationName: "Padaalam",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment"],
      }
    ]
  },
  {
    clientSlug: "sristy-garments",
    clientName: "SRISTY GARMENTS",
    industry: "Garment Manufacturing",
    description: "Premium garment manufacturing unit",
    locations: [
      {
        locationSlug: "maddhavaraam",
        locationName: "Madhavaram",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment", "fusing-machine"],
      }
    ]
  },
  {
    clientSlug: "monack-export",
    clientName: "MONACK EXPORT",
    industry: "Garment Export",
    description: "Export-oriented garment manufacturing",
    locations: [
      {
        locationSlug: "vellanur",
        locationName: "Vellanur",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment", "fusing-machine"],
      },
      {
        locationSlug: "redhills",
        locationName: "Redhills",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment"],
      }
    ]
  },
  {
    clientSlug: "rk-industries-iv",
    clientName: "RK. INDUSTRIES IV",
    industry: "Industrial Manufacturing",
    description: "Industrial textile and garment processing",
    locations: [
      {
        locationSlug: "guindy",
        locationName: "Guindy",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment", "washing-machine"],
      }
    ]
  },
  {
    clientSlug: "roj-leather",
    clientName: "Roj Leather",
    industry: "Leather Manufacturing",
    description: "Premium leather goods manufacturing",
    locations: [
      {
        locationSlug: "perungudi",
        locationName: "Perungudi",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment"],
      }
    ]
  },
  {
    clientSlug: "sm-lulla-industries",
    clientName: "SM Lulla Industries World Wide",
    industry: "Industrial Manufacturing",
    description: "Global industrial manufacturing solutions",
    locations: [
      {
        locationSlug: "ekatuthaangal",
        locationName: "Ekattuthangal",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment", "washing-machine", "fusing-machine"],
      }
    ]
  },
  {
    clientSlug: "steamee",
    clientName: "Steamee",
    industry: "Laundry Services",
    description: "Professional laundry and garment care services",
    locations: [
      {
        locationSlug: "chennai",
        locationName: "Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        installedSolutions: ["finishing-equipment"],
      },
      {
        locationSlug: "bangalore",
        locationName: "Bangalore",
        city: "Bangalore",
        state: "Karnataka",
        installedSolutions: ["finishing-equipment"],
      }
    ]
  }
];

// Helper functions
export const getAllClients = (): Client[] => {
  return clients;
};

export const getClientBySlug = (clientSlug: string): Client | undefined => {
  return clients.find(c => c.clientSlug === clientSlug);
};

export const getClientLocation = (clientSlug: string, locationSlug: string): ClientLocation | undefined => {
  const client = getClientBySlug(clientSlug);
  if (!client) return undefined;
  return client.locations.find(l => l.locationSlug === locationSlug);
};

export const getAllCities = (): string[] => {
  const cities = new Set<string>();
  clients.forEach(client => {
    client.locations.forEach(location => {
      cities.add(location.city);
    });
  });
  return Array.from(cities).sort();
};

export const filterClientsByCity = (city: string): Client[] => {
  return clients.filter(client => 
    client.locations.some(location => location.city.toLowerCase() === city.toLowerCase())
  );
};

export const getTotalLocations = (): number => {
  return clients.reduce((total, client) => total + client.locations.length, 0);
};
