import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import gifts from "@/assets/cat-gift-sets.jpg";
import diary from "@/assets/cat-diary.jpg";
import lamps from "@/assets/cat-lamps.jpg";
import bottles from "@/assets/cat-bottles.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import hero from "@/assets/hero-composition.jpg";
import craft from "@/assets/why-craft.jpg";
import cta from "@/assets/cta-gift.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Giftitude Catalogue 2026" },
      { name: "description", content: "The 2026 Giftitude catalogue — gift sets, diaries, lamps, bottles and accessories across five curated categories." },
      { property: "og:title", content: "Products — Giftitude Catalogue 2026" },
      { property: "og:description", content: "Five categories. Forty objects. Curated for India's most discerning brands." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type Product = { slug: string; name: string; desc: string; img: string; material?: string };

const CATEGORIES = [
  { id: "gift-sets", n: "01", title: "Premium Gift Sets" },
  { id: "diary-power", n: "02", title: "Diary & Power Banks" },
  { id: "lamps", n: "03", title: "Lamps" },
  { id: "bottles", n: "04", title: "Bottles & Mugs" },
  { id: "accessories", n: "05", title: "Accessories" },
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav />
      <main className="pt-32">
        <CatalogueMasthead />
        <div className="px-6 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <CategoryNav />
            <div className="lg:col-span-9 space-y-32 pb-24">
              <GiftSets />
              <DiaryPower />
              <Lamps />
              <Bottles />
              <Accessories />
            </div>
          </div>
        </div>
        <CatalogueFooter />
      </main>
      <Footer />
    </div>
  );
}

function CatalogueMasthead() {
  return (
    <section className="border-y px-6 py-10 hairline lg:px-12">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Catalogue · 2026 · Edition I</div>
          <h1 className="mt-4 font-display text-[2.5rem] leading-[1] text-navy sm:text-6xl lg:text-7xl">
            Five rooms. <span className="italic">Forty objects.</span>
          </h1>
        </div>
        <div className="hidden text-right text-[11px] uppercase tracking-[0.3em] text-navy/55 sm:block">
          Page 01 / 05
        </div>
      </div>
    </section>
  );
}

