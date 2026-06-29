# Giftitude — Editorial Luxury Redesign Plan

Building a single-page corporate gifting site that reads like an editorial publication, not an ecommerce template. Enquiry-led (no cart, no prices).

## Design tokens (src/styles.css)

- Navy `#08192F`, Gold `#C89A3D`, Ivory `#F8F6F2`, White `#FFFFFF`, Ink `#1B2230`
- Fonts loaded via `<link>` in `__root.tsx` head: Cormorant Garamond (display) + Inter (body/UI)
- Replace existing shadcn neutral tokens with the luxury palette in `:root` (oklch). Add `--font-display`, `--font-sans` mapped in `@theme inline`.
- Radius scale tuned for soft 24px cards. Subtle layered shadows (no glass, no gradients).

## Route structure

Single landing route (`src/routes/index.tsx`) composed of section components in `src/components/sections/`. Update `__root.tsx` head with Giftitude title/description/OG, plus font `<link>` tags.

## Sections (each ≤ 100vh on desktop, asymmetric)

1. **FloatingNav** — minimal white pill nav, thin bottom border, gold "Get a Quote" CTA, shrinks on scroll.
2. **Hero** — single rounded ivory container. Left: oversized serif headline + subcopy + CTA. Center: layered floating gift composition (gift box, pen, diary, ribbon) with mouse-parallax. Right: two stacked promo cards ("New Collection", "Bulk Enquiry"). Small "View Demo" badge top-left.
3. **TrustStrip** — 4 floating stat cards offset at different Y positions (1200+ Clients, 500+ Products, 8+ Years, Pan India). Hover lift.
4. **Categories (Masonry)** — 5 cards in editorial bento: 1 large, 1 tall, 1 small, 1 wide, 1 medium. Each: image, title, micro-description, gold arrow.
5. **Featured: Premium Gift Sets** — horizontal snap slider with large rounded product cards (no price, "Enquire" button).
6. **Featured: Diary & Power Banks** — split: large left product photo, 3-up product list on right.
7. **Featured: Lamps** — masonry grid, 4 items uneven heights.
8. **Featured: Accessories** — magazine layout, oversized number "04", side-by-side feature product + 2 secondary.
9. **Why Choose Us** — left: tall premium photo. Right: 4 overlapping/offset feature cards (Quality, Customization, Bulk, Delivery).
10. **Process** — 5 connected cards in staggered diagonal (Choose → Customize → Approve → Production → Delivery), gold connector lines, scroll-reveal.
11. **About** — magazine spread: large portrait, story column, floating gold serif pull-quote.
12. **Testimonials** — editorial carousel, oversized gold quotation mark, client photo + company logo, minimal pagination.
13. **CTA** — navy section, large serif headline, gold button, floating gift composition right, soft radial light.
14. **Footer** — luxury minimal: large spacing, thin gold dividers, rounded newsletter input, elegant social icons. No fat columns.

## Motion

GSAP + `@gsap/react` `useGSAP` hook, with ScrollTrigger for reveals (fade/scale/mask 500–800ms luxury ease). Mouse parallax on hero composition. `prefers-reduced-motion` respected.

## Imagery

Generated via `imagegen` (premium quality) into `src/assets/`: hero gift composition, 5 category images, ~6 product photos, why-us lifestyle photo, about portrait, CTA gift. Warm lighting, leather/metal/wood, navy/ivory palette. All `<img>` with alt text + lazy loading.

## SEO

`__root.tsx` + index route `head()`: title "Giftitude — Premium Corporate Gifting in India", meta description, OG/Twitter tags, hero image as og:image. Semantic `<header><main><section><footer>`, single H1 in hero, H2 per section.

## Technical notes

- TanStack Start: file route at `src/routes/index.tsx`; components imported from `src/components/sections/*`.
- Tailwind v4: tokens in `@theme inline`, no `tailwind.config.js`.
- Install: `gsap`, `@gsap/react`.
- All colors via semantic tokens (`bg-navy`, `text-gold`, etc.) — no hardcoded hex in components.
- Each section wrapper uses `min-h-screen` or `h-screen` with `max-h-screen` overflow handling on desktop (`lg:` breakpoint); mobile stacks naturally taller.

## Out of scope

No backend, no real enquiry form submission (button opens a styled modal with mailto fallback), no CMS, no auth.
