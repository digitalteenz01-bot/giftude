import heroBgImgDesktop from "@/assets/background.webp";
import heroBgImgMobile from "@/assets/background mobile.webp";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
};

export function Hero() {
  return (
    <section 
      id="top" 
      className="relative z-0 overflow-hidden bg-navy pt-28 pb-10 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-32 min-h-screen flex items-start sm:items-center"
    >
      {/* Background with subtle zoom animation */}
      <motion.picture
        className="absolute inset-0 -z-10 h-full w-full"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <source media="(min-width: 640px)" srcSet={heroBgImgDesktop} />
        <img src={heroBgImgMobile} alt="Hero background" className="h-full w-full object-cover object-center" />
      </motion.picture>

      <div className="relative w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-8">
            {/* Headline column */}
            <div className="lg:col-span-6">
              {/* Staggered text reveal */}
              <h1 className="font-display text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
                <motion.span
                  className="inline-block"
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  Gifts that
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  <span className="text-gold">whisper</span> rather
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  than shout.
                </motion.span>
              </h1>

              {/* Paragraph fade up */}
              <motion.p
                className="mt-8 max-w-md text-base leading-relaxed text-white/80"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.9}
              >
                A small studio of curators and craftspeople, building enquiry-led
                corporate gifting for India's most considered brands.
              </motion.p>

              {/* Buttons stagger in */}
              <motion.div
                className="mt-10 flex flex-wrap items-center gap-5"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1.1}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-4 rounded-full bg-ivory pl-7 pr-2 py-2 text-sm font-semibold text-navy shadow-soft transition-all duration-300 hover:bg-white hover:shadow-luxury hover:scale-[1.02] active:scale-[0.98]"
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

      {/* Scroll indicator — subtle bounce at bottom */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <motion.div
          className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
