const steps = [
  { n: "01", t: "Choose", d: "Brief us on occasion, count and budget." },
  { n: "02", t: "Customise", d: "Foil, deboss, engraving, packaging." },
  { n: "03", t: "Approve", d: "Physical sample, digital mock, sign-off." },
  { n: "04", t: "Produce", d: "5–18 days, depending on quantity." },
  { n: "05", t: "Deliver", d: "White-glove to 19,000+ pincodes." },
];

export function Process() {
  return (
    <section id="process" className="bg-navy px-4 py-24 text-ivory">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Process</div>
            <h2 className="mt-3 font-display text-5xl leading-tight sm:text-6xl">
              From brief to <span className="italic">box</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            A five-step rhythm we have rehearsed across a thousand campaigns.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`group relative rounded-2xl border border-ivory/15 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 ${
                i % 2 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="font-display text-4xl text-gold">{s.n}</div>
              <div className="mt-1 h-px w-10 bg-gold/60" />
              <div className="mt-5 font-display text-2xl">{s.t}</div>
              <div className="mt-2 text-sm leading-relaxed text-ivory/70">{s.d}</div>
              {i < steps.length - 1 && (
                <span className="absolute -right-3 top-10 hidden text-gold/50 lg:block">→</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
