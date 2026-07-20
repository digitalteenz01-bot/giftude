import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { b as ArrowRight, c as Package, f as IndianRupee, i as Star, m as Gift, n as Truck, o as PenTool, y as Award } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-DkUY50jp.mjs";
import { n as cta_banner_default, t as background2_default } from "./cta banner-DGP-FTin.mjs";
import { t as testi_banner_default } from "./testi-banner-CDQAbtRd.mjs";
import { t as FadeIn } from "./FadeIn-DoUTg1Rw.mjs";
import { t as CATEGORIES } from "./catalogue-Crtsw922.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DFaj3C_w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var background_default = "/assets/background-CB8DJXM4.webp";
var imag2_default = "/assets/imag2-QDqW-Zxg.webp";
var background_mobile_default = "/assets/background%20mobile-b4hJSDBP.webp";
var slides = [{
	bg: background_default,
	heading: [
		"Beyond the Gift.",
		"Elevating",
		"Every",
		"Brand Connection."
	],
	gold: "Elevating",
	desc: "Giftitude creates premium corporate gifting experiences that inspire appreciation, strengthen relationships, and showcase your brand with sophistication."
}, {
	bg: imag2_default,
	heading: [
		"Premium Gifts.",
		"Meaningful",
		"Business",
		"Relationships."
	],
	gold: "Meaningful",
	desc: "From employee appreciation and client onboarding to executive gifting — we deliver thoughtfully curated solutions tailored to every business need."
}];
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
	}),
	exit: {
		opacity: 0,
		y: -20,
		transition: { duration: .3 }
	}
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
	}),
	exit: {
		opacity: 0,
		y: -10,
		transition: { duration: .3 }
	}
};
function Hero() {
	const [current, setCurrent] = (0, import_react.useState)(0);
	const nextSlide = (0, import_react.useCallback)(() => {
		setCurrent((prev) => (prev + 1) % slides.length);
	}, []);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(nextSlide, 6e3);
		return () => clearInterval(timer);
	}, [nextSlide]);
	const slide = slides[current];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative z-0 overflow-hidden bg-navy pt-28 pb-10 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-32 min-h-screen flex items-start sm:items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0 -z-10 h-full w-full",
					initial: {
						opacity: 0,
						scale: 1.05
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: { opacity: 0 },
					transition: {
						duration: 1.2,
						ease: [
							.25,
							.46,
							.45,
							.94
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", {
						className: "h-full w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							media: "(min-width: 640px)",
							srcSet: slide.bg
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: current === 0 ? background_mobile_default : slide.bg,
							alt: "Hero background",
							className: "h-full w-full object-cover object-center"
						})]
					})
				}, current)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-7xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: "hidden",
									animate: "visible",
									exit: "exit",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-display text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												className: "inline-block",
												variants: textReveal,
												custom: 0,
												children: slide.heading[0]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
												className: "inline-block",
												variants: textReveal,
												custom: 1,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-gold",
														children: slide.gold
													}),
													" ",
													slide.heading[2]
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
												className: "inline-block",
												variants: textReveal,
												custom: 2,
												children: slide.heading[3]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
										className: "mt-8 max-w-md text-base leading-relaxed text-white/80",
										variants: fadeUp,
										custom: .9,
										children: slide.desc
									})]
								}, current)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								className: "mt-10 flex flex-wrap items-center gap-5",
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: 1.1,
									duration: .6
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "group inline-flex items-center gap-4 rounded-full bg-ivory pl-7 pr-2 py-2 text-sm font-semibold text-navy shadow-soft transition-all duration-300 hover:bg-white hover:shadow-luxury hover:scale-105 active:scale-[0.98]",
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
							})]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:bottom-12",
				children: slides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCurrent(i),
					className: `h-2 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-gold shadow-[0_0_8px_2px] shadow-gold/30" : "w-2 bg-white/30 hover:bg-white/60"}`,
					"aria-label": `Go to slide ${i + 1}`
				}, i))
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
		title: CATEGORIES[0].title,
		desc: CATEGORIES[0].tagline,
		img: CATEGORIES[0].items[0].img,
		alt: CATEGORIES[0].alt,
		span: "lg:col-span-6 lg:row-span-2",
		slug: CATEGORIES[0].slug
	},
	{
		title: CATEGORIES[1].title,
		desc: CATEGORIES[1].tagline,
		img: CATEGORIES[1].items[0].img,
		alt: CATEGORIES[1].alt,
		span: "lg:col-span-3",
		slug: CATEGORIES[1].slug
	},
	{
		title: CATEGORIES[2].title,
		desc: CATEGORIES[2].tagline,
		img: CATEGORIES[2].items[0].img,
		alt: CATEGORIES[2].alt,
		span: "lg:col-span-3",
		slug: CATEGORIES[2].slug
	},
	{
		title: CATEGORIES[3].title,
		desc: CATEGORIES[3].tagline,
		img: CATEGORIES[3].items[0].img,
		alt: CATEGORIES[3].alt,
		span: "lg:col-span-3",
		slug: CATEGORIES[3].slug
	},
	{
		title: CATEGORIES[4].title,
		desc: CATEGORIES[4].tagline,
		img: CATEGORIES[4].items[0].img,
		alt: CATEGORIES[4].alt,
		span: "lg:col-span-3",
		slug: CATEGORIES[4].slug
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
							"Every Collection,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "A Lasting Impression."
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
					children: "Explore premium gifting solutions designed to strengthen relationships, celebrate achievements, and elevate your brand."
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
							className: "relative flex h-full min-h-[320px] sm:min-h-[250px] flex-col justify-end p-6 text-ivory sm:p-8",
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
var imag1_default = "/assets/imag1-ClMejaBp.webp";
var features = [
	{
		icon: Star,
		t: "Uncompromising Quality",
		d: "Every product is carefully sourced, inspected, and finished to meet the highest standards."
	},
	{
		icon: PenTool,
		t: "Tailored to Your Brand",
		d: "Custom branding, premium packaging, and personalized gifting experiences — all under one roof."
	},
	{
		icon: Package,
		t: "Scalable for Every Business",
		d: "From boutique orders to enterprise gifting, delivered with precision and consistency."
	},
	{
		icon: Truck,
		t: "Reliable Global Delivery",
		d: "Seamless fulfillment across Canada and worldwide, delivered with care."
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
								src: imag1_default,
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
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-bold uppercase tracking-[0.24em] text-gold",
								children: "Our Ethos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-6xl",
								children: [
									"Designed for Business.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "Chosen"
									}),
									" by People."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-lg text-sm leading-relaxed text-navy/65",
								children: "Exceptional gifting experiences for clients, teams, and partners."
							})
						]
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
								"You Bring the Occasion.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"We Create the Experience."
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
						children: "From product selection and custom branding to premium packaging and worldwide delivery, we handle every detail — so you can focus on building meaningful relationships."
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
				className: "relative isolate flex flex-col bg-ivory",
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
