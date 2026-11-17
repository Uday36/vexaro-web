import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Partners.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport6_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport6_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { ArrowRight, Truck, ShoppingBag, Briefcase, Cpu } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { useMeta } from "/src/hooks/useMeta.js";
import PageHeader from "/src/components/PageHeader.jsx";
import { partnerCategories, partnersList } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Partners.jsx";
import __vite__cjsImport6_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function Partners() {
	_s();
	useMeta({
		title: "Partners",
		description: "VEXARO's partner ecosystem — courier, e-commerce, and technology partners across India."
	});
	const getCategoryIcon = (iconName, color) => {
		const isOrange = color === "orange";
		const cls = isOrange ? "text-orange" : "text-navy";
		switch (iconName) {
			case "truck": return /* @__PURE__ */ _jsxDEV(Truck, {
				size: 22,
				className: cls
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 16
			}, this);
			case "shoppingBag": return /* @__PURE__ */ _jsxDEV(ShoppingBag, {
				size: 22,
				className: cls
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 16
			}, this);
			case "briefcase": return /* @__PURE__ */ _jsxDEV(Briefcase, {
				size: 22,
				className: cls
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 16
			}, this);
			case "cpu": return /* @__PURE__ */ _jsxDEV(Cpu, {
				size: 22,
				className: cls
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 16
			}, this);
			default: return /* @__PURE__ */ _jsxDEV(Truck, {
				size: 22,
				className: cls
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 16
			}, this);
		}
	};
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(PageHeader, {
		title: "Our Partners",
		subtitle: "Building India's most connected courier ecosystem — together with our trusted partners.",
		breadcrumb: "Partners"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("section", {
		className: "section-padding bg-white flex-1",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "container-custom",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center mb-14",
					children: [/* @__PURE__ */ _jsxDEV("h2", {
						className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3",
						children: "Partnership Categories"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-graphite font-body max-w-xl mx-auto",
						children: "VEXARO works with a diverse ecosystem of partners to deliver seamless courier services."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16",
					children: partnerCategories.map((cat, idx) => /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-soft-border rounded-card p-6 card-hover group text-center transition-all duration-300",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: `w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm ${cat.color === "orange" ? "bg-orange-50 border border-orange/15" : "bg-navy-50 border border-navy/15"}`,
								children: getCategoryIcon(cat.icon, cat.color)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "font-bold font-heading text-charcoal mb-2",
								children: cat.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-graphite text-sm font-body leading-relaxed",
								children: cat.text
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 17
							}, this)
						]
					}, idx, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center mb-8",
					children: /* @__PURE__ */ _jsxDEV("h3", {
						className: "text-2xl font-bold font-heading text-charcoal mb-2",
						children: "Trusted By"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
					children: partnersList.map((partner, idx) => /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-soft-border rounded-card p-6 card-hover flex flex-col justify-between",
						children: /* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "h-14 flex items-center justify-center mb-4 p-2 bg-gray-50/50 rounded-lg",
								children: /* @__PURE__ */ _jsxDEV("img", {
									src: partner.logo,
									alt: partner.name,
									className: "max-h-10 max-w-full object-contain"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 86,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ _jsxDEV("h4", {
									className: "font-bold font-heading text-charcoal text-base",
									children: partner.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-navy-50 text-navy border border-navy/15",
									children: partner.cat
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-graphite text-xs font-body leading-relaxed mb-4",
								children: partner.desc
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 17
						}, this)
					}, idx, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-16 bg-cream border border-soft-border rounded-card p-8 md:p-12 text-center",
					children: [
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl md:text-3xl font-bold font-heading text-charcoal mb-3",
							children: "Become a VEXARO Partner"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-graphite font-body text-sm md:text-base max-w-xl mx-auto mb-6",
							children: "Whether you run a courier fleet, an e-commerce platform, or a warehouse facility — partner with VEXARO and grow with India's fastest courier network."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 px-8 py-3.5 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
							children: ["Partner With Us ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 31
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 5
	}, this);
}
_s(Partners, "2a1reKp/+GE9REwcjqs+koup8Bk=", false, function() {
	return [useMeta];
});
_c = Partners;
var _c;
$RefreshReg$(_c, "Partners");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Partners.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Partners.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Partners.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Partners.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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V0FBVTtpQkFGWixDQUdDLG9CQUNpQix3QkFBQyxZQUFELEVBQVksTUFBTSxHQUFLOzs7O2VBQ25DOzs7Ozs7S0FDSDs7Ozs7O0dBQ0Y7Ozs7OztDQUNFOzs7O1NBQ1Q7Ozs7O0FBRU4iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiUGFydG5lcnMuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBUcnVjaywgU2hvcHBpbmdCYWcsIEJyaWVmY2FzZSwgQ3B1IH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHVzZU1ldGEgfSBmcm9tICcuLi9ob29rcy91c2VNZXRhJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgeyBwYXJ0bmVyQ2F0ZWdvcmllcywgcGFydG5lcnNMaXN0IH0gZnJvbSAnLi4vZGF0YS9zaXRlRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRuZXJzKCkge1xuICB1c2VNZXRhKHtcbiAgICB0aXRsZTogJ1BhcnRuZXJzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVkVYQVJPJ3MgcGFydG5lciBlY29zeXN0ZW0g4oCUIGNvdXJpZXIsIGUtY29tbWVyY2UsIGFuZCB0ZWNobm9sb2d5IHBhcnRuZXJzIGFjcm9zcyBJbmRpYS5cIlxuICB9KTtcblxuICBjb25zdCBnZXRDYXRlZ29yeUljb24gPSAoaWNvbk5hbWUsIGNvbG9yKSA9PiB7XG4gICAgY29uc3QgaXNPcmFuZ2UgPSBjb2xvciA9PT0gJ29yYW5nZSc7XG4gICAgY29uc3QgY2xzID0gaXNPcmFuZ2UgPyAndGV4dC1vcmFuZ2UnIDogJ3RleHQtbmF2eSc7XG4gICAgc3dpdGNoIChpY29uTmFtZSkge1xuICAgICAgY2FzZSAndHJ1Y2snOlxuICAgICAgICByZXR1cm4gPFRydWNrIHNpemU9ezIyfSBjbGFzc05hbWU9e2Nsc30gLz47XG4gICAgICBjYXNlICdzaG9wcGluZ0JhZyc6XG4gICAgICAgIHJldHVybiA8U2hvcHBpbmdCYWcgc2l6ZT17MjJ9IGNsYXNzTmFtZT17Y2xzfSAvPjtcbiAgICAgIGNhc2UgJ2JyaWVmY2FzZSc6XG4gICAgICAgIHJldHVybiA8QnJpZWZjYXNlIHNpemU9ezIyfSBjbGFzc05hbWU9e2Nsc30gLz47XG4gICAgICBjYXNlICdjcHUnOlxuICAgICAgICByZXR1cm4gPENwdSBzaXplPXsyMn0gY2xhc3NOYW1lPXtjbHN9IC8+O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxUcnVjayBzaXplPXsyMn0gY2xhc3NOYW1lPXtjbHN9IC8+O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGFnZUhlYWRlclxuICAgICAgICB0aXRsZT1cIk91ciBQYXJ0bmVyc1wiXG4gICAgICAgIHN1YnRpdGxlPVwiQnVpbGRpbmcgSW5kaWEncyBtb3N0IGNvbm5lY3RlZCBjb3VyaWVyIGVjb3N5c3RlbSDigJQgdG9nZXRoZXIgd2l0aCBvdXIgdHJ1c3RlZCBwYXJ0bmVycy5cIlxuICAgICAgICBicmVhZGNydW1iPVwiUGFydG5lcnNcIlxuICAgICAgLz5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1wYWRkaW5nIGJnLXdoaXRlIGZsZXgtMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cbiAgICAgICAgICB7LyogMS4gUGFydG5lcnNoaXAgQ2F0ZWdvcmllcyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTE0XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTNcIj5cbiAgICAgICAgICAgICAgUGFydG5lcnNoaXAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IG1heC13LXhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgVkVYQVJPIHdvcmtzIHdpdGggYSBkaXZlcnNlIGVjb3N5c3RlbSBvZiBwYXJ0bmVycyB0byBkZWxpdmVyIHNlYW1sZXNzIGNvdXJpZXIgc2VydmljZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTUgbWItMTZcIj5cbiAgICAgICAgICAgIHtwYXJ0bmVyQ2F0ZWdvcmllcy5tYXAoKGNhdCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtY2FyZCBwLTYgY2FyZC1ob3ZlciBncm91cCB0ZXh0LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xNCBoLTE0IHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi00IHNoYWRvdy1zbSAke1xuICAgICAgICAgICAgICAgICAgICBjYXQuY29sb3IgPT09ICdvcmFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTUwIGJvcmRlciBib3JkZXItb3JhbmdlLzE1J1xuICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLW5hdnktNTAgYm9yZGVyIGJvcmRlci1uYXZ5LzE1J1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2dldENhdGVnb3J5SWNvbihjYXQuaWNvbiwgY2F0LmNvbG9yKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTJcIj57Y2F0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSB0ZXh0LXNtIGZvbnQtYm9keSBsZWFkaW5nLXJlbGF4ZWRcIj57Y2F0LnRleHR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIDIuIFRydXN0ZWQgQnkgUGFydG5lciBDYXJkcyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItMlwiPlRydXN0ZWQgQnk8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00IGdhcC01XCI+XG4gICAgICAgICAgICB7cGFydG5lcnNMaXN0Lm1hcCgocGFydG5lciwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtY2FyZCBwLTYgY2FyZC1ob3ZlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE0IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTQgcC0yIGJnLWdyYXktNTAvNTAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwYXJ0bmVyLmxvZ299XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwYXJ0bmVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LWgtMTAgbWF4LXctZnVsbCBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFydG5lci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LXNlbWlib2xkIHB4LTIgcHktMC41IHJvdW5kZWQtZnVsbCBiZy1uYXZ5LTUwIHRleHQtbmF2eSBib3JkZXIgYm9yZGVyLW5hdnkvMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFydG5lci5jYXR9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSB0ZXh0LXhzIGZvbnQtYm9keSBsZWFkaW5nLXJlbGF4ZWQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICB7cGFydG5lci5kZXNjfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIDMuIFBhcnRuZXIgQ1RBICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTYgYmctY3JlYW0gYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciByb3VuZGVkLWNhcmQgcC04IG1kOnAtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItM1wiPlxuICAgICAgICAgICAgICBCZWNvbWUgYSBWRVhBUk8gUGFydG5lclxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IHRleHQtc20gbWQ6dGV4dC1iYXNlIG1heC13LXhsIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgICAgICBXaGV0aGVyIHlvdSBydW4gYSBjb3VyaWVyIGZsZWV0LCBhbiBlLWNvbW1lcmNlIHBsYXRmb3JtLCBvciBhIHdhcmVob3VzZSBmYWNpbGl0eSDigJRcbiAgICAgICAgICAgICAgcGFydG5lciB3aXRoIFZFWEFSTyBhbmQgZ3JvdyB3aXRoIEluZGlhJ3MgZmFzdGVzdCBjb3VyaWVyIG5ldHdvcmsuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9jb250YWN0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTggcHktMy41IGdyYWRpZW50LW5hdnkgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyByb3VuZGVkLWJ0biBzaGFkb3ctbmF2eSBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQYXJ0bmVyIFdpdGggVXMgPEFycm93UmlnaHQgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl19