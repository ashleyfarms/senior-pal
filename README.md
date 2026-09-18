# Senior Pal

**Senior discounts near you — and the age they start.**

A free, ad-supported Help-Pal directory of senior citizen and membership discounts by location. Every listing shows the **minimum age** and/or **membership** (e.g. AARP) where the offer applies.

> Calm, respectful, large readable type. Phone-first. No paywall or subscription — ads only.

## Live

- **Live:** TBD (Netlify)
- **Suggested domain:** `seniorpal.help-pal-apps.com`

## Stack

- Vite + React + TypeScript
- react-router-dom
- Custom CSS (warm Help-Pal forest / cream palette)
- Netlify static hosting (`netlify.toml` SPA redirects)

## Run locally

```bash
cd senior-pal
npm install
npm run dev
```

```bash
npm run build    # production → dist/
npm run preview  # preview the build
```

## Deploy on Netlify

1. Connect GitHub repo `ashleyfarms/senior-pal`
2. Build command: `npm run build`
3. Publish directory: `dist`
4. SPA redirect is already in `netlify.toml` (`/* → /index.html`)

## Routes

| Page | Path | Notes |
|------|------|--------|
| Home | `/` | Pitch, city search, category chips, header AdSlot |
| Cities | `/cities` | Seed city picker / grid |
| City deals | `/city/:cityId` | National + local listings; age band & category filters |
| Suggest | `/suggest` | Simple form → `localStorage` |
| Privacy | `/privacy` | Free+ads; not affiliated; verify before you go |
| Terms | `/terms` | Informational only; franchise policies vary |

## Data

- Cities: `src/data/cities.ts` (Austin, Nashville, Memphis, Chicago, Seattle)
- Discounts: `src/data/discounts.ts` — each entry has `minAge`, `membership`, `scope`, optional `cityId`
- Language is cautious (“often / participating / verify”) where offers are uncertain

## Help-Pal

Footer: **More apps from Help-Pal** → https://help-pal-apps.com/our-app-collection

## License

Private to ashleyfarms / Help-Pal unless stated otherwise.
