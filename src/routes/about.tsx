import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import aboutHero from "@/assets/about us hero.webp";
import bg2 from "@/assets/background2.webp";
import portrait from "@/assets/about-portrait.jpg";
import craft from "@/assets/why-craft.jpg";
import testiBanner from "@/assets/testi-banner.webp";
import ctaBanner from "@/assets/cta banner.webp";
import gifts from "@/assets/cat-gift-sets.jpg";
import diary from "@/assets/cat-diary.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  ArrowRight,
  Sparkles,
  HandHeart,
  PackageCheck,
  Award,
  Gift as GiftIcon,
  UserCircle,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Giftitude Studio" },
      {
        name: "description",
        content:
          "Inside Giftitude — a small studio of curators and craftspeople building considered corporate gifts since 2017.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav variant="dark" />
      <main>
        <FadeIn>
          <Hero />
        </FadeIn>

        <FadeIn delay={60}>
          <OurStory />
        </FadeIn>

        {/* Sections below share the background2 image */}
        <div
          className="relative"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-white/80 pointer-events-none" />
          <div className="relative">
            <FadeIn delay={80}>
              <TimelineSection />
            </FadeIn>
            <FadeIn delay={80}>
              <GallerySection />
            </FadeIn>
            <FadeIn>
              <ClosingCTA />
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative isolate h-screen flex items-end overflow-hidden bg-navy">
      <motion.img
        src={aboutHero}
        alt="Giftitude studio — curated corporate gifts"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        loading="eager"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" />

      <div className="w-full px-6 pb-20 pt-40 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* eyebrow */}
          <motion.div
            className="text-xs font-bold uppercase tracking-[0.24em] text-gold/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            About Giftitude
          </motion.div>

          <div className="max-w-2xl">
            <motion.h1
              className="mt-4 font-display text-[2.75rem] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Thoughtful gifts.{" "}
              <br className="hidden sm:block" />
              <span className="italic text-gold">Stronger</span> connections.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-lg text-base leading-relaxed text-white/75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              At Giftitude, we believe every gift is an opportunity to build
              meaningful relationships. We help businesses express gratitude,
              celebrate milestones, and strengthen bonds through thoughtfully
              curated corporate gifts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-4 rounded-full bg-gold pl-7 pr-2 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_4px] hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get a Quote
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy font-bold">
                  <ArrowRight strokeWidth={2.5} size={17} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Our Story ────────────────────────────────────────────────────────────────
const values = [
  {
    icon: Sparkles,
    title: "Crafted with intention",
    desc: "Every object is selected by hand — not by algorithm.",
  },
  {
    icon: HandHeart,
    title: "Built on relationships",
    desc: "We know the workshops, the makers, and our clients by name.",
  },
  {
    icon: PackageCheck,
    title: "End-to-end ownership",
    desc: "From brief to doorstep, one team handles everything.",
  },
];

