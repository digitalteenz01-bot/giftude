import { t as cat_accessories_default } from "./cat-accessories-DQmuxxAX.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { _ as Briefcase, b as ArrowRight, h as Eye, i as Star, n as Truck, p as Heart, r as Target, s as Paintbrush } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-DkUY50jp.mjs";
import { n as cta_banner_default, t as background2_default } from "./cta banner-DGP-FTin.mjs";
import { t as testi_banner_default } from "./testi-banner-CDQAbtRd.mjs";
import { t as FadeIn } from "./FadeIn-DoUTg1Rw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CS1SN-QC.js
var import_jsx_runtime = require_jsx_runtime();
var about_us_hero_default = "/assets/about%20us%20hero-D40un1QY.webp";
var why_craft_default = "/assets/why-craft-LapfR7Hb.jpg";
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseSection, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
								delay: 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionVisionSection, {})
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
				alt: "Giftitude — premium corporate gifting",
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
									"Elevating Corporate Gifting",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
									"with ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-gold",
										children: "Purpose"
									}),
									"."
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
								children: "Giftitude is a Canadian corporate gifting company dedicated to helping businesses build stronger relationships through thoughtfully curated premium gifts."
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[2rem] shadow-luxury transition-shadow duration-500 group-hover:shadow-[0_35px_70px_-30px_oklch(0.18_0.04_250_/_0.3)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: why_craft_default,
								alt: "Premium corporate gifts by Giftitude",
								loading: "lazy",
								className: "w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-navy px-6 py-5 shadow-luxury",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl leading-none text-gold",
								children: "Canada"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50",
								children: "Based & Serving"
							})]
						})]
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
								"Elevating Corporate Gifting",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "with Purpose."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-5 text-sm leading-relaxed text-navy/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We specialize in sourcing, customizing, and delivering high-quality corporate gifts that leave a lasting impression. From employee appreciation and client onboarding to executive gifting, promotional campaigns, conferences, and festive celebrations, we provide solutions tailored to every business need." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Working with trusted manufacturing partners across global markets, we combine exceptional craftsmanship, premium materials, and modern branding techniques to create gifts that reflect your company's identity." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every product is carefully selected to meet the highest standards of quality, functionality, and presentation. Our goal is simple — to help organizations strengthen relationships, celebrate achievements, and enhance their brand through meaningful gifting experiences." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-navy/85",
									children: "Whether you require a single premium executive gift or thousands of customized promotional products, Giftitude delivers dependable service, competitive pricing, and on-time delivery."
								})
							]
						})
					]
				})]
			})
		})]
	});
}
var whyChooseItems = [
	{
		icon: Star,
		title: "Premium Quality",
		desc: "Every product is carefully selected to ensure exceptional quality, durability, and elegant presentation."
	},
	{
		icon: Paintbrush,
		title: "Custom Branding",
		desc: "Professional logo printing, laser engraving, embossing, embroidery, and premium packaging tailored to your brand."
	},
	{
		icon: Truck,
		title: "Reliable Delivery",
		desc: "From product sourcing to final delivery, we ensure timely execution and consistent service."
	},
	{
		icon: Briefcase,
		title: "Corporate Expertise",
		desc: "We understand the unique gifting needs of businesses and provide customized solutions for every occasion."
	},
	{
		icon: Heart,
		title: "Customer First",
		desc: "Our focus is building long-term relationships through quality products, transparent communication, and outstanding support."
	}
];
function WhyChooseSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-transparent px-6 py-20 lg:px-12 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "mb-16 text-center",
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
					children: "Why Choose Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl leading-[1.1] text-navy sm:text-5xl",
					children: ["Why Choose ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "Giftitude?"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: whyChooseItems.map(({ icon: Icon, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
					className: "group/card flex flex-col rounded-3xl bg-white p-7 shadow-soft transition-all duration-400 hover:shadow-luxury hover:-translate-y-1 border border-transparent hover:border-gold/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-gold transition-all duration-300 group-hover/card:bg-gold group-hover/card:text-navy group-hover/card:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								size: 20,
								strokeWidth: 2
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl text-navy transition-colors duration-300 group-hover/card:text-gold",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm leading-relaxed text-navy/65",
							children: desc
						})] })]
					})
				}, title))
			})]
		})
	});
}
function MissionVisionSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-transparent px-6 py-10 lg:px-12 lg:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-400 hover:shadow-luxury hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: cat_accessories_default,
							alt: "Premium corporate gifts",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/70 to-navy/40 transition-opacity duration-300 group-hover:from-navy/95" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative p-8 sm:p-10 flex flex-col justify-end min-h-[280px] sm:min-h-[320px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/20 border border-gold/40 text-gold backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
										size: 20,
										strokeWidth: 2
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-white sm:text-3xl",
									children: "Our Mission"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-white/75",
								children: "To help businesses create meaningful connections through premium corporate gifts that inspire appreciation, strengthen relationships, and enhance brand value."
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: .1,
						ease: [
							.21,
							.47,
							.32,
							.98
						]
					},
					className: "group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-400 hover:shadow-luxury hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: why_craft_default,
							alt: "Corporate gifting vision",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/70 to-navy/40 transition-opacity duration-300 group-hover:from-navy/95" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative p-8 sm:p-10 flex flex-col justify-end min-h-[280px] sm:min-h-[320px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/20 border border-gold/40 text-gold backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
										size: 20,
										strokeWidth: 2
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl text-white sm:text-3xl",
									children: "Our Vision"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-white/75",
								children: "To become Canada's trusted corporate gifting partner by delivering innovative, sustainable, and premium gifting solutions with exceptional customer service."
							})]
						})
					]
				})]
			})
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
								children: "Share the occasion, the count, and a sense of the recipient. Our team replies within one working day with a proposal."
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
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "hover-underline text-sm text-white/50 underline-offset-4 transition-colors duration-300 hover:text-white",
									children: "or browse the catalogue"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5",
								children: [
									"Premium quality guaranteed",
									"Custom branding available",
									"Reliable global delivery"
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
