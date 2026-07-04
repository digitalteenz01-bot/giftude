import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CATEGORIES, getCategory, type Category, type Product } from "@/lib/catalogue";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// WhatsApp business number — digits only with country code
const WA_NUMBER = "919200000000";

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
      <Nav variant="light" />
      <main className="mx-auto max-w-xl px-6 pt-40 text-center">
        <h1 className="font-display text-4xl text-navy">Something went wrong</h1>
        <button onClick={reset} className="mt-6 rounded-full bg-navy px-6 py-3 text-sm text-ivory transition-all duration-300 hover:bg-navy-soft hover:scale-[1.02] active:scale-[0.98]">
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
      <Nav variant="light" />
      <main className="mx-auto max-w-xl px-6 pt-40 text-center">
        <h1 className="font-display text-5xl text-navy">Room not found</h1>
        <p className="mt-3 text-sm text-navy/70">That category doesn't exist in the 2026 catalogue.</p>
        <Link to="/products" className="mt-8 inline-block rounded-full bg-navy px-6 py-3 text-sm text-ivory transition-all duration-300 hover:bg-navy-soft hover:scale-[1.02]">
          ← Back to catalogue
        </Link>
      </main>
      <Footer />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function CategoryPage() {
  const { category } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Nav variant="light" />
      <main>
        <FadeIn>
          <Masthead category={category} />
        </FadeIn>
        <FadeIn delay={60}>
          <ProductGrid items={category.items} />
        </FadeIn>
        <FadeIn>
          <CategoryPager current={category.slug} />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

// ─── Masthead ─────────────────────────────────────────────────────────────────
function Masthead({ category }: { category: Category }) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* cover image bleed with subtle zoom */}
      <motion.img
        src={category.cover}
        alt={category.title}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        loading="eager"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* breadcrumb */}
        <motion.nav
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link to="/products" className="hover:text-gold transition-colors duration-300">Catalogue</Link>
          <span>/</span>
          <span className="text-white/70">{category.title}</span>
        </motion.nav>

        <div className="mt-6 max-w-2xl">
          <motion.div
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            Room {category.n}
          </motion.div>
          <motion.h1
            className="mt-3 font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {category.title}
          </motion.h1>
          <motion.p
            className="mt-5 text-sm leading-relaxed text-white/60 max-w-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            {category.intro}
          </motion.p>
          <motion.div
            className="mt-6 flex items-center gap-3 text-xs text-white/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <span className="font-bold">{category.items.length} products</span>
            <span className="h-px w-4 bg-white/20" />
            <span>Enquire for pricing & customisation</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Product Grid ─────────────────────────────────────────────────────────────
function ProductGrid({ items }: { items: Product[] }) {
  return (
    <section className="px-6 py-14 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{
        duration: 0.45,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: index * 0.07,
      }}
      className="group flex flex-col rounded-2xl bg-white shadow-soft overflow-hidden transition-all duration-400 hover:shadow-luxury hover:-translate-y-1"
    >
      {/* image */}
      <div className="relative overflow-hidden bg-ivory aspect-square">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover overlay with gold gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {/* Material tag revealed on hover */}
        {product.material && (
          <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-navy shadow-soft opacity-0 -translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-sm">
            {product.material}
          </div>
        )}
      </div>

      {/* details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex-1">
          <h3 className="font-display text-lg leading-tight text-navy transition-colors duration-300 group-hover:text-gold">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-navy/55">
            {product.desc}
          </p>
          {product.material && (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/70 sm:hidden">
              {product.material}
            </p>
          )}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => {
            const text = [
              `*Product Enquiry — Giftitude*`,
              ``,
              `*Product:* ${product.name}`,
              `*Description:* ${product.desc}`,
              product.material ? `*Material:* ${product.material}` : null,
              ``,
              `I'd like to enquire about this product. Please share pricing and customisation options.`,
            ].filter(Boolean).join("\n");
            window.open(
              `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="group/btn mt-5 flex w-full items-center justify-between rounded-full border border-navy/8 bg-ivory px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-sm active:scale-[0.98]"
        >
          <span className="transition-colors duration-300 group-hover/btn:text-gold">Enquire</span>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-white transition-all duration-300 group-hover/btn:bg-gold group-hover/btn:text-navy group-hover/btn:scale-110">
            <ArrowRight size={13} strokeWidth={2.5} />
          </span>
        </button>
      </div>
    </motion.article>
  );
}

// ─── Pager ────────────────────────────────────────────────────────────────────
function CategoryPager({ current }: { current: string }) {
  const idx  = CATEGORIES.findIndex((c) => c.slug === current);
  const prev = CATEGORIES[(idx - 1 + CATEGORIES.length) % CATEGORIES.length];
  const next = CATEGORIES[(idx + 1) % CATEGORIES.length];

  return (
    <section className="border-t border-navy/8 bg-white px-6 py-12 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2">
        <Link
          to="/products/$category"
          params={{ category: prev.slug }}
          className="group flex items-center gap-5 rounded-2xl border border-navy/8 bg-ivory p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-soft hover:-translate-y-0.5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-110 group-hover:-translate-x-1">
            <ArrowRight size={15} className="rotate-180" />
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-navy/35">Previous</div>
            <div className="mt-0.5 font-display text-base text-navy group-hover:text-gold transition-colors duration-300">
              {prev.title}
            </div>
          </div>
        </Link>

        <Link
          to="/products/$category"
          params={{ category: next.slug }}
          className="group flex items-center justify-end gap-5 rounded-2xl border border-navy/8 bg-ivory p-6 text-right transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-soft hover:-translate-y-0.5"
        >
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.24em] text-navy/35">Next</div>
            <div className="mt-0.5 font-display text-base text-navy group-hover:text-gold transition-colors duration-300">
              {next.title}
            </div>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-110 group-hover:translate-x-1">
            <ArrowRight size={15} />
          </div>
        </Link>
      </div>
    </section>
  );
}
