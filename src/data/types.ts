export type DiscountCategory =
  | 'pharmacy'
  | 'retail'
  | 'dining'
  | 'grocery'
  | 'entertainment'
  | 'travel'
  | 'services'
  | 'transit'
  | 'attractions';

export type DiscountScope = 'national' | 'city';

export type City = {
  id: string;
  name: string;
  state: string;
  stateAbbr: string;
};

export type Discount = {
  id: string;
  business: string;
  blurb: string;
  /** Minimum age for the offer, or null when membership-only / age not stated */
  minAge: number | null;
  /** Membership required (e.g. "AARP"), or null */
  membership: string | null;
  scope: DiscountScope;
  /** Required when scope is "city" */
  cityId: string | null;
  category: DiscountCategory;
  /** e.g. "First Tuesday", "Wednesdays" */
  dayRestriction: string | null;
  /** What ID or proof is typically needed */
  proofNeeded: string;
  /** Always true for MVP — franchise policies vary */
  callAhead: boolean;
  notes?: string;
};

export const CATEGORIES: { id: DiscountCategory; label: string }[] = [
  { id: 'pharmacy', label: 'Pharmacy' },
  { id: 'retail', label: 'Retail' },
  { id: 'dining', label: 'Dining' },
  { id: 'grocery', label: 'Grocery' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'travel', label: 'Travel' },
  { id: 'services', label: 'Services' },
  { id: 'transit', label: 'Transit' },
  { id: 'attractions', label: 'Attractions' },
];

export const AGE_BANDS = [
  { id: '50', label: '50+', min: 50 },
  { id: '55', label: '55+', min: 55 },
  { id: '60', label: '60+', min: 60 },
  { id: '65', label: '65+', min: 65 },
] as const;

export type AgeBandId = (typeof AGE_BANDS)[number]['id'];
