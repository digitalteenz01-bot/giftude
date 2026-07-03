import { Star, PenTool, Package, Truck } from "lucide-react";
import why from "@/assets/why-craft.jpg";

const features = [
  { icon: Star, t: "Premium quality", d: "Materials, sourcing, finishes and inspections in our Mumbai studio." },
  { icon: PenTool, t: "Customisation", d: "Foil, deboss, one-name and bespoke packaging — all in-house." },
  { icon: Package, t: "Bulk orders", d: "From 25 to 25,000 units, on-time, every time." },
  { icon: Truck, t: "Pan-India delivery", d: "White-glove logistics to 19,000+ pin codes." },
];

export function WhyUs() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 shadow-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] sm:aspect-square">
              <img
                src={why}
                alt="Hands wrapping a navy gift box with gold ribbon"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 rounded-full bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-navy shadow-soft">
                Studio · Craft · People
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">Our Ethos</div>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              Made by hand.
              <br />
              <span className="text-gold">Mostly</span> by people.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {features.map((f) => {
                const IconComponent = f.icon;
                return (
                  <div
                    key={f.t}
                    className="flex flex-col rounded-3xl bg-[#fdfaf5] p-6 sm:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-gold">
                        <IconComponent size={18} strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="font-display text-lg text-navy">{f.t}</div>
                        <div className="mt-1.5 text-xs leading-relaxed text-navy/70">{f.d}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
