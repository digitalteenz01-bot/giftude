import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Categories } from "@/components/site/Categories";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { HomeCTA } from "@/components/site/HomeCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giftitude — Premium Corporate Gifting in India" },
      { name: "description", content: "Editorial corporate gifting from Giftitude. Curated luxury gift sets, diaries, lamps and accessories crafted for India's most discerning brands." },
      { property: "og:title", content: "Giftitude — Premium Corporate Gifting" },
      { property: "og:description", content: "Curated luxury corporate gifts for India's most discerning brands." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

import bg2 from "@/assets/background2.webp";

import { FadeIn } from "@/components/ui/FadeIn";

function Index() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav />
      <main>
        <Hero />
        <div className="relative isolate flex flex-col bg-ivory">
          <div 
            className="absolute inset-0 -z-10 bg-fixed bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${bg2})` }}
          />
          <div className="flex flex-col">
            <FadeIn><TrustStrip /></FadeIn>
            <FadeIn delay={100}><Categories /></FadeIn>
          </div>
          <FadeIn><WhyUs /></FadeIn>
          <FadeIn><Testimonials /></FadeIn>
          <FadeIn><HomeCTA /></FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
