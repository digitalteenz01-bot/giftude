import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CATEGORIES, getCategory, type Category, type Product } from "@/lib/catalogue";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    const title = c ? `${c.title} — Giftitude Catalogue` : "Category — Giftitude";
    const desc = c?.tagline ?? "A Giftitude category.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(c ? [{ property: "og:image", content: c.cover }] : []),
      ],
      links: c ? [{ rel: "canonical", href: `/products/${c.slug}` }] : [],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => <CategoryMissing />,
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main className="mx-auto max-w-xl px-6 pt-40 text-center">
        <h1 className="font-display text-4xl text-navy">Something went wrong</h1>
        <button onClick={reset} className="mt-6 rounded-full bg-navy px-6 py-3 text-sm text-ivory">
          Try again
        </button>
      </main>
      <Footer />
    </div>
  ),
});

function CategoryMissing() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main className="mx-auto max-w-xl px-6 pt-40 text-center">
        <h1 className="font-display text-5xl text-navy">Room not found</h1>
        <p className="mt-3 text-sm text-navy/70">That category doesn't exist in the 2026 catalogue.</p>
        <Link to="/products" className="mt-8 inline-block rounded-full bg-navy px-6 py-3 text-sm text-ivory">
          ← Back to catalogue
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav />
      <main className="pt-28">
        <CategoryMasthead category={category} />
        <div className="px-6 pb-24 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <CategoryLayout category={category} />
          </div>
        </div>
        <CategoryPager current={category.slug} />
        <Footer />
      </main>
    </div>
  );
}

function CategoryMasthead({ category }: { category: Category }) {
  return (
    <section className="border-y px-6 py-12 hairline lg:px-12">
      <div className="mx-auto max-w-7xl">
        <nav className="text-[11px] uppercase tracking-[0.3em] text-navy/55">
          <Link to="/products" className="hover:text-gold">Catalogue</Link>
          <span className="mx-2">/</span>
          <span className="text-navy">Room {category.n}</span>
        </nav>
        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Room {category.n}</div>
            <h1 className="mt-3 font-display text-[2.5rem] leading-[1] text-navy sm:text-6xl lg:text-7xl">
              {category.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/75">{category.intro}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="font-display text-[6rem] leading-none text-gold/70 lg:text-[8rem]">{category.n}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-navy/55">{category.items.length} objects</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryLayout({ category }: { category: Category }) {
  switch (category.slug) {
    case "gift-sets": return <GiftSetsLayout items={category.items} />;
    case "diary-power": return <DiaryPowerLayout items={category.items} cover={category.cover} />;
    case "lamps": return <LampsLayout items={category.items} />;
    case "bottles": return <BottlesLayout items={category.items} />;
    case "accessories": return <AccessoriesLayout items={category.items} />;
  }
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

/* ─── Gift Sets — L-shape hero + 3 tiles ────────────── */
function GiftSetsLayout({ items }: { items: Product[] }) {
  const [hero, ...rest] = items;
  return (
    <div className="mt-16 grid gap-6 lg:grid-cols-12">
      <article className="lg:col-span-8 lg:row-span-2">
        <div className="overflow-hidden rounded-2xl bg-ivory">
          <img src={hero.img} alt={hero.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </div>
        <h3 className="mt-5 font-display text-3xl text-navy">{hero.name}</h3>
        <p className="mt-2 max-w-md text-sm text-navy/70">{hero.desc}</p>
        <EnquireLink slug={hero.slug} />
      </article>
      {rest.map((p) => (
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
  );
}

/* ─── Diary & Power — Photo + Ledger ────────────────── */
function DiaryPowerLayout({ items, cover }: { items: Product[]; cover: string }) {
  return (
    <div className="mt-16">
      <div className="overflow-hidden rounded-2xl bg-ivory">
        <img src={cover} alt="Diaries and power banks" loading="lazy" className="aspect-[21/9] w-full object-cover" />
      </div>
      <div className="mt-12 divide-y hairline border-y">
        {items.map((p) => (
          <div key={p.slug} className="grid grid-cols-12 items-center gap-4 py-6">
            <div className="col-span-12 sm:col-span-5">
              <div className="font-display text-2xl text-navy">{p.name}</div>
              <div className="mt-1 text-xs text-navy/55">{p.desc}</div>
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
    </div>
  );
}

/* ─── Lamps — staggered masonry ─────────────────────── */
function LampsLayout({ items }: { items: Product[] }) {
  return (
    <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <article key={p.slug} className={i === 1 ? "sm:mt-16" : i === 2 ? "sm:mt-32 lg:mt-8" : ""}>
          <img src={p.img} alt={p.name} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
          <h3 className="mt-4 font-display text-2xl text-navy">{p.name}</h3>
          <p className="mt-1 text-sm text-navy/70">{p.desc}</p>
          <EnquireLink slug={p.slug} />
        </article>
      ))}
    </div>
  );
}

/* ─── Bottles — horizontal snap ──────────────────────── */
function BottlesLayout({ items }: { items: Product[] }) {
  return (
    <div className="mt-16">
      <div className="-mx-6 overflow-x-auto px-6 pb-3 lg:-mx-12 lg:px-12">
        <div className="flex snap-x snap-mandatory gap-5">
          {items.map((p) => (
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
    </div>
  );
}

/* ─── Accessories — magazine + big numeral ──────────── */
function AccessoriesLayout({ items }: { items: Product[] }) {
  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-3">
        <div className="font-display text-[10rem] leading-[0.8] text-gold/80">05</div>
        <p className="mt-6 text-sm leading-relaxed text-navy/70">
          The small things, gifted with intention. Often the most-remembered piece in a set.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:col-span-9">
        {items.map((p) => (
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
  );
}

function CategoryPager({ current }: { current: string }) {
  const idx = CATEGORIES.findIndex((c) => c.slug === current);
  const prev = CATEGORIES[(idx - 1 + CATEGORIES.length) % CATEGORIES.length];
  const next = CATEGORIES[(idx + 1) % CATEGORIES.length];
  return (
    <section className="border-t bg-ivory px-6 py-14 hairline lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2">
        <Link
          to="/products/$category"
          params={{ category: prev.slug }}
          className="group rounded-2xl border bg-white p-6 transition-colors hover:border-gold hairline"
        >
          <div className="text-[10px] uppercase tracking-[0.25em] text-navy/55">← Previous · Room {prev.n}</div>
          <div className="mt-2 font-display text-2xl text-navy group-hover:text-gold">{prev.title}</div>
        </Link>
        <Link
          to="/products/$category"
          params={{ category: next.slug }}
          className="group rounded-2xl border bg-white p-6 text-right transition-colors hover:border-gold hairline"
        >
          <div className="text-[10px] uppercase tracking-[0.25em] text-navy/55">Next · Room {next.n} →</div>
          <div className="mt-2 font-display text-2xl text-navy group-hover:text-gold">{next.title}</div>
        </Link>
      </div>
    </section>
  );
}