function OurStory() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat px-6 py-20 lg:px-12 lg:py-28"
      style={{ backgroundImage: `url(${testiBanner})` }}
    >
      <div className="absolute inset-0 bg-white/82" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20 lg:items-center">

          {/* Image column */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="relative group">
              <div className="overflow-hidden rounded-[2rem] shadow-luxury transition-shadow duration-500 group-hover:shadow-[0_35px_70px_-30px_oklch(0.18_0.04_250_/_0.3)]">
                <img
                  src={portrait}
                  alt="Aanya Rao, Founder of Giftitude"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              {/* floating navy year badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-navy px-6 py-5 shadow-luxury">
                <div className="font-display text-4xl leading-none text-gold">2017</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                  Est. Mumbai
                </div>
              </div>
              {/* craft thumbnail */}
              <div className="absolute -top-5 -right-4 lg:-right-8 h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-soft transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img
                  src={craft}
                  alt="Hand crafting a gift at our workshop"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="lg:col-span-7">
            {/* eyebrow — text-[11px] matches WhyUs/Categories eyebrow */}
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
              About Giftitude
            </div>
            {/* h2 — text-4xl sm:text-5xl lg:text-6xl matches WhyUs */}
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              We started with one question{" "}
              <span className="italic text-gold">nobody was asking.</span>
            </h2>

            {/* body — text-sm matches homepage body text */}
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-navy/70">
              <p>
                Giftitude was born in 2017 from a leave of absence, a leather
                diary, and a stubborn belief — that corporate gifting had been
                designed entirely around the person placing the order, not the
                person opening the box.
              </p>
              <p>
                We work with a small roster of partner workshops across
                Maharashtra, Rajasthan and Gujarat. Leatherworkers in Dharavi,
                brass turners in Moradabad, woodworkers in Jodhpur. We visit
                them, know their names, and when a brief arrives we go to the
                workshop first — not the spreadsheet.
              </p>
              <p className="font-medium text-navy/85">
                We take fewer than 400 briefs a year. Not because we can't take
                more — because that's the number we can do well.
              </p>
            </div>

            {/* value cards — matches WhyUs card pattern */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group/card flex flex-col rounded-3xl bg-[#fdfaf5] p-6 transition-all duration-400 hover:bg-white hover:shadow-float hover:-translate-y-1 border border-transparent hover:border-gold/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-gold transition-all duration-300 group-hover/card:bg-gold group-hover/card:text-navy group-hover/card:scale-110">
                      <Icon size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                      {/* card title */}
                      <div className="font-display text-lg text-navy transition-colors duration-300 group-hover/card:text-gold">{title}</div>
                      {/* card body */}
                      <div className="mt-1.5 text-xs leading-relaxed text-navy/70">{desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* founder byline */}
            <div className="mt-10 flex items-center gap-4 border-t border-navy/8 pt-6">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <img src={portrait} alt="Aanya Rao" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="mt-4 font-display text-lg text-navy sm:text-xl">
                  Gogul Tamilselvan
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40">
                  Founder
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { y: "2017", t: "Founded with a vision", d: "Founded with a mission to redefine corporate gifting in India." },
  { y: "2019", t: "Expanded product range", d: "We broadened our product range and onboarded 100+ clients." },
  { y: "2021", t: "Launched pan-India delivery", d: "Launched pan-India delivery and built gifting solutions." },
  { y: "2023", t: "Introduced sustainable gifts", d: "Introduced sustainable and eco-friendly gift collections." },
  { y: "2025", t: "Continuing to create", d: "Continuing to create meaningful gifting experiences." },
];

function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="bg-transparent px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* heading — fades in from left */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            Our Journey
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl">
            Milestones that shaped us
          </h2>
        </motion.div>

        {/* ── Desktop: horizontal animated timeline ── */}
        <div ref={ref} className="hidden lg:block">
          <div className="relative">

            {/* line draws left → right */}
            <motion.div
              className="absolute left-0 top-3 h-px bg-navy/20 origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              style={{ right: 0 }}
            />

            <div className="grid grid-cols-5">
              {milestones.map((m, i) => (
                <div key={m.y} className="relative flex flex-col items-center px-4">

                  {/* dot springs in after line passes it */}
                  <motion.div
                    className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold/40 bg-white shadow-soft"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.2 + i * 0.18,
                    }}
                  >
                    <motion.div
                      className="h-2.5 w-2.5 rounded-full bg-navy"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.35 + i * 0.18, duration: 0.25 }}
                    />
                  </motion.div>

                  {/* content fades up after dot */}
                  <motion.div
                    className="mt-7 text-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.21, 0.47, 0.32, 0.98],
                      delay: 0.45 + i * 0.18,
                    }}
                  >
                    <div className="font-display text-2xl text-navy">{m.y}</div>
                    <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-navy/70">
                      {m.t}
                    </div>
                    <div className="mt-2 text-xs leading-relaxed text-navy/50">
                      {m.d}
                    </div>
                  </motion.div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile: vertical staggered list ── */}
        <ol className="space-y-8 lg:hidden border-l border-navy/12 pl-8">
          {milestones.map((m, i) => (
            <motion.li
              key={m.y}
              className="relative"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: i * 0.1,
              }}
            >
              <div className="absolute -left-[33px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 bg-white shadow-soft">
                <div className="h-2 w-2 rounded-full bg-navy" />
              </div>
              <div className="font-display text-2xl text-navy">{m.y}</div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy/70">
                {m.t}
              </div>
              <div className="mt-1 text-xs leading-relaxed text-navy/50">
                {m.d}
              </div>
            </motion.li>
          ))}
        </ol>

      </div>
    </section>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
