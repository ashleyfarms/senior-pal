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
      <h2>Advertising &amp; cookies</h2>
      <p>
        We show ads through Google AdSense to keep Senior Pal free. Third-party
        vendors, including Google, use cookies to serve ads based on your prior
        visits to this website or other websites. You can opt out of
        personalized advertising in{' '}
        <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>
        .
      </p>
      <h2>Analytics</h2>
      <p>
        We use Google Analytics to understand aggregate traffic (for
        example, page views). Google may set cookies under its own policies.
      </p>
      <h2>Affiliation</h2>
      <p>
        Senior Pal is not affiliated with, endorsed by, or sponsored by the
        businesses listed. Discounts change often — verify before you go.
      </p>
      <p>
        <a href="/privacy.html">Full privacy policy</a> ·{' '}
        <Link to="/terms">Terms of use</Link>
      </p>
    </div>
  );
}
