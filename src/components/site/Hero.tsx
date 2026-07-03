import heroBgImgDesktop from "@/assets/background.webp";
import heroBgImgMobile from "@/assets/background mobile.webp";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="top" 
      className="relative z-0 overflow-hidden bg-navy pt-28 pb-10 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-32 min-h-screen flex items-start sm:items-center"
    >
      <picture className="absolute inset-0 -z-10 h-full w-full">
        <source media="(min-width: 640px)" srcSet={heroBgImgDesktop} />
        <img src={heroBgImgMobile} alt="Hero background" className="h-full w-full object-cover object-center" />
      </picture>
      <div
        className="relative w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Headline column */}
          <div className="lg:col-span-6">
            <h1 className="font-display text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
              Gifts that
              <br />
              <span className="text-gold">whisper</span> rather
              <br />
              than shout.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/80">
              A small studio of curators and craftspeople, building enquiry-led
              corporate gifting for India's most considered brands.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 rounded-full bg-ivory pl-7 pr-2 py-2 text-sm font-semibold text-navy shadow-soft transition-all hover:bg-white"
              >
                Request a quotation
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-navy transition-transform group-hover:translate-x-1 font-bold text-lg">
                  <ArrowRight strokeWidth={2.5} size={18} />
                </span>
              </a>
              <a href="#categories" className="text-sm font-medium text-white underline-offset-4 hover:underline">
                Browse collections
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
