import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CITIES, cityLabel, searchCities } from '../data/cities';

type Props = {
  compact?: boolean;
};

export function CityPicker({ compact = false }: Props) {
  const [q, setQ] = useState('');
  const results = useMemo(() => searchCities(q), [q]);

  return (
    <div className={`city-picker ${compact ? 'city-picker--compact' : ''}`}>
      <label className="city-picker__label" htmlFor="city-search">
        Search cities
      </label>
      <input
        id="city-search"
        className="city-picker__input"
        type="search"
        placeholder="Phoenix, Miami, Tampa…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete="off"
      />
      <ul className="city-picker__list" role="list">
        {results.map((city) => (
          <li key={city.id}>
            <Link className="city-picker__link" to={`/city/${city.id}`}>
              {cityLabel(city)}
            </Link>
          </li>
        ))}
        {results.length === 0 && (
          <li className="city-picker__empty">
            No match yet. Seed cities: {CITIES.map((c) => c.name).join(', ')}.
          </li>
        )}
      </ul>
    </div>
  );
}
