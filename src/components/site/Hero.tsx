import heroBgImg1 from "@/assets/background.webp";
import heroBgImg2 from "@/assets/imag2.webp";
import heroBgImgMobile from "@/assets/background mobile.webp";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    bg: heroBgImg1,
    heading: ["Beyond the Gift.", "Elevating", "Every", "Brand Connection."],
    gold: "Elevating",
    desc: "Giftitude creates premium corporate gifting experiences that inspire appreciation, strengthen relationships, and showcase your brand with sophistication.",
  },
  {
    bg: heroBgImg2,
    heading: ["Premium Gifts.", "Meaningful", "Business", "Relationships."],
    gold: "Meaningful",
    desc: "From employee appreciation and client onboarding to executive gifting — we deliver thoughtfully curated solutions tailored to every business need.",
  },
];

const textReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[current];

  return (
    <section 
      id="top" 
      className="relative z-0 overflow-hidden bg-navy pt-28 pb-10 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-32 min-h-screen flex items-start sm:items-center"
    >
      {/* Background images with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 -z-10 h-full w-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <picture className="h-full w-full">
            <source media="(min-width: 640px)" srcSet={slide.bg} />
            <img
              src={current === 0 ? heroBgImgMobile : slide.bg}
              alt="Hero background"
              className="h-full w-full object-cover object-center"
            />
          </picture>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-8">
            {/* Headline column */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Staggered text reveal */}
                  <h1 className="font-display text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
                    <motion.span
                      className="inline-block"
                      variants={textReveal}
                      custom={0}
                    >
                      {slide.heading[0]}
                    </motion.span>
                    <br />
                    <motion.span
                      className="inline-block"
                      variants={textReveal}
                      custom={1}
                    >
                      <span className="text-gold">{slide.gold}</span> {slide.heading[2]}
                    </motion.span>
                    <br />
                    <motion.span
                      className="inline-block"
                      variants={textReveal}
                      custom={2}
                    >
                      {slide.heading[3]}
                    </motion.span>
                  </h1>

                  {/* Paragraph fade up */}
                  <motion.p
                    className="mt-8 max-w-md text-base leading-relaxed text-white/80"
                    variants={fadeUp}
                    custom={0.9}
                  >
                    {slide.desc}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Buttons — always visible */}
              <motion.div
                className="mt-10 flex flex-wrap items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-4 rounded-full bg-ivory pl-7 pr-2 py-2 text-sm font-semibold text-navy shadow-soft transition-all duration-300 hover:bg-white hover:shadow-luxury hover:scale-105 active:scale-[0.98]"
                >
                  Request a quotation
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:bg-navy group-hover:text-gold font-bold text-lg">
                    <ArrowRight strokeWidth={2.5} size={18} />
                  </span>
                </a>
                <a
                  href="#categories"
                  className="hover-underline text-sm font-medium text-white underline-offset-4 transition-colors hover:text-gold"
                >
                  Browse collections
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:bottom-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-gold shadow-[0_0_8px_2px] shadow-gold/30"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
