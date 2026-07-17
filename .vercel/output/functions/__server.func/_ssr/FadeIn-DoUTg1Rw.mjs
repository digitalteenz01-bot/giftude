import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as motion, t as useInView } from "../_libs/framer-motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FadeIn-DoUTg1Rw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function FadeIn({ children, className, delay = 0, direction = "up", duration = 800 }) {
	const ref = (0, import_react.useRef)(null);
	const isInView = useInView(ref, {
		once: true,
		margin: "-10% 0px"
	});
	const directionOffsets = {
		up: {
			y: 40,
			x: 0
		},
		down: {
			y: -40,
			x: 0
		},
		left: {
			x: 40,
			y: 0
		},
		right: {
			x: -40,
			y: 0
		},
		none: {
			x: 0,
			y: 0
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: {
			opacity: 0,
			...directionOffsets[direction]
		},
		animate: isInView ? {
			opacity: 1,
			x: 0,
			y: 0
		} : {
			opacity: 0,
			...directionOffsets[direction]
		},
		transition: {
			duration: duration / 1e3,
			delay: delay / 1e3,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		},
		className: cn(className),
		children
	});
}
//#endregion
export { FadeIn as t };
