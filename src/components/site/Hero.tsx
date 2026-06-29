import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-composition.jpg";

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const float = floatRef.current;
    if (!stage || !float) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 16;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 16;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      float.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    stage.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      stage.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="px-4 pt-28 sm:pt-32 lg:pt-28">
      <div
        ref={stageRef}
        className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-ivory px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[calc(100vh-9rem)] lg:px-16 lg:py-20"
      >
        {/* top meta row */}
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-navy/60">
          <span className="hidden sm:inline">Est. 2017 — Mumbai</span>
          <span>Corporate Gifting · Vol. 08</span>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Headline column */}
          <div className="lg:col-span-6">
            <h1 className="font-display text-[2.75rem] leading-[1.02] tracking-tight text-navy sm:text-6xl lg:text-[5.25rem]">
              Gifts that
              <br />
              <span className="italic text-gold">whisper</span> rather
              <br />
              than shout.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-navy/70">
              A small studio of curators and craftspeople, building enquiry-led
              corporate gifting for India's most considered brands.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-ivory shadow-soft transition-all hover:bg-navy-soft"
              >
                Request a quotation
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-navy transition-transform group-hover:rotate-45">↗</span>
              </a>
              <a href="#categories" className="text-sm font-medium text-navy underline-offset-4 hover:underline">
                Browse collections
              </a>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative lg:col-span-6 lg:h-[560px]">
            <div
              ref={floatRef}
              className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-luxury sm:max-w-lg lg:absolute lg:right-0 lg:top-1/2 lg:max-w-none lg:w-[88%] lg:-translate-y-1/2"
              style={{ willChange: "transform" }}
            >
              <img
                src={heroImg}
                alt="Layered luxury gift composition with leather diary, gold tumbler and ribboned gift box"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badge top */}
            <div className="absolute -top-3 left-2 z-10 hidden items-center gap-3 rounded-full border bg-white/95 px-3 py-2 text-xs shadow-float backdrop-blur hairline sm:flex lg:left-[-3rem] lg:top-6">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-[10px] text-gold">▶</span>
              <span className="text-navy/80">Watch the film</span>
            </div>

            {/* Floating promo cards right */}
            <div className="absolute right-2 top-4 z-10 hidden w-[200px] -rotate-2 rounded-2xl border bg-white p-4 shadow-float hairline lg:right-[-2.5rem] lg:top-2 lg:block">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">New · 2026</div>
              <div className="mt-2 font-display text-lg leading-tight text-navy">
                The Heritage Collection
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-navy/60">
                <span>14 pieces</span>
                <span>→</span>
              </div>
            </div>

            <div className="absolute bottom-6 right-[-1rem] z-10 hidden w-[230px] rotate-1 rounded-2xl border bg-navy p-5 shadow-float text-ivory hairline-gold lg:block">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Bulk enquiry</div>
              <div className="mt-2 font-display text-lg italic leading-tight">
                From 25 to 25,000 — we deliver pan-India.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
