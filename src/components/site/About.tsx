import portrait from "@/assets/about-portrait.jpg";

export function About() {
  return (
    <section id="about" className="bg-white px-4 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxury">
            <img
              src={portrait}
              alt="Founder of Giftitude holding a luxury gift box"
              loading="lazy"
              className="h-[620px] w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-10">
          <div className="text-xs uppercase tracking-[0.24em] text-gold">Our House</div>
          <h2 className="mt-3 font-display text-5xl leading-tight text-navy sm:text-6xl">
            A studio,
            <br />
            not a <span className="italic">storefront</span>.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-navy/75">
            Giftitude began in 2017 as a small atelier serving four founders
            and their families. Today we curate corporate gifting programmes
            for over twelve hundred Indian brands — but the rhythm hasn't
            changed. Every object passes a hand before it passes a hallway.
          </p>

          <figure className="mt-10 max-w-lg rounded-3xl border-l-2 border-gold pl-6">
            <blockquote className="font-display text-2xl italic leading-snug text-navy">
              "A great gift is a quiet promise — that you noticed, that you
              cared, that you took the time."
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-navy/60">
              Anaya Rao · Founder
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
