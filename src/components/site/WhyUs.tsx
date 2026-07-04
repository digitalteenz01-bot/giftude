import { Star, PenTool, Package, Truck } from "lucide-react";
import { motion } from "framer-motion";
import why from "@/assets/why-craft.jpg";

const features = [
  { icon: Star, t: "Premium quality", d: "Materials, sourcing, finishes and inspections in our Mumbai studio." },
  { icon: PenTool, t: "Customisation", d: "Foil, deboss, one-name and bespoke packaging — all in-house." },
  { icon: Package, t: "Bulk orders", d: "From 25 to 25,000 units, on-time, every time." },
  { icon: Truck, t: "Pan-India delivery", d: "White-glove logistics to 19,000+ pin codes." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.12,
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export function WhyUs() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 shadow-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Image column with hover effect */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] sm:aspect-square">
              <img
                src={why}
                alt="Hands wrapping a navy gift box with gold ribbon"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              {/* Subtle gold overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 rounded-full bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-navy shadow-soft transition-all duration-300 group-hover:shadow-luxury group-hover:bg-gold group-hover:text-navy">
                Studio · Craft · People
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="lg:col-span-7 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">Our Ethos</div>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
                Made by hand.
                <br />
                <span className="text-gold">Mostly</span> by people.
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {features.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <motion.div
                    key={f.t}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-5% 0px" }}
                    className="group/card flex flex-col rounded-3xl bg-[#fdfaf5] p-6 sm:p-8 transition-all duration-400 hover:bg-white hover:shadow-float hover:-translate-y-1 hover:border-gold/20 border border-transparent"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-gold transition-all duration-300 group-hover/card:bg-gold group-hover/card:text-navy group-hover/card:scale-110 group-hover/card:rotate-3">
                        <IconComponent size={18} strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="font-display text-lg text-navy transition-colors duration-300 group-hover/card:text-gold">{f.t}</div>
                        <div className="mt-1.5 text-xs leading-relaxed text-navy/70">{f.d}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
