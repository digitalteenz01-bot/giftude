import { o as __toESM } from "../_runtime.mjs";
import { n as cat_diary_default, r as cat_gift_sets_default, t as cat_accessories_default } from "./cat-accessories-BSM3UQ-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, d as Heart, f as HandHeart, g as Award, o as PackageCheck, p as Gift, v as Sparkles, y as CircleUser } from "../_libs/lucide-react.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { n as Nav, t as Footer } from "./Footer-C_3aJ_dT.mjs";
import { n as cta_banner_default, r as why_craft_default, t as background2_default } from "./cta banner-e-_pEaSD.mjs";
import { t as testi_banner_default } from "./testi-banner-CDQAbtRd.mjs";
import { t as FadeIn } from "./FadeIn-DoUTg1Rw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CIyDNF2o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var about_us_hero_default = "/assets/about%20us%20hero-D40un1QY.webp";
var about_portrait_default = "/assets/about-portrait-3hfi6vak.jpg";
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { variant: "dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurStory, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					style: {
						backgroundImage: `url(${background2_default})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundAttachment: "fixed"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-white/80 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
								delay: 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineSection, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
								delay: 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCTA, {}) })
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate h-screen flex items-end overflow-hidden bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: about_us_hero_default,
				alt: "Giftitude studio — curated corporate gifts",
				className: "absolute inset-0 -z-10 h-full w-full object-cover object-center",
				loading: "eager",
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
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full px-6 pb-20 pt-40 lg:px-12 lg:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "text-xs font-bold uppercase tracking-[0.24em] text-gold/80",
						initial: {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .3,
							duration: .5
						},
						children: "About Giftitude"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								className: "mt-4 font-display text-[2.75rem] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]",
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .45,
									duration: .7,
									ease: [
										.21,
										.47,
										.32,
										.98
									]
								},
								children: [
									"Thoughtful gifts.",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "Stronger"
									}),
									" connections."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								className: "mt-6 max-w-lg text-base leading-relaxed text-white/75",
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .7,
									duration: .5
								},
								children: "At Giftitude, we believe every gift is an opportunity to build meaningful relationships. We help businesses express gratitude, celebrate milestones, and strengthen bonds through thoughtfully curated corporate gifts."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .9,
									duration: .5
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group mt-10 inline-flex items-center gap-4 rounded-full bg-gold pl-7 pr-2 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_4px] hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]",
									children: ["Get a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy font-bold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											strokeWidth: 2.5,
											size: 17
										})
									})]
								})
							})
						]
					})]
				})
			})
		]
	});
}
var values = [
	{
		icon: Sparkles,
		title: "Crafted with intention",
		desc: "Every object is selected by hand — not by algorithm."
	},
	{
		icon: HandHeart,
		title: "Built on relationships",
		desc: "We know the workshops, the makers, and our clients by name."
	},
	{
		icon: PackageCheck,
		title: "End-to-end ownership",
		desc: "From brief to doorstep, one team handles everything."
	}
];
function OurStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-cover bg-center bg-no-repeat px-6 py-20 lg:px-12 lg:py-28",
		style: { backgroundImage: `url(${testi_banner_default})` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-white/82" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-12 lg:gap-20 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "lg:col-span-5",
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
						className: "relative group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-[2rem] shadow-luxury transition-shadow duration-500 group-hover:shadow-[0_35px_70px_-30px_oklch(0.18_0.04_250_/_0.3)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: about_portrait_default,
									alt: "Aanya Rao, Founder of Giftitude",
									loading: "lazy",
									className: "w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-navy px-6 py-5 shadow-luxury",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-4xl leading-none text-gold",
									children: "2017"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50",
									children: "Est. Mumbai"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-5 -right-4 lg:-right-8 h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-soft transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: why_craft_default,
									alt: "Hand crafting a gift at our workshop",
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-bold uppercase tracking-[0.24em] text-gold",
							children: "About Giftitude"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl lg:text-6xl",
							children: [
								"We started with one question",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "nobody was asking."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-5 text-sm leading-relaxed text-navy/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Giftitude was born in 2017 from a leave of absence, a leather diary, and a stubborn belief — that corporate gifting had been designed entirely around the person placing the order, not the person opening the box." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We work with a small roster of partner workshops across Maharashtra, Rajasthan and Gujarat. Leatherworkers in Dharavi, brass turners in Moradabad, woodworkers in Jodhpur. We visit them, know their names, and when a brief arrives we go to the workshop first — not the spreadsheet." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-navy/85",
									children: "We take fewer than 400 briefs a year. Not because we can't take more — because that's the number we can do well."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 sm:grid-cols-3",
							children: values.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "group/card flex flex-col rounded-3xl bg-[#fdfaf5] p-6 transition-all duration-400 hover:bg-white hover:shadow-float hover:-translate-y-1 border border-transparent hover:border-gold/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-gold transition-all duration-300 group-hover/card:bg-gold group-hover/card:text-navy group-hover/card:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											size: 18,
											strokeWidth: 2.5
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-lg text-navy transition-colors duration-300 group-hover/card:text-gold",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 text-xs leading-relaxed text-navy/70",
										children: desc
									})] })]
								})
							}, title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center gap-4 border-t border-navy/8 pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 overflow-hidden rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: about_portrait_default,
									alt: "Aanya Rao",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-navy",
								children: "Aanya Rao"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-navy/50",
								children: "Founder · Lower Parel, Mumbai"
							})] })]
						})
					]
				})]
			})
		})]
	});
}
var milestones = [
	{
		y: "2017",
		t: "Founded with a vision",
		d: "Founded with a mission to redefine corporate gifting in India."
	},
	{
		y: "2019",
		t: "Expanded product range",
		d: "We broadened our product range and onboarded 100+ clients."
	},
	{
		y: "2021",
		t: "Launched pan-India delivery",
		d: "Launched pan-India delivery and built gifting solutions."
	},
	{
		y: "2023",
		t: "Introduced sustainable gifts",
		d: "Introduced sustainable and eco-friendly gift collections."
	},
	{
		y: "2025",
		t: "Continuing to create",
		d: "Continuing to create meaningful gifting experiences."
	}
];
function TimelineSection() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-15% 0px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-transparent px-6 py-20 lg:px-12 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "mb-16",
					initial: {
						opacity: 0,
						y: 24
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
						children: "Our Journey"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl",
						children: "Milestones that shaped us"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref,
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute left-0 top-3 h-px bg-navy/20 origin-left",
							initial: { scaleX: 0 },
							animate: inView ? { scaleX: 1 } : { scaleX: 0 },
							transition: {
								duration: 1.2,
								ease: [
									.4,
									0,
									.2,
									1
								],
								delay: .1
							},
							style: { right: 0 }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-5",
							children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-col items-center px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold/40 bg-white shadow-soft",
									initial: {
										scale: 0,
										opacity: 0
									},
									animate: inView ? {
										scale: 1,
										opacity: 1
									} : {
										scale: 0,
										opacity: 0
									},
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 20,
										delay: .2 + i * .18
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "h-2.5 w-2.5 rounded-full bg-navy",
										initial: { scale: 0 },
										animate: inView ? { scale: 1 } : { scale: 0 },
										transition: {
											delay: .35 + i * .18,
											duration: .25
										}
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									className: "mt-7 text-center",
									initial: {
										opacity: 0,
										y: 16
									},
									animate: inView ? {
										opacity: 1,
										y: 0
									} : {
										opacity: 0,
										y: 16
									},
									transition: {
										duration: .5,
										ease: [
											.21,
											.47,
											.32,
											.98
										],
										delay: .45 + i * .18
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-2xl text-navy",
											children: m.y
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-navy/70",
											children: m.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 text-xs leading-relaxed text-navy/50",
											children: m.d
										})
									]
								})]
							}, m.y))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-8 lg:hidden border-l border-navy/12 pl-8",
					children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						className: "relative",
						initial: {
							opacity: 0,
							x: -16
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: true,
							margin: "-5% 0px"
						},
						transition: {
							duration: .5,
							ease: [
								.21,
								.47,
								.32,
								.98
							],
							delay: i * .1
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -left-[33px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold/40 bg-white shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-navy" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl text-navy",
								children: m.y
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-navy/70",
								children: m.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs leading-relaxed text-navy/50",
								children: m.d
							})
						]
					}, m.y))
				})
			]
		})
	});
}
var galleryItems = [
	{
		src: why_craft_default,
		alt: "Premium quality craftsmanship",
		caption: "Premium Quality",
		icon: Award,
		desc: "We use the finest materials and finishes to ensure every detail reflects excellence."
	},
	{
		src: cat_gift_sets_default,
		alt: "Gifts curated with care",
		caption: "Curated with Care",
		icon: Gift,
		desc: "Each piece is handpicked and designed to create a meaningful and memorable experience."
	},
	{
		src: cat_diary_default,
		alt: "Made to represent your brand",
		caption: "Made to Represent",
		icon: CircleUser,
		desc: "Your brand, your values, your message — beautifully expressed in every gift."
	},
	{
		src: cat_accessories_default,
		alt: "Delivered with pride",
		caption: "Delivered with Pride",
		icon: Heart,
		desc: "From careful packaging to timely delivery, we ensure a seamless gifting experience."
	}
];
function GallerySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-transparent px-6 py-20 lg:px-12 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-bold uppercase tracking-[0.24em] text-gold",
						children: "Every gift tells a story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-px w-8 bg-gold/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl leading-[1.1] text-navy sm:text-5xl",
						children: [
							"Thoughtfully curated.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "Beautifully delivered."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-7",
				children: galleryItems.map(({ src, alt, caption, icon: Icon, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "group flex flex-col",
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-5% 0px"
					},
					transition: {
						delay: i * .1,
						duration: .5,
						ease: [
							.21,
							.47,
							.32,
							.98
						]
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-2xl transition-shadow duration-500 group-hover:shadow-luxury",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt,
								loading: "lazy",
								className: "w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-gold/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 flex h-[2.6rem] w-[2.6rem] items-center justify-center rounded-full border-[3px] border-white/90 bg-navy shadow-luxury transition-all duration-300 group-hover:scale-110 group-hover:bg-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 16,
								strokeWidth: 1.6,
								className: "text-gold transition-colors duration-300 group-hover:text-navy"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col items-center text-center px-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-bold uppercase tracking-[0.2em] text-navy transition-colors duration-300 group-hover:text-gold",
								children: caption
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2.5 h-px w-6 bg-gold/50 transition-all duration-500 group-hover:w-10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-navy/55",
								children: desc
							})
						]
					})]
				}, caption))
			})]
		})
	});
}
function ClosingCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden bg-navy px-8 py-8 sm:px-12 sm:py-10 lg:px-20 lg:py-10",
			style: {
				backgroundImage: `url(${cta_banner_default})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl",
					style: { background: "radial-gradient(circle, oklch(0.71 0.13 78 / 0.35), transparent 60%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl",
					style: { background: "radial-gradient(circle, oklch(0.71 0.13 78 / 0.2), transparent 60%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl grid gap-8 lg:grid-cols-1 lg:items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-bold uppercase tracking-[0.24em] text-gold",
								children: "Work with us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-3xl leading-[1.05] text-white sm:text-4xl lg:text-5xl",
								children: [
									"Tell us who you're",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "gifting"
									}),
									".",
									" ",
									"We'll do the rest."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-white/55",
								children: "Share the occasion, the count, and a sense of the recipient. A curator replies within one working day with a proposal."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "group inline-flex items-center gap-3 rounded-full bg-gold pl-6 pr-1.5 py-1.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_4px] hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]",
									children: ["Start a brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-gold font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											strokeWidth: 2.5,
											size: 15
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+912200000000",
									className: "hover-underline text-sm text-white/50 underline-offset-4 transition-colors duration-300 hover:text-white",
									children: "or call +91 22 0000 0000"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5",
								children: [
									"400+ briefs delivered",
									"1,200+ brands served",
									"Reply within 1 working day"
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-1 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-white/45",
										children: item
									})]
								}, item))
							})
						]
					})
				})
			]
		})
	});
}
//#endregion
export { AboutPage as component };
