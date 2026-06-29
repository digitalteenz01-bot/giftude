import why from "@/assets/why-craft.jpg";

const features = [
  { t: "Premium quality", d: "Materials specified, finished and inspected in our Mumbai studio." },
  { t: "Customisation", d: "Foil, deboss, engraving and bespoke packaging — all in-house." },
  { t: "Bulk orders", d: "From 25 to 25,000 units, on time, every time." },
  { t: "Pan-India delivery", d: "White-glove logistics to 19,000+ pincodes." },
];

export function WhyUs() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxury">
            <img
              src={why}
              alt="Hands wrapping a navy gift box with gold ribbon"
              loading="lazy"
              className="h-[640px] w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-3 text-xs uppercase tracking-[0.22em] text-navy shadow-soft backdrop-blur">
              Studio · Lower Parel
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Why Giftitude</div>
          <h2 className="mt-3 font-display text-5xl leading-tight text-navy sm:text-6xl">
            Made by hand.
            <br />
            <span className="italic">Mostly</span> by people.
          </h2>
          <div className="relative mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.t}
                className={`rounded-2xl border bg-ivory p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-float hairline ${
                  i === 1 ? "sm:translate-y-8" : ""
                } ${i === 3 ? "sm:translate-y-8" : ""}`}
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-navy text-xs font-semibold text-gold">
                  0{i + 1}
                </div>
                <div className="mt-5 font-display text-2xl text-navy">{f.t}</div>
                <div className="mt-2 text-sm leading-relaxed text-navy/70">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
