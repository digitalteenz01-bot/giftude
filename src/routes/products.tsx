import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CATEGORIES } from "@/lib/catalogue";

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
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav />
      <main className="pt-28">
        <section className="border-y px-6 py-14 hairline lg:px-12">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Catalogue · 2026 · Edition I</div>
              <h1 className="mt-4 font-display text-[2.5rem] leading-[1] text-navy sm:text-6xl lg:text-7xl">
                Five rooms. <span className="italic">Forty objects.</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-navy/70">
                Each room is its own page — open the one that fits the brief, or
                tell us the occasion and we'll compose a set.
              </p>
            </div>
            <div className="hidden text-right text-[11px] uppercase tracking-[0.3em] text-navy/55 sm:block">
              Index · 05 rooms
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-12 lg:py-24">
          <ol className="mx-auto max-w-7xl divide-y hairline border-y">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="group grid grid-cols-12 items-center gap-6 py-8 transition-colors hover:bg-ivory/60 sm:py-10"
                >
                  <div className="col-span-2 font-display text-3xl text-gold/80 sm:text-5xl">
                    {c.n}
                  </div>
                  <div className="col-span-10 grid grid-cols-12 items-center gap-6 sm:gap-8">
                    <div className="col-span-12 sm:col-span-5">
                      <h2 className="font-display text-3xl text-navy sm:text-4xl">
                        {c.title}
                      </h2>
                      <p className="mt-2 max-w-md text-sm text-navy/70">{c.tagline}</p>
                    </div>
                    <div className="col-span-8 sm:col-span-5">
                      <div className="overflow-hidden rounded-2xl bg-ivory">
                        <img
                          src={c.cover}
                          alt={c.alt}
                          loading="lazy"
                          className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                    <div className="col-span-4 flex justify-end sm:col-span-2">
                      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy">
                        Open
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-navy transition-transform group-hover:rotate-45">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>

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
      </main>
      <Footer />
    </div>
  );
}
