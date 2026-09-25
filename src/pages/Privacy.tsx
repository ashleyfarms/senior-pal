import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <div className="page prose">
      <h1>Privacy</h1>
      <p>
        <strong>Free with ads.</strong> No paid plans. No account required. We
        don&apos;t sell your personal info — usage stats and ads help keep the
        tools free.
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
      <h2>Analytics &amp; ads</h2>
      <p>
        We use Google Analytics 4 (G-E7PX36SGJE) for aggregate traffic. Ads
        (including AdSense when enabled) may use cookies under their own policies.
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
