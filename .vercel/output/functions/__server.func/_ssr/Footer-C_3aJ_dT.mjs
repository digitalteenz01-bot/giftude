import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-C_3aJ_dT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-DKZiJibK.png";
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
	const navBg = scrolled ? "bg-navy/90 border-white/10 backdrop-blur-md shadow-lg px-5 py-2.5" : variant === "light" ? "bg-white border-navy/10 shadow-soft px-6 py-3.5" : "bg-white/5 border-white/10 backdrop-blur-sm px-6 py-3.5";
	const linkActive = scrolled ? "text-white font-medium" : variant === "light" ? "text-navy font-medium" : "text-white font-medium";
	const linkInactive = scrolled ? "text-white/70 hover:text-white" : variant === "light" ? "text-navy/55 hover:text-navy" : "text-white/70 hover:text-white";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `flex w-full max-w-6xl items-center justify-between rounded-full border transition-all duration-500 ${navBg}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "group flex items-center",
					onClick: () => setMenuOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Giftitude",
						className: "h-10 w-auto transition-all duration-500 group-hover:scale-105",
						style: { filter: scrolled || variant === "dark" ? "brightness(0) invert(1)" : "none" }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.exact },
						activeProps: { className: linkActive },
						inactiveProps: { className: linkInactive },
						className: "hover-underline text-sm transition-colors duration-300",
						children: l.label
					}) }, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "group hidden items-center gap-3 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-sm font-semibold text-navy transition-all duration-300 hover:bg-white/90 hover:shadow-soft hover:scale-[1.02] active:scale-[0.98] md:inline-flex",
						children: ["Get a quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-navy group-hover:text-gold font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								strokeWidth: 2.5,
								size: 14
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMenuOpen((o) => !o),
						"aria-label": menuOpen ? "Close menu" : "Open menu",
						className: `flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 md:hidden ${scrolled ? "border-white/20 text-white hover:bg-white/10 hover:scale-110" : variant === "light" ? "border-navy/15 text-navy hover:bg-navy/5 hover:scale-110" : "border-white/20 text-white hover:bg-white/10 hover:scale-110"}`,
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
									size: 18,
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
									size: 18,
									strokeWidth: 2
								})
							}, "menu")
						})
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		onClick: () => setMenuOpen(false),
		className: "fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm md:hidden",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .25 }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-x-0 top-0 z-40 bg-navy px-6 pt-24 pb-10 md:hidden",
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
						activeProps: { className: "text-white" },
						inactiveProps: { className: "text-white/55" },
						className: "block rounded-2xl px-4 py-4 font-display text-2xl transition-all duration-300 hover:bg-white/5 hover:text-white hover:translate-x-2",
						onClick: () => setMenuOpen(false),
						children: l.label
					})
				}, l.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "my-6 h-px bg-white/10",
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
					className: "group inline-flex items-center gap-4 rounded-full bg-gold pl-7 pr-2 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:scale-[1.02] active:scale-[0.98]",
					children: ["Get a quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-gold font-bold transition-transform duration-300 group-hover:translate-x-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							strokeWidth: 2.5,
							size: 16
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "mt-8 space-y-2 border-t border-white/10 pt-6",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: .6,
					duration: .3
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "mailto:hello@giftitude.in",
					className: "block text-sm text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1",
					children: "hello@giftitude.in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+912200000000",
					className: "block text-sm text-white/40 transition-all duration-300 hover:text-white hover:translate-x-1",
					children: "+91 22 0000 0000"
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
		label: "Gift Sets",
		slug: "gift-sets"
	},
	{
		label: "Diary & Power",
		slug: "diary-power"
	},
	{
		label: "Lamps",
		slug: "lamps"
	},
	{
		label: "Bottles & Mugs",
		slug: "bottles"
	},
	{
		label: "Accessories",
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
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:hello@giftitude.in",
									className: "hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1",
									children: "hello@giftitude.in"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+912200000000",
									className: "hover-underline inline-block text-sm text-white/60 transition-all duration-300 hover:text-gold hover:translate-x-1",
									children: "+91 22 0000 0000"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-sm leading-relaxed text-white/60",
									children: [
										"Lower Parel, Mumbai,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Maharashtra, India"
									]
								})
							]
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
