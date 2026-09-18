import type { City } from './types';

/** Seed cities — FL/AZ places ≥200k (Census 2023) plus earlier demo cities. */
export const CITIES: City[] = [
  // Arizona (≥200k, Census POPESTIMATE2023)
  { id: 'phoenix-az', name: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'tucson-az', name: 'Tucson', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'mesa-az', name: 'Mesa', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'chandler-az', name: 'Chandler', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'gilbert-az', name: 'Gilbert', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'glendale-az', name: 'Glendale', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'scottsdale-az', name: 'Scottsdale', state: 'Arizona', stateAbbr: 'AZ' },
  // Florida (≥200k)
  { id: 'jacksonville-fl', name: 'Jacksonville', state: 'Florida', stateAbbr: 'FL' },
  { id: 'miami-fl', name: 'Miami', state: 'Florida', stateAbbr: 'FL' },
  { id: 'tampa-fl', name: 'Tampa', state: 'Florida', stateAbbr: 'FL' },
  { id: 'orlando-fl', name: 'Orlando', state: 'Florida', stateAbbr: 'FL' },
  { id: 'st-petersburg-fl', name: 'St. Petersburg', state: 'Florida', stateAbbr: 'FL' },
  { id: 'port-st-lucie-fl', name: 'Port St. Lucie', state: 'Florida', stateAbbr: 'FL' },
  { id: 'cape-coral-fl', name: 'Cape Coral', state: 'Florida', stateAbbr: 'FL' },
  { id: 'hialeah-fl', name: 'Hialeah', state: 'Florida', stateAbbr: 'FL' },
  { id: 'tallahassee-fl', name: 'Tallahassee', state: 'Florida', stateAbbr: 'FL' },
  // Earlier demo cities
  { id: 'chicago-il', name: 'Chicago', state: 'Illinois', stateAbbr: 'IL' },
  { id: 'nashville-tn', name: 'Nashville', state: 'Tennessee', stateAbbr: 'TN' },
  { id: 'memphis-tn', name: 'Memphis', state: 'Tennessee', stateAbbr: 'TN' },
  { id: 'austin-tx', name: 'Austin', state: 'Texas', stateAbbr: 'TX' },
  { id: 'seattle-wa', name: 'Seattle', state: 'Washington', stateAbbr: 'WA' },
];

export function getCity(id: string): City | undefined {
  return CITIES.find((c) => c.id === id);
}

export function cityLabel(city: City): string {
  return `${city.name}, ${city.stateAbbr}`;
}

export function searchCities(query: string): City[] {
  const q = query.trim().toLowerCase();
  if (!q) return CITIES;
  return CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.state.toLowerCase().includes(q) ||
      c.stateAbbr.toLowerCase().includes(q),
  );
}

export function groupCitiesByState(): { state: string; stateAbbr: string; cities: City[] }[] {
  const map = new Map<string, { state: string; stateAbbr: string; cities: City[] }>();
  for (const city of CITIES) {
    const key = city.stateAbbr;
    if (!map.has(key)) {
      map.set(key, { state: city.state, stateAbbr: city.stateAbbr, cities: [] });
    }
    map.get(key)!.cities.push(city);
  }
  for (const g of map.values()) {
    g.cities.sort((a, b) => a.name.localeCompare(b.name));
  }
  return Array.from(map.values()).sort((a, b) => a.state.localeCompare(b.state));
}

export function getStateGroup(stateAbbr: string) {
  const abbr = stateAbbr.trim().toUpperCase();
  return groupCitiesByState().find((g) => g.stateAbbr === abbr);
}
