import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { CITIES, cityLabel } from '../data/cities';
import { CATEGORIES } from '../data/types';

const STORAGE_KEY = 'senior-pal-suggestions';

type Suggestion = {
  id: string;
  business: string;
  cityId: string;
  category: string;
  minAge: string;
  membership: string;
  blurb: string;
  createdAt: string;
};

function loadSuggestions(): Suggestion[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Suggestion[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveSuggestions(items: Suggestion[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function Suggest() {
  const [items, setItems] = useState<Suggestion[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setItems(loadSuggestions());
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Suggestion = {
      id: `sug-${Date.now()}`,
      business: String(fd.get('business') || '').trim(),
      cityId: String(fd.get('cityId') || ''),
      category: String(fd.get('category') || ''),
      minAge: String(fd.get('minAge') || '').trim(),
      membership: String(fd.get('membership') || '').trim(),
      blurb: String(fd.get('blurb') || '').trim(),
      createdAt: new Date().toISOString(),
    };
    if (!next.business || !next.blurb) return;
    const updated = [next, ...items].slice(0, 50);
    saveSuggestions(updated);
    setItems(updated);
    setSaved(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="page">
      <h1>Suggest a discount</h1>
      <p className="lede">
        Know a senior or AARP-style offer we should list? Suggestions stay on
        this device (localStorage) for now — helpful for demos and future
        moderation.
      </p>

      <form className="form panel" onSubmit={onSubmit}>
        <label>
          Business name
          <input name="business" required maxLength={120} />
        </label>
        <label>
          City (or National)
          <select name="cityId" defaultValue="national">
            <option value="national">National / many cities</option>
            {CITIES.map((c) => (
              <option key={c.id} value={c.id}>
                {cityLabel(c)}
              </option>
            ))}
          </select>
        </label>
        <label>
          Category
          <select name="category" defaultValue="dining">
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
        <div className="form__row">
          <label>
            Min age (if any)
            <input name="minAge" inputMode="numeric" placeholder="e.g. 55" />
          </label>
          <label>
            Membership (if any)
            <input name="membership" placeholder="e.g. AARP" />
          </label>
        </div>
        <label>
          Discount details
          <textarea
            name="blurb"
            required
            rows={4}
            maxLength={500}
            placeholder="What is the offer, which day, and who qualifies?"
          />
        </label>
        <button type="submit" className="btn">
          Save suggestion
        </button>
        {saved && <p className="form__ok" role="status">Saved on this device.</p>}
      </form>

      {items.length > 0 && (
        <section className="panel" aria-labelledby="saved-sug">
          <h2 id="saved-sug">Your saved suggestions</h2>
          <ul className="suggest-list">
            {items.map((s) => (
              <li key={s.id}>
                <strong>{s.business}</strong>
                {(s.minAge || s.membership) && (
                  <span className="suggest-list__age">
                    {' '}
                    · {[s.minAge && `${s.minAge}+`, s.membership]
                      .filter(Boolean)
                      .join(' · ')}
                  </span>
                )}
                <p>{s.blurb}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
