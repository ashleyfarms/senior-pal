import { Link } from 'react-router-dom';

export function Terms() {
  return (
    <div className="page prose">
      <h1>Terms</h1>
      <p>
        Senior Pal is provided free of charge, supported by ads. By using the
        app you agree to these simple terms.
      </p>
      <h2>Informational only</h2>
      <p>
        Listings are a convenience directory. They are not legal advice, not a
        guarantee of any price, and not an offer from the named business. Ages,
        memberships, days, and percentages change — always verify with the
        business (and call ahead; franchise policies vary).
      </p>
      <h2>No affiliation</h2>
      <p>
        Help-Pal / Senior Pal is not affiliated with AARP, national chains, or
        local agencies mentioned in seed data unless explicitly stated
        elsewhere.
      </p>
      <h2>No paywall</h2>
      <p>
        Core directory features are free. We may show advertisements. We do not
        sell subscriptions for this MVP.
      </p>
      <h2>Suggestions</h2>
      <p>
        User suggestions stored in your browser are for your convenience. Do not
        submit personal data about other people.
      </p>
      <p>
        <Link to="/privacy">Privacy</Link>
      </p>
    </div>
  );
}
