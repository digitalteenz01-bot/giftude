import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/catalogue";

type Cat = { title: string; desc: string; img: string; alt: string; span: string; slug: string };

const cats: Cat[] = [
  { title: CATEGORIES[0].title, desc: CATEGORIES[0].tagline, img: CATEGORIES[0].items[0].img, alt: CATEGORIES[0].alt, span: "lg:col-span-6 lg:row-span-2", slug: CATEGORIES[0].slug },
  { title: CATEGORIES[1].title, desc: CATEGORIES[1].tagline, img: CATEGORIES[1].items[0].img, alt: CATEGORIES[1].alt, span: "lg:col-span-3", slug: CATEGORIES[1].slug },
  { title: CATEGORIES[2].title, desc: CATEGORIES[2].tagline, img: CATEGORIES[2].items[0].img, alt: CATEGORIES[2].alt, span: "lg:col-span-3", slug: CATEGORIES[2].slug },
  { title: CATEGORIES[3].title, desc: CATEGORIES[3].tagline, img: CATEGORIES[3].items[0].img, alt: CATEGORIES[3].alt, span: "lg:col-span-3", slug: CATEGORIES[3].slug },
  { title: CATEGORIES[4].title, desc: CATEGORIES[4].tagline, img: CATEGORIES[4].items[0].img, alt: CATEGORIES[4].alt, span: "lg:col-span-3", slug: CATEGORIES[4].slug },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export function Categories() {
  return (
    <section id="categories" className="px-4 pb-24 pt-12 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Catalogue</div>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] text-navy sm:text-6xl">
              Every Collection,
              <br />
              <span className="text-gold">A Lasting Impression.</span>
            </h2>
          </motion.div>
          <motion.p
            className="max-w-sm text-sm leading-relaxed text-navy/70"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Explore premium gifting solutions designed to strengthen
            relationships, celebrate achievements, and elevate your brand.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[250px]">
          {cats.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5% 0px" }}
              className={c.span}
            >
              <Link
                to="/products/$category"
                params={{ category: c.slug }}
                className="group relative block h-full overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:shadow-luxury"
              >
                {/* Image with zoom + slight rotate on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
                  />
                  {/* Gradient overlay darkens more on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent transition-opacity duration-500 group-hover:from-navy/95" />
                  {/* Gold shimmer overlay on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-gold/5 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative flex h-full min-h-[320px] sm:min-h-[250px] flex-col justify-end p-6 text-ivory sm:p-8">
                  {/* Title with slight slide up on hover */}
                  <div className="font-display text-2xl leading-tight sm:text-3xl transition-transform duration-500 group-hover:-translate-y-1">
                    {c.title}
                  </div>
                  {/* Description fades in/slides up slightly on hover */}
                  <div className="mt-2 max-w-xs text-sm text-ivory/80 leading-relaxed transition-all duration-500 group-hover:text-ivory/95">
                    {c.desc}
                  </div>
                  {/* Explore CTA with animated arrow */}
                  <div className="mt-5 flex items-center gap-2 text-gold">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group-hover:tracking-[0.3em]">
                      Explore
                    </span>
                    <span className="inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                      →
                    </span>
                  </div>
                  {/* Animated bottom border that expands on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold to-gold-soft transition-all duration-700 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
