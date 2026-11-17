import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Navbar.jsx");const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport4_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Link, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { Menu, X } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { navLinks } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/Navbar.jsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function Navbar() {
	_s();
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const location = useLocation();
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 12);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		setMobileOpen(false);
	}, [location]);
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("nav", {
		className: `fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "glass-panel shadow-sm" : "bg-transparent"}`,
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "container-custom flex items-center justify-between h-20 md:h-24",
			children: [
				/* @__PURE__ */ _jsxDEV(Link, {
					to: "/",
					className: "flex-shrink-0",
					children: /* @__PURE__ */ _jsxDEV("img", {
						src: "/new-logo.png",
						alt: "VEXARO Courier",
						className: "h-10 md:h-12 w-auto object-contain",
						style: { maxWidth: "220px" }
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-[0_4px_16px_rgba(26,58,143,0.04)]",
					children: navLinks.map((item) => {
						const isActive = location.pathname === item.path;
						return /* @__PURE__ */ _jsxDEV(Link, {
							to: item.path,
							className: `px-4 py-2 text-[15px] font-semibold font-heading rounded-full transition-all duration-300 relative ${isActive ? "text-navy" : "text-charcoal hover:text-navy"}`,
							children: [item.label, isActive && /* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-white shadow-sm rounded-full -z-10 animate-fade-in" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 21
							}, this)]
						}, item.path, true, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 17
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "hidden lg:flex items-center gap-4 flex-shrink-0",
					children: [/* @__PURE__ */ _jsxDEV(Link, {
						to: "/contact",
						className: "text-[15px] font-bold text-charcoal hover:text-orange transition-colors font-heading",
						children: "Try for Free"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV(Link, {
						to: "/contact",
						className: "px-6 py-3 bg-charcoal text-white text-[15px] font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-navy transition-all duration-300 font-heading",
						children: "Get a Quote"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: () => setMobileOpen(!mobileOpen),
					className: "lg:hidden p-2 text-charcoal hover:text-orange transition-colors bg-white/60 backdrop-blur-md rounded-full border border-white/80",
					"aria-label": "Toggle navigation menu",
					children: mobileOpen ? /* @__PURE__ */ _jsxDEV(X, { size: 20 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 27
					}, this) : /* @__PURE__ */ _jsxDEV(Menu, { size: 20 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 45
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 7
	}, this), mobileOpen && /* @__PURE__ */ _jsxDEV("div", {
		className: "fixed inset-0 z-[110] bg-white flex flex-col transition-all duration-300",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-between px-6 py-5 border-b border-soft-border/50",
				children: [/* @__PURE__ */ _jsxDEV("img", {
					src: "/new-logo.png",
					alt: "VEXARO",
					className: "h-9 w-auto object-contain",
					style: { maxWidth: "160px" }
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					onClick: () => setMobileOpen(false),
					className: "text-charcoal hover:text-navy p-2 bg-gray-50 rounded-full",
					"aria-label": "Close menu",
					children: /* @__PURE__ */ _jsxDEV(X, { size: 20 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "flex-1 flex flex-col justify-center px-8 gap-2 bg-cream/50 overflow-y-auto",
				children: navLinks.map((item) => /* @__PURE__ */ _jsxDEV(Link, {
					to: item.path,
					onClick: () => setMobileOpen(false),
					className: `block py-4 text-2xl font-bold font-heading transition-colors ${location.pathname === item.path ? "text-navy" : "text-charcoal hover:text-navy"}`,
					children: item.label
				}, item.path, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "px-8 pb-12 pt-6 bg-cream/50",
				children: /* @__PURE__ */ _jsxDEV(Link, {
					to: "/contact",
					onClick: () => setMobileOpen(false),
					className: "block text-center py-4 bg-charcoal text-white font-bold text-lg rounded-full shadow-lg font-heading hover:bg-navy transition-colors",
					children: "Get a Quote"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 123,
				columnNumber: 11
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 91,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
_s(Navbar, "+cc+OKB1rgmscgBX3TELHfcXSyE=", false, function() {
	return [useLocation];
});
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Navbar.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/Navbar.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/Navbar.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/Navbar.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgTWVudSwgWCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBuYXZMaW5rcyB9IGZyb20gJy4uL2RhdGEvc2l0ZURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHNldFNjcm9sbGVkKHdpbmRvdy5zY3JvbGxZID4gMTIpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb2JpbGVPcGVuKGZhbHNlKTtcbiAgfSwgW2xvY2F0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG5hdlxuICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LVsxMDBdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgIHNjcm9sbGVkID8gJ2dsYXNzLXBhbmVsIHNoYWRvdy1zbScgOiAnYmctdHJhbnNwYXJlbnQnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jdXN0b20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMjAgbWQ6aC0yNFwiPlxuICAgICAgICAgIHsvKiBMb2dvICovfVxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL25ldy1sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlZFWEFSTyBDb3VyaWVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCBtZDpoLTEyIHctYXV0byBvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMjIwcHgnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gTGlua3MgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctd2hpdGUvNjAgYmFja2Ryb3AtYmx1ci1tZCBweC00IHB5LTIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvODAgc2hhZG93LVswXzRweF8xNnB4X3JnYmEoMjYsNTgsMTQzLDAuMDQpXVwiPlxuICAgICAgICAgICAge25hdkxpbmtzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSBpdGVtLnBhdGg7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgICAgdG89e2l0ZW0ucGF0aH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiB0ZXh0LVsxNXB4XSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHJlbGF0aXZlICR7XG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlID8gJ3RleHQtbmF2eScgOiAndGV4dC1jaGFyY29hbCBob3Zlcjp0ZXh0LW5hdnknXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy13aGl0ZSBzaGFkb3ctc20gcm91bmRlZC1mdWxsIC16LTEwIGFuaW1hdGUtZmFkZS1pblwiIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIERlc2t0b3AgUmlnaHQgQWN0aW9uIEJ1dHRvbnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIGZvbnQtYm9sZCB0ZXh0LWNoYXJjb2FsIGhvdmVyOnRleHQtb3JhbmdlIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtaGVhZGluZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRyeSBmb3IgRnJlZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyBiZy1jaGFyY29hbCB0ZXh0LXdoaXRlIHRleHQtWzE1cHhdIGZvbnQtYm9sZCByb3VuZGVkLWZ1bGwgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCBob3ZlcjpiZy1uYXZ5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmb250LWhlYWRpbmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHZXQgYSBRdW90ZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE1vYmlsZSBNZW51IEhhbWJ1cmdlciBCdXR0b24gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gcC0yIHRleHQtY2hhcmNvYWwgaG92ZXI6dGV4dC1vcmFuZ2UgdHJhbnNpdGlvbi1jb2xvcnMgYmctd2hpdGUvNjAgYmFja2Ryb3AtYmx1ci1tZCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZS84MFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb24gbWVudVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge21vYmlsZU9wZW4gPyA8WCBzaXplPXsyMH0gLz4gOiA8TWVudSBzaXplPXsyMH0gLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cbiAgICAgIHsvKiBNb2JpbGUgRHJhd2VyICovfVxuICAgICAge21vYmlsZU9wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei1bMTEwXSBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTYgcHktNSBib3JkZXItYiBib3JkZXItc29mdC1ib3JkZXIvNTBcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL25ldy1sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlZFWEFST1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOSB3LWF1dG8gb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzE2MHB4JyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2hhcmNvYWwgaG92ZXI6dGV4dC1uYXZ5IHAtMiBiZy1ncmF5LTUwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBtZW51XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFggc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtOCBnYXAtMiBiZy1jcmVhbS81MCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ucGF0aH1cbiAgICAgICAgICAgICAgICB0bz17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHB5LTQgdGV4dC0yeGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPT09IGl0ZW0ucGF0aCA/ICd0ZXh0LW5hdnknIDogJ3RleHQtY2hhcmNvYWwgaG92ZXI6dGV4dC1uYXZ5J1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC04IHBiLTEyIHB0LTYgYmctY3JlYW0vNTBcIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1jZW50ZXIgcHktNCBiZy1jaGFyY29hbCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LWxnIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGcgZm9udC1oZWFkaW5nIGhvdmVyOmJnLW5hdnkgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHZXQgYSBRdW90ZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXX0=