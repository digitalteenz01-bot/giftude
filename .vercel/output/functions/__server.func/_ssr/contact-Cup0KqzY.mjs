import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as Nav, t as Footer } from "./Footer-C_3aJ_dT.mjs";
import { t as testi_banner_default } from "./testi-banner-CDQAbtRd.mjs";
import { t as Route } from "./contact-B32HBuiE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cup0KqzY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		value: "gift-sets",
		label: "Premium Gift Sets"
	},
	{
		value: "diary-power",
		label: "Diary & Power Banks"
	},
	{
		value: "lamps",
		label: "Lamps"
	},
	{
		value: "bottles",
		label: "Bottles & Mugs"
	},
	{
		value: "accessories",
		label: "Accessories"
	},
	{
		value: "custom",
		label: "Custom / Not sure yet"
	}
];
function inferCategory(product) {
	if (!product) return "gift-sets";
	const match = CATEGORIES.find((c) => c.value === product);
	if (match) return match.value;
	if (product.includes("diary") || product.includes("power")) return "diary-power";
	if (product.includes("lamp")) return "lamps";
	if (product.includes("bottle") || product.includes("mug") || product.includes("flask") || product.includes("tumbler")) return "bottles";
	if (product.includes("card") || product.includes("key") || product.includes("tie") || product.includes("tray")) return "accessories";
	return "gift-sets";
}
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: (delay) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay,
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
function ContactPage() {
	const { product } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory text-ink",
		style: {
			backgroundImage: `url(${testi_banner_default})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundAttachment: "fixed"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-white/88",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { variant: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-6 pb-24 pt-32 lg:px-8 lg:pt-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "mb-12 border-b border-navy/8 pb-10",
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
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
								children: "Begin a brief"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-4xl leading-[1.06] text-navy sm:text-5xl",
								children: "Let's design something memorable."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-lg text-sm leading-relaxed text-navy/55",
								children: "Share the occasion, the count, and a sense of the recipient. A curator will reply within one working day with a tailored proposal."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-navy/45",
									children: "Reply within 1 working day"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, { productSlug: product }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "mt-16 grid gap-6 border-t border-navy/8 pt-10 sm:grid-cols-2 lg:grid-cols-4",
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: .2
						},
						children: [
							{
								label: "Email",
								value: "hello@giftitude.in",
								href: "mailto:hello@giftitude.in"
							},
							{
								label: "Phone",
								value: "+91 22 0000 0000",
								href: "tel:+912200000000"
							},
							{
								label: "Studio",
								value: "Lower Parel, Mumbai",
								href: null
							},
							{
								label: "Hours",
								value: "Mon – Sat · 10–19 IST",
								href: null
							}
						].map(({ label, value, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: .1 * i,
								duration: .4
							},
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-bold uppercase tracking-[0.24em] text-navy/35 transition-colors duration-300 group-hover:text-gold",
								children: label
							}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								className: "mt-1 block text-sm text-navy/70 transition-all duration-300 hover:text-gold hover:translate-x-0.5",
								children: value
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-navy/70",
								children: value
							})]
						}, label))
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})]
	});
}
function ContactForm({ productSlug }) {
	const [category, setCategory] = (0, import_react.useState)(inferCategory(productSlug));
	const [qty, setQty] = (0, import_react.useState)(100);
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const name = String(f.get("name") ?? "");
		const company = String(f.get("company") ?? "");
		const email = String(f.get("email") ?? "");
		const phone = String(f.get("phone") ?? "");
		const message = String(f.get("message") ?? "");
		const catLabel = CATEGORIES.find((c) => c.value === category)?.label ?? category;
		const text = [
			`*New Enquiry — Giftitude*`,
			``,
			`*Name:* ${name}`,
			`*Company:* ${company}`,
			`*Email:* ${email}`,
			`*Phone:* ${phone}`,
			`*Category:* ${catLabel}`,
			`*Quantity:* ~${qty}`,
			productSlug ? `*Interested in:* ${productSlug}` : null,
			``,
			`*Message:*`,
			message
		].filter(Boolean).join("\n");
		window.open(`https://wa.me/919200000000?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [productSlug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mb-6 text-sm text-navy/60",
		children: ["Interested in: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold text-navy",
			children: productSlug
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "grid gap-6 sm:grid-cols-2",
				variants: fadeUp,
				initial: "hidden",
				animate: "visible",
				custom: .15,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Your name *",
					name: "name",
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Company *",
					name: "company",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "grid gap-6 sm:grid-cols-2",
				variants: fadeUp,
				initial: "hidden",
				animate: "visible",
				custom: .25,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Work email *",
					name: "email",
					type: "email",
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone",
					name: "phone",
					type: "tel"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				initial: "hidden",
				animate: "visible",
				custom: .35,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCategory(c.value),
						className: `rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${c.value === category ? "border-navy bg-navy text-white shadow-soft scale-[1.02]" : "border-navy/12 bg-white text-navy/60 hover:border-navy/30 hover:text-navy hover:scale-[1.04] hover:shadow-sm active:scale-[0.97]"}`,
						children: c.label
					}, c.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				initial: "hidden",
				animate: "visible",
				custom: .45,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Approximate quantity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-navy",
							children: qty
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 25,
						max: 2500,
						step: 25,
						value: qty,
						onChange: (e) => setQty(Number(e.target.value)),
						className: "mt-3 w-full cursor-pointer accent-[var(--gold)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex justify-between text-[10px] text-navy/35",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2,500+" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				initial: "hidden",
				animate: "visible",
				custom: .55,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Message *" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "message",
					rows: 5,
					required: true,
					placeholder: "Occasion, timeline, recipients, any thoughts on tone…",
					className: "mt-3 w-full resize-none rounded-2xl border border-navy/12 bg-white px-5 py-4 text-sm text-navy placeholder:text-navy/30 transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px] focus:shadow-gold/10 focus:outline-none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "flex flex-wrap items-center gap-4 pt-2",
				variants: fadeUp,
				initial: "hidden",
				animate: "visible",
				custom: .65,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "group inline-flex items-center gap-4 rounded-full bg-navy pl-7 pr-2 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-soft hover:shadow-luxury hover:scale-[1.02] active:scale-[0.98]",
					children: [sent ? "Re-open on WhatsApp" : "Send enquiry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-navy font-bold transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							strokeWidth: 2.5,
							size: 16
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					className: "hover-underline text-sm text-navy/45 underline-offset-4 transition-colors duration-300 hover:text-navy",
					children: "or browse the catalogue"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				className: "text-xs text-navy/35",
				variants: fadeUp,
				initial: "hidden",
				animate: "visible",
				custom: .75,
				children: "Submitting opens WhatsApp with the brief pre-filled. We don't store form data."
			})
		]
	})] });
}
function Label({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] font-bold uppercase tracking-[0.24em] text-navy/45",
		children
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block group/field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "mt-2.5 w-full rounded-2xl border border-navy/12 bg-white px-5 py-3.5 text-sm text-navy placeholder:text-navy/30 transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px] focus:shadow-gold/10 focus:outline-none hover:border-navy/25"
		})]
	});
}
//#endregion
export { ContactPage as component };
