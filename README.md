# The Fold — website concept

Static, Vercel-ready concept build for the Libby Kerrison Flowers rebuild.

## Preview locally
Open `index.html` in any browser. Everything works offline except Google Fonts.

## Deploy to Vercel
1. Go to vercel.com → Add New → Project → drag this folder in (or `npx vercel` from this directory).
2. No build step, no framework preset needed — it's plain static.
3. `vercel.json` already sets clean URLs (`/weddings` instead of `/weddings.html`), cache headers.
4. Point the `libbykerrisonflowers.co.uk` domain at the project when ready.

## Pages
- `index.html` — homepage (LocalBusiness + FAQ schema)
- `weddings.html` — Warwickshire / Worcestershire / Cotswolds wedding florist page + enquiry form
- `workshops.html` — high-level, seasonally organised (wreaths live inside Winter, per brief)
- `diy-wedding-flowers.html` — bridal "make your own" programme (workshops↔weddings bridge)
- `seasonal-guide.html` — interactive flowers-by-season guide (auto-opens current season)
- `british-grown-flowers.html` — Anna Brown / Wardington + grower network
- `sustainable-floristry.html` — approach, supply lines, honesty clause
- `about.html` — team, McQueens / Daylesford credentials

## Before launch — placeholders to resolve
- **Brand name**: confirmed as "The Fold" (applied throughout). Domain decision pending — canonicals still point at libbykerrisonflowers.co.uk.
- **Photography**: all `.ph` blocks are gradient placeholders with a caption describing the intended shot — that caption doubles as a shot list for the photographer.
- **Yellow banner**: remove the `.placeholder-note` div at the top of each page.
- **Enquiry form**: currently a stub — wire to a Vercel serverless function or Formspree.
- **[verify] statistics** on the sustainability page (imported-flowers %) need sourcing.
- **Grower verification body** on british-grown-flowers.html is marked TBC — recommend Flowers from the Farm membership (also earns a directory listing + authoritative backlink).
- **Venue names / case studies** on weddings.html area cards.
- **Canonical URLs** assume the site stays on libbykerrisonflowers.co.uk — update if the domain changes with the brand.

## SEO notes (matches the strategy doc)
- One target cluster per page; unique titles/descriptions; JSON-LD on home (Florist, FAQPage), workshops (Course), weddings (Service).
- "Near me" terms are won by the Google Business Profile, not these pages — claim/create the GBP at Dolphin House as a launch task.
- Wreath content deliberately lives inside Workshops→Winter for now; when Christmas marketing starts, it can be broken out to its own URL (`/workshops/wreath-making`) to catch the Oct–Nov search spike.
