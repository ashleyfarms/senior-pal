import { Link, useSearchParams } from 'react-router-dom';
import { CityPicker } from '../components/CityPicker';
import { CITIES, cityLabel } from '../data/cities';
import { CATEGORIES } from '../data/types';

export function Cities() {
  const [params] = useSearchParams();
  const category = params.get('category');
  const catLabel = CATEGORIES.find((c) => c.id === category)?.label;

  return (
    <div className="page">
      <h1>Cities</h1>
      <p className="lede">
        Senior Pal starts with five seed cities. National chain discounts appear
        in every city view; local listings are city-specific.
      </p>
      {catLabel && (
        <p className="banner">
          Tip: after you pick a city, filter by <strong>{catLabel}</strong>.
        </p>
      )}

      <div className="panel">
        <CityPicker />
      </div>

      <ul className="city-grid" role="list">
        {CITIES.map((city) => (
          <li key={city.id}>
            <Link className="city-tile" to={`/city/${city.id}`}>
              <span className="city-tile__name">{city.name}</span>
              <span className="city-tile__state">{cityLabel(city)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
