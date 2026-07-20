import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Cx197AO_.js
var $$splitComponentImporter = () => import("./contact-DpSJXEBr.mjs");
var searchSchema = objectType({ product: stringType().optional() });
var Route = createFileRoute("/contact")({
	validateSearch: searchSchema,
	head: () => ({
		meta: [{ title: "Contact — Begin a Brief with Giftitude" }, {
			name: "description",
			content: "Begin a brief with the Giftitude studio. A curator replies within one working day with a tailored corporate gifting proposal."
		}],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
