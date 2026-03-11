export interface ClientLocation {
  locationSlug: string;
  locationName: string;
  city: string;
  installedSolutions: string[];
  address?: string;
}

export interface Client {
  clientSlug: string;
  clientName: string;
  clientType: "hospitality" | "garment" | "export" | "industrial";
  description: string;
  locations: ClientLocation[];
  logo?: string;
}

export const clients: Client[] = [
  {
    clientSlug: "hyatt-regency",
    clientName: "HYATT Regency — THE LAUNDRY BAG",
    clientType: "hospitality",
    description: "Hyatt Regency's centralized laundry operations, THE LAUNDRY BAG, rely on Hookimpex industrial machinery for high-volume hotel linen and garment care.",
    locations: [
      { locationSlug: "ahmedabad", locationName: "Ahmedabad", city: "Ahmedabad", installedSolutions: ["Washing Machine", "Finishing Equipment", "Steam Generator"] },
      { locationSlug: "lucknow", locationName: "Lucknow", city: "Lucknow", installedSolutions: ["Washing Machine", "Finishing Equipment", "Steam Generator"] },
      { locationSlug: "chennai", locationName: "Chennai", city: "Chennai", installedSolutions: ["Washing Machine", "Finishing Equipment", "Steam Generator", "Fusing Machine"] },
      { locationSlug: "bangalore", locationName: "Bangalore", city: "Bangalore", installedSolutions: ["Washing Machine", "Finishing Equipment", "Steam Generator"] },
      { locationSlug: "hyderabad", locationName: "Hyderabad", city: "Hyderabad", installedSolutions: ["Washing Machine", "Finishing Equipment"] },
      { locationSlug: "goa", locationName: "Goa", city: "Goa", installedSolutions: ["Finishing Equipment", "Steam Generator"] },
      { locationSlug: "pune", locationName: "Pune", city: "Pune", installedSolutions: ["Washing Machine", "Finishing Equipment", "Steam Generator"] },
      { locationSlug: "kolkata", locationName: "Kolkata", city: "Kolkata", installedSolutions: ["Washing Machine", "Finishing Equipment"] },
    ]
  },
  {
    clientSlug: "novotel",
    clientName: "Novotel",
    clientType: "hospitality",
    description: "Novotel's laundry infrastructure powered by Hookimpex industrial finishing and washing solutions.",
    locations: [
      { locationSlug: "shollinganallur", locationName: "Shollinganallur", city: "Chennai", installedSolutions: ["Finishing Equipment", "Steam Generator", "Washing Machine"] },
      { locationSlug: "chennai", locationName: "Chennai", city: "Chennai", installedSolutions: ["Finishing Equipment", "Washing Machine"] },
    ]
  },
  {
    clientSlug: "hilton-embassy",
    clientName: "Hilton Embassy",
    clientType: "hospitality",
    description: "Hilton Embassy trusts Hookimpex industrial steam and finishing solutions for their linen care operations.",
    locations: [
      { locationSlug: "bangalore", locationName: "Bangalore", city: "Bangalore", installedSolutions: ["Steam Generator", "Finishing Equipment", "Washing Machine"] },
    ]
  },
  {
    clientSlug: "westin",
    clientName: "Westin",
    clientType: "hospitality",
    description: "Westin Hotels' premium linen and garment care operations run on Hookimpex machinery.",
    locations: [
      { locationSlug: "kolkata", locationName: "Kolkata", city: "Kolkata", installedSolutions: ["Finishing Equipment", "Washing Machine", "Steam Generator"] },
      { locationSlug: "mumbai", locationName: "Mumbai", city: "Mumbai", installedSolutions: ["Finishing Equipment", "Washing Machine"] },
    ]
  },
  {
    clientSlug: "evolve-clothing",
    clientName: "EVOLVE CLOTHING CO. PVT LTD",
    clientType: "garment",
    description: "A leading garment manufacturer running full production finishing lines with Hookimpex equipment.",
    locations: [
      { locationSlug: "perungudi", locationName: "Perungudi", city: "Chennai", installedSolutions: ["Finishing Equipment", "Fusing Machine", "Steam Generator"] },
      { locationSlug: "padaalam", locationName: "Padaalam", city: "Chennai", installedSolutions: ["Fusing Machine", "Finishing Equipment"] },
    ]
  },
  {
    clientSlug: "sristy-garments",
    clientName: "SRISTY GARMENTS",
    clientType: "garment",
    description: "Sristy Garments operates with Hookimpex finishing solutions for their garment production unit.",
    locations: [
      { locationSlug: "madhavaraam", locationName: "Madhavaraam", city: "Chennai", installedSolutions: ["Finishing Equipment", "Steam Generator", "Fusing Machine"] },
    ]
  },
  {
    clientSlug: "monack-export",
    clientName: "MONACK EXPORT",
    clientType: "export",
    description: "Export garment house using Hookimpex industrial fusing and finishing for international quality compliance.",
    locations: [
      { locationSlug: "vellanur", locationName: "Vellanur", city: "Chennai", installedSolutions: ["Fusing Machine", "Finishing Equipment", "Steam Generator"] },
      { locationSlug: "redhills", locationName: "Redhills", city: "Chennai", installedSolutions: ["Finishing Equipment", "Fusing Machine"] },
    ]
  },
  {
    clientSlug: "rk-industries",
    clientName: "RK Industries IV",
    clientType: "industrial",
    description: "Industrial garment unit in Guindy operating Hookimpex steam and finishing machinery at scale.",
    locations: [
      { locationSlug: "guindy", locationName: "Guindy", city: "Chennai", installedSolutions: ["Steam Generator", "Finishing Equipment", "Washing Machine"] },
    ]
  },
  {
    clientSlug: "roj-leather",
    clientName: "Roj Leather",
    clientType: "industrial",
    description: "Premium leather goods manufacturer using Hookimpex finishing solutions for leather garment care.",
    locations: [
      { locationSlug: "perungudi", locationName: "Perungudi", city: "Chennai", installedSolutions: ["Finishing Equipment", "Steam Generator"] },
    ]
  },
  {
    clientSlug: "sm-lulla",
    clientName: "SM Lulla Industries Worldwide",
    clientType: "export",
    description: "Global garment exporter with Hookimpex industrial finishing and fusing machinery in their production lines.",
    locations: [
      { locationSlug: "ekatuthangal", locationName: "Ekatuthangal", city: "Chennai", installedSolutions: ["Finishing Equipment", "Fusing Machine", "Steam Generator", "Washing Machine"] },
    ]
  },
  {
    clientSlug: "steamee",
    clientName: "Steamee",
    clientType: "industrial",
    description: "Specialized steam services company using Hookimpex steam generators as their core operational backbone.",
    locations: [
      { locationSlug: "chennai", locationName: "Chennai", city: "Chennai", installedSolutions: ["Steam Generator", "Finishing Equipment"] },
      { locationSlug: "bangalore", locationName: "Bangalore", city: "Bangalore", installedSolutions: ["Steam Generator"] },
    ]
  },
];

export function getClientBySlug(slug: string): Client | undefined {
  return clients.find(c => c.clientSlug === slug);
}

export function getClientLocationBySlug(clientSlug: string, locationSlug: string): ClientLocation | undefined {
  const client = getClientBySlug(clientSlug);
  return client?.locations.find(l => l.locationSlug === locationSlug);
}

export function getAllCities(): string[] {
  const cities = new Set<string>();
  for (const client of clients) {
    for (const loc of client.locations) {
      cities.add(loc.city);
    }
  }
  return Array.from(cities).sort();
}

export function getAllClientRoutes(): { client: string; location: string }[] {
  const routes: { client: string; location: string }[] = [];
  for (const client of clients) {
    for (const loc of client.locations) {
      routes.push({ client: client.clientSlug, location: loc.locationSlug });
    }
  }
  return routes;
}