function CategoryNav() {
  const [active, setActive] = useState("gift-sets");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    CATEGORIES.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="lg:col-span-3">
      <div className="sticky top-28">
        <div className="text-[11px] uppercase tracking-[0.3em] text-navy/55">Index</div>
        <ol className="mt-6 space-y-4 border-l hairline">
          {CATEGORIES.map((c) => {
            const isActive = active === c.id;
            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className={`block border-l-2 -ml-px pl-5 py-1 transition-colors ${
                    isActive ? "border-gold text-navy" : "border-transparent text-navy/55 hover:text-navy"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{c.n}</div>
                  <div className="font-display text-xl">{c.title}</div>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </aside>
  );
}

function SectionLabel({ n, title, kicker }: { n: string; title: string; kicker: string }) {
  return (
    <header className="flex items-end justify-between border-b pb-6 hairline">
      <div>
        <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{kicker}</div>
        <h2 className="mt-2 font-display text-4xl text-navy sm:text-5xl">{title}</h2>
      </div>
      <div className="font-display text-5xl text-navy/15 sm:text-6xl">{n}</div>
    </header>
  );
}

function EnquireLink({ slug }: { slug: string }) {
  return (
    <Link
      to="/contact"
      search={{ product: slug }}
      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy hover:text-gold"
    >
      Enquire <span>→</span>
    </Link>
  );
}

/* ─── 01 Gift Sets — Hero + L-shape ────────────────────── */
const giftSetItems: Product[] = [
  { slug: "heritage-set", name: "The Heritage Set", desc: "Leather diary, brass pen and a hand-poured candle.", img: gifts },
  { slug: "founders-set", name: "Founders' Set", desc: "Tan card holder, monogrammed key fob, silk pocket square.", img: accessories },
  { slug: "winter-set", name: "Winter Set", desc: "Cashmere scarf, brass tumbler, pine candle.", img: cta },
  { slug: "atelier-set", name: "Atelier Set", desc: "Notebook, mechanical pencil, brass ruler, leather sleeve.", img: hero },
];
function GiftSets() {
  return (
    <section id="gift-sets" className="scroll-mt-32">
      <SectionLabel n="01" kicker="Category" title="Premium Gift Sets" />
      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <article className="lg:col-span-8 lg:row-span-2">
          <div className="overflow-hidden rounded-2xl bg-ivory">
            <img src={giftSetItems[0].img} alt={giftSetItems[0].name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <h3 className="mt-5 font-display text-3xl text-navy">{giftSetItems[0].name}</h3>
          <p className="mt-2 max-w-md text-sm text-navy/70">{giftSetItems[0].desc}</p>
          <EnquireLink slug={giftSetItems[0].slug} />
        </article>
        {giftSetItems.slice(1).map((p) => (
          <article key={p.slug} className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl bg-ivory">
              <img src={p.img} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />
            </div>
            <h3 className="mt-4 font-display text-xl text-navy">{p.name}</h3>
            <p className="mt-1 text-xs text-navy/70">{p.desc}</p>
            <EnquireLink slug={p.slug} />
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── 02 Diary & Power — Photo + Table ─────────────────── */
const diaryItems: Product[] = [
  { slug: "leather-diary-a5", name: "Heritage Diary A5", desc: "", img: diary, material: "Full-grain leather · 240 pages" },
  { slug: "power-bank-10k", name: "Brass Power Bank 10k", desc: "", img: diary, material: "Solid brass · 10,000 mAh" },
  { slug: "executive-organiser", name: "Executive Organiser", desc: "", img: diary, material: "Leather · Refillable insert" },
];
function DiaryPower() {
  return (
    <section id="diary-power" className="scroll-mt-32">
      <SectionLabel n="02" kicker="Category" title="Diary & Power Banks" />
      <div className="mt-10 overflow-hidden rounded-2xl bg-ivory">
        <img src={diary} alt="Leather diary and brass power bank" loading="lazy" className="aspect-[21/9] w-full object-cover" />
      </div>
      <div className="mt-10 divide-y hairline border-y">
        {diaryItems.map((p) => (
          <div key={p.slug} className="grid grid-cols-12 items-center gap-4 py-6">
            <div className="col-span-12 sm:col-span-5">
              <div className="font-display text-2xl text-navy">{p.name}</div>
            </div>
            <div className="col-span-9 sm:col-span-5 text-sm text-navy/70">{p.material}</div>
            <div className="col-span-3 sm:col-span-2 text-right">
              <Link to="/contact" search={{ product: p.slug }} className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-navy hover:text-gold">
                Enquire <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 03 Lamps — true masonry, no chrome ───────────────── */
const lampItems: Product[] = [
  { slug: "atrium-lamp", name: "Atrium Desk Lamp", desc: "Solid brass arm, navy enamel shade.", img: lamps },
  { slug: "monolith-lamp", name: "Monolith Lamp", desc: "Cast iron base, linen shade.", img: lamps },
  { slug: "pebble-lamp", name: "Pebble Side Lamp", desc: "Hand-blown amber glass.", img: lamps },
];
function Lamps() {
  return (
    <section id="lamps" className="scroll-mt-32">
      <SectionLabel n="03" kicker="Category" title="Lamps" />
      <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {lampItems.map((p, i) => (
          <article key={p.slug} className={i === 1 ? "sm:mt-16" : i === 2 ? "sm:mt-32 lg:mt-8" : ""}>
            <img src={p.img} alt={p.name} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            <h3 className="mt-4 font-display text-2xl text-navy">{p.name}</h3>
            <p className="mt-1 text-sm text-navy/70">{p.desc}</p>
            <EnquireLink slug={p.slug} />
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── 04 Bottles & Mugs — horizontal snap ──────────────── */
const bottleItems: Product[] = [
  { slug: "monolith-bottle", name: "Monolith Bottle", desc: "Matte navy stainless, 750ml.", img: bottles },
  { slug: "atelier-mug", name: "Atelier Mug", desc: "Ivory ceramic with gold rim.", img: bottles },
  { slug: "brass-tumbler", name: "Brass Tumbler", desc: "Hand-spun, double walled.", img: bottles },
  { slug: "studio-flask", name: "Studio Flask", desc: "Vacuum, 500ml, navy.", img: bottles },
];
function Bottles() {
  return (
    <section id="bottles" className="scroll-mt-32">
      <SectionLabel n="04" kicker="Category" title="Bottles & Mugs" />
      <div className="mt-10 -mx-6 overflow-x-auto px-6 pb-3 lg:-mx-12 lg:px-12">
        <div className="flex snap-x snap-mandatory gap-5">
          {bottleItems.map((p) => (
            <article key={p.slug} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
              <div className="overflow-hidden rounded-2xl bg-ivory">
                <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>
              <h3 className="mt-4 font-display text-xl text-navy">{p.name}</h3>
              <p className="mt-1 text-xs text-navy/70">{p.desc}</p>
              <EnquireLink slug={p.slug} />
            </article>
          ))}
        </div>
      </div>
      <div className="mt-6 h-px bg-gold/60" />
    </section>
  );
}

/* ─── 05 Accessories — magazine, big numeral ────────────── */
const accItems: Product[] = [
  { slug: "card-holder", name: "Card Holder", desc: "Tan leather, six slots.", img: accessories },
  { slug: "brass-keychain", name: "Brass Keychain", desc: "Hand-finished, monogrammable.", img: accessories },
  { slug: "silk-tie", name: "Silk Tie", desc: "Hand-rolled, navy / gold.", img: accessories },
  { slug: "leather-tray", name: "Leather Tray", desc: "Desktop catch-all.", img: accessories },
];
function Accessories() {
  return (
    <section id="accessories" className="scroll-mt-32">
      <SectionLabel n="05" kicker="Category" title="Accessories" />
      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-3">
          <div className="font-display text-[10rem] leading-[0.8] text-gold/80">05</div>
          <p className="mt-6 text-sm leading-relaxed text-navy/70">
            The small things, gifted with intention. Often the most remembered
            piece in a set.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:col-span-9">
          {accItems.map((p) => (
            <article key={p.slug}>
              <div className="overflow-hidden rounded-2xl bg-ivory">
                <img src={p.img} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />
              </div>
              <h3 className="mt-4 font-display text-xl text-navy">{p.name}</h3>
              <p className="mt-1 text-xs text-navy/70">{p.desc}</p>
              <EnquireLink slug={p.slug} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogueFooter() {
  return (
    <section className="border-t bg-ivory px-6 py-20 hairline lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-display text-2xl italic text-navy sm:text-3xl">
          Didn't find it? We custom-curate.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-ivory hover:bg-navy-soft">
          Begin a brief <span>→</span>
        </Link>
      </div>
    </section>
  );
}
