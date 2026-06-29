import { useState } from "react";

const items = [
  {
    quote:
      "Giftitude built our entire founder-gifting programme for three years running. They are the only vendor we never have to brief twice.",
    author: "Priya Nair",
    role: "Head of People, Polaris Bank",
  },
  {
    quote:
      "The samples arrived in a box more considered than most of the gifts we'd sent before. That alone closed it for us.",
    author: "Rohan Mehta",
    role: "CMO, Northwind Cloud",
  },
  {
    quote:
      "Eighteen hundred hampers, fourteen cities, zero complaints. That number tells the whole story.",
    author: "Aisha Khan",
    role: "Events Lead, Vesper Group",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  return (
    <section className="bg-ivory px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-xs uppercase tracking-[0.24em] text-gold">In their words</div>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <div className="font-display text-[7rem] leading-none text-gold/40">"</div>
            <blockquote className="-mt-12 font-display text-3xl leading-snug text-navy sm:text-4xl lg:text-5xl">
              {t.quote}
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-14 bg-navy" />
              <div>
                <div className="font-medium text-navy">{t.author}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-navy/55">
                  {t.role}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:col-span-3 lg:justify-end">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-10 bg-navy" : "w-2 bg-navy/25 hover:bg-navy/50"
                }`}
              />
            ))}
            <button
              onClick={() => setI((i + 1) % items.length)}
              className="ml-3 grid h-11 w-11 place-items-center rounded-full bg-navy text-gold transition-transform hover:rotate-12"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
