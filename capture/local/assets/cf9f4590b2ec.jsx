import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/About.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport5_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { Check, Target, Eye, Heart, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { useMeta } from "/src/hooks/useMeta.js";
import PageHeader from "/src/components/PageHeader.jsx";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/About.jsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function About() {
	_s();
	useMeta({
		title: "About Us",
		description: "Learn about VEXARO Courier Solution, headquartered in Indore, MP. India's modern courier partner."
	});
	const foundation = [
		{
			icon: /* @__PURE__ */ _jsxDEV(Target, {
				size: 22,
				className: "text-orange"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 13
			}, this),
			title: "Our Mission",
			text: "To make courier services effortless for every Indian business — from first-time entrepreneurs to established enterprises — through technology, reliability, and genuine care.",
			bg: "bg-orange-50 border-orange/20"
		},
		{
			icon: /* @__PURE__ */ _jsxDEV(Eye, {
				size: 22,
				className: "text-navy"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 13
			}, this),
			title: "Our Vision",
			text: "To become India's most trusted courier technology company — powering commerce across every city, town, and village with speed and transparency.",
			bg: "bg-navy-50 border-navy/20"
		},
		{
			icon: /* @__PURE__ */ _jsxDEV(Heart, {
				size: 22,
				className: "text-orange"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 13
			}, this),
			title: "Our Values",
			text: "Trust over transactions. Speed with safety. Technology with humanity. Every shipment tells a story — and we treat each one with the respect it deserves.",
			bg: "bg-orange-50 border-orange/20"
		}
	];
	const strengths = [
		{
			icon: "🚀",
			title: "Technology-Driven",
			text: "API-ready infrastructure, real-time dashboards, and smart routing algorithms power our entire network."
		},
		{
			icon: "🗺️",
			title: "Deep Regional Reach",
			text: "Unlike metro-only couriers, VEXARO is built for mid-India — Indore, Bhopal, Raipur, Nagpur and beyond."
		},
		{
			icon: "⚡",
			title: "Speed at Scale",
			text: "2,500+ daily shipments processed with 98% on-time delivery through optimised last-mile networks."
		},
		{
			icon: "🔒",
			title: "End-to-End Security",
			text: "Every shipment is tracked, handled with care, and available for insurance — zero compromise on safety."
		},
		{
			icon: "🤝",
			title: "Client-First Culture",
			text: "Every client gets a dedicated account manager. We measure success by your satisfaction, not just deliveries."
		},
		{
			icon: "📊",
			title: "Data & Analytics",
			text: "Live shipment analytics, demand forecasting, and performance reports empower better business decisions."
		}
	];
	const networkStats = [
		{
			v: "100+",
			l: "Cities",
			s: "Pan-India coverage"
		},
		{
			v: "1,000+",
			l: "Pin Codes",
			s: "Last-mile reach"
		},
		{
			v: "20+",
			l: "Hubs",
			s: "Fulfilment centres"
		},
		{
			v: "5000+",
			l: "Agents",
			s: "Last-mile partners"
		}
	];
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
		/* @__PURE__ */ _jsxDEV(PageHeader, {
			title: "About VEXARO",
			subtitle: "The story behind India's modern courier company — built on trust, powered by technology.",
			breadcrumb: "About Us"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-white flex-1",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "grid lg:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy/20 rounded-full mb-4",
							children: /* @__PURE__ */ _jsxDEV("span", {
								className: "text-navy text-xs font-medium font-heading uppercase tracking-wider",
								children: "Our Story"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 90,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-5 leading-tight",
							children: [
								"Born in Indore.",
								/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "gradient-text-navy",
									children: "Built for India."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-graphite font-body leading-relaxed mb-4",
							children: "VEXARO Courier Solution Pvt. Ltd. was founded in Vijay Nagar, Indore, Madhya Pradesh — with a singular vision: to create a courier company that combines reliability with the speed of modern technology."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-graphite font-body leading-relaxed mb-6",
							children: [
								"Founded by ",
								/* @__PURE__ */ _jsxDEV("strong", { children: "Sonu Tiwari" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 105,
									columnNumber: 28
								}, this),
								" and",
								" ",
								/* @__PURE__ */ _jsxDEV("strong", { children: "Nikhil Pratap Singh" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 106,
									columnNumber: 17
								}, this),
								", VEXARO was built from the ground up with a technology-first approach, targeting underserved regions and rapidly expanding nationwide."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("ul", {
							className: "space-y-3",
							children: [
								"Headquartered in Vijay Nagar, Indore, MP",
								"100+ Cities across India",
								"2,500+ daily shipments",
								"300+ trusted clients"
							].map((item, idx) => /* @__PURE__ */ _jsxDEV("li", {
								className: "flex items-center gap-3 text-charcoal text-sm font-body",
								children: [/* @__PURE__ */ _jsxDEV(Check, {
									className: idx % 2 === 0 ? "text-navy" : "text-orange",
									size: 14
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 21
								}, this), item]
							}, idx, true, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", { children: /* @__PURE__ */ _jsxDEV("div", {
						className: "relative",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "bg-light-blue border border-soft-border rounded-card p-8 relative z-10 shadow-card",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-6xl font-bold font-heading gradient-text-navy mb-2",
									children: "TRUSTED"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 135,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-graphite text-sm font-body mb-1",
									children: "Delivery Partner"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-graphite/60 text-xs font-body mb-6",
									children: "Vijay Nagar, Indore, Madhya Pradesh"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-2 gap-4",
									children: [
										{
											v: "2.5K+",
											l: "Daily Shipments"
										},
										{
											v: "100+",
											l: "Cities Served"
										},
										{
											v: "300+",
											l: "Business Clients"
										},
										{
											v: "98%",
											l: "Success Rate"
										}
									].map((stat, idx) => /* @__PURE__ */ _jsxDEV("div", {
										className: `rounded-xl p-4 text-center text-white ${idx % 2 === 0 ? "gradient-navy" : "gradient-orange"}`,
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "text-2xl font-bold font-heading",
											children: stat.v
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 155,
											columnNumber: 25
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "text-white/70 text-xs font-body",
											children: stat.l
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 156,
											columnNumber: 25
										}, this)]
									}, idx, true, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", { className: "absolute -bottom-3 -right-3 w-full h-full border-2 border-navy/15 rounded-card -z-0" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-cream border-y border-soft-border",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center mb-12",
					children: /* @__PURE__ */ _jsxDEV("h2", {
						className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3",
						children: "Our Foundation"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 172,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: foundation.map((item, idx) => /* @__PURE__ */ _jsxDEV("div", {
						className: `p-8 rounded-card border card-hover ${item.bg} transition-all duration-300`,
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-card",
								children: item.icon
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "font-bold font-heading text-charcoal text-xl mb-3",
								children: item.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-graphite font-body text-sm leading-relaxed",
								children: item.text
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 17
							}, this)
						]
					}, idx, true, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 170,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 169,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-white",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange/20 rounded-full mb-4",
						children: /* @__PURE__ */ _jsxDEV("span", {
							className: "text-orange text-xs font-medium font-heading uppercase tracking-wider",
							children: "Our Strengths"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 200,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 199,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("h2", {
						className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3",
						children: "What Makes Us Strong"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 198,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
					children: strengths.map((item, idx) => /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white border border-soft-border rounded-card p-6 card-hover group hover:border-navy/30 transition-all duration-300",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "text-3xl mb-4",
								children: item.icon
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 214,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "font-bold font-heading text-charcoal mb-2",
								children: item.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 215,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-graphite text-sm font-body leading-relaxed",
								children: item.text
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 216,
								columnNumber: 17
							}, this)
						]
					}, idx, true, {
						fileName: _jsxFileName,
						lineNumber: 210,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 208,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 196,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-light-blue",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom max-w-3xl text-center",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "w-16 h-16 rounded-full gradient-duo flex items-center justify-center mx-auto mb-6 shadow-navy",
						children: /* @__PURE__ */ _jsxDEV("span", {
							className: "text-white font-bold text-xl font-heading",
							children: "V"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 227,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 226,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("blockquote", {
						className: "text-2xl md:text-3xl font-heading font-light text-charcoal leading-relaxed italic mb-6",
						children: "\"We built VEXARO not just to move packages — but to move businesses forward. Every delivery is a promise, and every promise is a commitment we take personally.\""
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 229,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { className: "w-12 h-1 gradient-orange rounded-full mx-auto mb-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 233,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "font-semibold font-heading text-charcoal",
						children: "Sonu Tiwari & Nikhil Pratap Singh"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 234,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "text-graphite text-sm font-body",
						children: "Co-Founders, VEXARO Courier Solution Pvt. Ltd."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 237,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 225,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 224,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-white border-t border-soft-border",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom text-center",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "mb-12",
						children: /* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3",
							children: "Connecting Every Corner of India"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 247,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 246,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-5 mb-10",
						children: networkStats.map((item, idx) => /* @__PURE__ */ _jsxDEV("div", {
							className: `rounded-card p-6 text-center text-white ${idx % 2 === 0 ? "gradient-navy" : "gradient-orange"}`,
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-3xl font-bold font-heading mb-1",
									children: item.v
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 259,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-white font-semibold font-heading text-sm mb-1",
									children: item.l
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-white/60 text-xs font-body",
									children: item.s
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 261,
									columnNumber: 17
								}, this)
							]
						}, idx, true, {
							fileName: _jsxFileName,
							lineNumber: 253,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 251,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 px-8 py-3.5 gradient-orange text-white font-semibold font-heading rounded-btn shadow-orange hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
						children: ["Partner With Us ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 269,
							columnNumber: 29
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 265,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 245,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 244,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 76,
		columnNumber: 5
	}, this);
}
_s(About, "2a1reKp/+GE9REwcjqs+koup8Bk=", false, function() {
	return [useMeta];
});
_c = About;
var _c;
$RefreshReg$(_c, "About");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/About.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/About.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/About.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/About.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUMsV0FBRDtHQUFTLFdBQVU7YUFDakIsd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZjtLQUNFLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUNiLHdCQUFDLE1BQUQ7T0FBSSxXQUFVO2lCQUFpRTtNQUUzRTs7Ozs7S0FDRDs7Ozs7S0FDTCx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFDWixhQUFhLEtBQUssTUFBTSxRQUN2Qix3QkFBQyxPQUFEO09BRUUsV0FBVywyQ0FDVCxNQUFNLE1BQU0sSUFBSSxrQkFBa0I7aUJBSHRDO1FBTUUsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQXdDLEtBQUs7UUFBTzs7Ozs7UUFDbkUsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQXNELEtBQUs7UUFBTzs7Ozs7UUFDakYsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQW1DLEtBQUs7UUFBTzs7Ozs7T0FDM0Q7U0FSRTs7OzthQVFGLENBQ047S0FDRTs7Ozs7S0FDTCx3QkFBQyxNQUFEO01BQ0UsSUFBRztNQUNILFdBQVU7Z0JBRlosQ0FHQyxvQkFDaUIsd0JBQUMsWUFBRCxFQUFZLE1BQU0sR0FBSzs7OztjQUNuQzs7Ozs7O0lBQ0g7Ozs7OztFQUNFOzs7OztDQUNUOzs7OztBQUVOIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkFib3V0LmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQ2hlY2ssIFRhcmdldCwgRXllLCBIZWFydCwgQXJyb3dSaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VNZXRhIH0gZnJvbSAnLi4vaG9va3MvdXNlTWV0YSc7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgdXNlTWV0YSh7XG4gICAgdGl0bGU6ICdBYm91dCBVcycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkxlYXJuIGFib3V0IFZFWEFSTyBDb3VyaWVyIFNvbHV0aW9uLCBoZWFkcXVhcnRlcmVkIGluIEluZG9yZSwgTVAuIEluZGlhJ3MgbW9kZXJuIGNvdXJpZXIgcGFydG5lci5cIlxuICB9KTtcblxuICBjb25zdCBmb3VuZGF0aW9uID0gW1xuICAgIHtcbiAgICAgIGljb246IDxUYXJnZXQgc2l6ZT17MjJ9IGNsYXNzTmFtZT1cInRleHQtb3JhbmdlXCIgLz4sXG4gICAgICB0aXRsZTogJ091ciBNaXNzaW9uJyxcbiAgICAgIHRleHQ6ICdUbyBtYWtlIGNvdXJpZXIgc2VydmljZXMgZWZmb3J0bGVzcyBmb3IgZXZlcnkgSW5kaWFuIGJ1c2luZXNzIOKAlCBmcm9tIGZpcnN0LXRpbWUgZW50cmVwcmVuZXVycyB0byBlc3RhYmxpc2hlZCBlbnRlcnByaXNlcyDigJQgdGhyb3VnaCB0ZWNobm9sb2d5LCByZWxpYWJpbGl0eSwgYW5kIGdlbnVpbmUgY2FyZS4nLFxuICAgICAgYmc6ICdiZy1vcmFuZ2UtNTAgYm9yZGVyLW9yYW5nZS8yMCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IDxFeWUgc2l6ZT17MjJ9IGNsYXNzTmFtZT1cInRleHQtbmF2eVwiIC8+LFxuICAgICAgdGl0bGU6ICdPdXIgVmlzaW9uJyxcbiAgICAgIHRleHQ6IFwiVG8gYmVjb21lIEluZGlhJ3MgbW9zdCB0cnVzdGVkIGNvdXJpZXIgdGVjaG5vbG9neSBjb21wYW55IOKAlCBwb3dlcmluZyBjb21tZXJjZSBhY3Jvc3MgZXZlcnkgY2l0eSwgdG93biwgYW5kIHZpbGxhZ2Ugd2l0aCBzcGVlZCBhbmQgdHJhbnNwYXJlbmN5LlwiLFxuICAgICAgYmc6ICdiZy1uYXZ5LTUwIGJvcmRlci1uYXZ5LzIwJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEhlYXJ0IHNpemU9ezIyfSBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZVwiIC8+LFxuICAgICAgdGl0bGU6ICdPdXIgVmFsdWVzJyxcbiAgICAgIHRleHQ6ICdUcnVzdCBvdmVyIHRyYW5zYWN0aW9ucy4gU3BlZWQgd2l0aCBzYWZldHkuIFRlY2hub2xvZ3kgd2l0aCBodW1hbml0eS4gRXZlcnkgc2hpcG1lbnQgdGVsbHMgYSBzdG9yeSDigJQgYW5kIHdlIHRyZWF0IGVhY2ggb25lIHdpdGggdGhlIHJlc3BlY3QgaXQgZGVzZXJ2ZXMuJyxcbiAgICAgIGJnOiAnYmctb3JhbmdlLTUwIGJvcmRlci1vcmFuZ2UvMjAnXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IHN0cmVuZ3RocyA9IFtcbiAgICB7XG4gICAgICBpY29uOiAn8J+agCcsXG4gICAgICB0aXRsZTogJ1RlY2hub2xvZ3ktRHJpdmVuJyxcbiAgICAgIHRleHQ6ICdBUEktcmVhZHkgaW5mcmFzdHJ1Y3R1cmUsIHJlYWwtdGltZSBkYXNoYm9hcmRzLCBhbmQgc21hcnQgcm91dGluZyBhbGdvcml0aG1zIHBvd2VyIG91ciBlbnRpcmUgbmV0d29yay4nXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAn8J+Xuu+4jycsXG4gICAgICB0aXRsZTogJ0RlZXAgUmVnaW9uYWwgUmVhY2gnLFxuICAgICAgdGV4dDogJ1VubGlrZSBtZXRyby1vbmx5IGNvdXJpZXJzLCBWRVhBUk8gaXMgYnVpbHQgZm9yIG1pZC1JbmRpYSDigJQgSW5kb3JlLCBCaG9wYWwsIFJhaXB1ciwgTmFncHVyIGFuZCBiZXlvbmQuJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ+KaoScsXG4gICAgICB0aXRsZTogJ1NwZWVkIGF0IFNjYWxlJyxcbiAgICAgIHRleHQ6ICcyLDUwMCsgZGFpbHkgc2hpcG1lbnRzIHByb2Nlc3NlZCB3aXRoIDk4JSBvbi10aW1lIGRlbGl2ZXJ5IHRocm91Z2ggb3B0aW1pc2VkIGxhc3QtbWlsZSBuZXR3b3Jrcy4nXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAn8J+UkicsXG4gICAgICB0aXRsZTogJ0VuZC10by1FbmQgU2VjdXJpdHknLFxuICAgICAgdGV4dDogJ0V2ZXJ5IHNoaXBtZW50IGlzIHRyYWNrZWQsIGhhbmRsZWQgd2l0aCBjYXJlLCBhbmQgYXZhaWxhYmxlIGZvciBpbnN1cmFuY2Ug4oCUIHplcm8gY29tcHJvbWlzZSBvbiBzYWZldHkuJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ/CfpJ0nLFxuICAgICAgdGl0bGU6ICdDbGllbnQtRmlyc3QgQ3VsdHVyZScsXG4gICAgICB0ZXh0OiAnRXZlcnkgY2xpZW50IGdldHMgYSBkZWRpY2F0ZWQgYWNjb3VudCBtYW5hZ2VyLiBXZSBtZWFzdXJlIHN1Y2Nlc3MgYnkgeW91ciBzYXRpc2ZhY3Rpb24sIG5vdCBqdXN0IGRlbGl2ZXJpZXMuJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ/Cfk4onLFxuICAgICAgdGl0bGU6ICdEYXRhICYgQW5hbHl0aWNzJyxcbiAgICAgIHRleHQ6ICdMaXZlIHNoaXBtZW50IGFuYWx5dGljcywgZGVtYW5kIGZvcmVjYXN0aW5nLCBhbmQgcGVyZm9ybWFuY2UgcmVwb3J0cyBlbXBvd2VyIGJldHRlciBidXNpbmVzcyBkZWNpc2lvbnMuJ1xuICAgIH1cbiAgXTtcblxuICBjb25zdCBuZXR3b3JrU3RhdHMgPSBbXG4gICAgeyB2OiAnMTAwKycsIGw6ICdDaXRpZXMnLCBzOiAnUGFuLUluZGlhIGNvdmVyYWdlJyB9LFxuICAgIHsgdjogJzEsMDAwKycsIGw6ICdQaW4gQ29kZXMnLCBzOiAnTGFzdC1taWxlIHJlYWNoJyB9LFxuICAgIHsgdjogJzIwKycsIGw6ICdIdWJzJywgczogJ0Z1bGZpbG1lbnQgY2VudHJlcycgfSxcbiAgICB7IHY6ICc1MDAwKycsIGw6ICdBZ2VudHMnLCBzOiAnTGFzdC1taWxlIHBhcnRuZXJzJyB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBhZ2VIZWFkZXJcbiAgICAgICAgdGl0bGU9XCJBYm91dCBWRVhBUk9cIlxuICAgICAgICBzdWJ0aXRsZT1cIlRoZSBzdG9yeSBiZWhpbmQgSW5kaWEncyBtb2Rlcm4gY291cmllciBjb21wYW55IOKAlCBidWlsdCBvbiB0cnVzdCwgcG93ZXJlZCBieSB0ZWNobm9sb2d5LlwiXG4gICAgICAgIGJyZWFkY3J1bWI9XCJBYm91dCBVc1wiXG4gICAgICAvPlxuXG4gICAgICB7LyogMS4gT1VSIFNUT1JZICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1wYWRkaW5nIGJnLXdoaXRlIGZsZXgtMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTE2IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgey8qIExlZnQgU3RvcnkgVGV4dCAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTMgcHktMS41IGJnLW5hdnktNTAgYm9yZGVyIGJvcmRlci1uYXZ5LzIwIHJvdW5kZWQtZnVsbCBtYi00XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1uYXZ5IHRleHQteHMgZm9udC1tZWRpdW0gZm9udC1oZWFkaW5nIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgICAgT3VyIFN0b3J5XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCBtYi01IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICBCb3JuIGluIEluZG9yZS5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0LW5hdnlcIj5CdWlsdCBmb3IgSW5kaWEuPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIGZvbnQtYm9keSBsZWFkaW5nLXJlbGF4ZWQgbWItNFwiPlxuICAgICAgICAgICAgICAgIFZFWEFSTyBDb3VyaWVyIFNvbHV0aW9uIFB2dC4gTHRkLiB3YXMgZm91bmRlZCBpbiBWaWpheSBOYWdhciwgSW5kb3JlLCBNYWRoeWFcbiAgICAgICAgICAgICAgICBQcmFkZXNoIOKAlCB3aXRoIGEgc2luZ3VsYXIgdmlzaW9uOiB0byBjcmVhdGUgYSBjb3VyaWVyIGNvbXBhbnkgdGhhdCBjb21iaW5lc1xuICAgICAgICAgICAgICAgIHJlbGlhYmlsaXR5IHdpdGggdGhlIHNwZWVkIG9mIG1vZGVybiB0ZWNobm9sb2d5LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IGxlYWRpbmctcmVsYXhlZCBtYi02XCI+XG4gICAgICAgICAgICAgICAgRm91bmRlZCBieSA8c3Ryb25nPlNvbnUgVGl3YXJpPC9zdHJvbmc+IGFuZHsnICd9XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5OaWtoaWwgUHJhdGFwIFNpbmdoPC9zdHJvbmc+LCBWRVhBUk8gd2FzIGJ1aWx0IGZyb20gdGhlIGdyb3VuZCB1cCB3aXRoIGFcbiAgICAgICAgICAgICAgICB0ZWNobm9sb2d5LWZpcnN0IGFwcHJvYWNoLCB0YXJnZXRpbmcgdW5kZXJzZXJ2ZWQgcmVnaW9ucyBhbmQgcmFwaWRseSBleHBhbmRpbmdcbiAgICAgICAgICAgICAgICBuYXRpb253aWRlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgJ0hlYWRxdWFydGVyZWQgaW4gVmlqYXkgTmFnYXIsIEluZG9yZSwgTVAnLFxuICAgICAgICAgICAgICAgICAgJzEwMCsgQ2l0aWVzIGFjcm9zcyBJbmRpYScsXG4gICAgICAgICAgICAgICAgICAnMiw1MDArIGRhaWx5IHNoaXBtZW50cycsXG4gICAgICAgICAgICAgICAgICAnMzAwKyB0cnVzdGVkIGNsaWVudHMnXG4gICAgICAgICAgICAgICAgXS5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LWNoYXJjb2FsIHRleHQtc20gZm9udC1ib2R5XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPENoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpZHggJSAyID09PSAwID8gJ3RleHQtbmF2eScgOiAndGV4dC1vcmFuZ2UnfVxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFJpZ2h0IFRydXN0IFN0YXRzIEJveCAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWxpZ2h0LWJsdWUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciByb3VuZGVkLWNhcmQgcC04IHJlbGF0aXZlIHotMTAgc2hhZG93LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyBncmFkaWVudC10ZXh0LW5hdnkgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICBUUlVTVEVEXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSB0ZXh0LXNtIGZvbnQtYm9keSBtYi0xXCI+RGVsaXZlcnkgUGFydG5lcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlLzYwIHRleHQteHMgZm9udC1ib2R5IG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlqYXkgTmFnYXIsIEluZG9yZSwgTWFkaHlhIFByYWRlc2hcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgICAgeyB2OiAnMi41SysnLCBsOiAnRGFpbHkgU2hpcG1lbnRzJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHsgdjogJzEwMCsnLCBsOiAnQ2l0aWVzIFNlcnZlZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7IHY6ICczMDArJywgbDogJ0J1c2luZXNzIENsaWVudHMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgeyB2OiAnOTglJywgbDogJ1N1Y2Nlc3MgUmF0ZScgfVxuICAgICAgICAgICAgICAgICAgICBdLm1hcCgoc3RhdCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLXhsIHAtNCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkeCAlIDIgPT09IDAgPyAnZ3JhZGllbnQtbmF2eScgOiAnZ3JhZGllbnQtb3JhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nXCI+e3N0YXQudn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS83MCB0ZXh0LXhzIGZvbnQtYm9keVwiPntzdGF0Lmx9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTMgLXJpZ2h0LTMgdy1mdWxsIGgtZnVsbCBib3JkZXItMiBib3JkZXItbmF2eS8xNSByb3VuZGVkLWNhcmQgLXotMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogMi4gT1VSIEZPVU5EQVRJT04gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBhZGRpbmcgYmctY3JlYW0gYm9yZGVyLXkgYm9yZGVyLXNvZnQtYm9yZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItM1wiPlxuICAgICAgICAgICAgICBPdXIgRm91bmRhdGlvblxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtmb3VuZGF0aW9uLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTggcm91bmRlZC1jYXJkIGJvcmRlciBjYXJkLWhvdmVyICR7aXRlbS5iZ30gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNSBzaGFkb3ctY2FyZFwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIHRleHQteGwgbWItM1wiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIGZvbnQtYm9keSB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiPntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDMuIE9VUiBTVFJFTkdUSFMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBhZGRpbmcgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMyBweS0xLjUgYmctb3JhbmdlLTUwIGJvcmRlciBib3JkZXItb3JhbmdlLzIwIHJvdW5kZWQtZnVsbCBtYi00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIHRleHQteHMgZm9udC1tZWRpdW0gZm9udC1oZWFkaW5nIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgIE91ciBTdHJlbmd0aHNcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTNcIj5cbiAgICAgICAgICAgICAgV2hhdCBNYWtlcyBVcyBTdHJvbmdcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC01XCI+XG4gICAgICAgICAgICB7c3RyZW5ndGhzLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtY2FyZCBwLTYgY2FyZC1ob3ZlciBncm91cCBob3Zlcjpib3JkZXItbmF2eS8zMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi00XCI+e2l0ZW0uaWNvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTJcIj57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgdGV4dC1zbSBmb250LWJvZHkgbGVhZGluZy1yZWxheGVkXCI+e2l0ZW0udGV4dH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogNC4gTEVBREVSU0hJUCBRVU9URSBCQU5ORVIgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBhZGRpbmcgYmctbGlnaHQtYmx1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b20gbWF4LXctM3hsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGdyYWRpZW50LWR1byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTYgc2hhZG93LW5hdnlcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgZm9udC1oZWFkaW5nXCI+Vjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWhlYWRpbmcgZm9udC1saWdodCB0ZXh0LWNoYXJjb2FsIGxlYWRpbmctcmVsYXhlZCBpdGFsaWMgbWItNlwiPlxuICAgICAgICAgICAgXCJXZSBidWlsdCBWRVhBUk8gbm90IGp1c3QgdG8gbW92ZSBwYWNrYWdlcyDigJQgYnV0IHRvIG1vdmUgYnVzaW5lc3NlcyBmb3J3YXJkLiBFdmVyeVxuICAgICAgICAgICAgZGVsaXZlcnkgaXMgYSBwcm9taXNlLCBhbmQgZXZlcnkgcHJvbWlzZSBpcyBhIGNvbW1pdG1lbnQgd2UgdGFrZSBwZXJzb25hbGx5LlwiXG4gICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEgZ3JhZGllbnQtb3JhbmdlIHJvdW5kZWQtZnVsbCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbFwiPlxuICAgICAgICAgICAgU29udSBUaXdhcmkgJiBOaWtoaWwgUHJhdGFwIFNpbmdoXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIHRleHQtc20gZm9udC1ib2R5XCI+XG4gICAgICAgICAgICBDby1Gb3VuZGVycywgVkVYQVJPIENvdXJpZXIgU29sdXRpb24gUHZ0LiBMdGQuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogNS4gQ09OTkVDVElORyBFVkVSWSBDT1JORVIgT0YgSU5ESUEgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBhZGRpbmcgYmctd2hpdGUgYm9yZGVyLXQgYm9yZGVyLXNvZnQtYm9yZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItM1wiPlxuICAgICAgICAgICAgICBDb25uZWN0aW5nIEV2ZXJ5IENvcm5lciBvZiBJbmRpYVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTUgbWItMTBcIj5cbiAgICAgICAgICAgIHtuZXR3b3JrU3RhdHMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtY2FyZCBwLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSAke1xuICAgICAgICAgICAgICAgICAgaWR4ICUgMiA9PT0gMCA/ICdncmFkaWVudC1uYXZ5JyA6ICdncmFkaWVudC1vcmFuZ2UnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgbWItMVwiPntpdGVtLnZ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHRleHQtc20gbWItMVwiPntpdGVtLmx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzYwIHRleHQteHMgZm9udC1ib2R5XCI+e2l0ZW0uc308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtOCBweS0zLjUgZ3JhZGllbnQtb3JhbmdlIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgcm91bmRlZC1idG4gc2hhZG93LW9yYW5nZSBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhcnRuZXIgV2l0aCBVcyA8QXJyb3dSaWdodCBzaXplPXsxNH0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl19