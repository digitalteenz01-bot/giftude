const stats = [
  { value: "1,200+", label: "Brand clients", note: "Pan-India" },
  { value: "500+", label: "Curated products", note: "In-house catalogue" },
  { value: "08", label: "Years crafting", note: "Since 2017" },
  { value: "₹20Cr", label: "Gifts delivered", note: "Last 12 months" },
];

export function TrustStrip() {
  return (
    <section className="px-4 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`group relative rounded-3xl border bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxury hairline ${
              i % 2 ? "lg:translate-y-6" : ""
            } ${i === 1 ? "lg:translate-y-10" : ""} ${i === 2 ? "lg:translate-y-4" : ""}`}
          >
            <div className="font-display text-5xl font-medium text-navy">{s.value}</div>
            <div className="mt-4 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
            <div className="mt-4 text-sm font-medium text-navy">{s.label}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-navy/50">
              {s.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
