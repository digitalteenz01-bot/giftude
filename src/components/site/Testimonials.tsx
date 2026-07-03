import { Star } from "lucide-react";
import testiBanner from "@/assets/testi-banner.webp";
import { useState, useEffect } from "react";

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

// Duplicate items to allow smooth sliding showing 2 at a time
const sliderItems = [...items, ...items];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative isolate w-full bg-cover bg-center py-12 sm:py-20"
      style={{ backgroundImage: `url("${testiBanner}")` }}
    >
      <div className="absolute inset-0 -z-10 bg-white/40" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            In their words
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl">
            Trusted by the <span className="text-gold">best.</span>
          </h2>
        </div>
        
        {/* Slider Container */}
        <div className="mt-16 overflow-hidden [--items-to-show:1] lg:[--items-to-show:2]">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(calc(-100% * ${index} / var(--items-to-show)))` }}
          >
            {sliderItems.map((t, i) => (
              <div 
                key={i}
                className="w-full shrink-0 basis-full px-3 lg:basis-1/2"
              >
                <div className="flex h-full flex-col justify-between rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
                  <div>
                    <div className="mb-6 flex gap-1 text-gold">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="font-display text-lg leading-relaxed text-navy sm:text-xl">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-4 border-t border-navy/5 pt-6">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy/5 font-display text-lg text-gold">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-navy">{t.author}</div>
                      <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-navy/60">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="mt-10 flex justify-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === i ? "w-8 bg-gold" : "w-2.5 bg-navy/20 hover:bg-navy/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
