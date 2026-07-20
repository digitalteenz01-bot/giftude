import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { b as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-DkUY50jp.mjs";
import { t as FadeIn } from "./FadeIn-DoUTg1Rw.mjs";
import { t as CATEGORIES } from "./catalogue-Crtsw922.mjs";
import { t as Route } from "./products._category-DwGDs3w7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._category-D8B4VZV3.js
var import_jsx_runtime = require_jsx_runtime();
var WA_NUMBER = "78080255492";
function CategoryPage() {
	const { category } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { variant: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Masthead, { category }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
					delay: 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, { items: category.items })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPager, { current: category.slug }) })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Masthead({ category }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-navy pt-28 pb-16 lg:pt-32 lg:pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: category.cover,
				alt: category.title,
				className: "absolute inset-0 h-full w-full object-cover opacity-20",
				loading: "eager",
				initial: { scale: 1.05 },
				animate: { scale: 1 },
				transition: {
					duration: 1.5,
					ease: [
						.25,
						.46,
						.45,
						.94
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
					className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40",
					initial: {
						opacity: 0,
						x: -10
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						delay: .2,
						duration: .4
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "hover:text-gold transition-colors duration-300",
							children: "Catalogue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white/70",
							children: category.title
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "text-[11px] font-bold uppercase tracking-[0.24em] text-gold",
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
								duration: .4
							},
							children: ["Room ", category.n]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							className: "mt-3 font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl",
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .4,
								duration: .5,
								ease: [
									.21,
									.47,
									.32,
									.98
								]
							},
							children: category.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-5 text-sm leading-relaxed text-white/60 max-w-lg",
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .55,
								duration: .5
							},
							children: category.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "mt-6 flex items-center gap-3 text-xs text-white/35",
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								delay: .7,
								duration: .4
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-bold",
									children: [category.items.length, " products"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-4 bg-white/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enquire for pricing & customisation" })
							]
						})
					]
				})]
			})
		]
	});
}
function ProductGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 py-14 lg:px-12 lg:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: items.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product,
					index: i
				}, product.slug))
			})
		})
	});
}
function ProductCard({ product, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
			margin: "-5% 0px"
		},
		transition: {
			duration: .45,
			ease: [
				.21,
				.47,
				.32,
				.98
			],
			delay: index * .07
		},
		className: "group flex flex-col rounded-2xl bg-white shadow-soft overflow-hidden transition-all duration-400 hover:shadow-luxury hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden bg-ivory aspect-square",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.img,
					alt: product.name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
				product.material && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-navy shadow-soft opacity-0 -translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-sm",
					children: product.material
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg leading-tight text-navy transition-colors duration-300 group-hover:text-gold",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs leading-relaxed text-navy/55",
						children: product.desc
					}),
					product.material && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/70 sm:hidden",
						children: product.material
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					const text = [
						`*Product Enquiry — Giftitude*`,
						``,
						`*Product:* ${product.name}`,
						`*Description:* ${product.desc}`,
						product.material ? `*Material:* ${product.material}` : null,
						``,
						`I'd like to enquire about this product. Please share pricing and customisation options.`
					].filter(Boolean).join("\n");
					window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
				},
				className: "group/btn mt-5 flex w-full items-center justify-between rounded-full border border-navy/8 bg-ivory px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-sm active:scale-[0.98]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "transition-colors duration-300 group-hover/btn:text-gold",
					children: "Enquire"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-white transition-all duration-300 group-hover/btn:bg-gold group-hover/btn:text-navy group-hover/btn:scale-110",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						size: 13,
						strokeWidth: 2.5
					})
				})]
			})]
		})]
	});
}
function CategoryPager({ current }) {
	const idx = CATEGORIES.findIndex((c) => c.slug === current);
	const prev = CATEGORIES[(idx - 1 + CATEGORIES.length) % CATEGORIES.length];
	const next = CATEGORIES[(idx + 1) % CATEGORIES.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-navy/8 bg-white px-6 py-12 lg:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-5 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/products/$category",
				params: { category: prev.slug },
				className: "group flex items-center gap-5 rounded-2xl border border-navy/8 bg-ivory p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-soft hover:-translate-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-110 group-hover:-translate-x-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						size: 15,
						className: "rotate-180"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] font-bold uppercase tracking-[0.24em] text-navy/35",
					children: "Previous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 font-display text-base text-navy group-hover:text-gold transition-colors duration-300",
					children: prev.title
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/products/$category",
				params: { category: next.slug },
				className: "group flex items-center justify-end gap-5 rounded-2xl border border-navy/8 bg-ivory p-6 text-right transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-soft hover:-translate-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[9px] font-bold uppercase tracking-[0.24em] text-navy/35",
					children: "Next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 font-display text-base text-navy group-hover:text-gold transition-colors duration-300",
					children: next.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-110 group-hover:translate-x-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })
				})]
			})]
		})
	});
}
//#endregion
export { CategoryPage as component };
