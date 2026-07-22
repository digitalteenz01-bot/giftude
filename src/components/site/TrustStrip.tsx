import { Package, Palette, LayoutGrid, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  {
    icon: Package,
    value: "500+",
    numericValue: 500,
    prefix: "",
    suffix: "+",
    label: "Premium",
    note: "Products",
  },
  {
    icon: Palette,
    value: "100%",
    numericValue: 100,
    prefix: "",
    suffix: "%",
    label: "Custom",
    note: "Branding",
  },
  {
    icon: LayoutGrid,
    value: "50+",
    numericValue: 50,
    prefix: "",
    suffix: "+",
    label: "Product",
    note: "Categories",
  },
  {
    icon: Users,
    value: "100%",
    numericValue: 100,
    prefix: "",
    suffix: "%",
    label: "Client",
    note: "Focused",
  },
];

function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "",
  inView 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1800;
    const stepTime = 16;
    const steps = Math.ceil(duration / stepTime);
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  const display = value >= 100 ? count.toLocaleString() : count.toString().padStart(2, '0');

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export function TrustStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="relative z-10 px-4 -mt-10 sm:-mt-14">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          className="rounded-[2rem] border border-gold/25 bg-[#0c1829] px-6 py-8 shadow-luxury backdrop-blur sm:px-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((s, i) => {
              const IconComponent = s.icon;
              return (
                <motion.div
                  key={s.label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="group flex items-center gap-4 justify-start pl-6 sm:pl-8 lg:justify-center lg:pl-0 cursor-default"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] text-gold transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:scale-110">
                    <IconComponent size={24} strokeWidth={1.2} className="text-gold transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-display text-2xl sm:text-3xl font-medium text-white tracking-tight select-none transition-colors duration-300 group-hover:text-gold">
                      {inView ? (
                        <AnimatedCounter
                          value={s.numericValue}
                          prefix={s.prefix}
                          suffix={s.suffix}
                          inView={inView}
                        />
                      ) : (
                        <span>{s.prefix || ""}{s.numericValue.toString().padStart(2, '0')}{s.suffix}</span>
                      )}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 mt-1 leading-normal transition-colors duration-300 group-hover:text-white/80">
                      {s.label}
                      <span className="block text-white/40 font-medium">{s.note}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
