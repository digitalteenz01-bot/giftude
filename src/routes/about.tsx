import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import portrait from "@/assets/about-portrait.jpg";
import craft from "@/assets/why-craft.jpg";
import gifts from "@/assets/cat-gift-sets.jpg";
import diary from "@/assets/cat-diary.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Giftitude Studio" },
      { name: "description", content: "Inside Giftitude — a small Mumbai studio of curators and craftspeople building considered corporate gifts since 2017." },
      { property: "og:title", content: "About — The Giftitude Studio" },
      { property: "og:description", content: "A small Mumbai studio building considered corporate gifts since 2017." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav />
      <main className="pt-32">
        <Masthead />
        <StorySpread />
        <ValuesLedger />
        <TimelineRibbon />
        <StudioGallery />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}

function Masthead() {
  return (
    <section className="px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-navy/55">
          <span>Volume 08 · The Studio</span>
          <span>Mumbai · 2026</span>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <h1 className="font-display text-[3rem] leading-[0.98] tracking-tight text-navy sm:text-[5rem] lg:col-span-9 lg:text-[6.5rem]">
            We are a small <span className="italic text-gold">studio</span><br />
            with very long <span className="italic">attention spans</span>.
          </h1>
          <p className="lg:col-span-3 lg:pt-6 text-sm leading-relaxed text-navy/70">
            Giftitude began in a 200-sq-ft room in Lower Parel with a single
            leather diary and the conviction that corporate gifting could,
            and should, feel like a private commission.
          </p>
        </div>
        <div className="mt-14 flex items-center gap-6">
          <div className="h-px flex-1 bg-gold/60" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Established · 2017</span>
          <div className="h-px flex-1 bg-gold/60" />
        </div>
      </div>
    </section>
  );
}

function StorySpread() {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-20">
        <article className="lg:col-span-7">
          <p className="font-display text-2xl leading-[1.45] text-navy first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[5.5rem] first-letter:leading-[0.85] first-letter:text-gold">
            We started with a question that nobody around us seemed to be
            asking — what would corporate gifting look like if it were
            designed for the recipient instead of the procurement spreadsheet?
          </p>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-navy/75">
            <p>
              Eight years on, that question is still the brief. We work with a
              small roster of partner workshops across Maharashtra, Rajasthan
              and Gujarat — leatherworkers, brass turners, woodworkers — and we
              ship under 400 briefs a year because that is the largest number
              we can do well.
            </p>
            <p>
              Every brief begins in a conversation. We ask who is being gifted
              to, on what occasion, in what room the object will eventually
              live. The proposal that follows is curated, not catalogued.
            </p>
            <p>
              We are not a marketplace. There is no warehouse and no third
              party between the brief and the boxed object that arrives at
              your floor.
            </p>
          </div>
        </article>
        <aside className="lg:col-span-5">
          <div className="overflow-hidden">
            <img src={portrait} alt="Founder portrait in the Mumbai studio" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="mt-4 italic text-sm uppercase tracking-[0.18em] text-navy/60">
            Aanya Rao, founder · photographed at the studio, Lower Parel
          </div>
        </aside>
      </div>
    </section>
  );
}

function ValuesLedger() {
  const items = [
    { n: "01", t: "Craft", d: "Made by hand, in small workshops, by people whose names we know." },
    { n: "02", t: "Curation", d: "Every object earns its place. Nothing is in the catalogue by accident." },
    { n: "03", t: "Care", d: "One curator, from brief to delivery. One thread, never handed off." },
  ];
  return (
    <section className="border-y bg-ivory px-6 py-20 hairline lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-[11px] uppercase tracking-[0.3em] text-gold">The Ledger</div>
        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:divide-x lg:divide-navy/15">
          {items.map((i) => (
            <div key={i.n} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
              <div className="font-display text-6xl text-gold">{i.n}</div>
              <div className="mt-4 font-display text-3xl text-navy">{i.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineRibbon() {
  const events = [
    { y: "2017", t: "Studio opens", above: true },
    { y: "2019", t: "First leather workshop partnership", above: false },
    { y: "2021", t: "Pan-India fulfilment", above: true },
    { y: "2023", t: "100th retained client", above: false },
    { y: "2026", t: "Heritage Collection", above: true },
  ];
  return (
    <section className="px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-4xl text-navy sm:text-5xl">A short timeline.</h2>
          <span className="text-[11px] uppercase tracking-[0.3em] text-navy/55">2017 — 2026</span>
        </div>

        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gold/60" />
          <div className="relative grid grid-cols-5">
            {events.map((e) => (
              <div key={e.y} className="relative flex flex-col items-center">
                <div className={`absolute ${e.above ? "bottom-1/2 mb-6" : "top-1/2 mt-6"} text-center w-44`}>
                  <div className="font-display text-3xl text-navy">{e.y}</div>
                  <div className="mt-1 text-xs text-navy/70">{e.t}</div>
                </div>
                <div className="z-10 h-3 w-3 rounded-full bg-navy ring-4 ring-white" />
              </div>
            ))}
          </div>
          <div className="h-48" />
        </div>

        <ol className="mt-12 space-y-6 lg:hidden">
          {events.map((e) => (
            <li key={e.y} className="flex gap-4 border-l border-gold/60 pl-5">
              <div>
                <div className="font-display text-2xl text-navy">{e.y}</div>
                <div className="text-sm text-navy/70">{e.t}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function StudioGallery() {
  return (
    <section className="px-6 pb-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-12 lg:grid-rows-2">
        <figure className="lg:col-span-5 lg:row-span-2">
          <img src={craft} alt="Leather being hand-stitched at a partner workshop" loading="lazy" className="aspect-[3/4] h-full w-full object-cover" />
          <figcaption className="mt-2 text-xs uppercase tracking-[0.18em] text-navy/55">Hand-stitching — Dharavi workshop</figcaption>
        </figure>
        <figure className="lg:col-span-7">
          <img src={gifts} alt="Boxed gift sets ready for dispatch" loading="lazy" className="aspect-[16/9] w-full object-cover" />
          <figcaption className="mt-2 text-xs uppercase tracking-[0.18em] text-navy/55">Dispatch floor — Lower Parel</figcaption>
        </figure>
        <figure className="lg:col-span-7">
          <img src={diary} alt="Diary and brass details on a studio table" loading="lazy" className="aspect-[16/9] w-full object-cover" />
          <figcaption className="mt-2 text-xs uppercase tracking-[0.18em] text-navy/55">Edit table — Heritage Collection</figcaption>
        </figure>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="bg-ivory px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-3xl italic leading-[1.3] text-navy sm:text-5xl">
          "The brief is small. The attention is large."
        </p>
        <div className="mt-10">
          <Link to="/contact" className="text-sm font-medium uppercase tracking-[0.2em] text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-gold">
            Visit the studio →
          </Link>
        </div>
      </div>
    </section>
  );
}
