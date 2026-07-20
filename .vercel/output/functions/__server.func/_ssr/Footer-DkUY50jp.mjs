import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { a as Phone, b as ArrowRight, l as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-DkUY50jp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-B7d7GF9Y.png";
var links = [
	{
		label: "Home",
		to: "/",
		exact: true
	},
	{
		label: "About",
		to: "/about",
		exact: false
	},
	{
		label: "Products",
		to: "/products",
		exact: false
	},
	{
		label: "Contact",
		to: "/contact",
		exact: false
	}
];
var mobileMenuVariants = {
	hidden: {
		y: "-100%",
		opacity: 0
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: .35,
			ease: [
				.23,
				1,
				.32,
				1
			]
		}
	},
	exit: {
		y: "-100%",
		opacity: 0,
		transition: {
			duration: .25,
			ease: [
				.23,
				1,
				.32,
				1
			]
		}
	}
};
var mobileLinkVariants = {
	hidden: {
		opacity: 0,
		x: -20
	},
	visible: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: .1 + i * .08,
			duration: .35,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		}
	})
};
function Nav({ variant = "dark" }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[3px] bg-gradient-to-r from-gold via-gold-soft to-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `w-full bg-white transition-all duration-500 ${scrolled ? "shadow-md" : "shadow-sm"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "group flex items-center",
						onClick: () => setMenuOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Giftitude",
							className: "h-12 w-auto transition-all duration-300 group-hover:opacity-80"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-10 md:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							activeOptions: { exact: l.exact },
							activeProps: { className: "text-navy font-semibold" },
							inactiveProps: { className: "text-navy/50 hover:text-navy" },
							className: "relative text-[13px] uppercase tracking-[0.08em] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
							children: l.label
						}) }, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:+9178080255492",
								className: "hidden items-center gap-2 text-[13px] text-navy/60 transition-colors duration-300 hover:text-gold lg:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									size: 14,
									strokeWidth: 2
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+91 78080 25549" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden h-5 w-px bg-navy/10 lg:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "group hidden items-center gap-2.5 rounded-full bg-navy px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-navy hover:shadow-soft active:scale-[0.97] md:inline-flex",
								children: ["Contact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 14,
									strokeWidth: 2.5,
									className: "transition-transform duration-300 group-hover:translate-x-0.5"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMenuOpen((o) => !o),
								"aria-label": menuOpen ? "Close menu" : "Open menu",
								className: "flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy transition-all duration-300 hover:bg-navy/5 hover:border-navy/20 md:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									mode: "wait",
									children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											rotate: -90,
											opacity: 0
										},
										animate: {
											rotate: 0,
											opacity: 1
										},
										exit: {
											rotate: 90,
											opacity: 0
										},
										transition: { duration: .2 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
											size: 20,
											strokeWidth: 2
										})
									}, "close") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: {
											rotate: 90,
											opacity: 0
										},
										animate: {
											rotate: 0,
											opacity: 1
										},
										exit: {
											rotate: -90,
											opacity: 0
										},
										transition: { duration: .2 },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
											size: 20,
											strokeWidth: 2
										})
									}, "menu")
								})
							})
						]
					})
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		onClick: () => setMenuOpen(false),
		className: "fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm md:hidden",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .25 }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-x-0 top-0 z-40 bg-white px-6 pt-24 pb-10 shadow-luxury md:hidden",
		variants: mobileMenuVariants,
		initial: "hidden",
		animate: "visible",
		exit: "exit",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					custom: i,
					variants: mobileLinkVariants,
					initial: "hidden",
					animate: "visible",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.exact },
						activeProps: { className: "text-navy" },
						inactiveProps: { className: "text-navy/50" },
						className: "block rounded-xl px-4 py-3.5 font-display text-xl transition-all duration-300 hover:bg-ivory hover:text-navy hover:translate-x-2",
						onClick: () => setMenuOpen(false),
						children: l.label
					})
				}, l.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "my-6 h-px bg-navy/10",
				initial: { scaleX: 0 },
				animate: { scaleX: 1 },
				transition: {
					delay: .4,
					duration: .4
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .5,
					duration: .3
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					onClick: () => setMenuOpen(false),
					className: "group inline-flex items-center gap-3 rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-navy active:scale-[0.98]",
					children: ["Get a Quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						size: 14,
						strokeWidth: 2.5,
						className: "transition-transform duration-300 group-hover:translate-x-0.5"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "mt-8 space-y-3 border-t border-navy/8 pt-6",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: .6,
					duration: .3
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+9178080255492",
					className: "flex items-center gap-2 text-sm text-navy/50 transition-colors duration-300 hover:text-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), "+91 78080 25549"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "mailto:hello@giftitude.in",
					className: "block text-sm text-navy/50 transition-colors duration-300 hover:text-gold",
					children: "hello@giftitude.in"
				})]
			})
		]
	})] }) })] });
}
var studioLinks = [
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Catalogue",
		to: "/products"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var catalogueLinks = [
	{
		label: "Executive Tech Gifts",
		slug: "gift-sets"
	},
	{
		label: "Desk & Lifestyle Accessories",
		slug: "diary-power"
	},
	{
		label: "Premium Gift Sets",
		slug: "lamps"
	},
	{
		label: "Premium Drinkware",
		slug: "bottles"
	},
	{
		label: "Smart Office Essentials",
		slug: "accessories"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "grid gap-12 lg:grid-cols-12 lg:gap-8",
				initial: {
					opacity: 0,
					y: 30
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
					duration: .6,
					ease: [
						.21,
						.47,
						.32,
						.98
					]
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "group inline-flex items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Giftitude",
									className: "h-10 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110",
									style: { filter: "brightness(0) invert(1)" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xs text-sm leading-relaxed text-white/50",
								children: "Corporate gifting solutions that strengthen relationships and create lasting impressions since 2017."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": "Instagram",
										className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold hover:scale-110 hover:bg-gold/10 hover:shadow-[0_0_12px_2px] hover:shadow-gold/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.8",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "2",
													y: "2",
													width: "20",
													height: "20",
													rx: "5",
													ry: "5"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
													x1: "17.5",
													y1: "6.5",
													x2: "17.51",
													y2: "6.5"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": "LinkedIn",
										className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold hover:scale-110 hover:bg-gold/10 hover:shadow-[0_0_12px_2px] hover:shadow-gold/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.8",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
													x: "2",
													y: "9",
													width: "4",
													height: "12"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
													cx: "4",
													cy: "4",
													r: "2"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										"aria-label": "Facebook",
										className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-gold/50 hover:text-gold hover:scale-110 hover:bg-gold/10 hover:shadow-[0_0_12px_2px] hover:shadow-gold/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "14",
											height: "14",
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.8",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" })
										})
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold uppercase tracking-[0.28em] text-gold/70",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: studioLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1",
								children: l.label
							}) }, l.to))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold uppercase tracking-[0.28em] text-gold/70",
							children: "Catalogue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: catalogueLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products/$category",
								params: { category: l.slug },
								className: "hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1",
								children: l.label
							}) }, l.slug))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-3 lg:col-start-11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-bold uppercase tracking-[0.28em] text-gold/70",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hello@giftitude.in",
								className: "hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1",
								children: "hello@giftitude.in"
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+9178080255492",
								className: "hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1",
								children: "+91 78080255492"
							}) })]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-5 text-[11px] text-white/30 sm:flex-row sm:items-center lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Giftitude Studio Pvt. Ltd. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-all duration-300 hover:text-gold hover:translate-x-0.5",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-white/15" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "transition-all duration-300 hover:text-gold hover:translate-x-0.5",
							children: "Terms & Conditions"
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { Nav as n, Footer as t };
