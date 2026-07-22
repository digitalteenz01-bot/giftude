import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import aboutHero from "@/assets/about us hero.webp";
import bg2 from "@/assets/background2.webp";
import craft from "@/assets/why-craft.jpg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import testiBanner from "@/assets/testi-banner.webp";
import ctaBanner from "@/assets/cta banner.webp";
import gifts from "@/assets/cat-gift-sets.jpg";
import diary from "@/assets/cat-diary.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  ArrowRight,
  Star,
  Paintbrush,
  Truck,
  Briefcase,
  Heart,
  Target,
  Eye,
  Award,
  Gift as GiftIcon,
  UserCircle,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Giftitude Corporate Gifting" },
      {
        name: "description",
        content:
          "Giftitude is a Canadian corporate gifting company dedicated to helping businesses build stronger relationships through thoughtfully curated premium gifts.",
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
              <WhyChooseSection />
            </FadeIn>
            <FadeIn delay={80}>
              <MissionVisionSection />
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
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Hero() {
  return (
    <section className="relative isolate h-screen flex items-end overflow-hidden bg-navy">
      <motion.img
        src={aboutHero}
        alt="Giftitude — premium corporate gifting"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        loading="eager"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" />

      <div className="w-full px-6 pb-20 pt-40 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
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
              Elevating Corporate Gifting{" "}
              <br className="hidden sm:block" />
              with <span className="italic text-gold">Purpose</span>.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-lg text-base leading-relaxed text-white/75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Giftitude is a Canadian corporate gifting company dedicated to helping
              businesses build stronger relationships through thoughtfully curated
              premium gifts.
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
                  src={image2}
                  alt="Premium corporate gifts by Giftitude"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-navy px-6 py-5 shadow-luxury">
                <div className="font-display text-4xl leading-none text-gold">Canada</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                  Based & Serving
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="lg:col-span-7">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
              About Giftitude
            </div>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
              Elevating Corporate Gifting{" "}
              <span className="italic text-gold">with Purpose</span>
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-navy/70">
              <p>
                Giftitude is a Canadian corporate gifting company dedicated to helping
                businesses build stronger relationships through thoughtfully curated
                premium gifts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Giftitude ─────────────────────────────────────────────────────
const whyChooseItems = [
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Every product is carefully selected to ensure exceptional quality, durability, and elegant presentation.",
  },
  {
    icon: Paintbrush,
    title: "Custom Branding",
    desc: "Professional logo printing, laser engraving, embossing, embroidery, and premium packaging tailored to your brand.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    desc: "From product sourcing to final delivery, we ensure timely execution and consistent service.",
  },
  {
    icon: Briefcase,
    title: "Corporate Expertise",
    desc: "We understand the unique gifting needs of businesses and provide customized solutions for every occasion.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Our focus is building long-term relationships through quality products, transparent communication, and outstanding support.",
  },
];

function WhyChooseSection() {
  return (
    <section className="bg-transparent px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            Why Choose Us
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl">
            Why Choose <span className="text-gold">Giftitude?</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group/card flex flex-col rounded-3xl bg-white p-7 shadow-soft transition-all duration-400 hover:shadow-luxury hover:-translate-y-1 border border-transparent hover:border-gold/20"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-gold transition-all duration-300 group-hover/card:bg-gold group-hover/card:text-navy group-hover/card:scale-110">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <div className="font-display text-xl text-navy transition-colors duration-300 group-hover/card:text-gold">
                    {title}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-navy/65">
                    {desc}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Mission & Vision ─────────────────────────────────────────────────────────
function MissionVisionSection() {
  return (
    <section className="bg-transparent px-6 py-10 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-400 hover:shadow-luxury hover:-translate-y-1"
          >
            {/* Background image */}
            <img
              src={accessories}
              alt="Premium corporate gifts"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent transition-opacity duration-300 group-hover:from-navy/90" />

            <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[280px] sm:min-h-[320px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/20 border border-gold/40 text-gold backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110">
                  <Target size={20} strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl text-white sm:text-3xl">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/75">
                To help businesses create meaningful connections through premium corporate
                gifts that inspire appreciation, strengthen relationships, and enhance
                brand value.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-400 hover:shadow-luxury hover:-translate-y-1"
          >
            {/* Background image */}
            <img
              src={image3}
              alt="Corporate gifting vision"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent transition-opacity duration-300 group-hover:from-navy/90" />

            <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[280px] sm:min-h-[320px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/20 border border-gold/40 text-gold backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110">
                  <Eye size={20} strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl text-white sm:text-3xl">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-white/75">
                To become Canada's trusted corporate gifting partner by delivering
                innovative, sustainable, and premium gifting solutions with exceptional
                customer service.
              </p>
            </div>
          </motion.div>

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
        <div className="absolute inset-0 bg-navy/70" />
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.71 0.13 78 / 0.35), transparent 60%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.71 0.13 78 / 0.2), transparent 60%)" }}
          />

          <div className="relative mx-auto max-w-7xl grid gap-8 lg:grid-cols-1 lg:items-center">
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
                Our team replies within one working day with a proposal.
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
                <Link
                  to="/products"
                  className="hover-underline text-sm text-white/50 underline-offset-4 transition-colors duration-300 hover:text-white"
                >
                  or browse the catalogue
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">
                {["Premium quality guaranteed", "Custom branding available", "Reliable global delivery"].map((item) => (
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
