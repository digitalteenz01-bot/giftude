import { o as __toESM } from "../_runtime.mjs";
import { n as cat_diary_default, r as cat_gift_sets_default, t as cat_accessories_default } from "./cat-accessories-BSM3UQ-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, a as Package, g as Award, i as PenTool, n as Truck, p as Gift, r as Star, u as IndianRupee } from "../_libs/lucide-react.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { n as Nav, t as Footer } from "./Footer-C_3aJ_dT.mjs";
import { n as cta_banner_default, r as why_craft_default, t as background2_default } from "./cta banner-e-_pEaSD.mjs";
import { t as testi_banner_default } from "./testi-banner-CDQAbtRd.mjs";
import { t as FadeIn } from "./FadeIn-DoUTg1Rw.mjs";
import { n as cat_lamps_default, t as cat_bottles_default } from "./cat-bottles-DNCKm9g7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CL0iKcdi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var background_default = "/assets/background-CB8DJXM4.webp";
var background_mobile_default = "/assets/background%20mobile-b4hJSDBP.webp";
var textReveal = {
	hidden: {
		opacity: 0,
		y: 30
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: .3 + i * .15,
			duration: .7,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		}
	})
};
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: (delay) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay,
			duration: .6,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		}
	})
};
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative z-0 overflow-hidden bg-navy pt-28 pb-10 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-32 min-h-screen flex items-start sm:items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.picture, {
				className: "absolute inset-0 -z-10 h-full w-full",
				initial: { scale: 1.08 },
				animate: { scale: 1 },
				transition: {
					duration: 1.8,
					ease: [
						.25,
						.46,
						.45,
						.94
					]
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					media: "(min-width: 640px)",
					srcSet: background_default
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: background_mobile_default,
					alt: "Hero background",
					className: "h-full w-full object-cover object-center"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-7xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											className: "inline-block",
											variants: textReveal,
											initial: "hidden",
											animate: "visible",
											custom: 0,
											children: "Gifts that"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
											className: "inline-block",
											variants: textReveal,
											initial: "hidden",
											animate: "visible",
											custom: 1,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold",
												children: "whisper"
											}), " rather"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											className: "inline-block",
											variants: textReveal,
											initial: "hidden",
											animate: "visible",
											custom: 2,
											children: "than shout."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
									className: "mt-8 max-w-md text-base leading-relaxed text-white/80",
									variants: fadeUp,
									initial: "hidden",
									animate: "visible",
									custom: .9,
									children: "A small studio of curators and craftspeople, building enquiry-led corporate gifting for India's most considered brands."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									className: "mt-10 flex flex-wrap items-center gap-5",
									variants: fadeUp,
									initial: "hidden",
									animate: "visible",
									custom: 1.1,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "group inline-flex items-center gap-4 rounded-full bg-ivory pl-7 pr-2 py-2 text-sm font-semibold text-navy shadow-soft transition-all duration-300 hover:bg-white hover:shadow-luxury hover:scale-[1.02] active:scale-[0.98]",
										children: ["Request a quotation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:bg-navy group-hover:text-gold font-bold text-lg",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												strokeWidth: 2.5,
												size: 18
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#categories",
										className: "hover-underline text-sm font-medium text-white underline-offset-4 transition-colors hover:text-gold",
										children: "Browse collections"
									})]
								})
							]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:bottom-10",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.6,
					duration: .8
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-[0.2em] text-white/40",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent",
					animate: { scaleY: [
						.5,
						1,
						.5
					] },
					transition: {
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut"
					}
				})]
			})
		]
	});
}
var stats = [
	{
		icon: Gift,
		value: "1,200+",
		numericValue: 1200,
		suffix: "+",
		label: "Brands & Clients",
		note: "Partnered"
	},
	{
		icon: Package,
		value: "500+",
		numericValue: 500,
		suffix: "+",
		label: "Curated Products",
		note: "In Our Catalogue"
	},
	{
		icon: Award,
		value: "08",
		numericValue: 8,
		suffix: "",
		label: "Years of Crafting",
		note: "Since 2017"
	},
	{
		icon: IndianRupee,
		value: "₹20Cr+",
		numericValue: 20,
		prefix: "₹",
		suffix: "Cr+",
		label: "Gifts Delivered",
		note: "Across India"
	}
];
function AnimatedCounter({ value, prefix = "", suffix = "", inView }) {
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let start = 0;
		const end = value;
		const duration = 1800;
		const stepTime = 16;
		const increment = end / Math.ceil(duration / stepTime);
		const timer = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else setCount(Math.floor(start));
		}, stepTime);
		return () => clearInterval(timer);
	}, [inView, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
		prefix,
		value >= 100 ? count.toLocaleString() : count.toString().padStart(2, "0"),
		suffix
	] });
}
var cardVariants$2 = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: .95
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: .2 + i * .1,
			duration: .5,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		}
	})
};
function TrustStrip() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-10% 0px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-10 px-4 -mt-10 sm:-mt-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				ref,
				className: "rounded-[2rem] border border-gold/25 bg-[#0c1829] px-6 py-8 shadow-luxury backdrop-blur sm:px-10",
				initial: {
					opacity: 0,
					y: 30
				},
				animate: inView ? {
					opacity: 1,
					y: 0
				} : {},
				transition: {
					duration: .6,
					ease: [
						.21,
						.47,
						.32,
						.98
					]
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10",
					children: stats.map((s, i) => {
						const IconComponent = s.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							custom: i,
							variants: cardVariants$2,
							initial: "hidden",
							animate: inView ? "visible" : "hidden",
							className: "group flex items-center gap-4 justify-start pl-6 sm:pl-8 lg:justify-center lg:pl-0 cursor-default",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] text-gold transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {
									size: 24,
									strokeWidth: 1.2,
									className: "text-gold transition-transform duration-300 group-hover:scale-110"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl sm:text-3xl font-medium text-white tracking-tight select-none transition-colors duration-300 group-hover:text-gold",
									children: inView ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
										value: s.numericValue,
										prefix: s.prefix,
										suffix: s.suffix,
										inView
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										s.prefix || "",
										s.numericValue.toString().padStart(2, "0"),
										s.suffix
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] font-semibold uppercase tracking-wider text-white/60 mt-1 leading-normal transition-colors duration-300 group-hover:text-white/80",
									children: [s.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-white/40 font-medium",
										children: s.note
									})]
								})]
							})]
						}, s.label);
					})
				})
			})
		})
	});
}
var cats = [
	{
		title: "Premium Gift Sets",
		desc: "Curated boxes with a purpose and the finest of the finest.",
		img: cat_gift_sets_default,
		alt: "Navy leather presentation box with pen and silk",
		span: "lg:col-span-6 lg:row-span-2",
		slug: "gift-sets"
	},
	{
		title: "Diary & Power Banks",
		desc: "Leather, brass and battery in one pocket.",
		img: cat_diary_default,
		alt: "Leather diary with matte power bank",
		span: "lg:col-span-3",
		slug: "diary-power"
	},
	{
		title: "Lamps",
		desc: "Sculptural, warm and purposeful.",
		img: cat_lamps_default,
		alt: "Sculptural brass and navy desk lamp",
		span: "lg:col-span-3",
		slug: "lamps"
	},
	{
		title: "Bottles & Mugs",
		desc: "Daily rituals, considered.",
		img: cat_bottles_default,
		alt: "Matte navy bottle with ivory and gold mug",
		span: "lg:col-span-3",
		slug: "bottles"
	},
	{
		title: "Accessories",
		desc: "The final things that tie it together.",
		img: cat_accessories_default,
		alt: "Leather cardholder, brass keychain and silk tie",
		span: "lg:col-span-3",
		slug: "accessories"
	}
];
var cardVariants$1 = {
	hidden: {
		opacity: 0,
		y: 30,
		scale: .97
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: i * .1,
			duration: .6,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		}
	})
};
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "categories",
		className: "px-4 pb-24 pt-12 sm:pb-28 sm:pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "max-w-xl",
					initial: {
						opacity: 0,
						x: -20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-10% 0px"
					},
					transition: {
						duration: .6,
						ease: [
							.21,
							.47,
							.32,
							.98
						]
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.24em] text-gold",
						children: "Catalogue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-5xl leading-[1.05] text-navy sm:text-6xl",
						children: [
							"Five rooms,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "one house."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					className: "max-w-sm text-sm leading-relaxed text-navy/70",
					initial: {
						opacity: 0,
						x: 20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-10% 0px"
					},
					transition: {
						duration: .6,
						delay: .15,
						ease: [
							.21,
							.47,
							.32,
							.98
						]
					},
					children: "Every category is curated by hand — no marketplace, no third-party warehouses. What we share is what we make."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[250px]",
				children: cats.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					custom: i,
					variants: cardVariants$1,
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-5% 0px"
					},
					className: c.span,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$category",
						params: { category: c.slug },
						className: "group relative block h-full overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:shadow-luxury",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: c.alt,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent transition-opacity duration-500 group-hover:from-navy/95" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-gold/5 to-transparent" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full min-h-[250px] flex-col justify-end p-6 text-ivory sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl leading-tight sm:text-3xl transition-transform duration-500 group-hover:-translate-y-1",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 max-w-xs text-sm text-ivory/80 leading-relaxed transition-all duration-500 group-hover:text-ivory/95",
									children: c.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center gap-2 text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group-hover:tracking-[0.3em]",
										children: "Explore"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:text-white",
										children: "→"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold to-gold-soft transition-all duration-700 group-hover:w-full" })
							]
						})]
					})
				}, c.title))
			})]
		})
	});
}
var features = [
	{
		icon: Star,
		t: "Premium quality",
		d: "Materials, sourcing, finishes and inspections in our Mumbai studio."
	},
	{
		icon: PenTool,
		t: "Customisation",
		d: "Foil, deboss, one-name and bespoke packaging — all in-house."
	},
	{
		icon: Package,
		t: "Bulk orders",
		d: "From 25 to 25,000 units, on-time, every time."
	},
	{
		icon: Truck,
		t: "Pan-India delivery",
		d: "White-glove logistics to 19,000+ pin codes."
	}
];
var cardVariants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: .2 + i * .12,
			duration: .5,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		}
	})
};
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "w-full bg-white py-16 sm:py-24 shadow-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "lg:col-span-5 relative",
					initial: {
						opacity: 0,
						x: -30
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-10% 0px"
					},
					transition: {
						duration: .7,
						ease: [
							.21,
							.47,
							.32,
							.98
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-[2rem] aspect-[4/5] sm:aspect-square",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: why_craft_default,
								alt: "Hands wrapping a navy gift box with gold ribbon",
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-6 left-6 rounded-full bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-navy shadow-soft transition-all duration-300 group-hover:shadow-luxury group-hover:bg-gold group-hover:text-navy",
								children: "Studio · Craft · People"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 lg:pl-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-10% 0px"
						},
						transition: {
							duration: .6,
							ease: [
								.21,
								.47,
								.32,
								.98
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-bold uppercase tracking-[0.24em] text-gold",
							children: "Our Ethos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-6xl",
							children: [
								"Made by hand.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "Mostly"
								}),
								" by people."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-5 sm:grid-cols-2",
						children: features.map((f, i) => {
							const IconComponent = f.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								custom: i,
								variants: cardVariants,
								initial: "hidden",
								whileInView: "visible",
								viewport: {
									once: true,
									margin: "-5% 0px"
								},
								className: "group/card flex flex-col rounded-3xl bg-[#fdfaf5] p-6 sm:p-8 transition-all duration-400 hover:bg-white hover:shadow-float hover:-translate-y-1 hover:border-gold/20 border border-transparent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-gold transition-all duration-300 group-hover/card:bg-gold group-hover/card:text-navy group-hover/card:scale-110 group-hover/card:rotate-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {
											size: 18,
											strokeWidth: 2.5
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-lg text-navy transition-colors duration-300 group-hover/card:text-gold",
										children: f.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 text-xs leading-relaxed text-navy/70",
										children: f.d
									})] })]
								})
							}, f.t);
						})
					})]
				})]
			})
		})
	});
}
var items = [
	{
		quote: "Giftitude built our entire founder-gifting programme for three years running. They are the only vendor we never have to brief twice.",
		author: "Priya Nair",
		role: "Head of People, Polaris Bank"
	},
	{
		quote: "The samples arrived in a box more considered than most of the gifts we'd sent before. That alone closed it for us.",
		author: "Rohan Mehta",
		role: "CMO, Northwind Cloud"
	},
	{
		quote: "Eighteen hundred hampers, fourteen cities, zero complaints. That number tells the whole story.",
		author: "Aisha Khan",
		role: "Events Lead, Vesper Group"
	}
];
var sliderItems = [...items, ...items];
function Testimonials() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(0);
	const touchStartX = (0, import_react.useRef)(0);
	const touchEndX = (0, import_react.useRef)(0);
	const goTo = (0, import_react.useCallback)((newIndex) => {
		setDirection(newIndex > index ? 1 : -1);
		setIndex(newIndex);
	}, [index]);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setIndex((prev) => (prev + 1) % items.length);
		}, 5e3);
		return () => clearInterval(timer);
	}, []);
	const handleTouchStart = (e) => {
		touchStartX.current = e.targetTouches[0].clientX;
	};
	const handleTouchMove = (e) => {
		touchEndX.current = e.targetTouches[0].clientX;
	};
	const handleTouchEnd = () => {
		const diff = touchStartX.current - touchEndX.current;
		if (Math.abs(diff) > 50) if (diff > 0) {
			setDirection(1);
			setIndex((prev) => (prev + 1) % items.length);
		} else {
			setDirection(-1);
			setIndex((prev) => (prev - 1 + items.length) % items.length);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate w-full bg-cover bg-center py-12 sm:py-20 overflow-hidden",
		style: { backgroundImage: `url("${testi_banner_default}")` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-white/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "mx-auto max-w-2xl text-center",
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-10% 0px"
					},
					transition: {
						duration: .6,
						ease: [
							.21,
							.47,
							.32,
							.98
						]
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-bold uppercase tracking-[0.24em] text-gold",
						children: "In their words"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl",
						children: ["Trusted by the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "best."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 overflow-hidden [--items-to-show:1] lg:[--items-to-show:2]",
					onTouchStart: handleTouchStart,
					onTouchMove: handleTouchMove,
					onTouchEnd: handleTouchEnd,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex transition-transform duration-700 ease-in-out",
						style: { transform: `translateX(calc(-100% * ${index} / var(--items-to-show)))` },
						children: sliderItems.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full shrink-0 basis-full px-3 lg:basis-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group/card flex h-full flex-col justify-between rounded-[2rem] bg-white p-8 shadow-soft sm:p-10 transition-all duration-400 hover:shadow-luxury hover:-translate-y-1 hover:border-gold/15 border border-transparent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-6 flex gap-1 text-gold",
									children: [...Array(5)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										className: "h-4 w-4 fill-current transition-transform duration-300 group-hover/card:scale-110",
										style: { transitionDelay: `${j * 50}ms` }
									}, j))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "font-display text-lg leading-relaxed text-navy sm:text-xl transition-colors duration-300 group-hover/card:text-navy/90",
									children: [
										"\"",
										t.quote,
										"\""
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex items-center gap-4 border-t border-navy/5 pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy/5 font-display text-lg text-gold transition-all duration-300 group-hover/card:bg-gold/15 group-hover/card:scale-105",
										children: t.author.charAt(0)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-navy",
										children: t.author
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-navy/60",
										children: t.role
									})] })]
								})]
							})
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center gap-3",
					children: items.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => goTo(i),
						className: `h-2.5 rounded-full transition-all duration-500 ${index === i ? "w-8 bg-gold shadow-[0_0_8px_2px] shadow-gold/30" : "w-2.5 bg-navy/20 hover:bg-navy/40 hover:scale-125"}`,
						"aria-label": `Go to testimonial ${i + 1}`
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-navy/30 sm:hidden",
					children: "Swipe to navigate"
				})
			]
		})]
	});
}
function HomeCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate w-full overflow-hidden bg-navy bg-cover bg-center py-12 sm:py-16 text-ivory",
		style: { backgroundImage: `url("${cta_banner_default}")` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-navy/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-10% 0px"
						},
						transition: {
							duration: .6,
							ease: [
								.21,
								.47,
								.32,
								.98
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.24em] text-gold animate-shimmer bg-clip-text",
							children: "Begin a brief"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl",
							children: [
								"Tell us who you're gifting.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"We'll do the rest."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "mt-6 text-base leading-relaxed text-ivory/80",
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-10% 0px"
						},
						transition: {
							duration: .5,
							delay: .15,
							ease: [
								.21,
								.47,
								.32,
								.98
							]
						},
						children: "Share occasion, count and a sense of the recipient. A curator will reply within one working day with a proposal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mt-10 flex flex-wrap items-center gap-5",
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-10% 0px"
						},
						transition: {
							duration: .5,
							delay: .3,
							ease: [
								.21,
								.47,
								.32,
								.98
							]
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group inline-flex items-center gap-4 rounded-full bg-gold py-2.5 pl-8 pr-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_4px] hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]",
							children: ["Start a quotation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-lg font-bold text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									strokeWidth: 2.5,
									size: 20
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "hover-underline text-sm text-ivory/80 underline-offset-4 transition-colors duration-300 hover:text-ivory",
							children: "or browse the catalogue"
						})]
					})
				]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative isolate flex flex-col bg-ivory pb-12 sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 -z-10 bg-fixed bg-cover bg-center opacity-30",
						style: { backgroundImage: `url(${background2_default})` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Categories, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeCTA, {}) })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
