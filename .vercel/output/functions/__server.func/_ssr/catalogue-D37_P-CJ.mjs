import { n as cat_diary_default, r as cat_gift_sets_default, t as cat_accessories_default } from "./cat-accessories-BSM3UQ-g.mjs";
import { n as cat_lamps_default, t as cat_bottles_default } from "./cat-bottles-DNCKm9g7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogue-D37_P-CJ.js
var CATEGORIES = [
	{
		slug: "gift-sets",
		n: "01",
		title: "Premium Gift Sets",
		tagline: "Curated boxes built around a single object of joy.",
		intro: "Our flagship category. Each set is composed in-studio — a hero object surrounded by quiet supporting pieces that share a material, a colour, or a mood.",
		cover: cat_gift_sets_default,
		alt: "Navy leather presentation box with pen and silk",
		items: [
			{
				slug: "heritage-set",
				name: "The Heritage Set",
				desc: "Leather diary, brass pen and a hand-poured candle.",
				img: cat_gift_sets_default
			},
			{
				slug: "founders-set",
				name: "Founders' Set",
				desc: "Tan card holder, monogrammed key fob, silk pocket square.",
				img: cat_accessories_default
			},
			{
				slug: "winter-set",
				name: "Winter Set",
				desc: "Cashmere scarf, brass tumbler, pine candle.",
				img: "/assets/cta-gift-DH9QPCFG.jpg"
			},
			{
				slug: "atelier-set",
				name: "Atelier Set",
				desc: "Notebook, mechanical pencil, brass ruler, leather sleeve.",
				img: "/assets/hero-composition-vPfNcMGP.jpg"
			}
		]
	},
	{
		slug: "diary-power",
		n: "02",
		title: "Diary & Power Banks",
		tagline: "Leather, brass and battery in one pocket.",
		intro: "The desk objects that travel. Hand-bound diaries paired with discreet, beautifully cased power banks — the most-gifted pair of the last three years.",
		cover: cat_diary_default,
		alt: "Leather diary with matte power bank",
		items: [
			{
				slug: "leather-diary-a5",
				name: "Heritage Diary A5",
				desc: "Full-grain leather cover, 240 ivory pages.",
				img: cat_diary_default,
				material: "Full-grain leather · 240 pages"
			},
			{
				slug: "power-bank-10k",
				name: "Brass Power Bank 10k",
				desc: "Solid brass body with type-C fast charge.",
				img: cat_diary_default,
				material: "Solid brass · 10,000 mAh"
			},
			{
				slug: "executive-organiser",
				name: "Executive Organiser",
				desc: "Refillable leather organiser with pen loop.",
				img: cat_diary_default,
				material: "Leather · Refillable insert"
			},
			{
				slug: "pocket-diary-a6",
				name: "Pocket Diary A6",
				desc: "Slim everyday diary, navy linen.",
				img: cat_diary_default,
				material: "Linen · 160 pages"
			}
		]
	},
	{
		slug: "lamps",
		n: "03",
		title: "Lamps",
		tagline: "Sculpture, warmth, presence.",
		intro: "Light as an object. Made in small batches with brass, iron and hand-blown glass — gifted to mark a new home, an office, or a milestone.",
		cover: cat_lamps_default,
		alt: "Sculptural brass and navy desk lamp",
		items: [
			{
				slug: "atrium-lamp",
				name: "Atrium Desk Lamp",
				desc: "Solid brass arm, navy enamel shade.",
				img: cat_lamps_default
			},
			{
				slug: "monolith-lamp",
				name: "Monolith Lamp",
				desc: "Cast iron base, linen shade.",
				img: cat_lamps_default
			},
			{
				slug: "pebble-lamp",
				name: "Pebble Side Lamp",
				desc: "Hand-blown amber glass.",
				img: cat_lamps_default
			}
		]
	},
	{
		slug: "bottles",
		n: "04",
		title: "Bottles & Mugs",
		tagline: "Daily rituals, considered.",
		intro: "The objects your team will reach for every day. Stainless, ceramic and brass — finished to feel like nothing else on the desk.",
		cover: cat_bottles_default,
		alt: "Matte navy bottle with ivory and gold mug",
		items: [
			{
				slug: "monolith-bottle",
				name: "Monolith Bottle",
				desc: "Matte navy stainless, 750ml.",
				img: cat_bottles_default
			},
			{
				slug: "atelier-mug",
				name: "Atelier Mug",
				desc: "Ivory ceramic with gold rim.",
				img: cat_bottles_default
			},
			{
				slug: "brass-tumbler",
				name: "Brass Tumbler",
				desc: "Hand-spun, double walled.",
				img: cat_bottles_default
			},
			{
				slug: "studio-flask",
				name: "Studio Flask",
				desc: "Vacuum, 500ml, navy.",
				img: cat_bottles_default
			}
		]
	},
	{
		slug: "accessories",
		n: "05",
		title: "Accessories",
		tagline: "The small things gifted with intention.",
		intro: "The grace notes — card holders, keychains, ties, trays. Often the most-remembered piece in a set.",
		cover: cat_accessories_default,
		alt: "Leather cardholder, brass keychain and silk tie",
		items: [
			{
				slug: "card-holder",
				name: "Card Holder",
				desc: "Tan leather, six slots.",
				img: cat_accessories_default
			},
			{
				slug: "brass-keychain",
				name: "Brass Keychain",
				desc: "Hand-finished, monogrammable.",
				img: cat_accessories_default
			},
			{
				slug: "silk-tie",
				name: "Silk Tie",
				desc: "Hand-rolled, navy / gold.",
				img: cat_accessories_default
			},
			{
				slug: "leather-tray",
				name: "Leather Tray",
				desc: "Desktop catch-all.",
				img: cat_accessories_default
			}
		]
	}
];
function getCategory(slug) {
	return CATEGORIES.find((c) => c.slug === slug);
}
//#endregion
export { getCategory as n, CATEGORIES as t };
