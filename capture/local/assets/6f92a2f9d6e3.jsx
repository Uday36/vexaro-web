import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/PageHeader.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { Navigation } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/PageHeader.jsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
export default function PageHeader({ title, subtitle, breadcrumb }) {
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "bg-light-blue pt-36 pb-16 relative overflow-hidden border-b border-soft-border",
		children: [
			/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#1A3A8F_1px,transparent_1px),linear-gradient(to_bottom,#1A3A8F_1px,transparent_1px)] bg-[size:34px_34px]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				"aria-hidden": "true",
				className: "absolute inset-x-0 bottom-0 hidden h-32 md:block pointer-events-none",
				children: /* @__PURE__ */ _jsxDEV("svg", {
					viewBox: "0 0 1200 160",
					className: "h-full w-full",
					fill: "none",
					children: [/* @__PURE__ */ _jsxDEV("path", {
						d: "M0 118 C170 62 260 144 420 92 C585 38 700 120 850 74 C1010 26 1096 76 1200 42",
						stroke: "url(#pageRoute)",
						strokeWidth: "4",
						strokeLinecap: "round"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("defs", { children: /* @__PURE__ */ _jsxDEV("linearGradient", {
						id: "pageRoute",
						x1: "0",
						x2: "1200",
						y1: "118",
						y2: "42",
						children: [
							/* @__PURE__ */ _jsxDEV("stop", {
								stopColor: "#1A3A8F",
								stopOpacity: ".15"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: ".5",
								stopColor: "#E06000",
								stopOpacity: ".5"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("stop", {
								offset: "1",
								stopColor: "#2855C8",
								stopOpacity: ".15"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 13
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				"aria-hidden": "true",
				className: "absolute bottom-8 right-1/4 hidden h-10 w-10 items-center justify-center rounded-full gradient-orange shadow-orange md:flex animate-float",
				children: /* @__PURE__ */ _jsxDEV(Navigation, {
					className: "text-white -rotate-45",
					size: 14
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom relative",
				children: [
					breadcrumb && /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-sm text-graphite/60 font-body mb-5",
						children: [
							/* @__PURE__ */ _jsxDEV(Link, {
								to: "/",
								className: "hover:text-navy transition-colors",
								children: "Home"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-graphite/30",
								children: "/"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-orange font-medium",
								children: breadcrumb
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "mb-4 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/75 px-3 py-1.5 shadow-card backdrop-blur-sm",
						children: [/* @__PURE__ */ _jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-orange animate-pulse" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-[11px] font-heading font-semibold uppercase tracking-wider text-navy",
							children: "VEXARO Network"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("h1", {
						className: "text-4xl md:text-5xl font-bold font-heading text-charcoal mb-4",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 9
					}, this),
					subtitle && /* @__PURE__ */ _jsxDEV("p", {
						className: "text-graphite font-body text-base md:text-lg max-w-2xl leading-relaxed",
						children: subtitle
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { className: "mt-6 w-16 h-1 gradient-orange rounded-full origin-left" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
_c = PageHeader;
var _c;
$RefreshReg$(_c, "PageHeader");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/PageHeader.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/PageHeader.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/PageHeader.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/PageHeader.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsWUFBWTtBQUNyQixTQUFTLGtCQUFrQjs7O0FBRTNCLGVBQWUsU0FBUyxXQUFXLEVBQUUsT0FBTyxVQUFVLGNBQWM7Q0FDbEUsT0FDRSx3QkFBQyxXQUFEO0VBQVMsV0FBVTtZQUFuQjtHQUVFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLHdLQUF5Szs7Ozs7R0FHeEwsd0JBQUMsT0FBRDtJQUFLLGVBQVk7SUFBTyxXQUFVO2NBQ2hDLHdCQUFDLE9BQUQ7S0FBSyxTQUFRO0tBQWUsV0FBVTtLQUFnQixNQUFLO2VBQTNELENBQ0Usd0JBQUMsUUFBRDtNQUNFLEdBQUU7TUFDRixRQUFPO01BQ1AsYUFBWTtNQUNaLGVBQWM7S0FDZjs7OztlQUNELHdCQUFDLFFBQUQsWUFDRSx3QkFBQyxrQkFBRDtNQUFnQixJQUFHO01BQVksSUFBRztNQUFJLElBQUc7TUFBTyxJQUFHO01BQU0sSUFBRztnQkFBNUQ7T0FDRSx3QkFBQyxRQUFEO1FBQU0sV0FBVTtRQUFVLGFBQVk7T0FBTzs7Ozs7T0FDN0Msd0JBQUMsUUFBRDtRQUFNLFFBQU87UUFBSyxXQUFVO1FBQVUsYUFBWTtPQUFNOzs7OztPQUN4RCx3QkFBQyxRQUFEO1FBQU0sUUFBTztRQUFJLFdBQVU7UUFBVSxhQUFZO09BQU87Ozs7O01BQzFDOzs7OztjQUNaOzs7O2FBQ0g7Ozs7OztHQUNGOzs7OztHQUdMLHdCQUFDLE9BQUQ7SUFDRSxlQUFZO0lBQ1osV0FBVTtjQUVWLHdCQUFDLFlBQUQ7S0FBWSxXQUFVO0tBQXdCLE1BQU07SUFBSzs7Ozs7R0FDdEQ7Ozs7O0dBRUwsd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZjtLQUNHLGNBQ0Msd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQWY7T0FDRSx3QkFBQyxNQUFEO1FBQU0sSUFBRztRQUFJLFdBQVU7a0JBQW9DO09BRXJEOzs7OztPQUNOLHdCQUFDLFFBQUQ7UUFBTSxXQUFVO2tCQUFtQjtPQUFPOzs7OztPQUMxQyx3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBMkI7T0FBaUI7Ozs7O01BQ3pEOzs7Ozs7S0FHUCx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZixDQUNFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLG1EQUFvRDs7OztnQkFDbkUsd0JBQUMsUUFBRDtPQUFNLFdBQVU7aUJBQTRFO01BRXRGOzs7O2NBQ0g7Ozs7OztLQUVMLHdCQUFDLE1BQUQ7TUFBSSxXQUFVO2dCQUNYO0tBQ0M7Ozs7O0tBRUgsWUFDQyx3QkFBQyxLQUFEO01BQUcsV0FBVTtnQkFDVjtLQUNBOzs7OztLQUdMLHdCQUFDLE9BQUQsRUFBSyxXQUFVLHlEQUEwRDs7Ozs7SUFDdEU7Ozs7OztFQUNFOzs7Ozs7QUFFYiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJQYWdlSGVhZGVyLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VIZWFkZXIoeyB0aXRsZSwgc3VidGl0bGUsIGJyZWFkY3J1bWIgfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWxpZ2h0LWJsdWUgcHQtMzYgcGItMTYgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlci1iIGJvcmRlci1zb2Z0LWJvcmRlclwiPlxuICAgICAgey8qIEJhY2tncm91bmQgYmx1ZXByaW50IGdyaWQgcGF0dGVybiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LVswLjA1XSBiZy1bbGluZWFyLWdyYWRpZW50KHRvX3JpZ2h0LCMxQTNBOEZfMXB4LHRyYW5zcGFyZW50XzFweCksbGluZWFyLWdyYWRpZW50KHRvX2JvdHRvbSwjMUEzQThGXzFweCx0cmFuc3BhcmVudF8xcHgpXSBiZy1bc2l6ZTozNHB4XzM0cHhdXCIgLz5cblxuICAgICAgey8qIEFuaW1hdGVkIFNWRyBjdXJ2ZWQgcm91dGUgbGluZSAqL31cbiAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIGJvdHRvbS0wIGhpZGRlbiBoLTMyIG1kOmJsb2NrIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEyMDAgMTYwXCIgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMCAxMTggQzE3MCA2MiAyNjAgMTQ0IDQyMCA5MiBDNTg1IDM4IDcwMCAxMjAgODUwIDc0IEMxMDEwIDI2IDEwOTYgNzYgMTIwMCA0MlwiXG4gICAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhZ2VSb3V0ZSlcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cInBhZ2VSb3V0ZVwiIHgxPVwiMFwiIHgyPVwiMTIwMFwiIHkxPVwiMTE4XCIgeTI9XCI0MlwiPlxuICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMUEzQThGXCIgc3RvcE9wYWNpdHk9XCIuMTVcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIuNVwiIHN0b3BDb2xvcj1cIiNFMDYwMDBcIiBzdG9wT3BhY2l0eT1cIi41XCIgLz5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMyODU1QzhcIiBzdG9wT3BhY2l0eT1cIi4xNVwiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEZsb2F0aW5nIGdsb3dpbmcgdmVoaWNsZSAvIGluZGljYXRvciAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggcmlnaHQtMS80IGhpZGRlbiBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBncmFkaWVudC1vcmFuZ2Ugc2hhZG93LW9yYW5nZSBtZDpmbGV4IGFuaW1hdGUtZmxvYXRcIlxuICAgICAgPlxuICAgICAgICA8TmF2aWdhdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIC1yb3RhdGUtNDVcIiBzaXplPXsxNH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b20gcmVsYXRpdmVcIj5cbiAgICAgICAge2JyZWFkY3J1bWIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zbSB0ZXh0LWdyYXBoaXRlLzYwIGZvbnQtYm9keSBtYi01XCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LW5hdnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZS8zMFwiPi88L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZSBmb250LW1lZGl1bVwiPnticmVhZGNydW1ifTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLW5hdnkvMTUgYmctd2hpdGUvNzUgcHgtMyBweS0xLjUgc2hhZG93LWNhcmQgYmFja2Ryb3AtYmx1ci1zbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLjUgaC0xLjUgcm91bmRlZC1mdWxsIGJnLW9yYW5nZSBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LWhlYWRpbmcgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1uYXZ5XCI+XG4gICAgICAgICAgICBWRVhBUk8gTmV0d29ya1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCBtYi00XCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHtzdWJ0aXRsZSAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSBmb250LWJvZHkgdGV4dC1iYXNlIG1kOnRleHQtbGcgbWF4LXctMnhsIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAge3N1YnRpdGxlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdy0xNiBoLTEgZ3JhZGllbnQtb3JhbmdlIHJvdW5kZWQtZnVsbCBvcmlnaW4tbGVmdFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXX0=