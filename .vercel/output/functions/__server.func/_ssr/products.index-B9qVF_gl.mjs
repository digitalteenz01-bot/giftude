import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { b as ArrowRight, d as KeyRound, g as Cylinder, m as Gift, u as Lamp, v as BookOpen } from "../_libs/lucide-react.mjs";
import { n as Nav, t as Footer } from "./Footer-DkUY50jp.mjs";
import { t as FadeIn } from "./FadeIn-DoUTg1Rw.mjs";
import { t as CATEGORIES } from "./catalogue-Crtsw922.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-B9qVF_gl.js
var import_jsx_runtime = require_jsx_runtime();
var PRODUCT_HERO_default = "/assets/PRODUCT%20HERO-DatCd15S.webp";
var catIcons = {
	"gift-sets": Gift,
	"diary-power": BookOpen,
	"lamps": Lamp,
	"bottles": Cylinder,
	"accessories": KeyRound
};
function ProductsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { variant: "dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative h-screen flex items-end overflow-hidden bg-navy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: PRODUCT_HERO_default,
							alt: "Giftitude luxury gift composition",
							loading: "eager",
							className: "absolute inset-0 h-full w-full object-cover object-center"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-navy/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-full px-6 pb-14 lg:px-12 lg:pb-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-7xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-bold uppercase tracking-[0.28em] text-gold/80",
										children: "Our Collection"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-4 font-display text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.02] text-white",
										children: [
											"Five rooms.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic text-gold",
												children: "Forty objects."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-px w-10 bg-gold/50" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex items-end gap-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "max-w-sm text-sm leading-relaxed text-white/65",
											children: "Each room is its own page — open the one that fits the brief, or tell us the occasion and we'll compose a set."
										})
									})
								]
							})
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-ivory px-6 pb-0 pt-6 lg:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mx-auto max-w-7xl divide-y border-y border-navy/8",
						children: CATEGORIES.map((c, i) => {
							const Icon = catIcons[c.slug] ?? Gift;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
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
									margin: "-8% 0px"
								},
								transition: {
									duration: .45,
									ease: [
										.21,
										.47,
										.32,
										.98
									],
									delay: i * .07
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products/$category",
									params: { category: c.slug },
									className: "group flex items-center gap-3 py-5 lg:gap-8 lg:py-6 transition-all duration-300 hover:translate-x-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 shrink-0 font-display text-lg text-gold/70 lg:w-14 lg:text-2xl transition-colors duration-300 group-hover:text-gold",
											children: c.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "hidden sm:flex shrink-0 h-12 w-12 items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-gold group-hover:border-navy group-hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												size: 18,
												strokeWidth: 1.4
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0 overflow-hidden",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-base leading-snug text-navy sm:text-xl lg:text-2xl transition-colors duration-300 group-hover:text-gold",
												children: c.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-xs leading-relaxed text-navy/50 line-clamp-2 lg:max-w-xs",
												children: c.tagline
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "shrink-0 overflow-hidden rounded-xl transition-shadow duration-300 group-hover:shadow-soft",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: c.cover,
												alt: c.alt,
												loading: "lazy",
												className: "h-24 w-24 object-contain transition-transform duration-700 group-hover:scale-110 sm:h-20 sm:w-32 sm:object-cover lg:h-24 lg:w-40"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 lg:h-10 lg:w-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												size: 14,
												strokeWidth: 2
											})
										})
									]
								})
							}, c.slug);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-navy px-6 py-10 lg:px-12 lg:py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden shrink-0 opacity-20 sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, {
									size: 52,
									strokeWidth: .8,
									className: "text-white"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] font-bold uppercase tracking-[0.3em] text-gold/70",
								children: "Can't find the right fit?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1.5 font-display text-2xl text-white sm:text-3xl",
								children: "We custom-curate."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group inline-flex self-start shrink-0 items-center gap-4 rounded-full bg-gold pl-7 pr-2 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_0_20px_4px] hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]",
							children: ["Begin a brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-gold font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									strokeWidth: 2.5,
									size: 16
								})
							})]
						})]
					})
				}) })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProductsIndex as component };
