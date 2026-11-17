import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Services.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport7_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport7_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { Check, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { useMeta } from "/src/hooks/useMeta.js";
import PageHeader from "/src/components/PageHeader.jsx";
import IconHelper from "/src/components/IconHelper.jsx";
import { servicesData } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Services.jsx";
import __vite__cjsImport7_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function Services() {
	_s();
	useMeta({
		title: "Services",
		description: "VEXARO services: Domestic Courier, Express Delivery, Same-Day, B2B Services, Warehousing, E-commerce Shipping across India."
	});
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(PageHeader, {
		title: "Our Services",
		subtitle: "End-to-end courier solutions for every shipping need — from individual parcels to enterprise freight.",
		breadcrumb: "Services"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("section", {
		className: "section-padding bg-white flex-1",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "container-custom",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "grid md:grid-cols-2 gap-7",
				children: servicesData.map((srv, idx) => {
					const isEven = idx % 2 === 0;
					return /* @__PURE__ */ _jsxDEV("div", {
						className: "border border-soft-border rounded-card p-7 bg-white card-hover hover:border-navy/25 group flex flex-col justify-between",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-start gap-5",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: `w-14 h-14 rounded-card flex items-center justify-center shrink-0 shadow-card transition-all duration-300 ${isEven ? "bg-orange-50 border border-orange/20" : "bg-navy-50 border border-navy/20"}`,
								children: /* @__PURE__ */ _jsxDEV(IconHelper, {
									name: srv.icon,
									size: 22,
									className: isEven ? "text-orange" : "text-navy"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 42,
									columnNumber: 23
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ _jsxDEV("h3", {
										className: "font-bold font-heading text-charcoal text-xl mb-2",
										children: srv.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 49,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-graphite font-body text-sm leading-relaxed mb-4",
										children: srv.description
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 52,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("ul", {
										className: "space-y-2 mb-5",
										children: srv.benefits.map((benefit, bIdx) => /* @__PURE__ */ _jsxDEV("li", {
											className: "flex items-center gap-2 text-charcoal text-xs font-body",
											children: [/* @__PURE__ */ _jsxDEV(Check, {
												size: 13,
												className: isEven ? "text-orange shrink-0" : "text-navy shrink-0"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 62,
												columnNumber: 29
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: benefit }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 66,
												columnNumber: 29
											}, this)]
										}, bIdx, true, {
											fileName: _jsxFileName,
											lineNumber: 58,
											columnNumber: 27
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 56,
										columnNumber: 23
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 19
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "border-t border-soft-border pt-4 flex items-center justify-between mt-auto",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: `font-heading text-xs font-semibold px-3 py-1 rounded-full ${isEven ? "bg-orange-50 text-orange border border-orange/20" : "bg-navy-50 text-navy border border-navy/20"}`,
								children: srv.timeline
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV(Link, {
								to: "/contact",
								className: `inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold font-heading rounded-btn transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${isEven ? "gradient-orange text-white" : "gradient-navy text-white"}`,
								children: ["Enquire Now ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 12 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 35
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 19
						}, this)]
					}, srv.id, true, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 17
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 11
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "mt-16 bg-light-blue border border-soft-border rounded-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "text-2xl font-bold font-heading text-charcoal mb-2",
						children: "Need a Custom Enterprise Contract?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-graphite font-body text-sm leading-relaxed",
						children: "Our enterprise team specialises in tailored courier contracts for high-volume businesses, dedicated dispatch vehicles, and API integrations."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV(Link, {
					to: "/contact",
					className: "inline-flex items-center gap-2 px-8 py-3.5 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap",
					children: ["Talk to Our Team ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 32
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 108,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
_s(Services, "2a1reKp/+GE9REwcjqs+koup8Bk=", false, function() {
	return [useMeta];
});
_c = Services;
var _c;
$RefreshReg$(_c, "Services");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Services.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Services.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Services.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Services.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsWUFBWTtBQUNyQixTQUFTLE9BQU8sa0JBQWtCO0FBQ2xDLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjs7OztBQUU3QixlQUFlLFNBQVMsV0FBVzs7Q0FDakMsUUFBUTtFQUNOLE9BQU87RUFDUCxhQUNFO0NBQ0osQ0FBQztDQUVELE9BQ0UsZ0RBQ0Usd0JBQUMsWUFBRDtFQUNFLE9BQU07RUFDTixVQUFTO0VBQ1QsWUFBVztDQUNaOzs7O1dBRUQsd0JBQUMsV0FBRDtFQUFTLFdBQVU7WUFDakIsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFBZixDQUNFLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQ1osYUFBYSxLQUFLLEtBQUssUUFBUTtLQUM5QixNQUFNLFNBQVMsTUFBTSxNQUFNO0tBQzNCLE9BQ0Usd0JBQUMsT0FBRDtNQUVFLFdBQVU7Z0JBRlosQ0FJRSx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZixDQUNFLHdCQUFDLE9BQUQ7UUFDRSxXQUFXLDRHQUNULFNBQ0kseUNBQ0E7a0JBR04sd0JBQUMsWUFBRDtTQUNFLE1BQU0sSUFBSTtTQUNWLE1BQU07U0FDTixXQUFXLFNBQVMsZ0JBQWdCO1FBQ3JDOzs7OztPQUNFOzs7O2lCQUNMLHdCQUFDLE9BQUQ7UUFBSyxXQUFVO2tCQUFmO1NBQ0Usd0JBQUMsTUFBRDtVQUFJLFdBQVU7b0JBQ1gsSUFBSTtTQUNIOzs7OztTQUNKLHdCQUFDLEtBQUQ7VUFBRyxXQUFVO29CQUNWLElBQUk7U0FDSjs7Ozs7U0FFSCx3QkFBQyxNQUFEO1VBQUksV0FBVTtvQkFDWCxJQUFJLFNBQVMsS0FBSyxTQUFTLFNBQzFCLHdCQUFDLE1BQUQ7V0FFRSxXQUFVO3FCQUZaLENBSUUsd0JBQUMsT0FBRDtZQUNFLE1BQU07WUFDTixXQUFXLFNBQVMseUJBQXlCO1dBQzlDOzs7O3FCQUNELHdCQUFDLFFBQUQsWUFBTyxRQUFjOzs7O21CQUNuQjthQVJHOzs7O2lCQVFILENBQ0w7U0FDQzs7Ozs7UUFDRDs7Ozs7ZUFDRjs7Ozs7Z0JBRUwsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWYsQ0FDRSx3QkFBQyxRQUFEO1FBQ0UsV0FBVyw2REFDVCxTQUNJLHFEQUNBO2tCQUdMLElBQUk7T0FDRDs7OztpQkFDTix3QkFBQyxNQUFEO1FBQ0UsSUFBRztRQUNILFdBQVcsMEpBQ1QsU0FBUywrQkFBK0I7a0JBSDVDLENBS0MsZ0JBQ2Esd0JBQUMsWUFBRCxFQUFZLE1BQU0sR0FBSzs7OztnQkFDL0I7Ozs7O2VBQ0g7Ozs7O2NBQ0Y7UUE3REUsSUFBSTs7OztZQTZETjtJQUVULENBQUM7R0FDRTs7OzthQUdMLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQWYsQ0FDRSx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0Usd0JBQUMsTUFBRDtNQUFJLFdBQVU7Z0JBQXFEO0tBRS9EOzs7O2VBQ0osd0JBQUMsS0FBRDtNQUFHLFdBQVU7Z0JBQWtEO0tBRzVEOzs7O2FBQ0E7Ozs7O2NBQ0wsd0JBQUMsTUFBRDtLQUNFLElBQUc7S0FDSCxXQUFVO2VBRlosQ0FHQyxxQkFDa0Isd0JBQUMsWUFBRCxFQUFZLE1BQU0sR0FBSzs7OzthQUNwQzs7Ozs7WUFDSDs7Ozs7V0FDRjs7Ozs7O0NBQ0U7Ozs7U0FDVDs7Ozs7QUFFTiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJTZXJ2aWNlcy5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IENoZWNrLCBBcnJvd1JpZ2h0IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHVzZU1ldGEgfSBmcm9tICcuLi9ob29rcy91c2VNZXRhJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgSWNvbkhlbHBlciBmcm9tICcuLi9jb21wb25lbnRzL0ljb25IZWxwZXInO1xuaW1wb3J0IHsgc2VydmljZXNEYXRhIH0gZnJvbSAnLi4vZGF0YS9zaXRlRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuICB1c2VNZXRhKHtcbiAgICB0aXRsZTogJ1NlcnZpY2VzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdWRVhBUk8gc2VydmljZXM6IERvbWVzdGljIENvdXJpZXIsIEV4cHJlc3MgRGVsaXZlcnksIFNhbWUtRGF5LCBCMkIgU2VydmljZXMsIFdhcmVob3VzaW5nLCBFLWNvbW1lcmNlIFNoaXBwaW5nIGFjcm9zcyBJbmRpYS4nXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYWdlSGVhZGVyXG4gICAgICAgIHRpdGxlPVwiT3VyIFNlcnZpY2VzXCJcbiAgICAgICAgc3VidGl0bGU9XCJFbmQtdG8tZW5kIGNvdXJpZXIgc29sdXRpb25zIGZvciBldmVyeSBzaGlwcGluZyBuZWVkIOKAlCBmcm9tIGluZGl2aWR1YWwgcGFyY2VscyB0byBlbnRlcnByaXNlIGZyZWlnaHQuXCJcbiAgICAgICAgYnJlYWRjcnVtYj1cIlNlcnZpY2VzXCJcbiAgICAgIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tcGFkZGluZyBiZy13aGl0ZSBmbGV4LTFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC03XCI+XG4gICAgICAgICAgICB7c2VydmljZXNEYXRhLm1hcCgoc3J2LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNFdmVuID0gaWR4ICUgMiA9PT0gMDtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3Nydi5pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc29mdC1ib3JkZXIgcm91bmRlZC1jYXJkIHAtNyBiZy13aGl0ZSBjYXJkLWhvdmVyIGhvdmVyOmJvcmRlci1uYXZ5LzI1IGdyb3VwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTQgaC0xNCByb3VuZGVkLWNhcmQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTAgc2hhZG93LWNhcmQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0V2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTUwIGJvcmRlciBib3JkZXItb3JhbmdlLzIwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1uYXZ5LTUwIGJvcmRlciBib3JkZXItbmF2eS8yMCdcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uSGVscGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzcnYuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0V2ZW4gPyAndGV4dC1vcmFuZ2UnIDogJ3RleHQtbmF2eSd9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCB0ZXh0LXhsIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzcnYudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIGZvbnQtYm9keSB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3J2LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgbWItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Nydi5iZW5lZml0cy5tYXAoKGJlbmVmaXQsIGJJZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtiSWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtY2hhcmNvYWwgdGV4dC14cyBmb250LWJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxM31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNFdmVuID8gJ3RleHQtb3JhbmdlIHNocmluay0wJyA6ICd0ZXh0LW5hdnkgc2hyaW5rLTAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2JlbmVmaXR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItc29mdC1ib3JkZXIgcHQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtaGVhZGluZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNFdmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS01MCB0ZXh0LW9yYW5nZSBib3JkZXIgYm9yZGVyLW9yYW5nZS8yMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctbmF2eS01MCB0ZXh0LW5hdnkgYm9yZGVyIGJvcmRlci1uYXZ5LzIwJ1xuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3Nydi50aW1lbGluZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHJvdW5kZWQtYnRuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3ZlcjotdHJhbnNsYXRlLXktMC41IHNoYWRvdy1zbSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNFdmVuID8gJ2dyYWRpZW50LW9yYW5nZSB0ZXh0LXdoaXRlJyA6ICdncmFkaWVudC1uYXZ5IHRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBFbnF1aXJlIE5vdyA8QXJyb3dSaWdodCBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBCb3R0b20gRW50ZXJwcmlzZSBCYW5uZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiBiZy1saWdodC1ibHVlIGJvcmRlciBib3JkZXItc29mdC1ib3JkZXIgcm91bmRlZC1jYXJkIHAtOCBtZDpwLTEwIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNiBzaGFkb3ctY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14bFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTJcIj5cbiAgICAgICAgICAgICAgICBOZWVkIGEgQ3VzdG9tIEVudGVycHJpc2UgQ29udHJhY3Q/XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IHRleHQtc20gbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgT3VyIGVudGVycHJpc2UgdGVhbSBzcGVjaWFsaXNlcyBpbiB0YWlsb3JlZCBjb3VyaWVyIGNvbnRyYWN0cyBmb3IgaGlnaC12b2x1bWVcbiAgICAgICAgICAgICAgICBidXNpbmVzc2VzLCBkZWRpY2F0ZWQgZGlzcGF0Y2ggdmVoaWNsZXMsIGFuZCBBUEkgaW50ZWdyYXRpb25zLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtOCBweS0zLjUgZ3JhZGllbnQtbmF2eSB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHJvdW5kZWQtYnRuIHNoYWRvdy1uYXZ5IGhvdmVyOnNoYWRvdy1sZyBob3ZlcjotdHJhbnNsYXRlLXktMC41IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRhbGsgdG8gT3VyIFRlYW0gPEFycm93UmlnaHQgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl19