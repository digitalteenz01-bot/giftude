import { Gift, Package, Award, IndianRupee } from "lucide-react";

const stats = [
  {
    icon: Gift,
    value: "1,200+",
    label: "Brands & Clients",
    note: "Partnered",
  },
  {
    icon: Package,
    value: "500+",
    label: "Curated Products",
    note: "In Our Catalogue",
  },
  {
    icon: Award,
    value: "08",
    label: "Years of Crafting",
    note: "Since 2017",
  },
  {
    icon: IndianRupee,
    value: "₹20Cr+",
    label: "Gifts Delivered",
    note: "Across India",
  },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 px-4 -mt-10 sm:-mt-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-gold/25 bg-[#0c1829] px-6 py-8 shadow-luxury backdrop-blur sm:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((s) => {
              const IconComponent = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-4 justify-start pl-6 sm:pl-8 lg:justify-center lg:pl-0 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] text-gold">
                    <IconComponent size={24} strokeWidth={1.2} className="text-gold" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-display text-2xl sm:text-3xl font-medium text-white tracking-tight select-none">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 mt-1 leading-normal">
                      {s.label}
                      <span className="block text-white/40 font-medium">{s.note}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

