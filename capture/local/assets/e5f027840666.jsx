import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Footer.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { ChevronRight, MapPin, Mail, Phone } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { footerQuickLinks, footerServicesLinks, footerLegalLinks, siteConfig } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/Footer.jsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
// Custom social SVG icons matching live site
function InstagramIcon({ size = 15 }) {
	return /* @__PURE__ */ _jsxDEV("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ _jsxDEV("rect", {
				x: "2",
				y: "2",
				width: "20",
				height: "20",
				rx: "5",
				ry: "5"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("line", {
				x1: "17.5",
				y1: "6.5",
				x2: "17.51",
				y2: "6.5"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
_c = InstagramIcon;
function WhatsAppIcon({ size = 15 }) {
	return /* @__PURE__ */ _jsxDEV("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ _jsxDEV("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
_c2 = WhatsAppIcon;
function FacebookIcon({ size = 15 }) {
	return /* @__PURE__ */ _jsxDEV("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ _jsxDEV("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 33,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 5
	}, this);
}
_c3 = FacebookIcon;
export default function Footer() {
	const socialLinks = [
		{
			icon: /* @__PURE__ */ _jsxDEV(InstagramIcon, { size: 15 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 13
			}, this),
			href: siteConfig.socials.instagram,
			label: "Instagram"
		},
		{
			icon: /* @__PURE__ */ _jsxDEV(WhatsAppIcon, { size: 15 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 13
			}, this),
			href: siteConfig.socials.whatsapp,
			label: "WhatsApp"
		},
		{
			icon: /* @__PURE__ */ _jsxDEV(FacebookIcon, { size: 15 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 13
			}, this),
			href: siteConfig.socials.facebook,
			label: "Facebook"
		},
		{
			icon: /* @__PURE__ */ _jsxDEV(Mail, { size: 14 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 13
			}, this),
			href: siteConfig.socials.email,
			label: "Email"
		}
	];
	return /* @__PURE__ */ _jsxDEV("footer", {
		className: "bg-charcoal text-white",
		style: { marginTop: "auto" },
		children: [
			/* @__PURE__ */ _jsxDEV("div", { className: "w-full h-[3px] gradient-duo" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "w-full bg-charcoal",
				style: { height: "36px" }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "container-custom pb-14",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
					children: [
						/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-5",
								children: /* @__PURE__ */ _jsxDEV("img", {
									src: "/new-logo.png",
									alt: "VEXARO",
									className: "h-12 w-auto object-contain",
									style: { maxWidth: "200px" }
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex gap-3 mb-4",
								children: socialLinks.map((item, index) => /* @__PURE__ */ _jsxDEV("a", {
									href: item.href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": item.label,
									className: "w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/45 hover:text-orange hover:border-orange transition-all duration-200",
									children: item.icon
								}, index, false, {
									fileName: _jsxFileName,
									lineNumber: 82,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-white/50 text-sm font-body leading-relaxed mb-2",
								children: [
									/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 95,
										columnNumber: 15
									}, this),
									"CIN: U53200MP2026PTC084168",
									/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 97,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 98,
										columnNumber: 15
									}, this),
									"Registration Number: 084168",
									/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 100,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 71,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
							className: "font-semibold font-heading text-[11px] uppercase tracking-[0.15em] text-orange mb-6 pl-4",
							children: "Quick Links"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("ul", {
							className: "space-y-3",
							children: footerQuickLinks.map((item) => /* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV(Link, {
								to: item.path,
								className: "text-white/50 hover:text-orange text-sm font-body transition-colors duration-200 relative pl-4 group flex items-center",
								children: [/* @__PURE__ */ _jsxDEV(ChevronRight, {
									size: 9,
									className: "absolute left-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 21
								}, this), item.label]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 19
							}, this) }, item.path, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
							className: "font-semibold font-heading text-[11px] uppercase tracking-[0.15em] text-orange mb-6 pl-4",
							children: "Services"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("ul", {
							className: "space-y-3",
							children: [footerServicesLinks.map(([name, path]) => /* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV(Link, {
								to: path,
								className: "text-white/50 hover:text-orange text-sm font-body transition-colors duration-200 relative pl-4 group flex items-center",
								children: [/* @__PURE__ */ _jsxDEV(ChevronRight, {
									size: 9,
									className: "absolute left-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 21
								}, this), name]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 19
							}, this) }, name, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 17
							}, this)), /* @__PURE__ */ _jsxDEV("li", {
								className: "h-3",
								"aria-hidden": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
							className: "font-semibold font-heading text-[11px] uppercase tracking-[0.15em] text-orange mb-6 pl-4",
							children: "Contact Us"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 153,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("ul", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ _jsxDEV("li", {
									className: "flex gap-3 text-sm font-body text-white/50",
									children: [/* @__PURE__ */ _jsxDEV(MapPin, {
										className: "text-orange mt-0.5 flex-shrink-0",
										size: 13
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 158,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "leading-relaxed",
										children: [
											/* @__PURE__ */ _jsxDEV("span", {
												className: "whitespace-nowrap",
												children: "Flat 1113, 1st Floor, Chikitsak Nagar,"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 160,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 161,
												columnNumber: 19
											}, this),
											"Vijay Nagar, Indore, MP — 452010"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-2 text-sm font-body text-white/50",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ _jsxDEV("a", {
											href: "mailto:info@vexarocouriersolutions.com",
											className: "flex items-center gap-2 hover:text-orange transition-colors",
											children: [
												/* @__PURE__ */ _jsxDEV(Mail, {
													className: "text-orange flex-shrink-0",
													size: 12
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 172,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", { children: "Email:" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 173,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													className: "text-white/70",
													children: "info@vexarocouriersolutions.com"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 174,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 168,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("a", {
											href: "mailto:vexarocouriersolution@gmail.com",
											className: "flex items-center gap-2 hover:text-orange transition-colors",
											children: [
												/* @__PURE__ */ _jsxDEV("div", { className: "w-3 flex-shrink-0" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 180,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													className: "invisible select-none",
													children: "Email:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 181,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ _jsxDEV("span", {
													className: "text-white/70",
													children: "vexarocouriersolution@gmail.com"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 182,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 176,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 167,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("a", {
										href: "tel:+919183888181",
										className: "flex items-center gap-2 hover:text-orange transition-colors",
										children: [
											/* @__PURE__ */ _jsxDEV(Phone, {
												className: "text-orange flex-shrink-0",
												size: 12
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 189,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: "Phone:" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 190,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ _jsxDEV("span", {
												className: "text-white/70",
												children: "+91 - 9183888181"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 191,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 185,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 17
								}, this) }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 165,
									columnNumber: 15
								}, this),
								footerLegalLinks.map(([title, path]) => /* @__PURE__ */ _jsxDEV("li", { children: /* @__PURE__ */ _jsxDEV(Link, {
									to: path,
									className: "flex items-start relative pl-4 gap-3 text-sm font-body text-white/50 hover:text-orange transition-colors",
									children: [/* @__PURE__ */ _jsxDEV(ChevronRight, {
										className: "absolute left-0 text-orange mt-1",
										size: 9
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 201,
										columnNumber: 21
									}, this), title]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 197,
									columnNumber: 19
								}, this) }, title, false, {
									fileName: _jsxFileName,
									lineNumber: 196,
									columnNumber: 17
								}, this))
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 156,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "border-t border-white/10",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3",
					children: [/* @__PURE__ */ _jsxDEV("p", {
						className: "text-white/75 text-xs font-body",
						children: "© 2026 VEXARO Courier Solution Private Limited. All Rights Reserved."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 214,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "text-white/90 text-xs font-body",
						children: [
							"Powered by",
							" ",
							/* @__PURE__ */ _jsxDEV("a", {
								href: "https://www.codentrixx.in/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "hover:text-white transition-colors duration-300 underline",
								children: "Codentrixx Innovation Solutions Pvt. Ltd."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 219,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 217,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 213,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 212,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 63,
		columnNumber: 5
	}, this);
}
_c4 = Footer;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "InstagramIcon");
$RefreshReg$(_c2, "WhatsAppIcon");
$RefreshReg$(_c3, "FacebookIcon");
$RefreshReg$(_c4, "Footer");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Footer.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/Footer.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/Footer.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/Footer.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsWUFBWTtBQUNyQixTQUFTLGNBQWMsUUFBUSxNQUFNLGFBQWE7QUFDbEQsU0FDRSxrQkFDQSxxQkFDQSxrQkFDQSxrQkFDSzs7OztBQUdQLFNBQVMsY0FBYyxFQUFFLE9BQU8sTUFBTTtDQUNwQyxPQUNFLHdCQUFDLE9BQUQ7RUFBSyxPQUFPO0VBQU0sUUFBUTtFQUFNLFNBQVE7RUFBWSxNQUFLO0VBQU8sUUFBTztFQUFlLGFBQVk7RUFBSSxlQUFjO0VBQVEsZ0JBQWU7WUFBM0k7R0FDRSx3QkFBQyxRQUFEO0lBQU0sR0FBRTtJQUFJLEdBQUU7SUFBSSxPQUFNO0lBQUssUUFBTztJQUFLLElBQUc7SUFBSSxJQUFHO0dBQVU7Ozs7O0dBQzdELHdCQUFDLFFBQUQsRUFBTSxHQUFFLGtEQUF3RDs7Ozs7R0FDaEUsd0JBQUMsUUFBRDtJQUFNLElBQUc7SUFBTyxJQUFHO0lBQU0sSUFBRztJQUFRLElBQUc7R0FBWTs7Ozs7RUFDaEQ7Ozs7OztBQUVUOztBQUVBLFNBQVMsYUFBYSxFQUFFLE9BQU8sTUFBTTtDQUNuQyxPQUNFLHdCQUFDLE9BQUQ7RUFBSyxPQUFPO0VBQU0sUUFBUTtFQUFNLFNBQVE7RUFBWSxNQUFLO0VBQU8sUUFBTztFQUFlLGFBQVk7RUFBSSxlQUFjO0VBQVEsZ0JBQWU7WUFDekksd0JBQUMsUUFBRCxFQUFNLEdBQUUsMkxBQWlNOzs7OztDQUN0TTs7Ozs7QUFFVDs7QUFFQSxTQUFTLGFBQWEsRUFBRSxPQUFPLE1BQU07Q0FDbkMsT0FDRSx3QkFBQyxPQUFEO0VBQUssT0FBTztFQUFNLFFBQVE7RUFBTSxTQUFRO0VBQVksTUFBSztFQUFPLFFBQU87RUFBZSxhQUFZO0VBQUksZUFBYztFQUFRLGdCQUFlO1lBQ3pJLHdCQUFDLFFBQUQsRUFBTSxHQUFFLG9FQUEwRTs7Ozs7Q0FDL0U7Ozs7O0FBRVQ7O0FBRUEsZUFBZSxTQUFTLFNBQVM7Q0FDL0IsTUFBTSxjQUFjO0VBQ2xCO0dBQ0UsTUFBTSx3QkFBQyxlQUFELEVBQWUsTUFBTSxHQUFLOzs7OztHQUNoQyxNQUFNLFdBQVcsUUFBUTtHQUN6QixPQUFPO0VBQ1Q7RUFDQTtHQUNFLE1BQU0sd0JBQUMsY0FBRCxFQUFjLE1BQU0sR0FBSzs7Ozs7R0FDL0IsTUFBTSxXQUFXLFFBQVE7R0FDekIsT0FBTztFQUNUO0VBQ0E7R0FDRSxNQUFNLHdCQUFDLGNBQUQsRUFBYyxNQUFNLEdBQUs7Ozs7O0dBQy9CLE1BQU0sV0FBVyxRQUFRO0dBQ3pCLE9BQU87RUFDVDtFQUNBO0dBQ0UsTUFBTSx3QkFBQyxNQUFELEVBQU0sTUFBTSxHQUFLOzs7OztHQUN2QixNQUFNLFdBQVcsUUFBUTtHQUN6QixPQUFPO0VBQ1Q7Q0FDRjtDQUVBLE9BQ0Usd0JBQUMsVUFBRDtFQUFRLFdBQVU7RUFBeUIsT0FBTyxFQUFFLFdBQVcsT0FBTztZQUF0RTtHQUVFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLDhCQUErQjs7Ozs7R0FDOUMsd0JBQUMsT0FBRDtJQUFLLFdBQVU7SUFBcUIsT0FBTyxFQUFFLFFBQVEsT0FBTztHQUFJOzs7OztHQUVoRSx3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUNiLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWY7TUFFRSx3QkFBQyxPQUFEO09BQ0Usd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQ2Isd0JBQUMsT0FBRDtTQUNFLEtBQUk7U0FDSixLQUFJO1NBQ0osV0FBVTtTQUNWLE9BQU8sRUFBRSxVQUFVLFFBQVE7UUFDNUI7Ozs7O09BQ0U7Ozs7O09BQ0wsd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQ1osWUFBWSxLQUFLLE1BQU0sVUFDdEIsd0JBQUMsS0FBRDtTQUVFLE1BQU0sS0FBSztTQUNYLFFBQU87U0FDUCxLQUFJO1NBQ0osY0FBWSxLQUFLO1NBQ2pCLFdBQVU7bUJBRVQsS0FBSztRQUNMLEdBUkk7Ozs7ZUFRSixDQUNKO09BQ0U7Ozs7O09BQ0wsd0JBQUMsS0FBRDtRQUFHLFdBQVU7a0JBQWI7U0FDRSx3QkFBQyxNQUFELENBQUs7Ozs7O1NBQUM7U0FFTix3QkFBQyxNQUFELENBQUs7Ozs7O1NBQ0wsd0JBQUMsTUFBRCxDQUFLOzs7OztTQUFDO1NBRU4sd0JBQUMsTUFBRCxDQUFLOzs7OztRQUNKOzs7Ozs7TUFDQTs7Ozs7TUFHTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsTUFBRDtPQUFJLFdBQVU7aUJBQTJGO01BRXJHOzs7O2dCQUNKLHdCQUFDLE1BQUQ7T0FBSSxXQUFVO2lCQUNYLGlCQUFpQixLQUFLLFNBQ3JCLHdCQUFDLE1BQUQsWUFDRSx3QkFBQyxNQUFEO1FBQ0UsSUFBSSxLQUFLO1FBQ1QsV0FBVTtrQkFGWixDQUlFLHdCQUFDLGNBQUQ7U0FDRSxNQUFNO1NBQ04sV0FBVTtRQUNYOzs7O2tCQUNBLEtBQUssS0FDRjs7Ozs7Z0JBQ0osR0FYSyxLQUFLOzs7O2NBV1YsQ0FDTDtNQUNDOzs7O2NBQ0Q7Ozs7O01BR0wsd0JBQUMsT0FBRCxhQUNFLHdCQUFDLE1BQUQ7T0FBSSxXQUFVO2lCQUEyRjtNQUVyRzs7OztnQkFDSix3QkFBQyxNQUFEO09BQUksV0FBVTtpQkFBZCxDQUNHLG9CQUFvQixLQUFLLENBQUMsTUFBTSxVQUMvQix3QkFBQyxNQUFELFlBQ0Usd0JBQUMsTUFBRDtRQUNFLElBQUk7UUFDSixXQUFVO2tCQUZaLENBSUUsd0JBQUMsY0FBRDtTQUNFLE1BQU07U0FDTixXQUFVO1FBQ1g7Ozs7a0JBQ0EsSUFDRzs7Ozs7Z0JBQ0osR0FYSzs7OztjQVdMLENBQ0wsR0FDRCx3QkFBQyxNQUFEO1FBQUksV0FBVTtRQUFNLGVBQVk7T0FBUTs7OztlQUN0Qzs7Ozs7Y0FDRDs7Ozs7TUFHTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsTUFBRDtPQUFJLFdBQVU7aUJBQTJGO01BRXJHOzs7O2dCQUNKLHdCQUFDLE1BQUQ7T0FBSSxXQUFVO2lCQUFkO1FBQ0Usd0JBQUMsTUFBRDtTQUFJLFdBQVU7bUJBQWQsQ0FDRSx3QkFBQyxRQUFEO1VBQVEsV0FBVTtVQUFtQyxNQUFNO1NBQUs7Ozs7bUJBQ2hFLHdCQUFDLFFBQUQ7VUFBTSxXQUFVO29CQUFoQjtXQUNFLHdCQUFDLFFBQUQ7WUFBTSxXQUFVO3NCQUFvQjtXQUE0Qzs7Ozs7V0FDaEYsd0JBQUMsTUFBRCxDQUFLOzs7OztXQUFDO1VBRUY7Ozs7O2lCQUNKOzs7Ozs7UUFDSix3QkFBQyxNQUFELFlBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQWYsQ0FDRSx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFBZixDQUNFLHdCQUFDLEtBQUQ7V0FDRSxNQUFLO1dBQ0wsV0FBVTtxQkFGWjtZQUlFLHdCQUFDLE1BQUQ7YUFBTSxXQUFVO2FBQTRCLE1BQU07WUFBSzs7Ozs7WUFDdkQsd0JBQUMsUUFBRCxZQUFNLFNBQVk7Ozs7O1lBQ2xCLHdCQUFDLFFBQUQ7YUFBTSxXQUFVO3VCQUFnQjtZQUFxQzs7Ozs7V0FDcEU7Ozs7O29CQUNILHdCQUFDLEtBQUQ7V0FDRSxNQUFLO1dBQ0wsV0FBVTtxQkFGWjtZQUlFLHdCQUFDLE9BQUQsRUFBSyxXQUFVLG9CQUFxQjs7Ozs7WUFDcEMsd0JBQUMsUUFBRDthQUFNLFdBQVU7dUJBQXdCO1lBQVk7Ozs7O1lBQ3BELHdCQUFDLFFBQUQ7YUFBTSxXQUFVO3VCQUFnQjtZQUFxQzs7Ozs7V0FDcEU7Ozs7O2tCQUNBOzs7OzttQkFDTCx3QkFBQyxLQUFEO1VBQ0UsTUFBSztVQUNMLFdBQVU7b0JBRlo7V0FJRSx3QkFBQyxPQUFEO1lBQU8sV0FBVTtZQUE0QixNQUFNO1dBQUs7Ozs7O1dBQ3hELHdCQUFDLFFBQUQsWUFBTSxTQUFZOzs7OztXQUNsQix3QkFBQyxRQUFEO1lBQU0sV0FBVTtzQkFBZ0I7V0FBc0I7Ozs7O1VBQ3JEOzs7OztpQkFDQTs7Ozs7aUJBQ0g7Ozs7O1FBQ0gsaUJBQWlCLEtBQUssQ0FBQyxPQUFPLFVBQzdCLHdCQUFDLE1BQUQsWUFDRSx3QkFBQyxNQUFEO1NBQ0UsSUFBSTtTQUNKLFdBQVU7bUJBRlosQ0FJRSx3QkFBQyxjQUFEO1VBQWMsV0FBVTtVQUFtQyxNQUFNO1NBQUk7Ozs7bUJBQ3BFLEtBQ0c7Ozs7O2lCQUNKLEdBUks7Ozs7ZUFRTCxDQUNMO09BQ0M7Ozs7O2NBQ0Q7Ozs7O0tBQ0Y7Ozs7OztHQUNGOzs7OztHQUdMLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO2NBQ2Isd0JBQUMsT0FBRDtLQUFLLFdBQVU7ZUFBZixDQUNFLHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUFrQztLQUU1Qzs7OztlQUNILHdCQUFDLEtBQUQ7TUFBRyxXQUFVO2dCQUFiO09BQStDO09BQ2xDO09BQ1gsd0JBQUMsS0FBRDtRQUNFLE1BQUs7UUFDTCxRQUFPO1FBQ1AsS0FBSTtRQUNKLFdBQVU7a0JBQ1g7T0FFRTs7Ozs7TUFDRjs7Ozs7YUFDQTs7Ozs7O0dBQ0Y7Ozs7O0VBQ0M7Ozs7OztBQUVaIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkZvb3Rlci5qc3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IENoZXZyb25SaWdodCwgTWFwUGluLCBNYWlsLCBQaG9uZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQge1xuICBmb290ZXJRdWlja0xpbmtzLFxuICBmb290ZXJTZXJ2aWNlc0xpbmtzLFxuICBmb290ZXJMZWdhbExpbmtzLFxuICBzaXRlQ29uZmlnXG59IGZyb20gJy4uL2RhdGEvc2l0ZURhdGEnO1xuXG4vLyBDdXN0b20gc29jaWFsIFNWRyBpY29ucyBtYXRjaGluZyBsaXZlIHNpdGVcbmZ1bmN0aW9uIEluc3RhZ3JhbUljb24oeyBzaXplID0gMTUgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgPHJlY3QgeD1cIjJcIiB5PVwiMlwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHJ4PVwiNVwiIHJ5PVwiNVwiPjwvcmVjdD5cbiAgICAgIDxwYXRoIGQ9XCJNMTYgMTEuMzdBNCA0IDAgMSAxIDEyLjYzIDggNCA0IDAgMCAxIDE2IDExLjM3elwiPjwvcGF0aD5cbiAgICAgIDxsaW5lIHgxPVwiMTcuNVwiIHkxPVwiNi41XCIgeDI9XCIxNy41MVwiIHkyPVwiNi41XCI+PC9saW5lPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5mdW5jdGlvbiBXaGF0c0FwcEljb24oeyBzaXplID0gMTUgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgPHBhdGggZD1cIk0yMSAxMS41YTguMzggOC4zOCAwIDAgMS0uOSAzLjggOC41IDguNSAwIDAgMS03LjYgNC43IDguMzggOC4zOCAwIDAgMS0zLjgtLjlMMyAyMWwxLjktNS43YTguMzggOC4zOCAwIDAgMS0uOS0zLjggOC41IDguNSAwIDAgMSA0LjctNy42IDguMzggOC4zOCAwIDAgMSAzLjgtLjloLjVhOC40OCA4LjQ4IDAgMCAxIDggOHYuNXpcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZhY2Vib29rSWNvbih7IHNpemUgPSAxNSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XG4gICAgICA8cGF0aCBkPVwiTTE4IDJoLTNhNSA1IDAgMCAwLTUgNXYzSDd2NGgzdjhoNHYtOGgzbDEtNGgtNFY3YTEgMSAwIDAgMSAxLTFoM3pcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3Qgc29jaWFsTGlua3MgPSBbXG4gICAge1xuICAgICAgaWNvbjogPEluc3RhZ3JhbUljb24gc2l6ZT17MTV9IC8+LFxuICAgICAgaHJlZjogc2l0ZUNvbmZpZy5zb2NpYWxzLmluc3RhZ3JhbSxcbiAgICAgIGxhYmVsOiAnSW5zdGFncmFtJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPFdoYXRzQXBwSWNvbiBzaXplPXsxNX0gLz4sXG4gICAgICBocmVmOiBzaXRlQ29uZmlnLnNvY2lhbHMud2hhdHNhcHAsXG4gICAgICBsYWJlbDogJ1doYXRzQXBwJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPEZhY2Vib29rSWNvbiBzaXplPXsxNX0gLz4sXG4gICAgICBocmVmOiBzaXRlQ29uZmlnLnNvY2lhbHMuZmFjZWJvb2ssXG4gICAgICBsYWJlbDogJ0ZhY2Vib29rJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogPE1haWwgc2l6ZT17MTR9IC8+LFxuICAgICAgaHJlZjogc2l0ZUNvbmZpZy5zb2NpYWxzLmVtYWlsLFxuICAgICAgbGFiZWw6ICdFbWFpbCdcbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWNoYXJjb2FsIHRleHQtd2hpdGVcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICdhdXRvJyB9fT5cbiAgICAgIHsvKiBUb3AgM3B4IGdyYWRpZW50IGxpbmUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVszcHhdIGdyYWRpZW50LWR1b1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1jaGFyY29hbFwiIHN0eWxlPXt7IGhlaWdodDogJzM2cHgnIH19IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbSBwYi0xNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTEyXCI+XG4gICAgICAgICAgey8qIENvbHVtbiAxOiBCcmFuZCAmIFNvY2lhbHMgJiBMZWdhbCBDSU4gKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL25ldy1sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiVkVYQVJPXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctYXV0byBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMDBweCcgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIG1iLTRcIj5cbiAgICAgICAgICAgICAge3NvY2lhbExpbmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTkgaC05IHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUvNDUgaG92ZXI6dGV4dC1vcmFuZ2UgaG92ZXI6Ym9yZGVyLW9yYW5nZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmljb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS81MCB0ZXh0LXNtIGZvbnQtYm9keSBsZWFkaW5nLXJlbGF4ZWQgbWItMlwiPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgQ0lOOiBVNTMyMDBNUDIwMjZQVEMwODQxNjhcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBSZWdpc3RyYXRpb24gTnVtYmVyOiAwODQxNjhcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29sdW1uIDI6IFF1aWNrIExpbmtzICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgdGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE1ZW1dIHRleHQtb3JhbmdlIG1iLTYgcGwtNFwiPlxuICAgICAgICAgICAgICBRdWljayBMaW5rc1xuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAge2Zvb3RlclF1aWNrTGlua3MubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5wYXRofT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRvPXtpdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNTAgaG92ZXI6dGV4dC1vcmFuZ2UgdGV4dC1zbSBmb250LWJvZHkgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHJlbGF0aXZlIHBsLTQgZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT17OX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgb3BhY2l0eS0wIC10cmFuc2xhdGUteC0xIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTAgdHJhbnNpdGlvbi1hbGwgdGV4dC1vcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29sdW1uIDM6IFNlcnZpY2VzICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgdGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE1ZW1dIHRleHQtb3JhbmdlIG1iLTYgcGwtNFwiPlxuICAgICAgICAgICAgICBTZXJ2aWNlc1xuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAge2Zvb3RlclNlcnZpY2VzTGlua3MubWFwKChbbmFtZSwgcGF0aF0pID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRvPXtwYXRofVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzUwIGhvdmVyOnRleHQtb3JhbmdlIHRleHQtc20gZm9udC1ib2R5IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCByZWxhdGl2ZSBwbC00IGdyb3VwIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezl9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIG9wYWNpdHktMCAtdHJhbnNsYXRlLXgtMSBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0wIHRyYW5zaXRpb24tYWxsIHRleHQtb3JhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoLTNcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDb2x1bW4gNDogQ29udGFjdCBVcyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNWVtXSB0ZXh0LW9yYW5nZSBtYi02IHBsLTRcIj5cbiAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgdGV4dC1zbSBmb250LWJvZHkgdGV4dC13aGl0ZS81MFwiPlxuICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UgbXQtMC41IGZsZXgtc2hyaW5rLTBcIiBzaXplPXsxM30gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwXCI+RmxhdCAxMTEzLCAxc3QgRmxvb3IsIENoaWtpdHNhayBOYWdhciw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIFZpamF5IE5hZ2FyLCBJbmRvcmUsIE1QIOKAlCA0NTIwMTBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXNtIGZvbnQtYm9keSB0ZXh0LXdoaXRlLzUwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86aW5mb0B2ZXhhcm9jb3VyaWVyc29sdXRpb25zLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6dGV4dC1vcmFuZ2UgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE1haWwgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UgZmxleC1zaHJpbmstMFwiIHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzcwXCI+aW5mb0B2ZXhhcm9jb3VyaWVyc29sdXRpb25zLmNvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86dmV4YXJvY291cmllcnNvbHV0aW9uQGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgaG92ZXI6dGV4dC1vcmFuZ2UgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW52aXNpYmxlIHNlbGVjdC1ub25lXCI+RW1haWw6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNzBcIj52ZXhhcm9jb3VyaWVyc29sdXRpb25AZ21haWwuY29tPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ0ZWw6KzkxOTE4Mzg4ODE4MVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGhvdmVyOnRleHQtb3JhbmdlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIGZsZXgtc2hyaW5rLTBcIiBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGhvbmU6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlLzcwXCI+KzkxIC0gOTE4Mzg4ODE4MTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAge2Zvb3RlckxlZ2FsTGlua3MubWFwKChbdGl0bGUsIHBhdGhdKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17dGl0bGV9PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdG89e3BhdGh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgcmVsYXRpdmUgcGwtNCBnYXAtMyB0ZXh0LXNtIGZvbnQtYm9keSB0ZXh0LXdoaXRlLzUwIGhvdmVyOnRleHQtb3JhbmdlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdGV4dC1vcmFuZ2UgbXQtMVwiIHNpemU9ezl9IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDb3B5cmlnaHQgQmFyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItd2hpdGUvMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItY3VzdG9tIHB5LTUgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS83NSB0ZXh0LXhzIGZvbnQtYm9keVwiPlxuICAgICAgICAgICAgwqkgMjAyNiBWRVhBUk8gQ291cmllciBTb2x1dGlvbiBQcml2YXRlIExpbWl0ZWQuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvOTAgdGV4dC14cyBmb250LWJvZHlcIj5cbiAgICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNvZGVudHJpeHguaW4vXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIHVuZGVybGluZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvZGVudHJpeHggSW5ub3ZhdGlvbiBTb2x1dGlvbnMgUHZ0LiBMdGQuXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuIl19