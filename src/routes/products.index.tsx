import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CATEGORIES } from "@/lib/catalogue";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import {
  Gift,
  BookOpen,
  Lamp,
  Cylinder,
  KeyRound,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/PRODUCT HERO.webp";

export const Route = createFileRoute("/products/")({
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

// Icon per category — matches the reference's circle icons
const catIcons: Record<string, React.ElementType> = {
  "gift-sets": Gift,
  "diary-power": BookOpen,
  "lamps": Lamp,
  "bottles": Cylinder,
  "accessories": KeyRound,
};

function ProductsIndex() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Nav variant="dark" />
      <main>

        {/* ── Masthead ── */}
        <FadeIn>
          <section className="relative h-screen flex items-end overflow-hidden bg-navy">
            {/* full-bleed background image */}
            <img
              src={heroImg}
              alt="Giftitude luxury gift composition"
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* gradient overlay — heavy at bottom for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-navy/10" />

            {/* content anchored to bottom */}
            <div className="relative w-full px-6 pb-14 lg:px-12 lg:pb-16">
              <div className="mx-auto max-w-7xl">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold/80">
                  Our Collection
                </div>
                <h1 className="mt-4 font-display text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.02] text-white">
                  Five rooms.
                  <br />
                  <span className="italic text-gold">Forty objects.</span>
                </h1>
                <div className="mt-5 h-px w-10 bg-gold/50" />
                <div className="mt-5 flex items-end gap-6">
                  <p className="max-w-sm text-sm leading-relaxed text-white/65">
                    Each room is its own page — open the one that fits
                    the brief, or tell us the occasion and we'll compose a set.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ── Category list ── */}
        <section className="bg-ivory px-6 pb-0 pt-6 lg:px-12">
          <ol className="mx-auto max-w-7xl divide-y border-y border-navy/8">
            {CATEGORIES.map((c, i) => {
              const Icon = catIcons[c.slug] ?? Gift;
              return (
                <motion.li
                  key={c.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: 0.45,
                    ease: [0.21, 0.47, 0.32, 0.98],
                    delay: i * 0.07,
                  }}
                >
                  <Link
                    to="/products/$category"
                    params={{ category: c.slug }}
                    className="group flex items-center gap-3 py-5 lg:gap-8 lg:py-6 transition-all duration-300 hover:translate-x-1"
                  >
                    {/* number */}
                    <div className="w-8 shrink-0 font-display text-lg text-gold/70 lg:w-14 lg:text-2xl transition-colors duration-300 group-hover:text-gold">
                      {c.n}
                    </div>

                    {/* icon circle — hidden on small screens */}
                    <div className="hidden sm:flex shrink-0 h-12 w-12 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-gold group-hover:border-navy group-hover:scale-110">
                      <Icon size={18} strokeWidth={1.4} />
                    </div>

                    {/* title + tagline */}
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <div className="font-display text-base leading-snug text-navy sm:text-xl lg:text-2xl transition-colors duration-300 group-hover:text-gold">
                        {c.title}
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-navy/50 line-clamp-2 lg:max-w-xs">
                        {c.tagline}
                      </div>
                    </div>

                    {/* product image */}
                    <div className="shrink-0 overflow-hidden rounded-xl transition-shadow duration-300 group-hover:shadow-soft">
                      <img
                        src={c.cover}
                        alt={c.alt}
                        loading="lazy"
                        className="h-16 w-24 object-cover transition-transform duration-700 group-hover:scale-110 sm:h-20 sm:w-32 lg:h-24 lg:w-40"
                      />
                    </div>

                    {/* arrow */}
                    <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 lg:h-10 lg:w-10">
                      <ArrowRight size={14} strokeWidth={2} />
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ol>
        </section>

        {/* ── Bottom CTA ── */}
        <FadeIn>
          <section className="bg-navy px-6 py-10 lg:px-12 lg:py-12">
            <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                {/* large gift icon — decorative, matches reference */}
                <div className="hidden shrink-0 opacity-20 sm:block">
                  <Gift size={52} strokeWidth={0.8} className="text-white" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold/70">
                    Can't find the right fit?
                  </div>
                  <h2 className="mt-1.5 font-display text-2xl text-white sm:text-3xl">
                    We custom-curate.
                  </h2>
                </div>
              </div>

              <Link
                to="/contact"
                className="group inline-flex self-start shrink-0 items-center gap-4 rounded-full bg-gold pl-7 pr-2 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_4px] hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Begin a brief
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-gold font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy">
                  <ArrowRight strokeWidth={2.5} size={16} />
                </span>
              </Link>
            </div>
          </section>
        </FadeIn>

      </main>
      <Footer />
    </div>
  );
}
