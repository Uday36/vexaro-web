import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Pricing.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport5_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Check, ShieldCheck, ArrowRight, Zap } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { useMeta } from "/src/hooks/useMeta.js";
import PageHeader from "/src/components/PageHeader.jsx";
import { pricingPlans } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Pricing.jsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function Pricing() {
	_s();
	useMeta({
		title: "Pricing Plans",
		description: "Explore VEXARO Courier Solution pricing plans. We offer Gold, Platinum, and Partial payment options with the lowest charges."
	});
	const handlePay = (plan) => {
		if (plan.link) {
			window.location.assign(plan.link);
		}
	};
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(PageHeader, {
		title: "Transparent Pricing",
		subtitle: "Choose the best courier plan for your enterprise with zero hidden costs.",
		breadcrumb: "Pricing"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("section", {
		className: "section-padding bg-white relative overflow-hidden",
		children: [/* @__PURE__ */ _jsxDEV("div", { className: "absolute top-0 inset-x-0 h-[400px] bg-[linear-gradient(to_bottom,#1A3A8F05_0%,transparent_100%)] pointer-events-none" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 9
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "container-custom relative z-10",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center max-w-2xl mx-auto mb-16",
					children: [/* @__PURE__ */ _jsxDEV("h2", {
						className: "text-3xl md:text-4xl font-black font-heading text-charcoal mb-4 tracking-tight",
						children: [
							"Simple, ",
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-orange",
								children: "Predictable"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 23
							}, this),
							" Pricing"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-graphite font-body text-lg",
						children: "Unlock enterprise-grade courier services at the lowest market charges."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
					children: pricingPlans.map((plan, idx) => /* @__PURE__ */ _jsxDEV("div", {
						className: `relative flex flex-col bg-white rounded-2xl border-2 ${plan.theme} p-8 card-hover shadow-card`,
						children: [
							plan.popular && /* @__PURE__ */ _jsxDEV("div", {
								className: "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 gradient-orange text-white text-xs font-bold font-heading rounded-full shadow-orange uppercase tracking-wider",
								children: "Most Popular"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-6",
								children: [
									/* @__PURE__ */ _jsxDEV("h3", {
										className: "font-bold font-heading text-xl text-charcoal mb-2",
										children: plan.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 54,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-baseline gap-1 mb-1",
										children: /* @__PURE__ */ _jsxDEV("span", {
											className: "text-3xl md:text-4xl font-black font-heading text-charcoal",
											children: plan.price
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 58,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 57,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-graphite/70 text-xs font-body",
										children: plan.gst
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { className: "h-px bg-soft-border mb-6" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("ul", {
								className: "space-y-3.5 mb-8 flex-1",
								children: plan.features.map((feat, fIdx) => /* @__PURE__ */ _jsxDEV("li", {
									className: "flex items-center gap-3 text-sm text-charcoal font-body",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "w-5 h-5 rounded-full bg-navy-50 flex items-center justify-center shrink-0",
										children: /* @__PURE__ */ _jsxDEV(Check, {
											size: 12,
											className: "text-navy"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 23
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: feat }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 73,
										columnNumber: 23
									}, this)]
								}, fIdx, true, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: () => handlePay(plan),
								className: `w-full py-3.5 font-bold font-heading rounded-btn transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center ${plan.buttonClass}`,
								children: plan.buttonText
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 17
							}, this)
						]
					}, plan.name, true, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-16 text-center max-w-xl mx-auto",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "inline-flex items-center gap-2 text-graphite font-body text-xs md:text-sm",
						children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, {
							size: 18,
							className: "text-orange"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "All transactions processed securely via Razorpay with instant digital invoice." }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 31,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
_s(Pricing, "2a1reKp/+GE9REwcjqs+koup8Bk=", false, function() {
	return [useMeta];
});
_c = Pricing;
var _c;
$RefreshReg$(_c, "Pricing");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Pricing.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Pricing.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Pricing.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Pricing.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsT0FBTyxhQUFhLFlBQVksV0FBVztBQUNwRCxTQUFTLGVBQWU7QUFDeEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7Ozs7QUFFN0IsZUFBZSxTQUFTLFVBQVU7O0NBQ2hDLFFBQVE7RUFDTixPQUFPO0VBQ1AsYUFDRTtDQUNKLENBQUM7Q0FFRCxNQUFNLGFBQWEsU0FBUztFQUMxQixJQUFJLEtBQUssTUFBTTtHQUNiLE9BQU8sU0FBUyxPQUFPLEtBQUssSUFBSTtFQUNsQztDQUNGO0NBRUEsT0FDRSxnREFDRSx3QkFBQyxZQUFEO0VBQ0UsT0FBTTtFQUNOLFVBQVM7RUFDVCxZQUFXO0NBQ1o7Ozs7V0FFRCx3QkFBQyxXQUFEO0VBQVMsV0FBVTtZQUFuQixDQUNFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLHVIQUF3SDs7OztZQUV2SSx3QkFBQyxPQUFEO0dBQUssV0FBVTthQUFmO0lBQ0Usd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLE1BQUQ7TUFBSSxXQUFVO2dCQUFkO09BQStGO09BQ3JGLHdCQUFDLFFBQUQ7UUFBTSxXQUFVO2tCQUFjO09BQWlCOzs7OztPQUFDO01BQ3REOzs7OztlQUNKLHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUFrQztLQUU1Qzs7OzthQUNBOzs7Ozs7SUFFTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUNaLGFBQWEsS0FBSyxNQUFNLFFBQ3ZCLHdCQUFDLE9BQUQ7TUFFRSxXQUFXLHdEQUF3RCxLQUFLLE1BQU07Z0JBRmhGO09BSUcsS0FBSyxXQUNKLHdCQUFDLE9BQUQ7UUFBSyxXQUFVO2tCQUFzSztPQUVoTDs7Ozs7T0FHUCx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBZjtTQUNFLHdCQUFDLE1BQUQ7VUFBSSxXQUFVO29CQUNYLEtBQUs7U0FDSjs7Ozs7U0FDSix3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFDYix3QkFBQyxRQUFEO1dBQU0sV0FBVTtxQkFDYixLQUFLO1VBQ0Y7Ozs7O1NBQ0g7Ozs7O1NBQ0wsd0JBQUMsS0FBRDtVQUFHLFdBQVU7b0JBQXNDLEtBQUs7U0FBTzs7Ozs7UUFDNUQ7Ozs7OztPQUVMLHdCQUFDLE9BQUQsRUFBSyxXQUFVLDJCQUE0Qjs7Ozs7T0FFM0Msd0JBQUMsTUFBRDtRQUFJLFdBQVU7a0JBQ1gsS0FBSyxTQUFTLEtBQUssTUFBTSxTQUN4Qix3QkFBQyxNQUFEO1NBQWUsV0FBVTttQkFBekIsQ0FDRSx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFDYix3QkFBQyxPQUFEO1dBQU8sTUFBTTtXQUFJLFdBQVU7VUFBYTs7Ozs7U0FDckM7Ozs7bUJBQ0wsd0JBQUMsUUFBRCxZQUFPLEtBQVc7Ozs7aUJBQ2hCO1dBTEs7Ozs7ZUFLTCxDQUNMO09BQ0M7Ozs7O09BRUosd0JBQUMsVUFBRDtRQUNFLGVBQWUsVUFBVSxJQUFJO1FBQzdCLFdBQVcsNklBQTZJLEtBQUs7a0JBRTVKLEtBQUs7T0FDQTs7Ozs7TUFDTDtRQXhDRSxLQUFLOzs7O1lBd0NQLENBQ047SUFDRTs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUNiLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmLENBQ0Usd0JBQUMsYUFBRDtPQUFhLE1BQU07T0FBSSxXQUFVO01BQWU7Ozs7Z0JBQ2hELHdCQUFDLFFBQUQsWUFBTSxpRkFFQTs7OztjQUNIOzs7Ozs7SUFDRjs7Ozs7R0FDRjs7Ozs7VUFDRTs7Ozs7U0FDVDs7Ozs7QUFFTiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJQcmljaW5nLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2ssIFNoaWVsZENoZWNrLCBBcnJvd1JpZ2h0LCBaYXAgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgdXNlTWV0YSB9IGZyb20gJy4uL2hvb2tzL3VzZU1ldGEnO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyJztcbmltcG9ydCB7IHByaWNpbmdQbGFucyB9IGZyb20gJy4uL2RhdGEvc2l0ZURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljaW5nKCkge1xuICB1c2VNZXRhKHtcbiAgICB0aXRsZTogJ1ByaWNpbmcgUGxhbnMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0V4cGxvcmUgVkVYQVJPIENvdXJpZXIgU29sdXRpb24gcHJpY2luZyBwbGFucy4gV2Ugb2ZmZXIgR29sZCwgUGxhdGludW0sIGFuZCBQYXJ0aWFsIHBheW1lbnQgb3B0aW9ucyB3aXRoIHRoZSBsb3dlc3QgY2hhcmdlcy4nXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVBheSA9IChwbGFuKSA9PiB7XG4gICAgaWYgKHBsYW4ubGluaykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihwbGFuLmxpbmspO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGFnZUhlYWRlclxuICAgICAgICB0aXRsZT1cIlRyYW5zcGFyZW50IFByaWNpbmdcIlxuICAgICAgICBzdWJ0aXRsZT1cIkNob29zZSB0aGUgYmVzdCBjb3VyaWVyIHBsYW4gZm9yIHlvdXIgZW50ZXJwcmlzZSB3aXRoIHplcm8gaGlkZGVuIGNvc3RzLlwiXG4gICAgICAgIGJyZWFkY3J1bWI9XCJQcmljaW5nXCJcbiAgICAgIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tcGFkZGluZyBiZy13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBpbnNldC14LTAgaC1bNDAwcHhdIGJnLVtsaW5lYXItZ3JhZGllbnQodG9fYm90dG9tLCMxQTNBOEYwNV8wJSx0cmFuc3BhcmVudF8xMDAlKV0gcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTJ4bCBteC1hdXRvIG1iLTE2XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ibGFjayBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCBtYi00IHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgIFNpbXBsZSwgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2VcIj5QcmVkaWN0YWJsZTwvc3Bhbj4gUHJpY2luZ1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgVW5sb2NrIGVudGVycHJpc2UtZ3JhZGUgY291cmllciBzZXJ2aWNlcyBhdCB0aGUgbG93ZXN0IG1hcmtldCBjaGFyZ2VzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1heC13LTZ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICB7cHJpY2luZ1BsYW5zLm1hcCgocGxhbiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3BsYW4ubmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlci0yICR7cGxhbi50aGVtZX0gcC04IGNhcmQtaG92ZXIgc2hhZG93LWNhcmRgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BsYW4ucG9wdWxhciAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMy41IGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgcHgtNCBweS0xIGdyYWRpZW50LW9yYW5nZSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIGZvbnQtaGVhZGluZyByb3VuZGVkLWZ1bGwgc2hhZG93LW9yYW5nZSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgTW9zdCBQb3B1bGFyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LXhsIHRleHQtY2hhcmNvYWwgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICB7cGxhbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYmxhY2sgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGxhbi5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlLzcwIHRleHQteHMgZm9udC1ib2R5XCI+e3BsYW4uZ3N0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1weCBiZy1zb2Z0LWJvcmRlciBtYi02XCIgLz5cblxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTMuNSBtYi04IGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAge3BsYW4uZmVhdHVyZXMubWFwKChmZWF0LCBmSWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZJZHh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtc20gdGV4dC1jaGFyY29hbCBmb250LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLW5hdnktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVjayBzaXplPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1uYXZ5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZmVhdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGF5KHBsYW4pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHB5LTMuNSBmb250LWJvbGQgZm9udC1oZWFkaW5nIHJvdW5kZWQtYnRuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kIGhvdmVyOi10cmFuc2xhdGUteS0wLjUgdGV4dC1jZW50ZXIgJHtwbGFuLmJ1dHRvbkNsYXNzfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3BsYW4uYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBHdWFyYW50ZWUgLyBTZWN1cml0eSBpbmZvIHN0cmlwICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTYgdGV4dC1jZW50ZXIgbWF4LXcteGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1ncmFwaGl0ZSBmb250LWJvZHkgdGV4dC14cyBtZDp0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgIDxTaGllbGRDaGVjayBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICBBbGwgdHJhbnNhY3Rpb25zIHByb2Nlc3NlZCBzZWN1cmVseSB2aWEgUmF6b3JwYXkgd2l0aCBpbnN0YW50IGRpZ2l0YWwgaW52b2ljZS5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl19