import { Star } from "lucide-react";
import testiBanner from "@/assets/testi-banner.webp";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  }, [index]);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // swiped left — next
        setDirection(1);
        setIndex((prev) => (prev + 1) % items.length);
      } else {
        // swiped right — prev
        setDirection(-1);
        setIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
  };

  return (
    <section 
      className="relative isolate w-full bg-cover bg-center py-12 sm:py-20 overflow-hidden"
      style={{ backgroundImage: `url("${testiBanner}")` }}
    >
      <div className="absolute inset-0 -z-10 bg-white/40" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            In their words
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl">
            Trusted by the <span className="text-gold">best.</span>
          </h2>
        </motion.div>
        
        {/* Slider Container with touch/swipe support */}
        <div
          className="mt-16 overflow-hidden [--items-to-show:1] lg:[--items-to-show:2]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(calc(-100% * ${index} / var(--items-to-show)))` }}
          >
            {sliderItems.map((t, i) => (
              <div 
                key={i}
                className="w-full shrink-0 basis-full px-3 lg:basis-1/2"
              >
                <div className="group/card flex h-full flex-col justify-between rounded-[2rem] bg-white p-8 shadow-soft sm:p-10 transition-all duration-400 hover:shadow-luxury hover:-translate-y-1 hover:border-gold/15 border border-transparent">
                  <div>
                    {/* Stars with staggered animation */}
                    <div className="mb-6 flex gap-1 text-gold">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-current transition-transform duration-300 group-hover/card:scale-110"
                          style={{ transitionDelay: `${j * 50}ms` }}
                        />
                      ))}
                    </div>
                    <blockquote className="font-display text-lg leading-relaxed text-navy sm:text-xl transition-colors duration-300 group-hover/card:text-navy/90">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-4 border-t border-navy/5 pt-6">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy/5 font-display text-lg text-gold transition-all duration-300 group-hover/card:bg-gold/15 group-hover/card:scale-105">
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
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === i
                  ? "w-8 bg-gold shadow-[0_0_8px_2px] shadow-gold/30"
                  : "w-2.5 bg-navy/20 hover:bg-navy/40 hover:scale-125"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Swipe hint on mobile */}
        <div className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-navy/30 sm:hidden">
          Swipe to navigate
        </div>
      </div>
    </section>
  );
}
