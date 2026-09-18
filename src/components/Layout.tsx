import { Link, NavLink, Outlet } from 'react-router-dom';
import { AdSlot } from './AdSlot';
import { HelpPalLink } from './HelpPalLink';

export function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand" aria-label="Senior Pal home">
            <span className="brand__mark" aria-hidden="true">
              55+
            </span>
            <span className="brand__text">
              <span className="brand__name">Senior Pal</span>
              <span className="brand__by">Help-Pal</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Main">
            <NavLink to="/cities" className="nav__link">
              Cities
            </NavLink>
            <NavLink to="/suggest" className="nav__link">
              Suggest
            </NavLink>
            <NavLink to="/privacy" className="nav__link">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="nav__link">
              Terms
            </NavLink>
          </nav>
        </div>
      </header>

      <div className="ad-band">
        <AdSlot slot="header" />
      </div>

      <main className="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p className="site-footer__tag">
          Senior discounts near you — and the age they start. Free, ads only.
        </p>
        <HelpPalLink />
        <p className="help-pal-link">
          <Link to="/privacy">Privacy</Link>
          {' · '}
          <Link to="/terms">Terms</Link>
        </p>
        <p className="site-footer__fine">
          © {new Date().getFullYear()} Senior Pal · Help-Pal. Not affiliated with
          listed businesses. Verify before you go.
        </p>
      </footer>
    </div>
  );
}
