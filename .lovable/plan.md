# Multipage Restructure — Each Page, Its Own Layout

Four routes, four genuinely different layout languages. Shared nav + footer only. No section is reused across pages; even where a concept repeats (intro, CTA), the composition differs.

## Routes

```
src/routes/
  __root.tsx          shared shell, fonts, sitewide meta
  index.tsx           → /            Home          — editorial collage
  about.tsx           → /about       About Us      — magazine spread
  products.tsx        → /products    Products      — catalogue index
  contact.tsx         → /contact     Contact Us    — split form layout
```

Each route declares its own `head()` with unique title, description, og:title, og:description, og:url, canonical.

## Shared chrome

- `Nav.tsx` — anchor links become `<Link to="/about">` etc., `activeProps` underlines active route, "Get a quote" CTA → `/contact`.
- `Footer.tsx` — link columns become real `<Link>` routes.
- Nothing else is shared between pages.

## Page 1 — Home `/` (editorial collage)

Layout DNA: oversized rounded container, asymmetric floating cards, mouse-parallax hero. Marketing rhythm.

- Hero (existing) — rounded ivory stage, layered headline + visual + floating promo cards
- TrustStrip (existing) — 4 floating stat cards offset at varied Y
- CategoriesTeaser (existing Categories component, reused only here) — 5-card masonry teaser, each links to `/products#<slug>`
- WhyUs (existing) — split image + overlapping feature cards
- Testimonials (existing) — editorial carousel with oversized quote mark
- HomeCTA — navy panel with floating gift photo and "Begin a brief" → `/contact`

## Page 2 — About `/about` (magazine spread)

Completely different layout language: editorial typography-led, no big rounded "stage" container, runs against pure white with thin gold dividers between spreads.

- AboutMasthead — full-bleed editorial masthead: "Volume 08 · The Studio" hairline label, single huge serif headline that spans 9 of 12 cols, intro paragraph in a narrow right column. Below: thin gold hairline + date stamp.
- StorySpread — two-column magazine: left = drop-cap body essay (3 paragraphs), right = portrait photo with caption below in italic small caps.
- ValuesLedger — horizontal ledger row with 3 numbered entries (Craft / Curation / Care) divided by vertical hairlines, no cards, just typography.
- TimelineRibbon — horizontal year-spine (2017 → 2026) running across the page with milestones above/below the line, alternating; not boxed.
- StudioGallery — 3-photo magazine grid (one tall, two short) showing workshop / packing / delivery.
- AboutCTA — italic serif pull-quote on ivory, gold underline link "Visit the studio" → `/contact`. Minimal, no big panel.

## Page 3 — Products `/products` (catalogue index)

Completely different again: thinks like a printed catalogue — sticky category index on the left, content streams on the right.

- CatalogueMasthead — top strip: "Catalogue · 2026 · Edition I" with running thin border. Headline: "Five rooms. Forty objects." Right-aligned page numerator (01 / 05).
- Layout: on desktop, a sticky left column lists the 5 categories with the current one highlighted (intersection-observer driven). Right column streams the 5 category sections.
- Each category section has its OWN composition (no repeats):
  1. **Premium Gift Sets** — large hero product card + 3 supporting cards in an L-shape grid
  2. **Diary & Power Banks** — editorial pair: full-width product photo, then 3-row product table (name | material | enquiry arrow)
  3. **Lamps** — true masonry, 3 products, alternating offsets, no card chrome — images sit directly on the page with captions below
  4. **Bottles & Mugs** — horizontal snap-scroll row, 4 products, gold hairline beneath
  5. **Accessories** — magazine spread: oversized "05" numeral in gold, 2×2 product grid offset to the right
- Each product: image + name + 1-line description + "Enquire →" link to `/contact?product=<slug>`. No prices, no add-to-cart.
- Footer of page: "Didn't find it? We custom-curate." → `/contact`

## Page 4 — Contact `/contact` (split form layout)

Completely different again: 60/40 split, dark navy left column for brand presence, ivory right column for the form. No editorial masthead.

- Left column (navy, sticky on desktop):
  - "Begin a brief" label
  - Serif headline
  - Reply-time promise badge ("Within 1 working day")
  - Contact details list (email, phone, studio address)
  - Studio hours
  - Social links row
  - Small floating gift photo at the bottom
- Right column (ivory):
  - Enquiry form card with name, company, work email, phone, category (5 options, pre-selected from `?product=`), quantity range slider, message
  - Submit triggers a `mailto:` with all fields composed
  - Below form: tiny "We don't store inputs" reassurance
- No CTA at the bottom; the form IS the CTA.

## New components

- `src/components/site/PageHeading.tsx` — small shared atom (label + serif heading), used differently in each page's masthead so layouts still feel distinct.
- `src/components/site/about/*` — AboutMasthead, StorySpread, ValuesLedger, TimelineRibbon, StudioGallery, AboutCTA
- `src/components/site/products/*` — CatalogueMasthead, CategoryNav (sticky), and one component per category section
- `src/components/site/contact/*` — ContactPanel (left), EnquiryForm (right)
- `src/components/site/HomeCTA.tsx` — replaces existing CTA usage in home only

## Reuse policy

- Hero, TrustStrip, Categories, WhyUs, Testimonials → **home only**
- About (current component), Featured*, Process → **deleted or refactored into About/Products** as needed
- No section component renders on more than one page.

## Images

Reuse existing assets. Generate ~3 additional photos only if needed: workshop, packing, studio interior (for About gallery). Products page reuses category photos with different aspect ratios/crops.

## SEO

- `/`        title "Giftitude — Premium Corporate Gifting in India"
- `/about`   title "About — The Giftitude Studio"
- `/products` title "Products — Giftitude Catalogue 2026"
- `/contact` title "Contact — Begin a Brief with Giftitude"

Each route: matching description + OG tags + self-referencing `og:url` and `canonical`.

## Out of scope

- Real form backend (mailto fallback only)
- Per-product detail pages
- CMS / dynamic data
- sitemap.xml (add later if asked)
