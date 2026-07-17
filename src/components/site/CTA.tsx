import cta from "@/assets/cta-gift.jpg";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-ivory sm:px-12 sm:py-24 lg:px-20">
        <div
          className="pointer-events-none absolute -top-40 right-1/3 h-[700px] w-[700px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.71 0.13 78 / 0.35), transparent 60%)" }}
        />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.24em] text-gold">Begin a brief</div>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Tell us who you're <span className="italic">gifting</span>.
              <br />
              We'll do the rest.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/75">
              Share occasion, count and a sense of the recipient. A curator
              will reply within one working day with a proposal.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="mailto:hello@giftitude.in"
                className="group inline-flex items-center gap-4 rounded-full bg-gold pl-8 pr-2.5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-soft"
              >
                Start a quotation
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-gold transition-transform group-hover:translate-x-1 font-bold text-lg">
                  <ArrowRight strokeWidth={2.5} size={20} />
                </span>
              </a>
              <a href="tel:+9178080255492" className="text-sm text-ivory/80 underline-offset-4 hover:underline">
                or call +91 78080255492
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] animate-float">
              <img
                src={cta}
                alt="Single navy gift box with gold ribbon, floating against a dark backdrop"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
