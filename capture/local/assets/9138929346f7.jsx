import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ShipmentJourney.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Search, Truck, Navigation, CheckCircle2 } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/ShipmentJourney.jsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
const steps = [
	{
		step: "01",
		icon: Search,
		title: "Book",
		text: "Book online or call. We schedule pickup at your convenience.",
		color: "navy",
		point: "10%"
	},
	{
		step: "02",
		icon: Truck,
		title: "Pickup",
		text: "Agent arrives at your doorstep with secure packaging materials.",
		color: "orange",
		point: "38%"
	},
	{
		step: "03",
		icon: Navigation,
		title: "Transit",
		text: "Real-time GPS tracking and transit updates through our hubs.",
		color: "navy",
		point: "66%"
	},
	{
		step: "04",
		icon: CheckCircle2,
		title: "Delivered",
		text: "Safe delivery with digital proof of delivery and OTP confirmation.",
		color: "orange",
		point: "94%"
	}
];
export default function ShipmentJourney({ isInView }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "relative rounded-card border border-soft-border bg-light-blue overflow-hidden p-5 md:p-8 shadow-card",
		children: [
			/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#1A3A8F_1px,transparent_1px),linear-gradient(to_bottom,#1A3A8F_1px,transparent_1px)] bg-[size:34px_34px]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				"aria-hidden": "true",
				className: "absolute left-0 top-6 h-px w-40 bg-gradient-to-r from-transparent via-orange/60 to-transparent animate-shimmer"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "block md:hidden relative py-2",
				children: [
					/* @__PURE__ */ _jsxDEV("div", { className: "absolute left-[26px] top-8 bottom-10 w-1 bg-gradient-to-b from-navy via-orange to-navy opacity-20 rounded-full" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: `absolute left-[26px] top-8 bottom-10 w-1 bg-gradient-to-b from-navy via-orange to-navy rounded-full transition-all duration-1000 ${isInView ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`,
						style: { transformOrigin: "top" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-col gap-6 relative z-10",
						children: steps.map((item, idx) => {
							const Icon = item.icon;
							return /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-4 transition-all duration-500",
								style: { transitionDelay: `${idx * 120}ms` },
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-soft-border shadow-md mt-1",
									children: [
										/* @__PURE__ */ _jsxDEV("div", { className: `absolute inset-1.5 rounded-full ${item.color === "orange" ? "gradient-orange" : "gradient-navy"}` }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV(Icon, {
											className: "relative text-white",
											size: 16
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 76,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "absolute -top-1 -right-1 rounded-full bg-charcoal px-1.5 py-0.5 text-[9px] font-bold text-white",
											children: item.step
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 77,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "bg-white rounded-card border border-soft-border p-4 shadow-sm flex-1",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ _jsxDEV("h4", {
											className: "font-heading text-base font-bold text-charcoal",
											children: item.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 84,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: `flex h-8 w-8 items-center justify-center rounded-lg border ${item.color === "orange" ? "bg-orange-50 border-orange/20 text-orange" : "bg-navy-50 border-navy/20 text-navy"}`,
											children: /* @__PURE__ */ _jsxDEV(Icon, { size: 12 }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 94,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 87,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 83,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "text-xs leading-relaxed text-graphite font-body",
										children: item.text
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 97,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 17
								}, this)]
							}, item.title, true, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 15
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "hidden md:block lg:hidden",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "relative h-24 mb-6",
					children: [/* @__PURE__ */ _jsxDEV("svg", {
						className: "absolute inset-0 w-full h-full",
						viewBox: "0 0 800 100",
						fill: "none",
						children: [
							/* @__PURE__ */ _jsxDEV("path", {
								d: "M 100 50 L 700 50",
								stroke: "#DDE3F0",
								strokeWidth: "8",
								strokeLinecap: "round"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("path", {
								d: "M 100 50 L 700 50",
								stroke: "url(#routeGradientTablet)",
								strokeWidth: "4",
								strokeLinecap: "round"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("defs", { children: /* @__PURE__ */ _jsxDEV("linearGradient", {
								id: "routeGradientTablet",
								x1: "100",
								x2: "700",
								y1: "50",
								y2: "50",
								children: [
									/* @__PURE__ */ _jsxDEV("stop", { stopColor: "#1A3A8F" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("stop", {
										offset: "0.5",
										stopColor: "#E06000"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("stop", {
										offset: "1",
										stopColor: "#2855C8"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 11
					}, this), [
						12.5,
						37.5,
						62.5,
						87.5
					].map((pct, idx) => {
						const item = steps[idx];
						const Icon = item.icon;
						return /* @__PURE__ */ _jsxDEV("div", {
							className: "absolute -translate-x-1/2 -translate-y-1/2",
							style: {
								left: `${pct}%`,
								top: "50%"
							},
							children: /* @__PURE__ */ _jsxDEV("div", {
								className: "relative flex h-14 w-14 items-center justify-center rounded-full bg-white border border-soft-border shadow-md",
								children: [
									/* @__PURE__ */ _jsxDEV("div", { className: `absolute inset-1.5 rounded-full ${item.color === "orange" ? "gradient-orange" : "gradient-navy"}` }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 137,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV(Icon, {
										className: "relative text-white",
										size: 16
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "absolute -top-1 -right-1 rounded-full bg-charcoal px-1.5 py-0.5 text-[9px] font-bold text-white",
										children: item.step
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 143,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 17
							}, this)
						}, item.step, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 15
						}, this);
					})]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-4 gap-3",
					children: steps.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ _jsxDEV("div", {
							className: "group rounded-card border border-white/80 bg-white/90 p-4 shadow-card backdrop-blur-sm flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mb-3",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: `flex h-10 w-10 items-center justify-center rounded-xl border ${item.color === "orange" ? "bg-orange-50 border-orange/20 text-orange" : "bg-navy-50 border-navy/20 text-navy"} group-hover:scale-110 transition-transform`,
										children: /* @__PURE__ */ _jsxDEV(Icon, { size: 14 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 168,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 161,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 160,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("h4", {
									className: "font-heading text-sm font-bold text-charcoal mb-2",
									children: item.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 171,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-[11px] leading-relaxed text-graphite font-body",
									children: item.text
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 174,
									columnNumber: 17
								}, this)
							]
						}, item.title, true, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 152,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "hidden lg:block",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "relative h-56 mb-2",
					children: [
						/* @__PURE__ */ _jsxDEV("svg", {
							className: "absolute inset-0 w-full h-full",
							viewBox: "0 0 1000 250",
							fill: "none",
							children: [
								/* @__PURE__ */ _jsxDEV("path", {
									d: "M70 150 C210 42 320 224 460 120 C590 24 710 206 900 74",
									stroke: "#DDE3F0",
									strokeWidth: "12",
									strokeLinecap: "round"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 187,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("path", {
									d: "M70 150 C210 42 320 224 460 120 C590 24 710 206 900 74",
									stroke: "url(#routeGradientDesktop)",
									strokeWidth: "5",
									strokeLinecap: "round"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 193,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("defs", { children: /* @__PURE__ */ _jsxDEV("linearGradient", {
									id: "routeGradientDesktop",
									x1: "70",
									x2: "900",
									y1: "150",
									y2: "74",
									children: [
										/* @__PURE__ */ _jsxDEV("stop", { stopColor: "#1A3A8F" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 201,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("stop", {
											offset: "0.55",
											stopColor: "#E06000"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 202,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("stop", {
											offset: "1",
											stopColor: "#2855C8"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 203,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 200,
									columnNumber: 15
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 199,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 186,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "absolute left-[7%] top-[45%] flex h-12 w-12 items-center justify-center rounded-full gradient-orange shadow-orange animate-pulse",
							style: { animationDuration: "3s" },
							children: [/* @__PURE__ */ _jsxDEV(Navigation, {
								className: "text-white -rotate-45",
								size: 17
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 213,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { className: "absolute inset-0 rounded-full border border-orange/50 animate-ping" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 214,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 11
						}, this),
						steps.map((item, idx) => {
							const Icon = item.icon;
							return /* @__PURE__ */ _jsxDEV("div", {
								className: "absolute -translate-x-1/2",
								style: {
									left: item.point,
									top: idx % 2 === 0 ? "58%" : "8%"
								},
								children: /* @__PURE__ */ _jsxDEV("div", {
									className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-white border border-soft-border shadow-card hover:scale-105 transition-transform",
									children: [
										/* @__PURE__ */ _jsxDEV("div", { className: `absolute inset-2 rounded-full ${item.color === "orange" ? "gradient-orange" : "gradient-navy"}` }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 229,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV(Icon, {
											className: "relative text-white",
											size: 18
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 234,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "absolute -right-2 -top-2 rounded-full bg-charcoal px-2 py-1 text-[10px] font-bold text-white",
											children: item.step
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 235,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 228,
									columnNumber: 17
								}, this)
							}, item.step, false, {
								fileName: _jsxFileName,
								lineNumber: 220,
								columnNumber: 15
							}, this);
						})
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 185,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "relative grid gap-4 grid-cols-4",
					children: steps.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ _jsxDEV("div", {
							className: "group rounded-card border border-white/80 bg-white/90 p-5 shadow-card backdrop-blur-sm hover:-translate-y-1.5 transition-all duration-300",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mb-4 flex items-center justify-between",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: `flex h-11 w-11 items-center justify-center rounded-xl border ${item.color === "orange" ? "bg-orange-50 border-orange/20 text-orange" : "bg-navy-50 border-navy/20 text-navy"} group-hover:scale-110 transition-transform`,
										children: /* @__PURE__ */ _jsxDEV(Icon, { size: 16 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 260,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 253,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: `font-heading text-xs font-bold ${item.color === "orange" ? "text-orange" : "text-navy"}`,
										children: item.step
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 262,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 252,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("h4", {
									className: "font-heading text-base font-bold text-charcoal mb-2",
									children: item.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 270,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-sm leading-relaxed text-graphite font-body",
									children: item.text
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 273,
									columnNumber: 17
								}, this)
							]
						}, item.title, true, {
							fileName: _jsxFileName,
							lineNumber: 248,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 244,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 184,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
_c = ShipmentJourney;
var _c;
$RefreshReg$(_c, "ShipmentJourney");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/ShipmentJourney.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/ShipmentJourney.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/ShipmentJourney.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/ShipmentJourney.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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RDtXQUFNLFdBQVU7cUJBQ2IsS0FBSztVQUNGOzs7OztTQUNIOzs7Ozs7T0FDRixHQWxCRSxLQUFLOzs7O2NBa0JQO01BRVQsQ0FBQztLQUNFOzs7OztjQUVMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQ1osTUFBTSxLQUFLLFNBQVM7TUFDbkIsTUFBTSxPQUFPLEtBQUs7TUFDbEIsT0FDRSx3QkFBQyxPQUFEO09BRUUsV0FBVTtpQkFGWjtRQUlFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmLENBQ0Usd0JBQUMsT0FBRDtVQUNFLFdBQVcsZ0VBQ1QsS0FBSyxVQUFVLFdBQ1gsOENBQ0Esc0NBQ0w7b0JBRUQsd0JBQUMsTUFBRCxFQUFNLE1BQU0sR0FBSzs7Ozs7U0FDZDs7OzttQkFDTCx3QkFBQyxRQUFEO1VBQ0UsV0FBVyxrQ0FDVCxLQUFLLFVBQVUsV0FBVyxnQkFBZ0I7b0JBRzNDLEtBQUs7U0FDRjs7OztpQkFDSDs7Ozs7O1FBQ0wsd0JBQUMsTUFBRDtTQUFJLFdBQVU7bUJBQ1gsS0FBSztRQUNKOzs7OztRQUNKLHdCQUFDLEtBQUQ7U0FBRyxXQUFVO21CQUNWLEtBQUs7UUFDTDs7Ozs7T0FDQTtTQTNCRSxLQUFLOzs7O2FBMkJQO0tBRVQsQ0FBQztJQUNFOzs7O1lBQ0Y7Ozs7OztFQUNGOzs7Ozs7QUFFVCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJTaGlwbWVudEpvdXJuZXkuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWFyY2gsIFRydWNrLCBOYXZpZ2F0aW9uLCBDaGVja0NpcmNsZTIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5jb25zdCBzdGVwcyA9IFtcbiAge1xuICAgIHN0ZXA6ICcwMScsXG4gICAgaWNvbjogU2VhcmNoLFxuICAgIHRpdGxlOiAnQm9vaycsXG4gICAgdGV4dDogJ0Jvb2sgb25saW5lIG9yIGNhbGwuIFdlIHNjaGVkdWxlIHBpY2t1cCBhdCB5b3VyIGNvbnZlbmllbmNlLicsXG4gICAgY29sb3I6ICduYXZ5JyxcbiAgICBwb2ludDogJzEwJSdcbiAgfSxcbiAge1xuICAgIHN0ZXA6ICcwMicsXG4gICAgaWNvbjogVHJ1Y2ssXG4gICAgdGl0bGU6ICdQaWNrdXAnLFxuICAgIHRleHQ6ICdBZ2VudCBhcnJpdmVzIGF0IHlvdXIgZG9vcnN0ZXAgd2l0aCBzZWN1cmUgcGFja2FnaW5nIG1hdGVyaWFscy4nLFxuICAgIGNvbG9yOiAnb3JhbmdlJyxcbiAgICBwb2ludDogJzM4JSdcbiAgfSxcbiAge1xuICAgIHN0ZXA6ICcwMycsXG4gICAgaWNvbjogTmF2aWdhdGlvbixcbiAgICB0aXRsZTogJ1RyYW5zaXQnLFxuICAgIHRleHQ6ICdSZWFsLXRpbWUgR1BTIHRyYWNraW5nIGFuZCB0cmFuc2l0IHVwZGF0ZXMgdGhyb3VnaCBvdXIgaHVicy4nLFxuICAgIGNvbG9yOiAnbmF2eScsXG4gICAgcG9pbnQ6ICc2NiUnXG4gIH0sXG4gIHtcbiAgICBzdGVwOiAnMDQnLFxuICAgIGljb246IENoZWNrQ2lyY2xlMixcbiAgICB0aXRsZTogJ0RlbGl2ZXJlZCcsXG4gICAgdGV4dDogJ1NhZmUgZGVsaXZlcnkgd2l0aCBkaWdpdGFsIHByb29mIG9mIGRlbGl2ZXJ5IGFuZCBPVFAgY29uZmlybWF0aW9uLicsXG4gICAgY29sb3I6ICdvcmFuZ2UnLFxuICAgIHBvaW50OiAnOTQlJ1xuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwbWVudEpvdXJuZXkoeyBpc0luVmlldyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLWNhcmQgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciBiZy1saWdodC1ibHVlIG92ZXJmbG93LWhpZGRlbiBwLTUgbWQ6cC04IHNoYWRvdy1jYXJkXCI+XG4gICAgICB7LyogQmFja2dyb3VuZCBibHVlcHJpbnQgZ3JpZCBwYXR0ZXJuICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktWzAuMDVdIGJnLVtsaW5lYXItZ3JhZGllbnQodG9fcmlnaHQsIzFBM0E4Rl8xcHgsdHJhbnNwYXJlbnRfMXB4KSxsaW5lYXItZ3JhZGllbnQodG9fYm90dG9tLCMxQTNBOEZfMXB4LHRyYW5zcGFyZW50XzFweCldIGJnLVtzaXplOjM0cHhfMzRweF1cIiAvPlxuXG4gICAgICB7LyogU3VidGxlIHRvcCBsYXNlciBnbG93IGxpbmUgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtNiBoLXB4IHctNDAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS1vcmFuZ2UvNjAgdG8tdHJhbnNwYXJlbnQgYW5pbWF0ZS1zaGltbWVyXCJcbiAgICAgIC8+XG5cbiAgICAgIHsvKiAxLiBNb2JpbGUgVmlldyAoU3RhY2sgd2l0aCB2ZXJ0aWNhbCBsaW5lKSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbWQ6aGlkZGVuIHJlbGF0aXZlIHB5LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVsyNnB4XSB0b3AtOCBib3R0b20tMTAgdy0xIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1uYXZ5IHZpYS1vcmFuZ2UgdG8tbmF2eSBvcGFjaXR5LTIwIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBsZWZ0LVsyNnB4XSB0b3AtOCBib3R0b20tMTAgdy0xIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1uYXZ5IHZpYS1vcmFuZ2UgdG8tbmF2eSByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMCAke1xuICAgICAgICAgICAgaXNJblZpZXcgPyAnc2NhbGUteS0xMDAgb3BhY2l0eS0xMDAnIDogJ3NjYWxlLXktMCBvcGFjaXR5LTAnXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNiByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAge3N0ZXBzLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBJY29uID0gaXRlbS5pY29uO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBgJHtpZHggKiAxMjB9bXNgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC0xNCB3LTE0IHNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciBzaGFkb3ctbWQgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0xLjUgcm91bmRlZC1mdWxsICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciA9PT0gJ29yYW5nZScgPyAnZ3JhZGllbnQtb3JhbmdlJyA6ICdncmFkaWVudC1uYXZ5J1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXdoaXRlXCIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTEgcm91bmRlZC1mdWxsIGJnLWNoYXJjb2FsIHB4LTEuNSBweS0wLjUgdGV4dC1bOXB4XSBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdGVwfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWNhcmQgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciBwLTQgc2hhZG93LXNtIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtYmFzZSBmb250LWJvbGQgdGV4dC1jaGFyY29hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJvcmRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciA9PT0gJ29yYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTUwIGJvcmRlci1vcmFuZ2UvMjAgdGV4dC1vcmFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLW5hdnktNTAgYm9yZGVyLW5hdnkvMjAgdGV4dC1uYXZ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXBoaXRlIGZvbnQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiAyLiBUYWJsZXQgVmlldyAoSG9yaXpvbnRhbCBsaW5lICsgNCBjYXJkcykgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBsZzpoaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTI0IG1iLTZcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbFwiIHZpZXdCb3g9XCIwIDAgODAwIDEwMFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTSAxMDAgNTAgTCA3MDAgNTBcIiBzdHJva2U9XCIjRERFM0YwXCIgc3Ryb2tlV2lkdGg9XCI4XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDEwMCA1MCBMIDcwMCA1MFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cInVybCgjcm91dGVHcmFkaWVudFRhYmxldClcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJyb3V0ZUdyYWRpZW50VGFibGV0XCIgeDE9XCIxMDBcIiB4Mj1cIjcwMFwiIHkxPVwiNTBcIiB5Mj1cIjUwXCI+XG4gICAgICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzFBM0E4RlwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC41XCIgc3RvcENvbG9yPVwiI0UwNjAwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMyODU1QzhcIiAvPlxuICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAge1sxMi41LCAzNy41LCA2Mi41LCA4Ny41XS5tYXAoKHBjdCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gc3RlcHNbaWR4XTtcbiAgICAgICAgICAgIGNvbnN0IEljb24gPSBpdGVtLmljb247XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnN0ZXB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBsZWZ0OiBgJHtwY3R9JWAsIHRvcDogJzUwJScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLTE0IHctMTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0xLjUgcm91bmRlZC1mdWxsICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciA9PT0gJ29yYW5nZScgPyAnZ3JhZGllbnQtb3JhbmdlJyA6ICdncmFkaWVudC1uYXZ5J1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXdoaXRlXCIgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEgLXJpZ2h0LTEgcm91bmRlZC1mdWxsIGJnLWNoYXJjb2FsIHB4LTEuNSBweS0wLjUgdGV4dC1bOXB4XSBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdGVwfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtM1wiPlxuICAgICAgICAgIHtzdGVwcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IEljb24gPSBpdGVtLmljb247XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtY2FyZCBib3JkZXIgYm9yZGVyLXdoaXRlLzgwIGJnLXdoaXRlLzkwIHAtNCBzaGFkb3ctY2FyZCBiYWNrZHJvcC1ibHVyLXNtIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3ZlcjotdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQteGwgYm9yZGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciA9PT0gJ29yYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS01MCBib3JkZXItb3JhbmdlLzIwIHRleHQtb3JhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctbmF2eS01MCBib3JkZXItbmF2eS8yMCB0ZXh0LW5hdnknXG4gICAgICAgICAgICAgICAgICAgIH0gZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1oZWFkaW5nIHRleHQtc20gZm9udC1ib2xkIHRleHQtY2hhcmNvYWwgbWItMlwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmFwaGl0ZSBmb250LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiAzLiBEZXNrdG9wIFZpZXcgKEN1cnZlZCB3YXZlIHJvdXRlIGxpbmUgd2l0aCBtb3ZpbmcgdmVoaWNsZSArIDQgY2FyZHMpICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTU2IG1iLTJcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAyNTBcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk03MCAxNTAgQzIxMCA0MiAzMjAgMjI0IDQ2MCAxMjAgQzU5MCAyNCA3MTAgMjA2IDkwMCA3NFwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiNEREUzRjBcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEyXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTcwIDE1MCBDMjEwIDQyIDMyMCAyMjQgNDYwIDEyMCBDNTkwIDI0IDcxMCAyMDYgOTAwIDc0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwidXJsKCNyb3V0ZUdyYWRpZW50RGVza3RvcClcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjVcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJyb3V0ZUdyYWRpZW50RGVza3RvcFwiIHgxPVwiNzBcIiB4Mj1cIjkwMFwiIHkxPVwiMTUwXCIgeTI9XCI3NFwiPlxuICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxQTNBOEZcIiAvPlxuICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNTVcIiBzdG9wQ29sb3I9XCIjRTA2MDAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzI4NTVDOFwiIC8+XG4gICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPC9zdmc+XG5cbiAgICAgICAgICB7LyogRmxvYXRpbmcgZGVsaXZlcnkgdmVoaWNsZSBiYWRnZSBhbG9uZyB0aGUgcGF0aCAqL31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs3JV0gdG9wLVs0NSVdIGZsZXggaC0xMiB3LTEyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgZ3JhZGllbnQtb3JhbmdlIHNoYWRvdy1vcmFuZ2UgYW5pbWF0ZS1wdWxzZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBhbmltYXRpb25EdXJhdGlvbjogJzNzJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgLXJvdGF0ZS00NVwiIHNpemU9ezE3fSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1vcmFuZ2UvNTAgYW5pbWF0ZS1waW5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtzdGVwcy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgSWNvbiA9IGl0ZW0uaWNvbjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uc3RlcH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdHJhbnNsYXRlLXgtMS8yXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbGVmdDogaXRlbS5wb2ludCxcbiAgICAgICAgICAgICAgICAgIHRvcDogaWR4ICUgMiA9PT0gMCA/ICc1OCUnIDogJzglJ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC0xNiB3LTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciBzaGFkb3ctY2FyZCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaW5zZXQtMiByb3VuZGVkLWZ1bGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yID09PSAnb3JhbmdlJyA/ICdncmFkaWVudC1vcmFuZ2UnIDogJ2dyYWRpZW50LW5hdnknXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtd2hpdGVcIiBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIC1yaWdodC0yIC10b3AtMiByb3VuZGVkLWZ1bGwgYmctY2hhcmNvYWwgcHgtMiBweS0xIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnN0ZXB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGdhcC00IGdyaWQtY29scy00XCI+XG4gICAgICAgICAge3N0ZXBzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgSWNvbiA9IGl0ZW0uaWNvbjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcm91bmRlZC1jYXJkIGJvcmRlciBib3JkZXItd2hpdGUvODAgYmctd2hpdGUvOTAgcC01IHNoYWRvdy1jYXJkIGJhY2tkcm9wLWJsdXItc20gaG92ZXI6LXRyYW5zbGF0ZS15LTEuNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGgtMTEgdy0xMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC14bCBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yID09PSAnb3JhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTUwIGJvcmRlci1vcmFuZ2UvMjAgdGV4dC1vcmFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1uYXZ5LTUwIGJvcmRlci1uYXZ5LzIwIHRleHQtbmF2eSdcbiAgICAgICAgICAgICAgICAgICAgfSBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1oZWFkaW5nIHRleHQteHMgZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciA9PT0gJ29yYW5nZScgPyAndGV4dC1vcmFuZ2UnIDogJ3RleHQtbmF2eSdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnN0ZXB9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtaGVhZGluZyB0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtY2hhcmNvYWwgbWItMlwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXBoaXRlIGZvbnQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==