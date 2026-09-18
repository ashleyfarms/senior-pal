import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <div className="page prose">
      <h1>Privacy</h1>
      <p>
        Senior Pal is a free, ad-supported Help-Pal app. There is no account,
        subscription, or paywall.
      </p>
      <h2>What we store</h2>
      <ul>
        <li>
          <strong>On your device:</strong> optional “Suggest a discount”
          entries via <code>localStorage</code>. Clearing site data removes them.
        </li>
        <li>
          <strong>No login:</strong> we do not collect names, emails, or payment
          information for using the directory.
        </li>
      </ul>
      <h2>Ads</h2>
      <p>
        The app includes ad placeholder slots. When live ads are enabled, ad
        partners may use cookies or similar technologies according to their own
        policies.
      </p>
      <h2>Affiliation</h2>
      <p>
        Senior Pal is not affiliated with, endorsed by, or sponsored by the
        businesses listed. Discounts change often — verify before you go.
      </p>
      <p>
        <Link to="/terms">Terms of use</Link>
      </p>
    </div>
  );
}
