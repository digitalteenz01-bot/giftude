import { f as lazyRouteComponent, k as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getCategory } from "./catalogue-D37_P-CJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._category-BRe3qUvi.js
var $$splitErrorComponentImporter = () => import("./products._category-BoMyV6am.mjs");
var $$splitNotFoundComponentImporter = () => import("./products._category-CnuoYmJE.mjs");
var $$splitComponentImporter = () => import("./products._category-CCwhQnpY.mjs");
var Route = createFileRoute("/products/$category")({
	loader: ({ params }) => {
		const category = getCategory(params.category);
		if (!category) throw notFound();
		return { category };
	},
	head: ({ loaderData }) => {
		const c = loaderData?.category;
		const title = c ? `${c.title} — Giftitude Catalogue` : "Category — Giftitude";
		const desc = c?.tagline ?? "A Giftitude category.";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				...c ? [{
					property: "og:image",
					content: c.cover
				}] : []
			],
			links: c ? [{
				rel: "canonical",
				href: `/products/${c.slug}`
			}] : []
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
