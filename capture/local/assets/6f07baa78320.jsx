import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport9_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { Navigation, ArrowRight, ShieldCheck, Zap, MapPin, Headphones, Radio, Globe, Cpu, ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { useMeta } from "/src/hooks/useMeta.js";
import StatCounter from "/src/components/StatCounter.jsx";
import ShipmentJourney from "/src/components/ShipmentJourney.jsx";
import TestimonialsSlider from "/src/components/TestimonialsSlider.jsx";
import IconHelper from "/src/components/IconHelper.jsx";
import { homeStats, aboutFeatures, servicesData, whyStandApart } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Home.jsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function Home() {
	_s();
	useMeta({
		title: "Home",
		description: "VEXARO — India's modern courier partner. Express delivery, B2B courier services, e-commerce shipping across 100+ cities."
	});
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
		/* @__PURE__ */ _jsxDEV("section", {
			className: "relative flex items-center overflow-hidden bg-white",
			style: { minHeight: "100vh" },
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute inset-0 z-0 pointer-events-none",
					children: [/* @__PURE__ */ _jsxDEV("img", {
						src: "/hero_background.png",
						alt: "Courier Background",
						className: "w-full h-full object-cover lg:object-contain object-top lg:object-right-bottom opacity-[0.28] lg:opacity-90 pt-0 lg:pt-24"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 lg:hidden" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute inset-0 z-0",
					children: [
						/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { className: "absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange opacity-[0.08] blur-[100px]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { className: "absolute right-0 bottom-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-navy opacity-[0.05] blur-[120px]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "container-custom relative z-10 w-full",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 min-h-screen pt-28 md:pt-36 lg:pt-32 pb-12 md:pb-16",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "flex-1 max-w-xl lg:max-w-[50%] z-20",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navy/10 bg-white/90 backdrop-blur-md shadow-soft mb-4 md:mb-5",
									children: [/* @__PURE__ */ _jsxDEV("span", { className: "w-2 h-2 rounded-full bg-orange animate-pulse" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 64,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-charcoal font-semibold text-[10px] sm:text-xs uppercase tracking-widest font-heading",
										children: "India's Premium Courier Partner"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 65,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("h1", {
									className: "text-5xl md:text-[4rem] lg:text-[4.5rem] font-black font-heading text-charcoal leading-[1.05] tracking-tighter mb-4 md:mb-6",
									children: [
										"DELIVERING",
										" ",
										/* @__PURE__ */ _jsxDEV("span", {
											className: "inline-block text-orange relative",
											children: ["TRUST.", /* @__PURE__ */ _jsxDEV("svg", {
												className: "absolute -bottom-2 left-0 w-full h-3",
												viewBox: "0 0 200 12",
												fill: "none",
												xmlns: "http://www.w3.org/2000/svg",
												children: /* @__PURE__ */ _jsxDEV("path", {
													d: "M2 10C50 2 150 2 198 10",
													stroke: "#E06000",
													strokeWidth: "4",
													strokeLinecap: "round"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 81,
													columnNumber: 21
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 75,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 73,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "block text-navy",
											children: "CONNECTING"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 89,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "block text-charcoal",
											children: "THE WORLD."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 90,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-graphite text-base md:text-lg font-body leading-relaxed mb-6 md:mb-8 max-w-md font-medium",
									children: "VEXARO powers 2,500+ daily shipments across 100+ cities — combining technology, speed, and reliability to build the future of India's courier services."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8",
									children: [/* @__PURE__ */ _jsxDEV(Link, {
										to: "/track",
										className: "flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-bold font-heading rounded-full shadow-[0_8px_30px_rgba(26,58,143,0.3)] hover:shadow-[0_8px_30px_rgba(26,58,143,0.5)] hover:-translate-y-1 transition-all duration-300 text-base",
										children: [/* @__PURE__ */ _jsxDEV(Navigation, {
											size: 20,
											className: "-rotate-45"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 105,
											columnNumber: 19
										}, this), " Track Shipment"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 101,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV(Link, {
										to: "/contact",
										className: "flex items-center justify-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-charcoal border-2 border-soft-border font-bold font-heading rounded-full hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 text-base group",
										children: [
											"Get a Quote",
											" ",
											/* @__PURE__ */ _jsxDEV(ArrowRight, {
												size: 14,
												className: "group-hover:translate-x-1 transition-transform"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 112,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 107,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 100,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-charcoal text-[11px] font-bold tracking-widest uppercase",
						children: "Scroll"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "w-0.5 h-8 rounded-full bg-charcoal/20 relative overflow-hidden",
						children: /* @__PURE__ */ _jsxDEV("div", { className: "w-full h-1/2 bg-charcoal rounded-full animate-bounce" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 123,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "py-16 bg-white border-y border-soft-border",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-5",
					children: homeStats.map((stat, idx) => /* @__PURE__ */ _jsxDEV(StatCounter, {
						value: stat.value,
						suffix: stat.suffix,
						label: stat.label,
						icon: stat.icon,
						color: stat.color
					}, idx, false, {
						fileName: _jsxFileName,
						lineNumber: 138,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 135,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 134,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-cream",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "grid lg:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy/20 rounded-full mb-4",
							children: [/* @__PURE__ */ _jsxDEV("div", { className: "w-1.5 h-1.5 rounded-full bg-navy" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-navy text-xs font-medium font-heading uppercase tracking-wider",
								children: "About VEXARO"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 159,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-5 leading-tight",
							children: [
								"Redefining Courier Services for",
								/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "gradient-text-navy",
									children: "Modern India"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-graphite font-body leading-relaxed mb-5",
							children: "VEXARO is a technology-driven courier company headquartered in Vijay Nagar, Indore. We deliver with precision, transparency, and genuine care across every pin code we serve."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-graphite font-body leading-relaxed mb-8",
							children: "From individual parcels to enterprise supply chains, our platform brings real-time visibility, seamless integrations, and a 98% delivery success rate that businesses across India rely on every day."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 173,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV(Link, {
							to: "/about",
							className: "inline-flex items-center gap-2 text-navy font-semibold font-heading hover:gap-3 transition-all duration-200",
							children: ["Learn our story ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 13 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 33
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 178,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-2 gap-4",
						children: aboutFeatures.map((item, idx) => /* @__PURE__ */ _jsxDEV("div", {
							className: "bg-white border border-soft-border rounded-card card-hover group overflow-hidden flex flex-col",
							children: [item.image && /* @__PURE__ */ _jsxDEV("div", {
								className: "w-full aspect-[1708/920] overflow-hidden relative",
								children: /* @__PURE__ */ _jsxDEV("img", {
									src: item.image,
									alt: item.title,
									className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 195,
									columnNumber: 23
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 194,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "p-5 flex-1 flex flex-col",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: `w-10 h-10 rounded-lg bg-navy-50 border border-navy/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${item.image ? "-mt-10 shadow-md relative z-10 bg-white" : ""}`,
										children: /* @__PURE__ */ _jsxDEV(IconHelper, {
											name: item.icon,
											size: 20,
											className: "text-navy"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 208,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 203,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("h4", {
										className: "font-semibold font-heading text-charcoal text-sm mb-1",
										children: item.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-graphite text-xs font-body leading-relaxed",
										children: item.text
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 213,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 202,
								columnNumber: 19
							}, this)]
						}, idx, true, {
							fileName: _jsxFileName,
							lineNumber: 189,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 152,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-white",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "text-center mb-14",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange/20 rounded-full mb-4",
								children: /* @__PURE__ */ _jsxDEV("span", {
									className: "text-orange text-xs font-medium font-heading uppercase tracking-wider",
									children: "What We Offer"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 227,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 226,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3",
								children: "Complete Courier Solutions"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 231,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-graphite font-body max-w-xl mx-auto",
								children: "From express courier to enterprise freight — every shipping need, one trusted partner."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 234,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 225,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
						children: servicesData.slice(0, 8).map((srv, idx) => {
							const isEven = idx % 2 === 0;
							return /* @__PURE__ */ _jsxDEV(Link, {
								to: "/services",
								className: "bg-white border border-soft-border p-6 rounded-card card-hover cursor-pointer group flex flex-col block",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: `w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm transition-all duration-300 ${isEven ? "bg-orange-50 border border-orange/20 group-hover:gradient-orange" : "bg-navy-50 border border-navy/20 group-hover:gradient-navy"}`,
										children: /* @__PURE__ */ _jsxDEV(IconHelper, {
											name: srv.icon,
											size: 20,
											className: `transition-colors duration-300 ${isEven ? "text-orange group-hover:text-white" : "text-navy group-hover:text-white"}`
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 255,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 248,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("h3", {
										className: "font-semibold font-heading text-charcoal mb-2 text-sm",
										children: srv.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 265,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "text-graphite text-xs font-body leading-relaxed line-clamp-2 mb-3 flex-1",
										children: srv.description
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 268,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: `text-xs font-medium font-heading ${isEven ? "text-orange" : "text-navy"}`,
										children: srv.timeline
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 271,
										columnNumber: 19
									}, this)
								]
							}, srv.id, true, {
								fileName: _jsxFileName,
								lineNumber: 243,
								columnNumber: 17
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "text-center mt-10",
						children: /* @__PURE__ */ _jsxDEV(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 px-8 py-3.5 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
							children: ["View All Services ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 288,
								columnNumber: 33
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 284,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 283,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 224,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 223,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-light-blue",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center mb-14",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-soft-border rounded-full mb-4 shadow-card",
							children: /* @__PURE__ */ _jsxDEV("span", {
								className: "text-navy text-xs font-medium font-heading uppercase tracking-wider",
								children: "Our Edge"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 299,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 298,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3",
							children: "Why VEXARO Stands Apart"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 303,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-graphite font-body max-w-xl mx-auto",
							children: "We don't just deliver parcels — we deliver confidence, speed, and innovation."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 306,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 297,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
					children: whyStandApart.map((item, idx) => /* @__PURE__ */ _jsxDEV("div", {
						className: "bg-white rounded-card border border-soft-border hover:border-navy/30 card-hover group overflow-hidden flex flex-col",
						children: [item.image && /* @__PURE__ */ _jsxDEV("div", {
							className: "w-full aspect-[1708/920] overflow-hidden relative",
							children: /* @__PURE__ */ _jsxDEV("img", {
								src: item.image,
								alt: item.title,
								className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 319,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 318,
							columnNumber: 19
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "p-6 flex-1 flex flex-col",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: `w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${item.color === "orange" ? "bg-orange-50 border border-orange/15 group-hover:gradient-orange" : "bg-navy-50 border border-navy/15 group-hover:gradient-navy"} ${item.image ? "-mt-11 shadow-lg relative z-10 bg-white" : ""}`,
									children: /* @__PURE__ */ _jsxDEV(IconHelper, {
										name: item.icon,
										size: 20,
										className: `transition-colors duration-300 ${item.color === "orange" ? "text-orange group-hover:text-white" : "text-navy group-hover:text-white"}`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 334,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 327,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "font-semibold font-heading text-charcoal mb-2",
									children: item.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 344,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-graphite text-sm font-body leading-relaxed",
									children: item.text
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 345,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 326,
							columnNumber: 17
						}, this)]
					}, idx, true, {
						fileName: _jsxFileName,
						lineNumber: 313,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 311,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 296,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 295,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-white",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center mb-14",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy/20 rounded-full mb-4",
						children: /* @__PURE__ */ _jsxDEV("span", {
							className: "text-navy text-xs font-medium font-heading uppercase tracking-wider",
							children: "How It Works"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 358,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 357,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("h2", {
						className: "text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3",
						children: "Your Shipment's Journey"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 362,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 356,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV(ShipmentJourney, { isInView: true }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 366,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 355,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 354,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section-padding bg-cream",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange/20 rounded-full mb-4",
						children: /* @__PURE__ */ _jsxDEV("span", {
							className: "text-orange text-xs font-medium font-heading uppercase tracking-wider",
							children: "Client Stories"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 375,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 374,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("h2", {
						className: "text-3xl md:text-4xl font-bold font-heading text-charcoal",
						children: "Trusted by India's Best Brands"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 379,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 373,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV(TestimonialsSlider, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 383,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 372,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 371,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "py-20 relative overflow-hidden",
			style: { background: "linear-gradient(135deg,#1A3A8F 0%,#0F2566 48%,#1A3A8F 100%)" },
			children: [
				/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:38px_38px]" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 394,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					"aria-hidden": "true",
					className: "absolute left-0 top-10 h-px w-72 bg-gradient-to-r from-transparent via-orange to-transparent animate-shimmer"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 395,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					"aria-hidden": "true",
					className: "absolute -right-28 -bottom-28 w-72 h-72 rounded-full border border-white/10"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 399,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "container-custom relative text-center",
					children: [
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-3xl md:text-5xl font-bold font-heading text-white mb-4",
							children: "Ready to Ship Smarter?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 405,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-white/70 font-body text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed",
							children: "Join hundreds of businesses that trust VEXARO for fast, reliable, and seamless courier delivery across India."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 408,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ _jsxDEV(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 px-8 py-3.5 gradient-orange text-white font-semibold font-heading rounded-btn shadow-orange hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
								children: ["Get Started Today ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 417,
									columnNumber: 33
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 413,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV(Link, {
								to: "/track",
								className: "inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold font-heading rounded-btn hover:border-white hover:bg-white/10 transition-all duration-200",
								children: [/* @__PURE__ */ _jsxDEV(Navigation, {
									size: 14,
									className: "-rotate-45"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 423,
									columnNumber: 15
								}, this), " Track a Package"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 419,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 412,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 404,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 388,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "py-12 bg-white border-t border-soft-border",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row items-center justify-between gap-6",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
						className: "text-xl font-bold font-heading text-charcoal mb-1",
						children: "Questions? We're here."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 434,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-graphite font-body text-sm",
						children: "Reach out anytime — our team responds within 2 hours."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 437,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 433,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV(Link, {
						to: "/contact",
						className: "flex items-center gap-2 text-navy font-semibold font-heading hover:gap-3 transition-all duration-200 whitespace-nowrap text-sm",
						children: ["Reach Us ", /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 13 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 445,
							columnNumber: 24
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 441,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 432,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 431,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 430,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
_s(Home, "2a1reKp/+GE9REwcjqs+koup8Bk=", false, function() {
	return [useMeta];
});
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Home.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Home.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Home.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Home.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUssV0FBVTtlQUFmO01BQ0Usd0JBQUMsTUFBRDtPQUFJLFdBQVU7aUJBQThEO01BRXhFOzs7OztNQUNKLHdCQUFDLEtBQUQ7T0FBRyxXQUFVO2lCQUFxRjtNQUcvRjs7Ozs7TUFDSCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZixDQUNFLHdCQUFDLE1BQUQ7UUFDRSxJQUFHO1FBQ0gsV0FBVTtrQkFGWixDQUdDLHNCQUNtQix3QkFBQyxZQUFELEVBQVksTUFBTSxHQUFLOzs7O2dCQUNyQzs7Ozs7aUJBQ04sd0JBQUMsTUFBRDtRQUNFLElBQUc7UUFDSCxXQUFVO2tCQUZaLENBSUUsd0JBQUMsWUFBRDtTQUFZLE1BQU07U0FBSSxXQUFVO1FBQWM7Ozs7a0JBQUMsa0JBQzNDOzs7OztlQUNIOzs7Ozs7S0FDRjs7Ozs7O0dBQ0U7Ozs7OztFQUdULHdCQUFDLFdBQUQ7R0FBUyxXQUFVO2FBQ2pCLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQ2Isd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLE9BQUQsYUFDRSx3QkFBQyxNQUFEO01BQUksV0FBVTtnQkFBb0Q7S0FFOUQ7Ozs7ZUFDSix3QkFBQyxLQUFEO01BQUcsV0FBVTtnQkFBa0M7S0FFNUM7Ozs7YUFDQTs7OztlQUNMLHdCQUFDLE1BQUQ7TUFDRSxJQUFHO01BQ0gsV0FBVTtnQkFGWixDQUdDLGFBQ1Usd0JBQUMsWUFBRCxFQUFZLE1BQU0sR0FBSzs7OztjQUM1Qjs7Ozs7YUFDSDs7Ozs7O0dBQ0Y7Ozs7O0VBQ0U7Ozs7O0NBQ1Q7Ozs7O0FBRU4iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiSG9tZS5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb24sXG4gIEFycm93UmlnaHQsXG4gIFNoaWVsZENoZWNrLFxuICBaYXAsXG4gIE1hcFBpbixcbiAgSGVhZHBob25lcyxcbiAgUmFkaW8sXG4gIEdsb2JlLFxuICBDcHUsXG4gIENoZXZyb25SaWdodFxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgdXNlTWV0YSB9IGZyb20gJy4uL2hvb2tzL3VzZU1ldGEnO1xuaW1wb3J0IFN0YXRDb3VudGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3RhdENvdW50ZXInO1xuaW1wb3J0IFNoaXBtZW50Sm91cm5leSBmcm9tICcuLi9jb21wb25lbnRzL1NoaXBtZW50Sm91cm5leSc7XG5pbXBvcnQgVGVzdGltb25pYWxzU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdGltb25pYWxzU2xpZGVyJztcbmltcG9ydCBJY29uSGVscGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbkhlbHBlcic7XG5pbXBvcnQge1xuICBob21lU3RhdHMsXG4gIGFib3V0RmVhdHVyZXMsXG4gIHNlcnZpY2VzRGF0YSxcbiAgd2h5U3RhbmRBcGFydFxufSBmcm9tICcuLi9kYXRhL3NpdGVEYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgdXNlTWV0YSh7XG4gICAgdGl0bGU6ICdIb21lJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVkVYQVJPIOKAlCBJbmRpYSdzIG1vZGVybiBjb3VyaWVyIHBhcnRuZXIuIEV4cHJlc3MgZGVsaXZlcnksIEIyQiBjb3VyaWVyIHNlcnZpY2VzLCBlLWNvbW1lcmNlIHNoaXBwaW5nIGFjcm9zcyAxMDArIGNpdGllcy5cIlxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogMS4gSEVSTyBTRUNUSU9OICovfVxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlXCJcbiAgICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMTAwdmgnIH19XG4gICAgICA+XG4gICAgICAgIHsvKiBCYWNrZ3JvdW5kIEltYWdlIExheWVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgei0wIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaGVyb19iYWNrZ3JvdW5kLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJDb3VyaWVyIEJhY2tncm91bmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgbGc6b2JqZWN0LWNvbnRhaW4gb2JqZWN0LXRvcCBsZzpvYmplY3QtcmlnaHQtYm90dG9tIG9wYWNpdHktWzAuMjhdIGxnOm9wYWNpdHktOTAgcHQtMCBsZzpwdC0yNFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXdoaXRlLzcwIHZpYS13aGl0ZS8yMCB0by13aGl0ZS85MCBsZzpoaWRkZW5cIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQW1iaWVudCBEZWNvcmF0aXZlIExpZ2h0aW5nICYgR3JpZCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHotMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1bbGluZWFyLWdyYWRpZW50KHRvX3JpZ2h0LCM4MDgwODAxMl8xcHgsdHJhbnNwYXJlbnRfMXB4KSxsaW5lYXItZ3JhZGllbnQodG9fYm90dG9tLCM4MDgwODAxMl8xcHgsdHJhbnNwYXJlbnRfMXB4KV0gYmctW3NpemU6NDBweF80MHB4XVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCB0b3AtMCAtei0xMCBtLWF1dG8gaC1bMzEwcHhdIHctWzMxMHB4XSByb3VuZGVkLWZ1bGwgYmctb3JhbmdlIG9wYWNpdHktWzAuMDhdIGJsdXItWzEwMHB4XVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIGJvdHRvbS0wIC16LTEwIG0tYXV0byBoLVs0MDBweF0gdy1bNDAwcHhdIHJvdW5kZWQtZnVsbCBiZy1uYXZ5IG9wYWNpdHktWzAuMDVdIGJsdXItWzEyMHB4XVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDb250ZW50IENvbnRhaW5lciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tIHJlbGF0aXZlIHotMTAgdy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTggbWQ6Z2FwLTEyIG1pbi1oLXNjcmVlbiBwdC0yOCBtZDpwdC0zNiBsZzpwdC0zMiBwYi0xMiBtZDpwYi0xNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWF4LXcteGwgbGc6bWF4LXctWzUwJV0gei0yMFwiPlxuICAgICAgICAgICAgICB7LyogQmFkZ2UgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1uYXZ5LzEwIGJnLXdoaXRlLzkwIGJhY2tkcm9wLWJsdXItbWQgc2hhZG93LXNvZnQgbWItNCBtZDptYi01XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctb3JhbmdlIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY2hhcmNvYWwgZm9udC1zZW1pYm9sZCB0ZXh0LVsxMHB4XSBzbTp0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICBJbmRpYSdzIFByZW1pdW0gQ291cmllciBQYXJ0bmVyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogSGVhZGxpbmUgKi99XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LVs0cmVtXSBsZzp0ZXh0LVs0LjVyZW1dIGZvbnQtYmxhY2sgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbGVhZGluZy1bMS4wNV0gdHJhY2tpbmctdGlnaHRlciBtYi00IG1kOm1iLTZcIj5cbiAgICAgICAgICAgICAgICBERUxJVkVSSU5HeycgJ31cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1vcmFuZ2UgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIFRSVVNULlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTIgbGVmdC0wIHctZnVsbCBoLTNcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwMCAxMlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yIDEwQzUwIDIgMTUwIDIgMTk4IDEwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjRTA2MDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1uYXZ5XCI+Q09OTkVDVElORzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWNoYXJjb2FsXCI+VEhFIFdPUkxELjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgICB7LyogU3VidGl0bGUgKi99XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgdGV4dC1iYXNlIG1kOnRleHQtbGcgZm9udC1ib2R5IGxlYWRpbmctcmVsYXhlZCBtYi02IG1kOm1iLTggbWF4LXctbWQgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICBWRVhBUk8gcG93ZXJzIDIsNTAwKyBkYWlseSBzaGlwbWVudHMgYWNyb3NzIDEwMCsgY2l0aWVzIOKAlCBjb21iaW5pbmcgdGVjaG5vbG9neSxcbiAgICAgICAgICAgICAgICBzcGVlZCwgYW5kIHJlbGlhYmlsaXR5IHRvIGJ1aWxkIHRoZSBmdXR1cmUgb2YgSW5kaWEncyBjb3VyaWVyIHNlcnZpY2VzLlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgey8qIEFjdGlvbiBCdXR0b25zICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0zIG1kOmdhcC00IG1iLTYgbWQ6bWItOFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz1cIi90cmFja1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBweC02IHB5LTMgYmctbmF2eSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgcm91bmRlZC1mdWxsIHNoYWRvdy1bMF84cHhfMzBweF9yZ2JhKDI2LDU4LDE0MywwLjMpXSBob3ZlcjpzaGFkb3ctWzBfOHB4XzMwcHhfcmdiYSgyNiw1OCwxNDMsMC41KV0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtYmFzZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gc2l6ZT17MjB9IGNsYXNzTmFtZT1cIi1yb3RhdGUtNDVcIiAvPiBUcmFjayBTaGlwbWVudFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBweC02IHB5LTMgYmctd2hpdGUvOTAgYmFja2Ryb3AtYmx1ci1zbSB0ZXh0LWNoYXJjb2FsIGJvcmRlci0yIGJvcmRlci1zb2Z0LWJvcmRlciBmb250LWJvbGQgZm9udC1oZWFkaW5nIHJvdW5kZWQtZnVsbCBob3Zlcjpib3JkZXItY2hhcmNvYWwgaG92ZXI6YmctY2hhcmNvYWwgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdGV4dC1iYXNlIGdyb3VwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHZXQgYSBRdW90ZXsnICd9XG4gICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodFxuICAgICAgICAgICAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSB0cmFuc2l0aW9uLXRyYW5zZm9ybVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFNjcm9sbCBJbmRpY2F0b3IgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiBoaWRkZW4gbWQ6ZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNoYXJjb2FsIHRleHQtWzExcHhdIGZvbnQtYm9sZCB0cmFja2luZy13aWRlc3QgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICBTY3JvbGxcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTAuNSBoLTggcm91bmRlZC1mdWxsIGJnLWNoYXJjb2FsLzIwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xLzIgYmctY2hhcmNvYWwgcm91bmRlZC1mdWxsIGFuaW1hdGUtYm91bmNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiAyLiBTVEFUUyBUSUNLRVIgUk9XICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctd2hpdGUgYm9yZGVyLXkgYm9yZGVyLXNvZnQtYm9yZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBnYXAtNVwiPlxuICAgICAgICAgICAge2hvbWVTdGF0cy5tYXAoKHN0YXQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8U3RhdENvdW50ZXJcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdC52YWx1ZX1cbiAgICAgICAgICAgICAgICBzdWZmaXg9e3N0YXQuc3VmZml4fVxuICAgICAgICAgICAgICAgIGxhYmVsPXtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgIGljb249e3N0YXQuaWNvbn1cbiAgICAgICAgICAgICAgICBjb2xvcj17c3RhdC5jb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDMuIEFCT1VUIFZFWEFSTyBTRUNUSU9OICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1wYWRkaW5nIGJnLWNyZWFtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMiBnYXAtMTYgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICB7LyogTGVmdCBDb3B5ICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMyBweS0xLjUgYmctbmF2eS01MCBib3JkZXIgYm9yZGVyLW5hdnkvMjAgcm91bmRlZC1mdWxsIG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1uYXZ5XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW5hdnkgdGV4dC14cyBmb250LW1lZGl1bSBmb250LWhlYWRpbmcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICBBYm91dCBWRVhBUk9cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTUgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICAgIFJlZGVmaW5pbmcgQ291cmllciBTZXJ2aWNlcyBmb3JcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0LW5hdnlcIj5Nb2Rlcm4gSW5kaWE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IGxlYWRpbmctcmVsYXhlZCBtYi01XCI+XG4gICAgICAgICAgICAgICAgVkVYQVJPIGlzIGEgdGVjaG5vbG9neS1kcml2ZW4gY291cmllciBjb21wYW55IGhlYWRxdWFydGVyZWQgaW4gVmlqYXkgTmFnYXIsXG4gICAgICAgICAgICAgICAgSW5kb3JlLiBXZSBkZWxpdmVyIHdpdGggcHJlY2lzaW9uLCB0cmFuc3BhcmVuY3ksIGFuZCBnZW51aW5lIGNhcmUgYWNyb3NzIGV2ZXJ5IHBpblxuICAgICAgICAgICAgICAgIGNvZGUgd2Ugc2VydmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSBmb250LWJvZHkgbGVhZGluZy1yZWxheGVkIG1iLThcIj5cbiAgICAgICAgICAgICAgICBGcm9tIGluZGl2aWR1YWwgcGFyY2VscyB0byBlbnRlcnByaXNlIHN1cHBseSBjaGFpbnMsIG91ciBwbGF0Zm9ybSBicmluZ3MgcmVhbC10aW1lXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eSwgc2VhbWxlc3MgaW50ZWdyYXRpb25zLCBhbmQgYSA5OCUgZGVsaXZlcnkgc3VjY2VzcyByYXRlIHRoYXQgYnVzaW5lc3Nlc1xuICAgICAgICAgICAgICAgIGFjcm9zcyBJbmRpYSByZWx5IG9uIGV2ZXJ5IGRheS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL2Fib3V0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1uYXZ5IGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIGhvdmVyOmdhcC0zIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMZWFybiBvdXIgc3RvcnkgPEFycm93UmlnaHQgc2l6ZT17MTN9IC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUmlnaHQgNCBGZWF0dXJlIENhcmRzIHdpdGggSW1hZ2VzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIHthYm91dEZlYXR1cmVzLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtY2FyZCBjYXJkLWhvdmVyIGdyb3VwIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGFzcGVjdC1bMTcwOC85MjBdIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGZsZXgtMSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwIGgtMTAgcm91bmRlZC1sZyBiZy1uYXZ5LTUwIGJvcmRlciBib3JkZXItbmF2eS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0zIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZSA/ICctbXQtMTAgc2hhZG93LW1kIHJlbGF0aXZlIHotMTAgYmctd2hpdGUnIDogJydcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uSGVscGVyIG5hbWU9e2l0ZW0uaWNvbn0gc2l6ZT17MjB9IGNsYXNzTmFtZT1cInRleHQtbmF2eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCB0ZXh0LXNtIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSB0ZXh0LXhzIGZvbnQtYm9keSBsZWFkaW5nLXJlbGF4ZWRcIj57aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDQuIENPTVBMRVRFIENPVVJJRVIgU09MVVRJT05TIChTRVJWSUNFUyBPVkVSVklFVykgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBhZGRpbmcgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMyBweS0xLjUgYmctb3JhbmdlLTUwIGJvcmRlciBib3JkZXItb3JhbmdlLzIwIHJvdW5kZWQtZnVsbCBtYi00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIHRleHQteHMgZm9udC1tZWRpdW0gZm9udC1oZWFkaW5nIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgIFdoYXQgV2UgT2ZmZXJcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTNcIj5cbiAgICAgICAgICAgICAgQ29tcGxldGUgQ291cmllciBTb2x1dGlvbnNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIGZvbnQtYm9keSBtYXgtdy14bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIEZyb20gZXhwcmVzcyBjb3VyaWVyIHRvIGVudGVycHJpc2UgZnJlaWdodCDigJQgZXZlcnkgc2hpcHBpbmcgbmVlZCwgb25lIHRydXN0ZWQgcGFydG5lci5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNVwiPlxuICAgICAgICAgICAge3NlcnZpY2VzRGF0YS5zbGljZSgwLCA4KS5tYXAoKHNydiwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzRXZlbiA9IGlkeCAlIDIgPT09IDA7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGtleT17c3J2LmlkfVxuICAgICAgICAgICAgICAgICAgdG89XCIvc2VydmljZXNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciBwLTYgcm91bmRlZC1jYXJkIGNhcmQtaG92ZXIgY3Vyc29yLXBvaW50ZXIgZ3JvdXAgZmxleCBmbGV4LWNvbCBibG9ja1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEyIGgtMTIgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00IHNoYWRvdy1zbSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpc0V2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS01MCBib3JkZXIgYm9yZGVyLW9yYW5nZS8yMCBncm91cC1ob3ZlcjpncmFkaWVudC1vcmFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1uYXZ5LTUwIGJvcmRlciBib3JkZXItbmF2eS8yMCBncm91cC1ob3ZlcjpncmFkaWVudC1uYXZ5J1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb25IZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzcnYuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LW9yYW5nZSBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LW5hdnkgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzcnYudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSB0ZXh0LXhzIGZvbnQtYm9keSBsZWFkaW5nLXJlbGF4ZWQgbGluZS1jbGFtcC0yIG1iLTMgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzcnYuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQteHMgZm9udC1tZWRpdW0gZm9udC1oZWFkaW5nICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXNFdmVuID8gJ3RleHQtb3JhbmdlJyA6ICd0ZXh0LW5hdnknXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c3J2LnRpbWVsaW5lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9zZXJ2aWNlc1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC04IHB5LTMuNSBncmFkaWVudC1uYXZ5IHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgcm91bmRlZC1idG4gc2hhZG93LW5hdnkgaG92ZXI6c2hhZG93LWxnIGhvdmVyOi10cmFuc2xhdGUteS0wLjUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBBbGwgU2VydmljZXMgPEFycm93UmlnaHQgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogNS4gV0hZIFZFWEFSTyBTVEFORFMgQVBBUlQgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBhZGRpbmcgYmctbGlnaHQtYmx1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTE0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LTEuNSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtZnVsbCBtYi00IHNoYWRvdy1jYXJkXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbmF2eSB0ZXh0LXhzIGZvbnQtbWVkaXVtIGZvbnQtaGVhZGluZyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICBPdXIgRWRnZVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItM1wiPlxuICAgICAgICAgICAgICBXaHkgVkVYQVJPIFN0YW5kcyBBcGFydFxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IG1heC13LXhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgV2UgZG9uJ3QganVzdCBkZWxpdmVyIHBhcmNlbHMg4oCUIHdlIGRlbGl2ZXIgY29uZmlkZW5jZSwgc3BlZWQsIGFuZCBpbm5vdmF0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC01XCI+XG4gICAgICAgICAgICB7d2h5U3RhbmRBcGFydC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1jYXJkIGJvcmRlciBib3JkZXItc29mdC1ib3JkZXIgaG92ZXI6Ym9yZGVyLW5hdnkvMzAgY2FyZC1ob3ZlciBncm91cCBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXRlbS5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBhc3BlY3QtWzE3MDgvOTIwXSBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGZsZXgtMSBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTEgaC0xMSByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb2xvciA9PT0gJ29yYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS01MCBib3JkZXIgYm9yZGVyLW9yYW5nZS8xNSBncm91cC1ob3ZlcjpncmFkaWVudC1vcmFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1uYXZ5LTUwIGJvcmRlciBib3JkZXItbmF2eS8xNSBncm91cC1ob3ZlcjpncmFkaWVudC1uYXZ5J1xuICAgICAgICAgICAgICAgICAgICB9ICR7aXRlbS5pbWFnZSA/ICctbXQtMTEgc2hhZG93LWxnIHJlbGF0aXZlIHotMTAgYmctd2hpdGUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb25IZWxwZXJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbG9yID09PSAnb3JhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LW9yYW5nZSBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LW5hdnkgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItMlwiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIHRleHQtc20gZm9udC1ib2R5IGxlYWRpbmctcmVsYXhlZFwiPntpdGVtLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDYuIEhPVyBJVCBXT1JLUyAoU0hJUE1FTlQnUyBKT1VSTkVZKSAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24tcGFkZGluZyBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTE0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LTEuNSBiZy1uYXZ5LTUwIGJvcmRlciBib3JkZXItbmF2eS8yMCByb3VuZGVkLWZ1bGwgbWItNFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW5hdnkgdGV4dC14cyBmb250LW1lZGl1bSBmb250LWhlYWRpbmcgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgSG93IEl0IFdvcmtzXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCBtYi0zXCI+XG4gICAgICAgICAgICAgIFlvdXIgU2hpcG1lbnQncyBKb3VybmV5XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTaGlwbWVudEpvdXJuZXkgaXNJblZpZXc9e3RydWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogNy4gQ0xJRU5UIFNUT1JJRVMgLyBURVNUSU1PTklBTFMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBhZGRpbmcgYmctY3JlYW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMyBweS0xLjUgYmctb3JhbmdlLTUwIGJvcmRlciBib3JkZXItb3JhbmdlLzIwIHJvdW5kZWQtZnVsbCBtYi00XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIHRleHQteHMgZm9udC1tZWRpdW0gZm9udC1oZWFkaW5nIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgIENsaWVudCBTdG9yaWVzXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbFwiPlxuICAgICAgICAgICAgICBUcnVzdGVkIGJ5IEluZGlhJ3MgQmVzdCBCcmFuZHNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFRlc3RpbW9uaWFsc1NsaWRlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDguIFJFQURZIFRPIFNISVAgU01BUlRFUj8gKENUQSBCQU5ORVIpICovfVxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwicHktMjAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMUEzQThGIDAlLCMwRjI1NjYgNDglLCMxQTNBOEYgMTAwJSknXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LVswLjA4XSBiZy1bbGluZWFyLWdyYWRpZW50KHRvX3JpZ2h0LCNmZmZfMXB4LHRyYW5zcGFyZW50XzFweCksbGluZWFyLWdyYWRpZW50KHRvX2JvdHRvbSwjZmZmXzFweCx0cmFuc3BhcmVudF8xcHgpXSBiZy1bc2l6ZTozOHB4XzM4cHhdXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0xMCBoLXB4IHctNzIgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS1vcmFuZ2UgdG8tdHJhbnNwYXJlbnQgYW5pbWF0ZS1zaGltbWVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXJpZ2h0LTI4IC1ib3R0b20tMjggdy03MiBoLTcyIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b20gcmVsYXRpdmUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LXdoaXRlIG1iLTRcIj5cbiAgICAgICAgICAgIFJlYWR5IHRvIFNoaXAgU21hcnRlcj9cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNzAgZm9udC1ib2R5IHRleHQtYmFzZSBtZDp0ZXh0LWxnIG1heC13LXhsIG14LWF1dG8gbWItOCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgIEpvaW4gaHVuZHJlZHMgb2YgYnVzaW5lc3NlcyB0aGF0IHRydXN0IFZFWEFSTyBmb3IgZmFzdCwgcmVsaWFibGUsIGFuZCBzZWFtbGVzcyBjb3VyaWVyXG4gICAgICAgICAgICBkZWxpdmVyeSBhY3Jvc3MgSW5kaWEuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtOCBweS0zLjUgZ3JhZGllbnQtb3JhbmdlIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgcm91bmRlZC1idG4gc2hhZG93LW9yYW5nZSBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHZXQgU3RhcnRlZCBUb2RheSA8QXJyb3dSaWdodCBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL3RyYWNrXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTggcHktMy41IGJvcmRlci0yIGJvcmRlci13aGl0ZS8zMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHJvdW5kZWQtYnRuIGhvdmVyOmJvcmRlci13aGl0ZSBob3ZlcjpiZy13aGl0ZS8xMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TmF2aWdhdGlvbiBzaXplPXsxNH0gY2xhc3NOYW1lPVwiLXJvdGF0ZS00NVwiIC8+IFRyYWNrIGEgUGFja2FnZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDkuIEZBU1QgSEVMUCBTVFJJUCAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTEyIGJnLXdoaXRlIGJvcmRlci10IGJvcmRlci1zb2Z0LWJvcmRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNlwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTFcIj5cbiAgICAgICAgICAgICAgICBRdWVzdGlvbnM/IFdlJ3JlIGhlcmUuXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICBSZWFjaCBvdXQgYW55dGltZSDigJQgb3VyIHRlYW0gcmVzcG9uZHMgd2l0aGluIDIgaG91cnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtbmF2eSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyBob3ZlcjpnYXAtMyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlYWNoIFVzIDxBcnJvd1JpZ2h0IHNpemU9ezEzfSAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ==