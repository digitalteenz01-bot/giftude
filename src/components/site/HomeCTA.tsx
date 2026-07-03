import { Link } from "@tanstack/react-router";
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
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Begin a brief</div>
          <h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Tell us who you're gifting.
            <br />
            We'll do the rest.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ivory/80">
            Share occasion, count and a sense of the recipient. A curator
            will reply within one working day with a proposal.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-gold py-2.5 pl-8 pr-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-soft"
            >
              Start a quotation
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-lg font-bold text-gold transition-transform group-hover:translate-x-1">
                <ArrowRight strokeWidth={2.5} size={20} />
              </span>
            </Link>
            <Link to="/products" className="text-sm text-ivory/80 underline-offset-4 hover:text-ivory hover:underline">
              or browse the catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
