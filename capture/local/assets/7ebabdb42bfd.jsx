import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");const React = __vite__cjsImport0_react; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport12_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { BrowserRouter, Routes, Route, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer.jsx";
import Home from "/src/pages/Home.jsx";
import About from "/src/pages/About.jsx";
import Services from "/src/pages/Services.jsx";
import Pricing from "/src/pages/Pricing.jsx";
import Partners from "/src/pages/Partners.jsx";
import Track from "/src/pages/Track.jsx";
import Contact from "/src/pages/Contact.jsx";
import Legal from "/src/pages/Legal.jsx";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/App.jsx";
import __vite__cjsImport12_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
// Automatically scrolls window to top on every route change
function ScrollToTop() {
	_s();
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
_s(ScrollToTop, "glIs83H2MXbU6fcNhYK7n0QqbD4=", false, function() {
	return [useLocation];
});
_c = ScrollToTop;
export default function App() {
	return /* @__PURE__ */ _jsxDEV(BrowserRouter, { children: [/* @__PURE__ */ _jsxDEV(ScrollToTop, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("div", {
		className: "flex flex-col min-h-screen bg-cream font-body text-charcoal",
		children: [
			/* @__PURE__ */ _jsxDEV(Navbar, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1 flex flex-col",
				style: { minHeight: "calc(100vh - 72px)" },
				children: /* @__PURE__ */ _jsxDEV(Routes, { children: [
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/",
						element: /* @__PURE__ */ _jsxDEV(Home, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 38
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/about",
						element: /* @__PURE__ */ _jsxDEV(About, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 43
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/services",
						element: /* @__PURE__ */ _jsxDEV(Services, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 46
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/pricing",
						element: /* @__PURE__ */ _jsxDEV(Pricing, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 45
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/partners",
						element: /* @__PURE__ */ _jsxDEV(Partners, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 46
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/track",
						element: /* @__PURE__ */ _jsxDEV(Track, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 43
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/contact",
						element: /* @__PURE__ */ _jsxDEV(Contact, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 45
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/terms",
						element: /* @__PURE__ */ _jsxDEV(Legal, { type: "terms" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 43
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/privacy",
						element: /* @__PURE__ */ _jsxDEV(Legal, { type: "privacy" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 45
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "/resources",
						element: /* @__PURE__ */ _jsxDEV(Legal, { type: "resources" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 47
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Route, {
						path: "*",
						element: /* @__PURE__ */ _jsxDEV(Home, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 38
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
_c2 = App;
var _c, _c2;
$RefreshReg$(_c, "ScrollToTop");
$RefreshReg$(_c2, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/App.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLGlCQUFpQjtBQUNqQyxTQUFTLGVBQWUsUUFBUSxPQUFPLG1CQUFtQjtBQUMxRCxPQUFPLFlBQVk7QUFDbkIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sVUFBVTtBQUNqQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGNBQWM7QUFDckIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFdBQVc7Ozs7O0FBR2xCLFNBQVMsY0FBYzs7Q0FDckIsTUFBTSxFQUFFLGFBQWEsWUFBWTtDQUVqQyxnQkFBZ0I7RUFDZCxPQUFPLFNBQVMsR0FBRyxDQUFDO0NBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUM7Q0FFYixPQUFPO0FBQ1Q7Ozs7O0FBRUEsZUFBZSxTQUFTLE1BQU07Q0FDNUIsT0FDRSx3QkFBQyxlQUFELGFBQ0Usd0JBQUMsYUFBRCxDQUFjOzs7O1dBQ2Qsd0JBQUMsT0FBRDtFQUFLLFdBQVU7WUFBZjtHQUNFLHdCQUFDLFFBQUQsQ0FBUzs7Ozs7R0FDVCx3QkFBQyxRQUFEO0lBQU0sV0FBVTtJQUF1QixPQUFPLEVBQUUsV0FBVyxxQkFBcUI7Y0FDOUUsd0JBQUMsUUFBRDtLQUNFLHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQUksU0FBUyx3QkFBQyxNQUFELENBQU87Ozs7O0tBQUk7Ozs7O0tBQ3BDLHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQVMsU0FBUyx3QkFBQyxPQUFELENBQVE7Ozs7O0tBQUk7Ozs7O0tBQzFDLHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQVksU0FBUyx3QkFBQyxVQUFELENBQVc7Ozs7O0tBQUk7Ozs7O0tBQ2hELHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQVcsU0FBUyx3QkFBQyxTQUFELENBQVU7Ozs7O0tBQUk7Ozs7O0tBQzlDLHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQVksU0FBUyx3QkFBQyxVQUFELENBQVc7Ozs7O0tBQUk7Ozs7O0tBQ2hELHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQVMsU0FBUyx3QkFBQyxPQUFELENBQVE7Ozs7O0tBQUk7Ozs7O0tBQzFDLHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQVcsU0FBUyx3QkFBQyxTQUFELENBQVU7Ozs7O0tBQUk7Ozs7O0tBQzlDLHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQVMsU0FBUyx3QkFBQyxPQUFELEVBQU8sTUFBSyxRQUFTOzs7OztLQUFJOzs7OztLQUN2RCx3QkFBQyxPQUFEO01BQU8sTUFBSztNQUFXLFNBQVMsd0JBQUMsT0FBRCxFQUFPLE1BQUssVUFBVzs7Ozs7S0FBSTs7Ozs7S0FDM0Qsd0JBQUMsT0FBRDtNQUFPLE1BQUs7TUFBYSxTQUFTLHdCQUFDLE9BQUQsRUFBTyxNQUFLLFlBQWE7Ozs7O0tBQUk7Ozs7O0tBQy9ELHdCQUFDLE9BQUQ7TUFBTyxNQUFLO01BQUksU0FBUyx3QkFBQyxNQUFELENBQU87Ozs7O0tBQUk7Ozs7O0lBQzlCOzs7OztHQUNKOzs7OztHQUNOLHdCQUFDLFFBQUQsQ0FBUzs7Ozs7RUFDTjs7Ozs7U0FDUTs7Ozs7QUFFbkIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9wYWdlcy9Ib21lJztcbmltcG9ydCBBYm91dCBmcm9tICcuL3BhZ2VzL0Fib3V0JztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuL3BhZ2VzL1NlcnZpY2VzJztcbmltcG9ydCBQcmljaW5nIGZyb20gJy4vcGFnZXMvUHJpY2luZyc7XG5pbXBvcnQgUGFydG5lcnMgZnJvbSAnLi9wYWdlcy9QYXJ0bmVycyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9wYWdlcy9UcmFjayc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL3BhZ2VzL0NvbnRhY3QnO1xuaW1wb3J0IExlZ2FsIGZyb20gJy4vcGFnZXMvTGVnYWwnO1xuXG4vLyBBdXRvbWF0aWNhbGx5IHNjcm9sbHMgd2luZG93IHRvIHRvcCBvbiBldmVyeSByb3V0ZSBjaGFuZ2VcbmZ1bmN0aW9uIFNjcm9sbFRvVG9wKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9LCBbcGF0aG5hbWVdKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFNjcm9sbFRvVG9wIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWNyZWFtIGZvbnQtYm9keSB0ZXh0LWNoYXJjb2FsXCI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2xcIiBzdHlsZT17eyBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gNzJweCknIH19PlxuICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgZWxlbWVudD17PEFib3V0IC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2VydmljZXNcIiBlbGVtZW50PXs8U2VydmljZXMgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcmljaW5nXCIgZWxlbWVudD17PFByaWNpbmcgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wYXJ0bmVyc1wiIGVsZW1lbnQ9ezxQYXJ0bmVycyAvPn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3RyYWNrXCIgZWxlbWVudD17PFRyYWNrIC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdGVybXNcIiBlbGVtZW50PXs8TGVnYWwgdHlwZT1cInRlcm1zXCIgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcml2YWN5XCIgZWxlbWVudD17PExlZ2FsIHR5cGU9XCJwcml2YWN5XCIgLz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXNvdXJjZXNcIiBlbGVtZW50PXs8TGVnYWwgdHlwZT1cInJlc291cmNlc1wiIC8+fSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApO1xufVxuIl19