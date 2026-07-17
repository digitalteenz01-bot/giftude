import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Nav, t as Footer } from "./Footer-C_3aJ_dT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._category-BoMyV6am.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "min-h-screen bg-ivory",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { variant: "light" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-xl px-6 pt-40 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl text-navy",
				children: "Something went wrong"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: reset,
				className: "mt-6 rounded-full bg-navy px-6 py-3 text-sm text-ivory transition-all duration-300 hover:bg-navy-soft hover:scale-[1.02] active:scale-[0.98]",
				children: "Try again"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	]
});
//#endregion
export { SplitErrorComponent as errorComponent };
