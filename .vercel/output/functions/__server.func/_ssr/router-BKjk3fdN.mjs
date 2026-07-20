import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { N as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as motion, r as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as Route$4 } from "./contact-Cx197AO_.mjs";
import { t as Route$5 } from "./products._category-DwGDs3w7.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as ReactLenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BKjk3fdN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BCKbvcPZ.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-ivory px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-medium text-navy",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-2xl text-navy",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-navy-soft",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-ivory px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl text-navy",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try again or return home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-navy px-6 py-3 text-sm font-medium text-ivory hover:bg-navy-soft",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-navy/20 px-6 py-3 text-sm font-medium text-navy hover:bg-ivory",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Giftitude — Premium Corporate Gifting in India" },
			{
				name: "description",
				content: "Editorial corporate gifting from Giftitude. Curated luxury gift sets, diaries, lamps and accessories crafted for India's most discerning brands."
			},
			{
				name: "author",
				content: "Giftitude"
			},
			{
				property: "og:title",
				content: "Giftitude — Premium Corporate Gifting"
			},
			{
				property: "og:description",
				content: "Curated luxury corporate gifts for India's most discerning brands."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Giftitude"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	const routerState = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactLenis, {
			root: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -15
					},
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "flex min-h-screen flex-col",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, routerState.state.location.pathname)
			})
		})
	});
}
var $$splitComponentImporter$2 = () => import("./about-CS1SN-QC.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Giftitude Corporate Gifting" }, {
		name: "description",
		content: "Giftitude is a Canadian corporate gifting company dedicated to helping businesses build stronger relationships through thoughtfully curated premium gifts."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-DFaj3C_w.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Giftitude — Premium Corporate Gifting in India" },
			{
				name: "description",
				content: "Editorial corporate gifting from Giftitude. Curated luxury gift sets, diaries, lamps and accessories crafted for India's most discerning brands."
			},
			{
				property: "og:title",
				content: "Giftitude — Premium Corporate Gifting"
			},
			{
				property: "og:description",
				content: "Curated luxury corporate gifts for India's most discerning brands."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products.index-B9qVF_gl.mjs");
var Route = createFileRoute("/products/")({
	head: () => ({
		meta: [
			{ title: "Products — Giftitude Catalogue 2026" },
			{
				name: "description",
				content: "The 2026 Giftitude catalogue — gift sets, diaries, lamps, bottles and accessories across five curated categories."
			},
			{
				property: "og:title",
				content: "Products — Giftitude Catalogue 2026"
			},
			{
				property: "og:description",
				content: "Five categories. Forty objects. Curated for India's most discerning brands."
			},
			{
				property: "og:url",
				content: "/products"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$3
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$3
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$3
});
var ProductsIndexRoute = Route.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$3
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	ProductsCategoryRoute: Route$5.update({
		id: "/products/$category",
		path: "/products/$category",
		getParentRoute: () => Route$3
	}),
	ProductsIndexRoute
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
