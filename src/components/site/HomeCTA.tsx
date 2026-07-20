import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ctaBanner from "@/assets/cta banner.webp";
import { ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section 
      className="relative isolate w-full overflow-hidden bg-navy bg-cover bg-center py-12 sm:py-16 text-ivory"
      style={{ backgroundImage: `url("${ctaBanner}")` }}
    >
      <div className="absolute inset-0 -z-10 bg-navy/50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="text-xs uppercase tracking-[0.24em] text-gold animate-shimmer bg-clip-text">Begin a brief</div>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              You Bring the Occasion.
              <br />
              We Create the Experience.
            </h2>
          </motion.div>
          <motion.p
            className="mt-6 text-base leading-relaxed text-ivory/80"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            From product selection and custom branding to premium packaging and
            worldwide delivery, we handle every detail — so you can focus on building
            meaningful relationships.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-gold py-2.5 pl-8 pr-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_4px] hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a quotation
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-lg font-bold text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy">
                <ArrowRight strokeWidth={2.5} size={20} />
              </span>
            </Link>
            <Link
              to="/products"
              className="hover-underline text-sm text-ivory/80 underline-offset-4 transition-colors duration-300 hover:text-ivory"
            >
              or browse the catalogue
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
