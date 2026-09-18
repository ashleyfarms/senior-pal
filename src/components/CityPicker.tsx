import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { cityLabel, searchCities } from '../data/cities';
import type { City } from '../data/types';

type Props = {
  compact?: boolean;
  /** Limit matches to one state (e.g. on /state/fl). */
  stateAbbr?: string;
  placeholder?: string;
};

export function CityPicker({
  compact = false,
  stateAbbr,
  placeholder = 'Type a city name…',
}: Props) {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const trimmed = q.trim();
    if (!trimmed) return [] as City[];
    let list = searchCities(trimmed);
    if (stateAbbr) {
      const abbr = stateAbbr.toUpperCase();
      list = list.filter((c) => c.stateAbbr === abbr);
    }
    return list;
  }, [q, stateAbbr]);

  return (
    <div className={`city-picker ${compact ? 'city-picker--compact' : ''}`}>
      <label className="city-picker__label" htmlFor="city-search">
        Search cities
      </label>
      <input
        id="city-search"
        className="city-picker__input"
        type="search"
        placeholder={placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete="off"
      />
      {q.trim() !== '' && (
        <ul className="city-picker__list" role="list">
          {results.map((city) => (
            <li key={city.id}>
              <Link className="city-picker__link" to={`/city/${city.id}`}>
                {cityLabel(city)}
              </Link>
            </li>
          ))}
          {results.length === 0 && (
            <li className="city-picker__empty">No cities match that search.</li>
          )}
        </ul>
      )}
    </div>
  );
}
