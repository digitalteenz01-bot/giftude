import gifts from "@/assets/cat-gift-sets.jpg";
import diary from "@/assets/cat-diary.jpg";
import lamps from "@/assets/cat-lamps.jpg";
import bottles from "@/assets/cat-bottles.jpg";
import accessories from "@/assets/cat-accessories.jpg";
import hero from "@/assets/hero-composition.jpg";
import cta from "@/assets/cta-gift.jpg";

export type Product = {
  slug: string;
  name: string;
  desc: string;
  img: string;
  material?: string;
};

export type CategorySlug =
  | "gift-sets"
  | "diary-power"
  | "lamps"
  | "bottles"
  | "accessories";

export type Category = {
  slug: CategorySlug;
  n: string;
  title: string;
  tagline: string;
  intro: string;
  cover: string;
  alt: string;
  items: Product[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "gift-sets",
    n: "01",
    title: "Premium Gift Sets",
    tagline: "Curated boxes built around a single object of joy.",
    intro:
      "Our flagship category. Each set is composed in-studio — a hero object surrounded by quiet supporting pieces that share a material, a colour, or a mood.",
    cover: gifts,
    alt: "Navy leather presentation box with pen and silk",
    items: [
      { slug: "heritage-set", name: "The Heritage Set", desc: "Leather diary, brass pen and a hand-poured candle.", img: gifts },
      { slug: "founders-set", name: "Founders' Set", desc: "Tan card holder, monogrammed key fob, silk pocket square.", img: accessories },
      { slug: "winter-set", name: "Winter Set", desc: "Cashmere scarf, brass tumbler, pine candle.", img: cta },
      { slug: "atelier-set", name: "Atelier Set", desc: "Notebook, mechanical pencil, brass ruler, leather sleeve.", img: hero },
    ],
  },
  {
    slug: "diary-power",
    n: "02",
    title: "Diary & Power Banks",
    tagline: "Leather, brass and battery in one pocket.",
    intro:
      "The desk objects that travel. Hand-bound diaries paired with discreet, beautifully cased power banks — the most-gifted pair of the last three years.",
    cover: diary,
    alt: "Leather diary with matte power bank",
    items: [
      { slug: "leather-diary-a5", name: "Heritage Diary A5", desc: "Full-grain leather cover, 240 ivory pages.", img: diary, material: "Full-grain leather · 240 pages" },
      { slug: "power-bank-10k", name: "Brass Power Bank 10k", desc: "Solid brass body with type-C fast charge.", img: diary, material: "Solid brass · 10,000 mAh" },
      { slug: "executive-organiser", name: "Executive Organiser", desc: "Refillable leather organiser with pen loop.", img: diary, material: "Leather · Refillable insert" },
      { slug: "pocket-diary-a6", name: "Pocket Diary A6", desc: "Slim everyday diary, navy linen.", img: diary, material: "Linen · 160 pages" },
    ],
  },
  {
    slug: "lamps",
    n: "03",
    title: "Lamps",
    tagline: "Sculpture, warmth, presence.",
    intro:
      "Light as an object. Made in small batches with brass, iron and hand-blown glass — gifted to mark a new home, an office, or a milestone.",
    cover: lamps,
    alt: "Sculptural brass and navy desk lamp",
    items: [
      { slug: "atrium-lamp", name: "Atrium Desk Lamp", desc: "Solid brass arm, navy enamel shade.", img: lamps },
      { slug: "monolith-lamp", name: "Monolith Lamp", desc: "Cast iron base, linen shade.", img: lamps },
      { slug: "pebble-lamp", name: "Pebble Side Lamp", desc: "Hand-blown amber glass.", img: lamps },
    ],
  },
  {
    slug: "bottles",
    n: "04",
    title: "Bottles & Mugs",
    tagline: "Daily rituals, considered.",
    intro:
      "The objects your team will reach for every day. Stainless, ceramic and brass — finished to feel like nothing else on the desk.",
    cover: bottles,
    alt: "Matte navy bottle with ivory and gold mug",
    items: [
      { slug: "monolith-bottle", name: "Monolith Bottle", desc: "Matte navy stainless, 750ml.", img: bottles },
      { slug: "atelier-mug", name: "Atelier Mug", desc: "Ivory ceramic with gold rim.", img: bottles },
      { slug: "brass-tumbler", name: "Brass Tumbler", desc: "Hand-spun, double walled.", img: bottles },
      { slug: "studio-flask", name: "Studio Flask", desc: "Vacuum, 500ml, navy.", img: bottles },
    ],
  },
  {
    slug: "accessories",
    n: "05",
    title: "Accessories",
    tagline: "The small things gifted with intention.",
    intro:
      "The grace notes — card holders, keychains, ties, trays. Often the most-remembered piece in a set.",
    cover: accessories,
    alt: "Leather cardholder, brass keychain and silk tie",
    items: [
      { slug: "card-holder", name: "Card Holder", desc: "Tan leather, six slots.", img: accessories },
      { slug: "brass-keychain", name: "Brass Keychain", desc: "Hand-finished, monogrammable.", img: accessories },
      { slug: "silk-tie", name: "Silk Tie", desc: "Hand-rolled, navy / gold.", img: accessories },
      { slug: "leather-tray", name: "Leather Tray", desc: "Desktop catch-all.", img: accessories },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
