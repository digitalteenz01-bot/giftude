import { Link } from "@tanstack/react-router";
import gifts from "@/assets/cat-gift-sets.jpg";
import diary from "@/assets/cat-diary.jpg";
import lamps from "@/assets/cat-lamps.jpg";
import bottles from "@/assets/cat-bottles.jpg";
import accessories from "@/assets/cat-accessories.jpg";

type Cat = { title: string; desc: string; img: string; alt: string; span: string; hash: string };

const cats: Cat[] = [
  { title: "Premium Gift Sets", desc: "Curated boxes built around a single object of joy.", img: gifts, alt: "Navy leather presentation box with pen and silk", span: "lg:col-span-7 lg:row-span-2", hash: "gift-sets" },
  { title: "Diary & Power Banks", desc: "Leather, brass and battery in one pocket.", img: diary, alt: "Leather diary with matte power bank", span: "lg:col-span-5", hash: "diary-power" },
  { title: "Lamps", desc: "Sculpture, warmth, presence.", img: lamps, alt: "Sculptural brass and navy desk lamp", span: "lg:col-span-3", hash: "lamps" },
  { title: "Bottles & Mugs", desc: "Daily rituals, considered.", img: bottles, alt: "Matte navy bottle with ivory and gold mug", span: "lg:col-span-2", hash: "bottles" },
  { title: "Accessories", desc: "The small things gifted with intention.", img: accessories, alt: "Leather cardholder, brass keychain and silk tie", span: "lg:col-span-5", hash: "accessories" },
];

export function Categories() {
  return (
    <section id="categories" className="bg-ivory px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Catalogue · 01</div>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] text-navy sm:text-6xl">
              Five rooms,
              <br />
              one <span className="italic">house</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy/70">
            Every category is curated by hand — no marketplace, no third-party
            warehouse. What we show is what we make.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[230px]">
          {cats.map((c) => (
            <Link
              key={c.title}
              to="/products"
              hash={c.hash}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-white shadow-soft transition-all duration-500 hover:shadow-luxury ${c.span}`}
            >
              <div className="absolute inset-0">
                <img src={c.img} alt={c.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              </div>
              <div className="relative flex h-full min-h-[230px] flex-col justify-end p-6 text-ivory">
                <div className="font-display text-2xl leading-tight sm:text-3xl">{c.title}</div>
                <div className="mt-2 max-w-xs text-sm text-ivory/80">{c.desc}</div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold">Explore</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-navy transition-transform group-hover:rotate-45">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
