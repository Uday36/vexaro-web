import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Legal.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport6_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport6_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { Check, Mail, Phone, ArrowRight, HelpCircle } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { useMeta } from "/src/hooks/useMeta.js";
import PageHeader from "/src/components/PageHeader.jsx";
import { legalData, siteConfig } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Legal.jsx";
import __vite__cjsImport6_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function Legal({ type = "terms" }) {
	_s();
	const content = legalData[type] || legalData.resources;
	useMeta({
		title: content.seoTitle,
		description: content.subtitle
	});
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(PageHeader, {
		title: content.title,
		subtitle: content.subtitle,
		breadcrumb: content.breadcrumb
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("section", {
		className: "section-padding bg-white flex-1",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "container-custom",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "grid lg:grid-cols-[1fr_340px] gap-8 items-start",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "rounded-card border border-soft-border bg-light-blue p-6 md:p-8 shadow-sm",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "grid gap-4",
						children: content.items.map((item, idx) => /* @__PURE__ */ _jsxDEV("div", {
							className: "flex gap-3 rounded-card border border-white/80 bg-white p-4 shadow-card items-start",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${idx % 2 === 0 ? "bg-navy-50 text-navy" : "bg-orange-50 text-orange"}`,
								children: /* @__PURE__ */ _jsxDEV(Check, { size: 14 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 23
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-graphite font-body text-sm leading-relaxed",
								children: item
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 21
							}, this)]
						}, idx, true, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 19
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "rounded-card border border-soft-border bg-white p-6 shadow-card space-y-4",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 text-navy font-bold font-heading text-lg",
							children: [/* @__PURE__ */ _jsxDEV(HelpCircle, {
								size: 20,
								className: "text-orange"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("h3", { children: "Need help?" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-graphite text-xs font-body leading-relaxed",
							children: "Our support team is available to assist with service details, invoicing, and corporate agreements."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { className: "h-px bg-soft-border" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-2 text-xs font-body text-graphite",
							children: [/* @__PURE__ */ _jsxDEV("a", {
								href: `mailto:${siteConfig.email}`,
								className: "flex items-center gap-2 hover:text-orange transition-colors",
								children: [/* @__PURE__ */ _jsxDEV(Mail, {
									size: 13,
									className: "text-orange shrink-0"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: siteConfig.email }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 65,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("a", {
								href: `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`,
								className: "flex items-center gap-2 hover:text-orange transition-colors",
								children: [/* @__PURE__ */ _jsxDEV(Phone, {
									size: 13,
									className: "text-orange shrink-0"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: siteConfig.phone }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV(Link, {
							to: "/contact",
							className: "block text-center w-full py-2.5 gradient-navy text-white text-xs font-semibold font-heading rounded-btn shadow-navy-sm hover:shadow-navy transition-all duration-200 mt-4",
							children: "Contact Support"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 11
			}, this)
		}, void 0, false, {
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
_s(Legal, "2a1reKp/+GE9REwcjqs+koup8Bk=", false, function() {
	return [useMeta];
});
_c = Legal;
var _c;
$RefreshReg$(_c, "Legal");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Legal.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Legal.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Legal.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Legal.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsWUFBWTtBQUNyQixTQUFTLE9BQU8sTUFBTSxPQUFPLFlBQVksa0JBQWtCO0FBQzNELFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLFdBQVcsa0JBQWtCOzs7O0FBRXRDLGVBQWUsU0FBUyxNQUFNLEVBQUUsT0FBTyxXQUFXOztDQUNoRCxNQUFNLFVBQVUsVUFBVSxTQUFTLFVBQVU7Q0FFN0MsUUFBUTtFQUNOLE9BQU8sUUFBUTtFQUNmLGFBQWEsUUFBUTtDQUN2QixDQUFDO0NBRUQsT0FDRSxnREFDRSx3QkFBQyxZQUFEO0VBQ0UsT0FBTyxRQUFRO0VBQ2YsVUFBVSxRQUFRO0VBQ2xCLFlBQVksUUFBUTtDQUNyQjs7OztXQUVELHdCQUFDLFdBQUQ7RUFBUyxXQUFVO1lBQ2pCLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQ2Isd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZixDQUVFLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQ2Isd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQ1osUUFBUSxNQUFNLEtBQUssTUFBTSxRQUN4Qix3QkFBQyxPQUFEO09BRUUsV0FBVTtpQkFGWixDQUlFLHdCQUFDLE9BQUQ7UUFDRSxXQUFXLHlFQUNULE1BQU0sTUFBTSxJQUFJLHlCQUF5QjtrQkFHM0Msd0JBQUMsT0FBRCxFQUFPLE1BQU0sR0FBSzs7Ozs7T0FDZjs7OztpQkFDTCx3QkFBQyxLQUFEO1FBQUcsV0FBVTtrQkFBbUQ7T0FBUTs7OztlQUNyRTtTQVhFOzs7O2FBV0YsQ0FDTjtLQUNFOzs7OztJQUNGOzs7O2NBR0wsd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZjtNQUNFLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0Usd0JBQUMsWUFBRDtRQUFZLE1BQU07UUFBSSxXQUFVO09BQWU7Ozs7aUJBQy9DLHdCQUFDLE1BQUQsWUFBSSxhQUFjOzs7O2VBQ2Y7Ozs7OztNQUNMLHdCQUFDLEtBQUQ7T0FBRyxXQUFVO2lCQUFrRDtNQUc1RDs7Ozs7TUFDSCx3QkFBQyxPQUFELEVBQUssV0FBVSxzQkFBdUI7Ozs7O01BQ3RDLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0Usd0JBQUMsS0FBRDtRQUNFLE1BQU0sVUFBVSxXQUFXO1FBQzNCLFdBQVU7a0JBRlosQ0FJRSx3QkFBQyxNQUFEO1NBQU0sTUFBTTtTQUFJLFdBQVU7UUFBd0I7Ozs7a0JBQ2xELHdCQUFDLFFBQUQsWUFBTyxXQUFXLE1BQVk7Ozs7Z0JBQzdCOzs7OztpQkFDSCx3QkFBQyxLQUFEO1FBQ0UsTUFBTSxPQUFPLFdBQVcsTUFBTSxRQUFRLFlBQVksRUFBRTtRQUNwRCxXQUFVO2tCQUZaLENBSUUsd0JBQUMsT0FBRDtTQUFPLE1BQU07U0FBSSxXQUFVO1FBQXdCOzs7O2tCQUNuRCx3QkFBQyxRQUFELFlBQU8sV0FBVyxNQUFZOzs7O2dCQUM3Qjs7Ozs7ZUFDQTs7Ozs7O01BQ0wsd0JBQUMsTUFBRDtPQUNFLElBQUc7T0FDSCxXQUFVO2lCQUNYO01BRUs7Ozs7O0tBQ0g7Ozs7O1lBQ0Y7Ozs7OztFQUNGOzs7OztDQUNFOzs7O1NBQ1Q7Ozs7O0FBRU4iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiTGVnYWwuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBDaGVjaywgTWFpbCwgUGhvbmUsIEFycm93UmlnaHQsIEhlbHBDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgdXNlTWV0YSB9IGZyb20gJy4uL2hvb2tzL3VzZU1ldGEnO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyJztcbmltcG9ydCB7IGxlZ2FsRGF0YSwgc2l0ZUNvbmZpZyB9IGZyb20gJy4uL2RhdGEvc2l0ZURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWdhbCh7IHR5cGUgPSAndGVybXMnIH0pIHtcbiAgY29uc3QgY29udGVudCA9IGxlZ2FsRGF0YVt0eXBlXSB8fCBsZWdhbERhdGEucmVzb3VyY2VzO1xuXG4gIHVzZU1ldGEoe1xuICAgIHRpdGxlOiBjb250ZW50LnNlb1RpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBjb250ZW50LnN1YnRpdGxlXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYWdlSGVhZGVyXG4gICAgICAgIHRpdGxlPXtjb250ZW50LnRpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17Y29udGVudC5zdWJ0aXRsZX1cbiAgICAgICAgYnJlYWRjcnVtYj17Y29udGVudC5icmVhZGNydW1ifVxuICAgICAgLz5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1wYWRkaW5nIGJnLXdoaXRlIGZsZXgtMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLVsxZnJfMzQwcHhdIGdhcC04IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICB7LyogTWFpbiBQb2xpY3kgLyBDbGF1c2UgQ29udGVudCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1jYXJkIGJvcmRlciBib3JkZXItc29mdC1ib3JkZXIgYmctbGlnaHQtYmx1ZSBwLTYgbWQ6cC04IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICB7Y29udGVudC5pdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyByb3VuZGVkLWNhcmQgYm9yZGVyIGJvcmRlci13aGl0ZS84MCBiZy13aGl0ZSBwLTQgc2hhZG93LWNhcmQgaXRlbXMtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy02IGgtNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTAgbXQtMC41ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHggJSAyID09PSAwID8gJ2JnLW5hdnktNTAgdGV4dC1uYXZ5JyA6ICdiZy1vcmFuZ2UtNTAgdGV4dC1vcmFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2sgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIGZvbnQtYm9keSB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiPntpdGVtfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogU2lkZWJhciBTdXBwb3J0IEJveCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1jYXJkIGJvcmRlciBib3JkZXItc29mdC1ib3JkZXIgYmctd2hpdGUgcC02IHNoYWRvdy1jYXJkIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtbmF2eSBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICA8SGVscENpcmNsZSBzaXplPXsyMH0gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxoMz5OZWVkIGhlbHA/PC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgdGV4dC14cyBmb250LWJvZHkgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgT3VyIHN1cHBvcnQgdGVhbSBpcyBhdmFpbGFibGUgdG8gYXNzaXN0IHdpdGggc2VydmljZSBkZXRhaWxzLCBpbnZvaWNpbmcsIGFuZFxuICAgICAgICAgICAgICAgIGNvcnBvcmF0ZSBhZ3JlZW1lbnRzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1weCBiZy1zb2Z0LWJvcmRlclwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQteHMgZm9udC1ib2R5IHRleHQtZ3JhcGhpdGVcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke3NpdGVDb25maWcuZW1haWx9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGhvdmVyOnRleHQtb3JhbmdlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TWFpbCBzaXplPXsxM30gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2Ugc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3NpdGVDb25maWcuZW1haWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YHRlbDoke3NpdGVDb25maWcucGhvbmUucmVwbGFjZSgvW14wLTkrXS9nLCAnJyl9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGhvdmVyOnRleHQtb3JhbmdlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGhvbmUgc2l6ZT17MTN9IGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntzaXRlQ29uZmlnLnBob25lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtY2VudGVyIHctZnVsbCBweS0yLjUgZ3JhZGllbnQtbmF2eSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgcm91bmRlZC1idG4gc2hhZG93LW5hdnktc20gaG92ZXI6c2hhZG93LW5hdnkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIG10LTRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ29udGFjdCBTdXBwb3J0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ==