import { Link, useSearchParams } from 'react-router-dom';
import { CityPicker } from '../components/CityPicker';
import { groupCitiesByState } from '../data/cities';
import { CATEGORIES } from '../data/types';

export function Cities() {
  const [params] = useSearchParams();
  const category = params.get('category');
  const catLabel = CATEGORIES.find((c) => c.id === category)?.label;
  const groups = groupCitiesByState();

  return (
    <div className="page">
      <h1>Browse by state</h1>
      <p className="lede">
        Pick a state, then search for your city. National chain discounts show in
        every city; local deals appear when we have them.
      </p>
      {catLabel && (
        <p className="banner">
          Tip: after you pick a city, filter by <strong>{catLabel}</strong>.
        </p>
      )}

      <div className="panel">
        <CityPicker />
      </div>

      <div className="state-tile-grid" role="list">
        {groups.map((group) => (
          <Link
            key={group.stateAbbr}
            className="state-tile"
            role="listitem"
            to={`/state/${group.stateAbbr.toLowerCase()}${category ? `?category=${category}` : ''}`}
          >
            <span className="state-chip">{group.stateAbbr}</span>
            <span className="state-tile__name">{group.state}</span>
            <span className="state-tile__count">
              {group.cities.length} {group.cities.length === 1 ? 'city' : 'cities'}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
