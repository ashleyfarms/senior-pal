import { Link } from 'react-router-dom';
import { CityPicker } from '../components/CityPicker';
import { CATEGORIES } from '../data/types';
import { DISCOUNT_COUNT } from '../data/discounts';

export function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <p className="eyebrow">Free · ads only · no paywall</p>
        <h1>Senior discounts near you — and the age they start.</h1>
        <p className="lede">
          A calm directory of senior and membership discounts. Every listing
          shows the <strong>minimum age</strong> or <strong>membership</strong>{' '}
          where the offer applies — so you know before you go.
        </p>
        <p className="hero__stats">
          {DISCOUNT_COUNT} starter listings · national chains + local tips
        </p>
      </section>

      <section className="panel" aria-labelledby="pick-city">
        <h2 id="pick-city">Pick a city</h2>
        <CityPicker />
      </section>

      <section className="panel" aria-labelledby="cats">
        <h2 id="cats">Browse by category</h2>
        <p className="muted">
          Open a city, then filter by category and age band (50+, 55+, 60+, 65+).
        </p>
        <div className="chip-row" role="list">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              role="listitem"
              className="chip chip--link"
              to={`/cities?category=${c.id}`}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="panel panel--soft">
        <h2>How it works</h2>
        <ol className="steps">
          <li>Choose your city.</li>
          <li>See national deals plus local listings for that place.</li>
          <li>Filter by age band and category.</li>
          <li>Expand a card for proof needed — and always call ahead.</li>
        </ol>
        <p>
          <Link className="btn" to="/cities">
            Browse by state
          </Link>{' '}
          <Link className="btn btn--ghost" to="/suggest">
            Suggest a discount
          </Link>
        </p>
      </section>
    </div>
  );
}
