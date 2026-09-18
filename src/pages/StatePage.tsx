import { Link, useParams, useSearchParams } from 'react-router-dom';
import { CityPicker } from '../components/CityPicker';
import { getStateGroup } from '../data/cities';
import { CATEGORIES } from '../data/types';

export function StatePage() {
  const { stateAbbr = '' } = useParams();
  const [params] = useSearchParams();
  const category = params.get('category');
  const catLabel = CATEGORIES.find((c) => c.id === category)?.label;
  const group = getStateGroup(stateAbbr);

  if (!group) {
    return (
      <div className="page">
        <h1>State not found</h1>
        <p className="lede">We do not have cities for that state yet.</p>
        <Link className="btn" to="/cities">
          Back to states
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <p className="crumbs">
        <Link to="/cities">States</Link>
        <span aria-hidden="true"> / </span>
        <span>{group.stateAbbr}</span>
      </p>
      <h1>
        <span className="state-chip">{group.stateAbbr}</span> {group.state}
      </h1>
      <p className="lede">
        Search for a city in {group.state}. Age eligibility is on every discount
        card.
      </p>
      {catLabel && (
        <p className="banner">
          After you pick a city, filter by <strong>{catLabel}</strong>.
        </p>
      )}

      <div className="panel">
        <CityPicker
          stateAbbr={group.stateAbbr}
          placeholder={`Search ${group.state} cities…`}
        />
      </div>

      <p className="muted-note">
        <Link to="/cities">All states</Link>
      </p>
    </div>
  );
}
