import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Track.jsx");const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport5_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Search, MapPin, Check, Clock, AlertCircle } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { useMeta } from "/src/hooks/useMeta.js";
import PageHeader from "/src/components/PageHeader.jsx";
import { trackingDatabase, statusBadges } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Track.jsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function Track() {
	_s();
	useMeta({
		title: "Track Shipment",
		description: "Track your VEXARO shipment live. Enter your AWB number for real-time status."
	});
	const [query, setQuery] = useState("");
	const [result, setResult] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const demoPresets = [
		"VX2024001",
		"VX2024002",
		"VX2024003"
	];
	const handleTrack = (awbToTrack) => {
		const raw = (awbToTrack || query).trim().toUpperCase();
		if (!raw) {
			setError("Please enter a tracking number.");
			return;
		}
		setLoading(true);
		setError("");
		setResult(null);
		setTimeout(() => {
			const match = trackingDatabase[raw];
			if (match) {
				setResult(match);
			} else {
				setError("Tracking number not found. Try: VX2024001, VX2024002, or VX2024003");
			}
			setLoading(false);
		}, 800);
	};
	const handleDemo = (awb) => {
		setQuery(awb);
		setError("");
		handleTrack(awb);
	};
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(PageHeader, {
		title: "Track Your Shipment",
		subtitle: "Enter your AWB number to get real-time status on your delivery.",
		breadcrumb: "Track Shipment"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 51,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("section", {
		className: "section-padding bg-white flex-1",
		style: { minHeight: "60vh" },
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "container-custom max-w-2xl",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "bg-light-blue border border-soft-border rounded-card p-6 mb-7 shadow-sm",
					children: [
						/* @__PURE__ */ _jsxDEV("label", {
							className: "block text-sm font-semibold font-heading text-charcoal mb-2",
							children: "AWB / Tracking Number"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ _jsxDEV("input", {
								type: "text",
								value: query,
								onChange: (e) => {
									setQuery(e.target.value);
									setError("");
								},
								onKeyDown: (e) => e.key === "Enter" && handleTrack(),
								placeholder: "e.g. VX2024001",
								className: "flex-1 px-4 py-3 border border-soft-border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => handleTrack(),
								disabled: loading,
								className: "px-6 py-3 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy-sm hover:shadow-navy hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 disabled:opacity-70",
								children: [loading ? /* @__PURE__ */ _jsxDEV("div", { className: "w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 19
								}, this) : /* @__PURE__ */ _jsxDEV(Search, { size: 14 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Track" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 86,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 64,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-wrap gap-2 mt-3 items-center",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs text-graphite/60 font-body",
								children: "Try demo:"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 15
							}, this), demoPresets.map((demo) => /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => handleDemo(demo),
								className: "text-xs text-navy font-semibold font-heading hover:text-orange transition-colors px-2 py-0.5 rounded bg-white border border-soft-border",
								children: demo
							}, demo, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 17
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 11
				}, this),
				error && /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-red-50 border border-red-200 text-red-700 rounded-card px-5 py-4 text-sm font-body mb-6 flex items-center gap-2 animate-fade-in",
					children: [/* @__PURE__ */ _jsxDEV(AlertCircle, {
						size: 16,
						className: "text-red-500 shrink-0"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("span", { children: error }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 13
				}, this),
				result && /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-5 animate-fade-in",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "bg-light-blue border border-soft-border rounded-card p-6 shadow-card",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start justify-between flex-wrap gap-4",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-graphite/60 text-xs font-body mb-1",
									children: "Tracking Number"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-charcoal font-bold font-heading text-xl",
									children: result.awb
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: `px-4 py-2 rounded-full border text-sm font-semibold font-heading ${statusBadges[result.status]?.bg} ${statusBadges[result.status]?.color}`,
									children: statusBadges[result.status]?.label
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 pt-5 border-t border-soft-border",
								children: [
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-graphite/60 text-xs font-body mb-1",
										children: "Origin"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 133,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-charcoal font-semibold text-sm font-body flex items-center gap-1",
										children: [
											/* @__PURE__ */ _jsxDEV(MapPin, {
												size: 12,
												className: "text-navy"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 135,
												columnNumber: 23
											}, this),
											" ",
											result.origin
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-graphite/60 text-xs font-body mb-1",
										children: "Destination"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 139,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-charcoal font-semibold text-sm font-body flex items-center gap-1",
										children: [
											/* @__PURE__ */ _jsxDEV(MapPin, {
												size: 12,
												className: "text-orange"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 141,
												columnNumber: 23
											}, this),
											" ",
											result.destination
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 140,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 138,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-graphite/60 text-xs font-body mb-1",
										children: "Service"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-charcoal font-semibold text-sm font-body",
										children: result.service
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 146,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 144,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-graphite/60 text-xs font-body mb-1",
										children: "Weight"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 151,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-charcoal font-semibold text-sm font-body",
										children: result.weight
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-4 pt-4 border-t border-soft-border/60 flex items-center justify-between text-xs font-body",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-graphite",
									children: "Estimated Timeline:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 159,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "font-semibold text-navy",
									children: result.estimatedDelivery
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 160,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-soft-border rounded-card p-6 shadow-sm",
						children: [/* @__PURE__ */ _jsxDEV("h3", {
							className: "font-bold font-heading text-charcoal text-base mb-6",
							children: "Shipment Activity"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-6",
							children: result.timeline.map((step, idx) => /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-start gap-4 relative",
								children: [
									idx !== result.timeline.length - 1 && /* @__PURE__ */ _jsxDEV("div", { className: `absolute left-3.5 top-7 bottom-0 w-0.5 ${step.done ? "bg-navy" : "bg-soft-border"}` }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 174,
										columnNumber: 25
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 relative z-10 ${step.done ? "gradient-navy text-white shadow-sm" : "bg-gray-100 text-gray-400 border border-soft-border"}`,
										children: step.done ? /* @__PURE__ */ _jsxDEV(Check, { size: 14 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 186,
											columnNumber: 38
										}, this) : /* @__PURE__ */ _jsxDEV(Clock, { size: 12 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 186,
											columnNumber: 60
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 181,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-baseline justify-between flex-wrap",
											children: [/* @__PURE__ */ _jsxDEV("h4", {
												className: `font-heading text-sm font-bold ${step.done ? "text-charcoal" : "text-graphite/50"}`,
												children: step.step
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 191,
												columnNumber: 27
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "text-xs text-graphite/60 font-body",
												children: step.date
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 198,
												columnNumber: 27
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 190,
											columnNumber: 25
										}, this), step.location && /* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-graphite font-body mt-0.5 flex items-center gap-1",
											children: [
												/* @__PURE__ */ _jsxDEV(MapPin, {
													size: 11,
													className: "text-orange"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 202,
													columnNumber: 29
												}, this),
												" ",
												step.location
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 201,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 189,
										columnNumber: 23
									}, this)
								]
							}, idx, true, {
								fileName: _jsxFileName,
								lineNumber: 171,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 169,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 13
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 5
	}, this);
}
_s(Track, "Y6xFIqjoAqNYp3vzeBDPqafbI30=", false, function() {
	return [useMeta];
});
_c = Track;
var _c;
$RefreshReg$(_c, "Track");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Track.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Track.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Track.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Track.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VhcmNoLCBNYXBQaW4sIENoZWNrLCBDbG9jaywgQWxlcnRDaXJjbGUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgdXNlTWV0YSB9IGZyb20gJy4uL2hvb2tzL3VzZU1ldGEnO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyJztcbmltcG9ydCB7IHRyYWNraW5nRGF0YWJhc2UsIHN0YXR1c0JhZGdlcyB9IGZyb20gJy4uL2RhdGEvc2l0ZURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFjaygpIHtcbiAgdXNlTWV0YSh7XG4gICAgdGl0bGU6ICdUcmFjayBTaGlwbWVudCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVHJhY2sgeW91ciBWRVhBUk8gc2hpcG1lbnQgbGl2ZS4gRW50ZXIgeW91ciBBV0IgbnVtYmVyIGZvciByZWFsLXRpbWUgc3RhdHVzLidcbiAgfSk7XG5cbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBkZW1vUHJlc2V0cyA9IFsnVlgyMDI0MDAxJywgJ1ZYMjAyNDAwMicsICdWWDIwMjQwMDMnXTtcblxuICBjb25zdCBoYW5kbGVUcmFjayA9IChhd2JUb1RyYWNrKSA9PiB7XG4gICAgY29uc3QgcmF3ID0gKGF3YlRvVHJhY2sgfHwgcXVlcnkpLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmICghcmF3KSB7XG4gICAgICBzZXRFcnJvcignUGxlYXNlIGVudGVyIGEgdHJhY2tpbmcgbnVtYmVyLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICAgIHNldFJlc3VsdChudWxsKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSB0cmFja2luZ0RhdGFiYXNlW3Jhd107XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgc2V0UmVzdWx0KG1hdGNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEVycm9yKCdUcmFja2luZyBudW1iZXIgbm90IGZvdW5kLiBUcnk6IFZYMjAyNDAwMSwgVlgyMDI0MDAyLCBvciBWWDIwMjQwMDMnKTtcbiAgICAgIH1cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0sIDgwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVtbyA9IChhd2IpID0+IHtcbiAgICBzZXRRdWVyeShhd2IpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgICBoYW5kbGVUcmFjayhhd2IpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYWdlSGVhZGVyXG4gICAgICAgIHRpdGxlPVwiVHJhY2sgWW91ciBTaGlwbWVudFwiXG4gICAgICAgIHN1YnRpdGxlPVwiRW50ZXIgeW91ciBBV0IgbnVtYmVyIHRvIGdldCByZWFsLXRpbWUgc3RhdHVzIG9uIHlvdXIgZGVsaXZlcnkuXCJcbiAgICAgICAgYnJlYWRjcnVtYj1cIlRyYWNrIFNoaXBtZW50XCJcbiAgICAgIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tcGFkZGluZyBiZy13aGl0ZSBmbGV4LTFcIiBzdHlsZT17eyBtaW5IZWlnaHQ6ICc2MHZoJyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tIG1heC13LTJ4bFwiPlxuICAgICAgICAgIHsvKiBUcmFja2luZyBJbnB1dCBDYXJkICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHQtYmx1ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtY2FyZCBwLTYgbWItNyBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItMlwiPlxuICAgICAgICAgICAgICBBV0IgLyBUcmFja2luZyBOdW1iZXJcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IGUua2V5ID09PSAnRW50ZXInICYmIGhhbmRsZVRyYWNrKCl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIFZYMjAyNDAwMVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB4LTQgcHktMyBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtYnRuIGZvbnQtYm9keSB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItbmF2eSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1uYXZ5LzE1IHRyYW5zaXRpb24tYWxsIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRyYWNrKCl9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIGdyYWRpZW50LW5hdnkgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyByb3VuZGVkLWJ0biBzaGFkb3ctbmF2eS1zbSBob3ZlcjpzaGFkb3ctbmF2eSBob3ZlcjotdHJhbnNsYXRlLXktMC41IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBkaXNhYmxlZDpvcGFjaXR5LTcwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQgaC00IGJvcmRlci0yIGJvcmRlci13aGl0ZS80MCBib3JkZXItdC13aGl0ZSByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPFNlYXJjaCBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuPlRyYWNrPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRGVtbyBudW1iZXJzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtdC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JhcGhpdGUvNjAgZm9udC1ib2R5XCI+VHJ5IGRlbW86PC9zcGFuPlxuICAgICAgICAgICAgICB7ZGVtb1ByZXNldHMubWFwKChkZW1vKSA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtkZW1vfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVtbyhkZW1vKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1uYXZ5IGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIGhvdmVyOnRleHQtb3JhbmdlIHRyYW5zaXRpb24tY29sb3JzIHB4LTIgcHktMC41IHJvdW5kZWQgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2RlbW99XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogRXJyb3IgQWxlcnQgKi99XG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwIGJvcmRlciBib3JkZXItcmVkLTIwMCB0ZXh0LXJlZC03MDAgcm91bmRlZC1jYXJkIHB4LTUgcHktNCB0ZXh0LXNtIGZvbnQtYm9keSBtYi02IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGFuaW1hdGUtZmFkZS1pblwiPlxuICAgICAgICAgICAgICA8QWxlcnRDaXJjbGUgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPntlcnJvcn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFJlc3VsdCBQcmVzZW50YXRpb24gQ2FyZCAqL31cbiAgICAgICAgICB7cmVzdWx0ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01IGFuaW1hdGUtZmFkZS1pblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0LWJsdWUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciByb3VuZGVkLWNhcmQgcC02IHNoYWRvdy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBmbGV4LXdyYXAgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZS82MCB0ZXh0LXhzIGZvbnQtYm9keSBtYi0xXCI+VHJhY2tpbmcgTnVtYmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jaGFyY29hbCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQteGxcIj57cmVzdWx0LmF3Yn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC1mdWxsIGJvcmRlciB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nICR7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQmFkZ2VzW3Jlc3VsdC5zdGF0dXNdPy5iZ1xuICAgICAgICAgICAgICAgICAgICB9ICR7c3RhdHVzQmFkZ2VzW3Jlc3VsdC5zdGF0dXNdPy5jb2xvcn1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHVzQmFkZ2VzW3Jlc3VsdC5zdGF0dXNdPy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00IG10LTUgcHQtNSBib3JkZXItdCBib3JkZXItc29mdC1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZS82MCB0ZXh0LXhzIGZvbnQtYm9keSBtYi0xXCI+T3JpZ2luPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jaGFyY29hbCBmb250LXNlbWlib2xkIHRleHQtc20gZm9udC1ib2R5IGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPE1hcFBpbiBzaXplPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1uYXZ5XCIgLz4ge3Jlc3VsdC5vcmlnaW59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUvNjAgdGV4dC14cyBmb250LWJvZHkgbWItMVwiPkRlc3RpbmF0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jaGFyY29hbCBmb250LXNlbWlib2xkIHRleHQtc20gZm9udC1ib2R5IGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPE1hcFBpbiBzaXplPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2VcIiAvPiB7cmVzdWx0LmRlc3RpbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlLzYwIHRleHQteHMgZm9udC1ib2R5IG1iLTFcIj5TZXJ2aWNlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jaGFyY29hbCBmb250LXNlbWlib2xkIHRleHQtc20gZm9udC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5zZXJ2aWNlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlLzYwIHRleHQteHMgZm9udC1ib2R5IG1iLTFcIj5XZWlnaHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNoYXJjb2FsIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSBmb250LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0LndlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwdC00IGJvcmRlci10IGJvcmRlci1zb2Z0LWJvcmRlci82MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBmb250LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGVcIj5Fc3RpbWF0ZWQgVGltZWxpbmU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LW5hdnlcIj57cmVzdWx0LmVzdGltYXRlZERlbGl2ZXJ5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFN0ZXAgVGltZWxpbmUgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciByb3VuZGVkLWNhcmQgcC02IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgdGV4dC1iYXNlIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgIFNoaXBtZW50IEFjdGl2aXR5XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAge3Jlc3VsdC50aW1lbGluZS5tYXAoKHN0ZXAsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFZlcnRpY2FsIGxpbmUgY29ubmVjdGluZyBub2RlcyAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7aWR4ICE9PSByZXN1bHQudGltZWxpbmUubGVuZ3RoIC0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGxlZnQtMy41IHRvcC03IGJvdHRvbS0wIHctMC41ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5kb25lID8gJ2JnLW5hdnknIDogJ2JnLXNvZnQtYm9yZGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNyBoLTcgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIHJlbGF0aXZlIHotMTAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5kb25lID8gJ2dyYWRpZW50LW5hdnkgdGV4dC13aGl0ZSBzaGFkb3ctc20nIDogJ2JnLWdyYXktMTAwIHRleHQtZ3JheS00MDAgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwLmRvbmUgPyA8Q2hlY2sgc2l6ZT17MTR9IC8+IDogPENsb2NrIHNpemU9ezEyfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUganVzdGlmeS1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LWhlYWRpbmcgdGV4dC1zbSBmb250LWJvbGQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAuZG9uZSA/ICd0ZXh0LWNoYXJjb2FsJyA6ICd0ZXh0LWdyYXBoaXRlLzUwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuc3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXBoaXRlLzYwIGZvbnQtYm9keVwiPntzdGVwLmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RlcC5sb2NhdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmFwaGl0ZSBmb250LWJvZHkgbXQtMC41IGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hcFBpbiBzaXplPXsxMX0gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2VcIiAvPiB7c3RlcC5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ==