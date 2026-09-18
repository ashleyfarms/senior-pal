import type { City } from './types';

export const CITIES: City[] = [
  { id: 'austin-tx', name: 'Austin', state: 'Texas', stateAbbr: 'TX' },
  { id: 'nashville-tn', name: 'Nashville', state: 'Tennessee', stateAbbr: 'TN' },
  { id: 'memphis-tn', name: 'Memphis', state: 'Tennessee', stateAbbr: 'TN' },
  { id: 'chicago-il', name: 'Chicago', state: 'Illinois', stateAbbr: 'IL' },
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
