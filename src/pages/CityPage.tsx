import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AdSlot } from '../components/AdSlot';
import { DiscountCard } from '../components/DiscountCard';
import { getCity, cityLabel } from '../data/cities';
import { discountsForCity } from '../data/discounts';
import { AGE_BANDS, CATEGORIES, type AgeBandId, type DiscountCategory } from '../data/types';

export function CityPage() {
  const { cityId = '' } = useParams();
  const city = getCity(cityId);
  const [ageBand, setAgeBand] = useState<AgeBandId | 'all'>('all');
  const [category, setCategory] = useState<DiscountCategory | 'all'>('all');

  const all = useMemo(() => (city ? discountsForCity(city.id) : []), [city]);

  const filtered = useMemo(() => {
    return all.filter((d) => {
      if (category !== 'all' && d.category !== category) return false;
      if (ageBand === 'all') return true;
      const min = AGE_BANDS.find((b) => b.id === ageBand)?.min ?? 0;
      // Show deals that apply at this band: minAge <= band, or membership-only
      if (d.minAge == null) return true; // membership-only still relevant
      return d.minAge <= min;
    });
  }, [all, ageBand, category]);

  if (!city) return <Navigate to="/cities" replace />;

  return (
    <div className="page">
      <p className="breadcrumb">
        <Link to="/cities">Cities</Link> / {cityLabel(city)}
      </p>
      <h1>Discounts in {city.name}</h1>
      <p className="lede">
        National deals plus local listings for {cityLabel(city)}. Every card
        shows the age or membership where the discount starts.
      </p>

      <div className="filters" role="group" aria-label="Filters">
        <div className="filters__group">
          <span className="filters__label">Age band</span>
          <div className="chip-row">
            <button
              type="button"
              className={`chip chip--btn ${ageBand === 'all' ? 'is-active' : ''}`}
              onClick={() => setAgeBand('all')}
            >
              All ages
            </button>
            {AGE_BANDS.map((b) => (
              <button
                key={b.id}
                type="button"
                className={`chip chip--btn ${ageBand === b.id ? 'is-active' : ''}`}
                onClick={() => setAgeBand(b.id)}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
        <div className="filters__group">
          <span className="filters__label">Category</span>
          <div className="chip-row">
            <button
              type="button"
              className={`chip chip--btn ${category === 'all' ? 'is-active' : ''}`}
              onClick={() => setCategory('all')}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`chip chip--btn ${category === c.id ? 'is-active' : ''}`}
                onClick={() => setCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="result-count" aria-live="polite">
        Showing {filtered.length} of {all.length} listings
      </p>

      <div className="discount-list">
        {filtered.map((d, i) => (
          <div key={d.id}>
            <DiscountCard discount={d} />
            {(i + 1) % 4 === 0 && <AdSlot slot="in-feed" className="ad-slot--list" />}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="empty">
            No listings match these filters. Try “All ages” or another category.
          </p>
        )}
      </div>
    </div>
  );
}
