import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/StatCounter.jsx");const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import IconHelper from "/src/components/IconHelper.jsx";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/StatCounter.jsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
export function useCountUp(targetVal, duration = 2e3, isDecimal = false) {
	_s();
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const [started, setStarted] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !started) {
				setStarted(true);
			}
		}, { threshold: .2 });
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [started]);
	useEffect(() => {
		if (!started) return;
		let startTime = null;
		let frameId;
		const step = (timestamp) => {
			startTime ||= timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(isDecimal ? parseFloat((eased * targetVal).toFixed(1)) : Math.floor(eased * targetVal));
			if (progress < 1) {
				frameId = requestAnimationFrame(step);
			}
		};
		frameId = requestAnimationFrame(step);
		return () => cancelAnimationFrame(frameId);
	}, [
		started,
		targetVal,
		duration,
		isDecimal
	]);
	return {
		count,
		ref
	};
}
_s(useCountUp, "VfWzYOkNf0qdSUI5Ycv5aef4f90=");
export default function StatCounter({ value, suffix, label, decimal, icon, color }) {
	_s2();
	const { count, ref } = useCountUp(value, 2e3, decimal);
	return /* @__PURE__ */ _jsxDEV("div", {
		ref,
		className: "group",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "bg-white rounded-card p-6 shadow-card border border-soft-border text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "absolute top-0 left-0 right-0 h-1",
					style: { background: color === "orange" ? "linear-gradient(90deg, #E06000, #FF8C2A)" : "linear-gradient(90deg, #1A3A8F, #2855C8)" }
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: `w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${color === "orange" ? "gradient-orange shadow-orange-sm" : "gradient-navy shadow-navy-sm"}`,
					children: /* @__PURE__ */ _jsxDEV(IconHelper, {
						name: icon,
						size: 22,
						className: "text-white"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: `text-4xl font-bold font-heading mb-1 ${color === "orange" ? "gradient-text-orange" : "gradient-text-navy"}`,
					children: [decimal ? count.toFixed(1) : count.toLocaleString(), suffix]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "text-graphite text-sm font-body",
					children: label
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 53,
		columnNumber: 5
	}, this);
}
_s2(StatCounter, "xSfOrRLvrBu6oCciQsuUy4pGxXA=", false, function() {
	return [useCountUp];
});
_c = StatCounter;
var _c;
$RefreshReg$(_c, "StatCounter");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/StatCounter.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/StatCounter.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/StatCounter.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/StatCounter.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLFVBQVUsV0FBVyxjQUFjO0FBQ25ELE9BQU8sZ0JBQWdCOzs7O0FBRXZCLE9BQU8sU0FBUyxXQUFXLFdBQVcsV0FBVyxLQUFNLFlBQVksT0FBTzs7Q0FDeEUsTUFBTSxDQUFDLE9BQU8sWUFBWSxTQUFTLENBQUM7Q0FDcEMsTUFBTSxNQUFNLE9BQU8sSUFBSTtDQUN2QixNQUFNLENBQUMsU0FBUyxjQUFjLFNBQVMsS0FBSztDQUU1QyxnQkFBZ0I7RUFDZCxNQUFNLFdBQVcsSUFBSSxzQkFDbEIsQ0FBQyxXQUFXO0dBQ1gsSUFBSSxNQUFNLGtCQUFrQixDQUFDLFNBQVM7SUFDcEMsV0FBVyxJQUFJO0dBQ2pCO0VBQ0YsR0FDQSxFQUFFLFdBQVcsR0FBSSxDQUNuQjtFQUVBLElBQUksSUFBSSxTQUFTLFNBQVMsUUFBUSxJQUFJLE9BQU87RUFDN0MsYUFBYSxTQUFTLFdBQVc7Q0FDbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQztDQUVaLGdCQUFnQjtFQUNkLElBQUksQ0FBQyxTQUFTO0VBQ2QsSUFBSSxZQUFZO0VBQ2hCLElBQUk7RUFFSixNQUFNLFFBQVEsY0FBYztHQUMxQixjQUFjO0dBQ2QsTUFBTSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsVUFBVSxDQUFDO0dBQy9ELE1BQU0sUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLFVBQVUsQ0FBQztHQUMxQyxTQUNFLFlBQ0ksWUFBWSxRQUFRLFVBQVMsQ0FBRSxRQUFRLENBQUMsQ0FBQyxJQUN6QyxLQUFLLE1BQU0sUUFBUSxTQUFTLENBQ2xDO0dBQ0EsSUFBSSxXQUFXLEdBQUc7SUFDaEIsVUFBVSxzQkFBc0IsSUFBSTtHQUN0QztFQUNGO0VBRUEsVUFBVSxzQkFBc0IsSUFBSTtFQUNwQyxhQUFhLHFCQUFxQixPQUFPO0NBQzNDLEdBQUc7RUFBQztFQUFTO0VBQVc7RUFBVTtDQUFTLENBQUM7Q0FFNUMsT0FBTztFQUFFO0VBQU87Q0FBSTtBQUN0Qjs7QUFFQSxlQUFlLFNBQVMsWUFBWSxFQUFFLE9BQU8sUUFBUSxPQUFPLFNBQVMsTUFBTSxTQUFTOztDQUNsRixNQUFNLEVBQUUsT0FBTyxRQUFRLFdBQVcsT0FBTyxLQUFNLE9BQU87Q0FFdEQsT0FDRSx3QkFBQyxPQUFEO0VBQVU7RUFBSyxXQUFVO1lBQ3ZCLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQWY7SUFFRSx3QkFBQyxPQUFEO0tBQ0UsV0FBVTtLQUNWLE9BQU8sRUFDTCxZQUNFLFVBQVUsV0FDTiw2Q0FDQSwyQ0FDUjtJQUNEOzs7OztJQUdELHdCQUFDLE9BQUQ7S0FDRSxXQUFXLHNFQUNULFVBQVUsV0FBVyxxQ0FBcUM7ZUFHNUQsd0JBQUMsWUFBRDtNQUFZLE1BQU07TUFBTSxNQUFNO01BQUksV0FBVTtLQUFjOzs7OztJQUN2RDs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQ0UsV0FBVyx3Q0FDVCxVQUFVLFdBQVcseUJBQXlCO2VBRmxELENBS0csVUFBVSxNQUFNLFFBQVEsQ0FBQyxJQUFJLE1BQU0sZUFBZSxHQUNsRCxNQUNFOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFtQztJQUFXOzs7OztHQUMxRDs7Ozs7O0NBQ0Y7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiU3RhdENvdW50ZXIuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkhlbHBlciBmcm9tICcuL0ljb25IZWxwZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ291bnRVcCh0YXJnZXRWYWwsIGR1cmF0aW9uID0gMjAwMCwgaXNEZWNpbWFsID0gZmFsc2UpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbc3RhcnRlZCwgc2V0U3RhcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChbZW50cnldKSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiAhc3RhcnRlZCkge1xuICAgICAgICAgIHNldFN0YXJ0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHRocmVzaG9sZDogMC4yIH1cbiAgICApO1xuXG4gICAgaWYgKHJlZi5jdXJyZW50KSBvYnNlcnZlci5vYnNlcnZlKHJlZi5jdXJyZW50KTtcbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbc3RhcnRlZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzdGFydGVkKSByZXR1cm47XG4gICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgbGV0IGZyYW1lSWQ7XG5cbiAgICBjb25zdCBzdGVwID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgICAgc3RhcnRUaW1lIHx8PSB0aW1lc3RhbXA7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKCh0aW1lc3RhbXAgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpO1xuICAgICAgY29uc3QgZWFzZWQgPSAxIC0gTWF0aC5wb3coMSAtIHByb2dyZXNzLCAzKTtcbiAgICAgIHNldENvdW50KFxuICAgICAgICBpc0RlY2ltYWxcbiAgICAgICAgICA/IHBhcnNlRmxvYXQoKGVhc2VkICogdGFyZ2V0VmFsKS50b0ZpeGVkKDEpKVxuICAgICAgICAgIDogTWF0aC5mbG9vcihlYXNlZCAqIHRhcmdldFZhbClcbiAgICAgICk7XG4gICAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XG4gICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICB9LCBbc3RhcnRlZCwgdGFyZ2V0VmFsLCBkdXJhdGlvbiwgaXNEZWNpbWFsXSk7XG5cbiAgcmV0dXJuIHsgY291bnQsIHJlZiB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0Q291bnRlcih7IHZhbHVlLCBzdWZmaXgsIGxhYmVsLCBkZWNpbWFsLCBpY29uLCBjb2xvciB9KSB7XG4gIGNvbnN0IHsgY291bnQsIHJlZiB9ID0gdXNlQ291bnRVcCh2YWx1ZSwgMjAwMCwgZGVjaW1hbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWNhcmQgcC02IHNoYWRvdy1jYXJkIGJvcmRlciBib3JkZXItc29mdC1ib3JkZXIgdGV4dC1jZW50ZXIgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzaGFkb3ctbGdcIj5cbiAgICAgICAgey8qIFRvcCBjb2xvcmVkIGJvcmRlciBzdHJpcGUgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBoLTFcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICBjb2xvciA9PT0gJ29yYW5nZSdcbiAgICAgICAgICAgICAgICA/ICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNFMDYwMDAsICNGRjhDMkEpJ1xuICAgICAgICAgICAgICAgIDogJ2xpbmVhci1ncmFkaWVudCg5MGRlZywgIzFBM0E4RiwgIzI4NTVDOCknXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogSWNvbiBDb250YWluZXIgKi99XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B3LTEyIGgtMTIgcm91bmRlZC14bCBteC1hdXRvIG1iLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICAgIGNvbG9yID09PSAnb3JhbmdlJyA/ICdncmFkaWVudC1vcmFuZ2Ugc2hhZG93LW9yYW5nZS1zbScgOiAnZ3JhZGllbnQtbmF2eSBzaGFkb3ctbmF2eS1zbSdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uSGVscGVyIG5hbWU9e2ljb259IHNpemU9ezIyfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENvdW50ZXIgTnVtYmVyICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC00eGwgZm9udC1ib2xkIGZvbnQtaGVhZGluZyBtYi0xICR7XG4gICAgICAgICAgICBjb2xvciA9PT0gJ29yYW5nZScgPyAnZ3JhZGllbnQtdGV4dC1vcmFuZ2UnIDogJ2dyYWRpZW50LXRleHQtbmF2eSdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkZWNpbWFsID8gY291bnQudG9GaXhlZCgxKSA6IGNvdW50LnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAge3N1ZmZpeH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1ldHJpYyBMYWJlbCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIHRleHQtc20gZm9udC1ib2R5XCI+e2xhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=