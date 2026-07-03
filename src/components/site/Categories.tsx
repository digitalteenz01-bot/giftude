import { Link } from "@tanstack/react-router";
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

export function Categories() {
  return (
    <section id="categories" className="px-4 pb-24 pt-12 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Catalogue</div>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] text-navy sm:text-6xl">
              Five rooms,
              <br />
              <span className="text-gold">one house.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy/70">
            Every category is curated by hand — no marketplace,
            no third-party warehouses. What we share is
            what we make.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[250px]">
          {cats.map((c) => (
            <Link
              key={c.title}
              to="/products/$category"
              params={{ category: c.slug }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:shadow-luxury ${c.span}`}
            >
              <div className="absolute inset-0">
                <img src={c.img} alt={c.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              </div>
              <div className="relative flex h-full min-h-[250px] flex-col justify-end p-6 text-ivory sm:p-8">
                <div className="font-display text-2xl leading-tight sm:text-3xl">{c.title}</div>
                <div className="mt-2 max-w-xs text-sm text-ivory/80 leading-relaxed">{c.desc}</div>
                <div className="mt-5 flex items-center gap-2 text-gold">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Explore</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

