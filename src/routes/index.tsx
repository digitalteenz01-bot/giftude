import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Categories } from "@/components/site/Categories";
import {
  FeaturedGiftSets,
  FeaturedDiary,
  FeaturedLamps,
  FeaturedAccessories,
} from "@/components/site/Featured";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giftitude — Premium Corporate Gifting in India" },
      {
        name: "description",
        content:
          "Editorial corporate gifting from Giftitude. Curated luxury gift sets, diaries, lamps and accessories crafted for India's most discerning brands.",
      },
      { property: "og:title", content: "Giftitude — Premium Corporate Gifting" },
      {
        property: "og:description",
        content:
          "Curated luxury corporate gifts for India's most discerning brands.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <FeaturedGiftSets />
        <FeaturedDiary />
        <FeaturedLamps />
        <FeaturedAccessories />
        <WhyUs />
        <Process />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