const galleryItems = [
  { src: craft, alt: "Premium quality craftsmanship", caption: "Premium Quality", icon: Award, desc: "We use the finest materials and finishes to ensure every detail reflects excellence." },
  { src: gifts, alt: "Gifts curated with care", caption: "Curated with Care", icon: GiftIcon, desc: "Each piece is handpicked and designed to create a meaningful and memorable experience." },
  { src: diary, alt: "Made to represent your brand", caption: "Made to Represent", icon: UserCircle, desc: "Your brand, your values, your message — beautifully expressed in every gift." },
  { src: accessories, alt: "Delivered with pride", caption: "Delivered with Pride", icon: Heart, desc: "From careful packaging to timely delivery, we ensure a seamless gifting experience." },
];

function GallerySection() {
  return (
    <section className="bg-transparent px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* centred heading */}
        <div className="mb-16 text-center">
          {/* eyebrow */}
          <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            Every gift tells a story
          </div>
          <div className="mx-auto mt-3 h-px w-8 bg-gold/50" />
          {/* h2 — text-4xl sm:text-5xl */}
          <h2 className="mt-6 font-display text-4xl leading-[1.1] text-navy sm:text-5xl">
            Thoughtfully curated.
            <br />
            <span className="italic text-gold">Beautifully delivered.</span>
          </h2>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-7">
          {galleryItems.map(({ src, alt, caption, icon: Icon, desc }, i) => (
            <motion.div
              key={caption}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-2xl transition-shadow duration-500 group-hover:shadow-luxury">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                {/* navy icon badge */}
                <div className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 flex h-[2.6rem] w-[2.6rem] items-center justify-center rounded-full border-[3px] border-white/90 bg-navy shadow-luxury transition-all duration-300 group-hover:scale-110 group-hover:bg-gold">
                  <Icon size={16} strokeWidth={1.6} className="text-gold transition-colors duration-300 group-hover:text-navy" />
                </div>
              </div>

              <div className="mt-10 flex flex-col items-center text-center px-1">
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy transition-colors duration-300 group-hover:text-gold">
                  {caption}
                </div>
                <div className="mt-2.5 h-px w-6 bg-gold/50 transition-all duration-500 group-hover:w-10" />
                <p className="mt-3 text-xs leading-relaxed text-navy/55">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Closing CTA ─────────────────────────────────────────────────────────────
function ClosingCTA() {
  return (
    <section className="bg-transparent">
      <div
        className="relative overflow-hidden bg-navy px-8 py-8 sm:px-12 sm:py-10 lg:px-20 lg:py-10"
        style={{ backgroundImage: `url(${ctaBanner})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* dark overlay so text stays crisp over the banner */}
        <div className="absolute inset-0 bg-navy/70" />
          {/* radial gold glow — top right */}
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.71 0.13 78 / 0.35), transparent 60%)" }}
          />
          {/* secondary glow — bottom left */}
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.71 0.13 78 / 0.2), transparent 60%)" }}
          />

          <div className="relative mx-auto max-w-7xl grid gap-8 lg:grid-cols-1 lg:items-center">

            {/* ── Left: copy ── */}
            <div className="max-w-3xl">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
                Work with us
              </div>
              <h2 className="mt-3 font-display text-3xl leading-[1.05] text-white sm:text-4xl lg:text-5xl">
                Tell us who you're{" "}
                <span className="italic text-gold">gifting</span>.{" "}
                We'll do the rest.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">
                Share the occasion, the count, and a sense of the recipient.
                A curator replies within one working day with a proposal.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gold pl-6 pr-1.5 py-1.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_4px] hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start a brief
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-gold font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy">
                    <ArrowRight strokeWidth={2.5} size={15} />
                  </span>
                </Link>
                <a
                  href="tel:+9178080255492"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  or call +91 78080255492
                </a>
              </div>

              {/* trust strip */}
              <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">
                {["400+ briefs delivered", "1,200+ brands served", "Reply within 1 working day"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-gold" />
                    <span className="text-xs font-medium text-white/45">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
      </div>
    </section>
  );
}
