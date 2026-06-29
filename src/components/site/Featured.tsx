import gifts from "@/assets/cat-gift-sets.jpg";
import diary from "@/assets/cat-diary.jpg";
import lamps from "@/assets/cat-lamps.jpg";
import bottles from "@/assets/cat-bottles.jpg";
import accessories from "@/assets/cat-accessories.jpg";

// 1) Premium Gift Sets — horizontal scroller
export function FeaturedGiftSets() {
  const items = [
    { title: "The Founder", note: "Leather · Brass · Silk", img: gifts },
    { title: "The Diplomat", note: "Diary · Pen · Cardholder", img: diary },
    { title: "The Atelier", note: "Lamp · Notebook · Candle", img: lamps },
    { title: "The Ritual", note: "Bottle · Mug · Tea", img: bottles },
    { title: "The Quiet", note: "Accessories · Silk · Brass", img: accessories },
  ];
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Featured · 01</div>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Premium gift sets
            </h2>
          </div>
          <div className="text-xs text-navy/60">drag · scroll →</div>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 px-[max(1rem,calc((100vw-80rem)/2))]">
          {items.map((it) => (
            <article
              key={it.title}
              className="group w-[320px] shrink-0 sm:w-[380px]"
            >
              <div className="overflow-hidden rounded-[1.75rem] bg-ivory shadow-soft">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-2xl text-navy">{it.title}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-navy/55">
                    {it.note}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border text-navy transition-all hover:bg-navy hover:text-gold hairline"
                >
                  →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2) Diary & Power — split feature
export function FeaturedDiary() {
  const small = [
    { t: "Heritage Diary", d: "Full-grain leather, 240gsm" },
    { t: "Compact Power", d: "10,000 mAh · USB-C" },
    { t: "Brass Stylus Pen", d: "Refillable cartridge" },
  ];
  return (
    <section className="bg-ivory px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[2rem] shadow-luxury">
            <img
              src={diary}
              alt="Premium leather diary paired with matte power bank"
              loading="lazy"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Featured · 02</div>
          <h2 className="mt-3 font-display text-4xl leading-tight text-navy sm:text-5xl">
            Diary &amp; power, in one <span className="italic">pocket</span>.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-navy/70">
            Three objects, designed to travel together. Specified for executives
            who keep their tools considered.
          </p>
          <ul className="mt-8 divide-y hairline border-y">
            {small.map((s) => (
              <li
                key={s.t}
                className="group flex items-center justify-between py-5 transition-colors hover:text-gold"
              >
                <div>
                  <div className="font-display text-xl text-navy group-hover:text-gold">
                    {s.t}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-navy/55">
                    {s.d}
                  </div>
                </div>
                <span className="text-navy/50 transition-transform group-hover:translate-x-1 group-hover:text-gold">
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// 3) Lamps — masonry
export function FeaturedLamps() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Featured · 03</div>
            <h2 className="mt-3 font-display text-5xl leading-tight text-navy">
              Lamps that double as sculpture.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy/70">
              Brass, matte navy, warm shadow. We design every silhouette in
              Mumbai and finish in Jaipur.
            </p>
          </div>
          <div className="grid gap-5 lg:col-span-8 lg:grid-cols-3 lg:grid-rows-2">
            <div className="overflow-hidden rounded-[1.5rem] bg-ivory shadow-soft lg:row-span-2">
              <img src={lamps} alt="Tall brass and navy lamp" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] bg-ivory shadow-soft">
              <img src={bottles} alt="Lamp study" loading="lazy" className="h-56 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] bg-navy p-6 text-ivory shadow-soft">
              <div className="text-xs uppercase tracking-[0.2em] text-gold">No. 04</div>
              <div className="mt-3 font-display text-2xl leading-tight">
                "Light that flatters the room and the person in it."
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] bg-ivory shadow-soft lg:col-span-2">
              <img src={accessories} alt="Lamp accessories" loading="lazy" className="h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4) Accessories — magazine
export function FeaturedAccessories() {
  return (
    <section className="bg-ivory px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pt-12">
            <div className="font-display text-[12rem] leading-none text-gold/30">04</div>
            <h2 className="font-display text-5xl leading-tight text-navy">
              Small things, <span className="italic">gifted</span> with intention.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy/70">
              Cardholders, brass keychains, silk pocket squares — the
              afterthoughts that aren't.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-navy"
            >
              View the full edit
              <span className="h-px w-12 bg-navy" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.75rem] shadow-luxury sm:row-span-2">
                <img src={accessories} alt="Accessories flatlay" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
                <img src={bottles} alt="Bottle accessory" loading="lazy" className="h-48 w-full object-cover sm:h-56" />
              </div>
              <div className="overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-soft">
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Workshop</div>
                <div className="mt-3 font-display text-xl text-navy">
                  Engraving, embossing &amp; foil — done in-house, in 5 working days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
