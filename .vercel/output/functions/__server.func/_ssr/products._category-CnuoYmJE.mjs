import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Nav, t as Footer } from "./Footer-C_3aJ_dT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._category-CnuoYmJE.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryMissing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { variant: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-xl px-6 pt-40 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl text-navy",
						children: "Room not found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-navy/70",
						children: "That category doesn't exist in the 2026 catalogue."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "mt-8 inline-block rounded-full bg-navy px-6 py-3 text-sm text-ivory transition-all duration-300 hover:bg-navy-soft hover:scale-[1.02]",
						children: "← Back to catalogue"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryMissing, {});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
