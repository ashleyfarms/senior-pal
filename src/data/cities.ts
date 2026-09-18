import type { City } from './types';

/**
 * Cities prioritized for Senior Pal:
 * - Known retirement / 55+ communities (The Villages, Sun City, Laguna Woods, …)
 * - High median-age / high % 65+ metros (SW Florida, Hilton Head, Prescott, …)
 * - Largest absolute senior populations (CA, FL, TX, NY, PA, … hubs)
 * - WalletHub-style popular retire destinations
 *
 * Searchable by city or state. Not every CDP is included — focus on places
 * people actually look up for senior discounts.
 */
export const CITIES: City[] = [
  // —— Alabama ——
  { id: 'birmingham-al', name: 'Birmingham', state: 'Alabama', stateAbbr: 'AL' },
  { id: 'huntsville-al', name: 'Huntsville', state: 'Alabama', stateAbbr: 'AL' },
  { id: 'mobile-al', name: 'Mobile', state: 'Alabama', stateAbbr: 'AL' },
  { id: 'montgomery-al', name: 'Montgomery', state: 'Alabama', stateAbbr: 'AL' },

  // —— Arizona (Sun Belt retirement + large metros) ——
  { id: 'phoenix-az', name: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'tucson-az', name: 'Tucson', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'mesa-az', name: 'Mesa', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'chandler-az', name: 'Chandler', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'gilbert-az', name: 'Gilbert', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'glendale-az', name: 'Glendale', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'scottsdale-az', name: 'Scottsdale', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'peoria-az', name: 'Peoria', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'surprise-az', name: 'Surprise', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'yuma-az', name: 'Yuma', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'prescott-az', name: 'Prescott', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'prescott-valley-az', name: 'Prescott Valley', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'sun-city-az', name: 'Sun City', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'sun-city-west-az', name: 'Sun City West', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'green-valley-az', name: 'Green Valley', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'fountain-hills-az', name: 'Fountain Hills', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'sun-lakes-az', name: 'Sun Lakes', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'payson-az', name: 'Payson', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'sedona-az', name: 'Sedona', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'lake-havasu-city-az', name: 'Lake Havasu City', state: 'Arizona', stateAbbr: 'AZ' },
  { id: 'casa-grande-az', name: 'Casa Grande', state: 'Arizona', stateAbbr: 'AZ' },

  // —— Arkansas ——
  { id: 'hot-springs-ar', name: 'Hot Springs', state: 'Arkansas', stateAbbr: 'AR' },
  { id: 'hot-springs-village-ar', name: 'Hot Springs Village', state: 'Arkansas', stateAbbr: 'AR' },
  { id: 'little-rock-ar', name: 'Little Rock', state: 'Arkansas', stateAbbr: 'AR' },
  { id: 'fayetteville-ar', name: 'Fayetteville', state: 'Arkansas', stateAbbr: 'AR' },

  // —— California (largest senior count + retire hubs) ——
  { id: 'los-angeles-ca', name: 'Los Angeles', state: 'California', stateAbbr: 'CA' },
  { id: 'san-diego-ca', name: 'San Diego', state: 'California', stateAbbr: 'CA' },
  { id: 'san-jose-ca', name: 'San Jose', state: 'California', stateAbbr: 'CA' },
  { id: 'san-francisco-ca', name: 'San Francisco', state: 'California', stateAbbr: 'CA' },
  { id: 'sacramento-ca', name: 'Sacramento', state: 'California', stateAbbr: 'CA' },
  { id: 'fresno-ca', name: 'Fresno', state: 'California', stateAbbr: 'CA' },
  { id: 'long-beach-ca', name: 'Long Beach', state: 'California', stateAbbr: 'CA' },
  { id: 'oakland-ca', name: 'Oakland', state: 'California', stateAbbr: 'CA' },
  { id: 'bakersfield-ca', name: 'Bakersfield', state: 'California', stateAbbr: 'CA' },
  { id: 'anaheim-ca', name: 'Anaheim', state: 'California', stateAbbr: 'CA' },
  { id: 'riverside-ca', name: 'Riverside', state: 'California', stateAbbr: 'CA' },
  { id: 'santa-rosa-ca', name: 'Santa Rosa', state: 'California', stateAbbr: 'CA' },
  { id: 'oceanside-ca', name: 'Oceanside', state: 'California', stateAbbr: 'CA' },
  { id: 'laguna-woods-ca', name: 'Laguna Woods', state: 'California', stateAbbr: 'CA' },
  { id: 'rancho-mirage-ca', name: 'Rancho Mirage', state: 'California', stateAbbr: 'CA' },
  { id: 'palm-springs-ca', name: 'Palm Springs', state: 'California', stateAbbr: 'CA' },
  { id: 'palm-desert-ca', name: 'Palm Desert', state: 'California', stateAbbr: 'CA' },
  { id: 'hemet-ca', name: 'Hemet', state: 'California', stateAbbr: 'CA' },

  // —— Colorado ——
  { id: 'denver-co', name: 'Denver', state: 'Colorado', stateAbbr: 'CO' },
  { id: 'colorado-springs-co', name: 'Colorado Springs', state: 'Colorado', stateAbbr: 'CO' },
  { id: 'fort-collins-co', name: 'Fort Collins', state: 'Colorado', stateAbbr: 'CO' },
  { id: 'grand-junction-co', name: 'Grand Junction', state: 'Colorado', stateAbbr: 'CO' },

  // —— Delaware (high % 65+) ——
  { id: 'wilmington-de', name: 'Wilmington', state: 'Delaware', stateAbbr: 'DE' },
  { id: 'dover-de', name: 'Dover', state: 'Delaware', stateAbbr: 'DE' },
  { id: 'newark-de', name: 'Newark', state: 'Delaware', stateAbbr: 'DE' },
  { id: 'rehoboth-beach-de', name: 'Rehoboth Beach', state: 'Delaware', stateAbbr: 'DE' },

  // —— Florida (retirement capital + large cities) ——
  { id: 'jacksonville-fl', name: 'Jacksonville', state: 'Florida', stateAbbr: 'FL' },
  { id: 'miami-fl', name: 'Miami', state: 'Florida', stateAbbr: 'FL' },
  { id: 'tampa-fl', name: 'Tampa', state: 'Florida', stateAbbr: 'FL' },
  { id: 'orlando-fl', name: 'Orlando', state: 'Florida', stateAbbr: 'FL' },
  { id: 'st-petersburg-fl', name: 'St. Petersburg', state: 'Florida', stateAbbr: 'FL' },
  { id: 'port-st-lucie-fl', name: 'Port St. Lucie', state: 'Florida', stateAbbr: 'FL' },
  { id: 'cape-coral-fl', name: 'Cape Coral', state: 'Florida', stateAbbr: 'FL' },
  { id: 'hialeah-fl', name: 'Hialeah', state: 'Florida', stateAbbr: 'FL' },
  { id: 'tallahassee-fl', name: 'Tallahassee', state: 'Florida', stateAbbr: 'FL' },
  { id: 'fort-lauderdale-fl', name: 'Fort Lauderdale', state: 'Florida', stateAbbr: 'FL' },
  { id: 'pembroke-pines-fl', name: 'Pembroke Pines', state: 'Florida', stateAbbr: 'FL' },
  { id: 'hollywood-beach-fl', name: 'Hollywood', state: 'Florida', stateAbbr: 'FL' },
  { id: 'gainesville-fl', name: 'Gainesville', state: 'Florida', stateAbbr: 'FL' },
  { id: 'miramar-fl', name: 'Miramar', state: 'Florida', stateAbbr: 'FL' },
  { id: 'coral-springs-fl', name: 'Coral Springs', state: 'Florida', stateAbbr: 'FL' },
  { id: 'clearwater-fl', name: 'Clearwater', state: 'Florida', stateAbbr: 'FL' },
  { id: 'palm-bay-fl', name: 'Palm Bay', state: 'Florida', stateAbbr: 'FL' },
  { id: 'west-palm-beach-fl', name: 'West Palm Beach', state: 'Florida', stateAbbr: 'FL' },
  { id: 'lakeland-fl', name: 'Lakeland', state: 'Florida', stateAbbr: 'FL' },
  { id: 'pompano-beach-fl', name: 'Pompano Beach', state: 'Florida', stateAbbr: 'FL' },
  { id: 'miami-gardens-fl', name: 'Miami Gardens', state: 'Florida', stateAbbr: 'FL' },
  { id: 'davie-fl', name: 'Davie', state: 'Florida', stateAbbr: 'FL' },
  { id: 'boca-raton-fl', name: 'Boca Raton', state: 'Florida', stateAbbr: 'FL' },
  { id: 'deltona-fl', name: 'Deltona', state: 'Florida', stateAbbr: 'FL' },
  { id: 'plantation-fl', name: 'Plantation', state: 'Florida', stateAbbr: 'FL' },
  { id: 'sunrise-fl', name: 'Sunrise', state: 'Florida', stateAbbr: 'FL' },
  { id: 'fort-myers-fl', name: 'Fort Myers', state: 'Florida', stateAbbr: 'FL' },
  { id: 'sarasota-fl', name: 'Sarasota', state: 'Florida', stateAbbr: 'FL' },
  { id: 'bradenton-fl', name: 'Bradenton', state: 'Florida', stateAbbr: 'FL' },
  { id: 'ocala-fl', name: 'Ocala', state: 'Florida', stateAbbr: 'FL' },
  { id: 'daytona-beach-fl', name: 'Daytona Beach', state: 'Florida', stateAbbr: 'FL' },
  { id: 'melbourne-fl', name: 'Melbourne', state: 'Florida', stateAbbr: 'FL' },
  { id: 'the-villages-fl', name: 'The Villages', state: 'Florida', stateAbbr: 'FL' },
  { id: 'naples-fl', name: 'Naples', state: 'Florida', stateAbbr: 'FL' },
  { id: 'venice-fl', name: 'Venice', state: 'Florida', stateAbbr: 'FL' },
  { id: 'punta-gorda-fl', name: 'Punta Gorda', state: 'Florida', stateAbbr: 'FL' },
  { id: 'sun-city-center-fl', name: 'Sun City Center', state: 'Florida', stateAbbr: 'FL' },
  { id: 'lady-lake-fl', name: 'Lady Lake', state: 'Florida', stateAbbr: 'FL' },
  { id: 'estero-fl', name: 'Estero', state: 'Florida', stateAbbr: 'FL' },
  { id: 'englewood-fl', name: 'Englewood', state: 'Florida', stateAbbr: 'FL' },
  { id: 'marco-island-fl', name: 'Marco Island', state: 'Florida', stateAbbr: 'FL' },
  { id: 'bonita-springs-fl', name: 'Bonita Springs', state: 'Florida', stateAbbr: 'FL' },
  { id: 'sebastian-fl', name: 'Sebastian', state: 'Florida', stateAbbr: 'FL' },
  { id: 'viera-fl', name: 'Viera', state: 'Florida', stateAbbr: 'FL' },
  { id: 'inverness-fl', name: 'Inverness', state: 'Florida', stateAbbr: 'FL' },
  { id: 'crystal-river-fl', name: 'Crystal River', state: 'Florida', stateAbbr: 'FL' },

  // —— Georgia ——
  { id: 'atlanta-ga', name: 'Atlanta', state: 'Georgia', stateAbbr: 'GA' },
  { id: 'savannah-ga', name: 'Savannah', state: 'Georgia', stateAbbr: 'GA' },
  { id: 'augusta-ga', name: 'Augusta', state: 'Georgia', stateAbbr: 'GA' },
  { id: 'columbus-ga', name: 'Columbus', state: 'Georgia', stateAbbr: 'GA' },

  // —— Hawaii (high % 65+) ——
  { id: 'honolulu-hi', name: 'Honolulu', state: 'Hawaii', stateAbbr: 'HI' },
  { id: 'hilo-hi', name: 'Hilo', state: 'Hawaii', stateAbbr: 'HI' },
  { id: 'kahului-hi', name: 'Kahului', state: 'Hawaii', stateAbbr: 'HI' },

  // —— Illinois ——
  { id: 'chicago-il', name: 'Chicago', state: 'Illinois', stateAbbr: 'IL' },
  { id: 'aurora-il', name: 'Aurora', state: 'Illinois', stateAbbr: 'IL' },
  { id: 'naperville-il', name: 'Naperville', state: 'Illinois', stateAbbr: 'IL' },
  { id: 'rockford-il', name: 'Rockford', state: 'Illinois', stateAbbr: 'IL' },
  { id: 'springfield-il', name: 'Springfield', state: 'Illinois', stateAbbr: 'IL' },

  // —— Maine (oldest % 65+) ——
  { id: 'portland-me', name: 'Portland', state: 'Maine', stateAbbr: 'ME' },
  { id: 'bangor-me', name: 'Bangor', state: 'Maine', stateAbbr: 'ME' },
  { id: 'lewiston-me', name: 'Lewiston', state: 'Maine', stateAbbr: 'ME' },
  { id: 'augusta-me', name: 'Augusta', state: 'Maine', stateAbbr: 'ME' },

  // —— Maryland ——
  { id: 'baltimore-md', name: 'Baltimore', state: 'Maryland', stateAbbr: 'MD' },
  { id: 'annapolis-md', name: 'Annapolis', state: 'Maryland', stateAbbr: 'MD' },
  { id: 'frederick-md', name: 'Frederick', state: 'Maryland', stateAbbr: 'MD' },
  { id: 'ocean-city-md', name: 'Ocean City', state: 'Maryland', stateAbbr: 'MD' },

  // —— Massachusetts ——
  { id: 'boston-ma', name: 'Boston', state: 'Massachusetts', stateAbbr: 'MA' },
  { id: 'worcester-ma', name: 'Worcester', state: 'Massachusetts', stateAbbr: 'MA' },
  { id: 'springfield-ma', name: 'Springfield', state: 'Massachusetts', stateAbbr: 'MA' },
  { id: 'cape-cod-barnstable-ma', name: 'Barnstable', state: 'Massachusetts', stateAbbr: 'MA' },

  // —— Michigan ——
  { id: 'detroit-mi', name: 'Detroit', state: 'Michigan', stateAbbr: 'MI' },
  { id: 'grand-rapids-mi', name: 'Grand Rapids', state: 'Michigan', stateAbbr: 'MI' },
  { id: 'ann-arbor-mi', name: 'Ann Arbor', state: 'Michigan', stateAbbr: 'MI' },
  { id: 'traverse-city-mi', name: 'Traverse City', state: 'Michigan', stateAbbr: 'MI' },

  // —— Minnesota ——
  { id: 'minneapolis-mn', name: 'Minneapolis', state: 'Minnesota', stateAbbr: 'MN' },
  { id: 'st-paul-mn', name: 'St. Paul', state: 'Minnesota', stateAbbr: 'MN' },
  { id: 'rochester-mn', name: 'Rochester', state: 'Minnesota', stateAbbr: 'MN' },
  { id: 'duluth-mn', name: 'Duluth', state: 'Minnesota', stateAbbr: 'MN' },

  // —— Montana ——
  { id: 'billings-mt', name: 'Billings', state: 'Montana', stateAbbr: 'MT' },
  { id: 'missoula-mt', name: 'Missoula', state: 'Montana', stateAbbr: 'MT' },
  { id: 'bozeman-mt', name: 'Bozeman', state: 'Montana', stateAbbr: 'MT' },
  { id: 'kalispell-mt', name: 'Kalispell', state: 'Montana', stateAbbr: 'MT' },

  // —— Nevada ——
  { id: 'las-vegas-nv', name: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV' },
  { id: 'henderson-nv', name: 'Henderson', state: 'Nevada', stateAbbr: 'NV' },
  { id: 'reno-nv', name: 'Reno', state: 'Nevada', stateAbbr: 'NV' },
  { id: 'sparks-nv', name: 'Sparks', state: 'Nevada', stateAbbr: 'NV' },

  // —— New Hampshire (high % 65+) ——
  { id: 'manchester-nh', name: 'Manchester', state: 'New Hampshire', stateAbbr: 'NH' },
  { id: 'nashua-nh', name: 'Nashua', state: 'New Hampshire', stateAbbr: 'NH' },
  { id: 'concord-nh', name: 'Concord', state: 'New Hampshire', stateAbbr: 'NH' },
  { id: 'portsmouth-nh', name: 'Portsmouth', state: 'New Hampshire', stateAbbr: 'NH' },

  // —— New Mexico ——
  { id: 'albuquerque-nm', name: 'Albuquerque', state: 'New Mexico', stateAbbr: 'NM' },
  { id: 'santa-fe-nm', name: 'Santa Fe', state: 'New Mexico', stateAbbr: 'NM' },
  { id: 'las-cruces-nm', name: 'Las Cruces', state: 'New Mexico', stateAbbr: 'NM' },
  { id: 'rio-rancho-nm', name: 'Rio Rancho', state: 'New Mexico', stateAbbr: 'NM' },

  // —— New York ——
  { id: 'new-york-ny', name: 'New York City', state: 'New York', stateAbbr: 'NY' },
  { id: 'buffalo-ny', name: 'Buffalo', state: 'New York', stateAbbr: 'NY' },
  { id: 'rochester-ny', name: 'Rochester', state: 'New York', stateAbbr: 'NY' },
  { id: 'albany-ny', name: 'Albany', state: 'New York', stateAbbr: 'NY' },
  { id: 'syracuse-ny', name: 'Syracuse', state: 'New York', stateAbbr: 'NY' },

  // —— North Carolina ——
  { id: 'charlotte-nc', name: 'Charlotte', state: 'North Carolina', stateAbbr: 'NC' },
  { id: 'raleigh-nc', name: 'Raleigh', state: 'North Carolina', stateAbbr: 'NC' },
  { id: 'greensboro-nc', name: 'Greensboro', state: 'North Carolina', stateAbbr: 'NC' },
  { id: 'durham-nc', name: 'Durham', state: 'North Carolina', stateAbbr: 'NC' },
  { id: 'winston-salem-nc', name: 'Winston-Salem', state: 'North Carolina', stateAbbr: 'NC' },
  { id: 'asheville-nc', name: 'Asheville', state: 'North Carolina', stateAbbr: 'NC' },
  { id: 'wilmington-nc', name: 'Wilmington', state: 'North Carolina', stateAbbr: 'NC' },
  { id: 'fayetteville-nc', name: 'Fayetteville', state: 'North Carolina', stateAbbr: 'NC' },

  // —— Ohio ——
  { id: 'columbus-oh', name: 'Columbus', state: 'Ohio', stateAbbr: 'OH' },
  { id: 'cleveland-oh', name: 'Cleveland', state: 'Ohio', stateAbbr: 'OH' },
  { id: 'cincinnati-oh', name: 'Cincinnati', state: 'Ohio', stateAbbr: 'OH' },
  { id: 'toledo-oh', name: 'Toledo', state: 'Ohio', stateAbbr: 'OH' },
  { id: 'akron-oh', name: 'Akron', state: 'Ohio', stateAbbr: 'OH' },

  // —— Oregon ——
  { id: 'portland-or', name: 'Portland', state: 'Oregon', stateAbbr: 'OR' },
  { id: 'eugene-or', name: 'Eugene', state: 'Oregon', stateAbbr: 'OR' },
  { id: 'salem-or', name: 'Salem', state: 'Oregon', stateAbbr: 'OR' },
  { id: 'bend-or', name: 'Bend', state: 'Oregon', stateAbbr: 'OR' },
  { id: 'medford-or', name: 'Medford', state: 'Oregon', stateAbbr: 'OR' },

  // —— Pennsylvania ——
  { id: 'philadelphia-pa', name: 'Philadelphia', state: 'Pennsylvania', stateAbbr: 'PA' },
  { id: 'pittsburgh-pa', name: 'Pittsburgh', state: 'Pennsylvania', stateAbbr: 'PA' },
  { id: 'allentown-pa', name: 'Allentown', state: 'Pennsylvania', stateAbbr: 'PA' },
  { id: 'erie-pa', name: 'Erie', state: 'Pennsylvania', stateAbbr: 'PA' },
  { id: 'harrisburg-pa', name: 'Harrisburg', state: 'Pennsylvania', stateAbbr: 'PA' },

  // —— South Carolina (Myrtle Beach / Hilton Head retire growth) ——
  { id: 'charleston-sc', name: 'Charleston', state: 'South Carolina', stateAbbr: 'SC' },
  { id: 'columbia-sc', name: 'Columbia', state: 'South Carolina', stateAbbr: 'SC' },
  { id: 'greenville-sc', name: 'Greenville', state: 'South Carolina', stateAbbr: 'SC' },
  { id: 'myrtle-beach-sc', name: 'Myrtle Beach', state: 'South Carolina', stateAbbr: 'SC' },
  { id: 'north-myrtle-beach-sc', name: 'North Myrtle Beach', state: 'South Carolina', stateAbbr: 'SC' },
  { id: 'hilton-head-sc', name: 'Hilton Head Island', state: 'South Carolina', stateAbbr: 'SC' },
  { id: 'bluffton-sc', name: 'Bluffton', state: 'South Carolina', stateAbbr: 'SC' },
  { id: 'spartanburg-sc', name: 'Spartanburg', state: 'South Carolina', stateAbbr: 'SC' },

  // —— Tennessee ——
  { id: 'nashville-tn', name: 'Nashville', state: 'Tennessee', stateAbbr: 'TN' },
  { id: 'memphis-tn', name: 'Memphis', state: 'Tennessee', stateAbbr: 'TN' },
  { id: 'knoxville-tn', name: 'Knoxville', state: 'Tennessee', stateAbbr: 'TN' },
  { id: 'chattanooga-tn', name: 'Chattanooga', state: 'Tennessee', stateAbbr: 'TN' },

  // —— Texas (huge senior headcount) ——
  { id: 'houston-tx', name: 'Houston', state: 'Texas', stateAbbr: 'TX' },
  { id: 'san-antonio-tx', name: 'San Antonio', state: 'Texas', stateAbbr: 'TX' },
  { id: 'dallas-tx', name: 'Dallas', state: 'Texas', stateAbbr: 'TX' },
  { id: 'austin-tx', name: 'Austin', state: 'Texas', stateAbbr: 'TX' },
  { id: 'fort-worth-tx', name: 'Fort Worth', state: 'Texas', stateAbbr: 'TX' },
  { id: 'el-paso-tx', name: 'El Paso', state: 'Texas', stateAbbr: 'TX' },
  { id: 'arlington-tx', name: 'Arlington', state: 'Texas', stateAbbr: 'TX' },
  { id: 'corpus-christi-tx', name: 'Corpus Christi', state: 'Texas', stateAbbr: 'TX' },
  { id: 'plano-tx', name: 'Plano', state: 'Texas', stateAbbr: 'TX' },
  { id: 'mcallen-tx', name: 'McAllen', state: 'Texas', stateAbbr: 'TX' },
  { id: 'brownsville-tx', name: 'Brownsville', state: 'Texas', stateAbbr: 'TX' },
  { id: 'new-braunfels-tx', name: 'New Braunfels', state: 'Texas', stateAbbr: 'TX' },
  { id: 'georgetown-tx', name: 'Georgetown', state: 'Texas', stateAbbr: 'TX' },

  // —— Vermont (high % 65+) ——
  { id: 'burlington-vt', name: 'Burlington', state: 'Vermont', stateAbbr: 'VT' },
  { id: 'south-burlington-vt', name: 'South Burlington', state: 'Vermont', stateAbbr: 'VT' },
  { id: 'rutland-vt', name: 'Rutland', state: 'Vermont', stateAbbr: 'VT' },
  { id: 'montpelier-vt', name: 'Montpelier', state: 'Vermont', stateAbbr: 'VT' },

  // —— Virginia ——
  { id: 'virginia-beach-va', name: 'Virginia Beach', state: 'Virginia', stateAbbr: 'VA' },
  { id: 'norfolk-va', name: 'Norfolk', state: 'Virginia', stateAbbr: 'VA' },
  { id: 'richmond-va', name: 'Richmond', state: 'Virginia', stateAbbr: 'VA' },
  { id: 'chesapeake-va', name: 'Chesapeake', state: 'Virginia', stateAbbr: 'VA' },
  { id: 'arlington-va', name: 'Arlington', state: 'Virginia', stateAbbr: 'VA' },

  // —— Washington ——
  { id: 'seattle-wa', name: 'Seattle', state: 'Washington', stateAbbr: 'WA' },
  { id: 'spokane-wa', name: 'Spokane', state: 'Washington', stateAbbr: 'WA' },
  { id: 'tacoma-wa', name: 'Tacoma', state: 'Washington', stateAbbr: 'WA' },
  { id: 'vancouver-wa', name: 'Vancouver', state: 'Washington', stateAbbr: 'WA' },
  { id: 'olympia-wa', name: 'Olympia', state: 'Washington', stateAbbr: 'WA' },

  // —— West Virginia (high % 65+) ——
  { id: 'charleston-wv', name: 'Charleston', state: 'West Virginia', stateAbbr: 'WV' },
  { id: 'huntington-wv', name: 'Huntington', state: 'West Virginia', stateAbbr: 'WV' },
  { id: 'morgantown-wv', name: 'Morgantown', state: 'West Virginia', stateAbbr: 'WV' },
  { id: 'parkersburg-wv', name: 'Parkersburg', state: 'West Virginia', stateAbbr: 'WV' },
];

export function getCity(id: string): City | undefined {
  return CITIES.find((c) => c.id === id);
}

export function cityLabel(city: City): string {
  return `${city.name}, ${city.stateAbbr}`;
}

export function searchCities(query: string): City[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
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
