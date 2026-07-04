import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import gifts from "@/assets/cat-gift-sets.jpg";
import diary from "@/assets/cat-diary.jpg";
import lamps from "@/assets/cat-lamps.jpg";
import bottles from "@/assets/cat-bottles.jpg";
import accessories from "@/assets/cat-accessories.jpg";

type CatSlug = "gift-sets" | "diary-power" | "lamps" | "bottles" | "accessories";
type Cat = { title: string; desc: string; img: string; alt: string; span: string; slug: CatSlug };

const cats: Cat[] = [
  { title: "Premium Gift Sets", desc: "Curated boxes with a purpose and the finest of the finest.", img: gifts, alt: "Navy leather presentation box with pen and silk", span: "lg:col-span-6 lg:row-span-2", slug: "gift-sets" },
  { title: "Diary & Power Banks", desc: "Leather, brass and battery in one pocket.", img: diary, alt: "Leather diary with matte power bank", span: "lg:col-span-3", slug: "diary-power" },
  { title: "Lamps", desc: "Sculptural, warm and purposeful.", img: lamps, alt: "Sculptural brass and navy desk lamp", span: "lg:col-span-3", slug: "lamps" },
  { title: "Bottles & Mugs", desc: "Daily rituals, considered.", img: bottles, alt: "Matte navy bottle with ivory and gold mug", span: "lg:col-span-3", slug: "bottles" },
  { title: "Accessories", desc: "The final things that tie it together.", img: accessories, alt: "Leather cardholder, brass keychain and silk tie", span: "lg:col-span-3", slug: "accessories" },
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
              Five rooms,
              <br />
              <span className="text-gold">one house.</span>
            </h2>
          </motion.div>
          <motion.p
            className="max-w-sm text-sm leading-relaxed text-navy/70"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Every category is curated by hand — no marketplace,
            no third-party warehouses. What we share is
            what we make.
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
                <div className="relative flex h-full min-h-[250px] flex-col justify-end p-6 text-ivory sm:p-8">
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
