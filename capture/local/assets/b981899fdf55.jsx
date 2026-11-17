import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/TestimonialsSlider.jsx");const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Star, ChevronLeft, ChevronRight, Quote } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { testimonials } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/TestimonialsSlider.jsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function TestimonialsSlider() {
	_s();
	const [activeIndex, setActiveIndex] = useState(0);
	// Auto rotate every 4.5 seconds
	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonials.length);
		}, 4500);
		return () => clearInterval(timer);
	}, []);
	const nextSlide = () => {
		setActiveIndex((prev) => (prev + 1) % testimonials.length);
	};
	const prevSlide = () => {
		setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "relative",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: testimonials.map((story, idx) => {
				// Responsive visibility: on mobile show activeIndex, on md show activeIndex & activeIndex+1, on lg show 3
				// Or render all in a sliding container
				return /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-white border border-soft-border rounded-card h-full flex flex-col card-hover group overflow-hidden transition-all duration-300",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "relative aspect-[1708/920] overflow-hidden bg-light-blue",
						children: [
							/* @__PURE__ */ _jsxDEV("img", {
								src: story.image,
								alt: `${story.name}, ${story.role}`,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "absolute bottom-4 left-4 flex gap-1",
								children: [...Array(story.rating)].map((_, i) => /* @__PURE__ */ _jsxDEV(Star, {
									size: 12,
									className: "text-orange fill-orange drop-shadow"
								}, i, false, {
									fileName: _jsxFileName,
									lineNumber: 46,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "p-6 flex flex-col flex-1",
						children: [
							/* @__PURE__ */ _jsxDEV(Quote, {
								size: 20,
								className: "text-navy/20 mb-3"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-graphite font-body text-sm leading-relaxed flex-1 mb-5",
								children: [
									"\"",
									story.text,
									"\""
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "border-t border-soft-border pt-4 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "font-semibold font-heading text-charcoal text-sm",
									children: story.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 21
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-graphite text-xs font-body",
									children: [
										story.role,
										", ",
										story.company
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "w-8 h-8 rounded-full bg-navy-50 border border-navy/15 flex items-center justify-center text-navy font-bold text-xs font-heading",
									children: story.name.charAt(0)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 15
					}, this)]
				}, story.id, true, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "flex justify-center items-center gap-2 mt-8",
			children: testimonials.map((_, i) => /* @__PURE__ */ _jsxDEV("button", {
				onClick: () => setActiveIndex(i),
				"aria-label": `Go to slide ${i + 1}`,
				className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-navy w-6" : "bg-navy/20 hover:bg-navy/40"}`
			}, i, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
_s(TestimonialsSlider, "iIqb5Zt1/+fu/BREGbOTnNOVY3o=");
_c = TestimonialsSlider;
var _c;
$RefreshReg$(_c, "TestimonialsSlider");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/TestimonialsSlider.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/TestimonialsSlider.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/TestimonialsSlider.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/TestimonialsSlider.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLFVBQVUsaUJBQWlCO0FBQzNDLFNBQVMsTUFBTSxhQUFhLGNBQWMsYUFBYTtBQUN2RCxTQUFTLG9CQUFvQjs7OztBQUU3QixlQUFlLFNBQVMscUJBQXFCOztDQUMzQyxNQUFNLENBQUMsYUFBYSxrQkFBa0IsU0FBUyxDQUFDOztDQUdoRCxnQkFBZ0I7RUFDZCxNQUFNLFFBQVEsa0JBQWtCO0dBQzlCLGdCQUFnQixVQUFVLE9BQU8sS0FBSyxhQUFhLE1BQU07RUFDM0QsR0FBRyxJQUFJO0VBQ1AsYUFBYSxjQUFjLEtBQUs7Q0FDbEMsR0FBRyxDQUFDLENBQUM7Q0FFTCxNQUFNLGtCQUFrQjtFQUN0QixnQkFBZ0IsVUFBVSxPQUFPLEtBQUssYUFBYSxNQUFNO0NBQzNEO0NBRUEsTUFBTSxrQkFBa0I7RUFDdEIsZ0JBQWdCLFVBQVUsT0FBTyxJQUFJLGFBQWEsVUFBVSxhQUFhLE1BQU07Q0FDakY7Q0FFQSxPQUNFLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO1lBQWYsQ0FFRSx3QkFBQyxPQUFEO0dBQUssV0FBVTthQUNaLGFBQWEsS0FBSyxPQUFPLFFBQVE7OztJQUdoQyxPQUNFLHdCQUFDLE9BQUQ7S0FFRSxXQUFVO2VBRlosQ0FLRSx3QkFBQyxPQUFEO01BQUssV0FBVTtnQkFBZjtPQUNFLHdCQUFDLE9BQUQ7UUFDRSxLQUFLLE1BQU07UUFDWCxLQUFLLEdBQUcsTUFBTSxLQUFLLElBQUksTUFBTTtRQUM3QixXQUFVO09BQ1g7Ozs7O09BQ0Qsd0JBQUMsT0FBRCxFQUFLLFdBQVUsb0ZBQXFGOzs7OztPQUNwRyx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFDWixDQUFDLEdBQUcsTUFBTSxNQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQ2hDLHdCQUFDLE1BQUQ7U0FBYyxNQUFNO1NBQUksV0FBVTtRQUF1QyxHQUE5RDs7OztlQUE4RCxDQUMxRTtPQUNFOzs7OztNQUNGOzs7OztlQUdMLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmO09BQ0Usd0JBQUMsT0FBRDtRQUFPLE1BQU07UUFBSSxXQUFVO09BQXFCOzs7OztPQUNoRCx3QkFBQyxLQUFEO1FBQUcsV0FBVTtrQkFBYjtTQUEyRTtTQUN2RSxNQUFNO1NBQUs7UUFDWjs7Ozs7O09BRUgsd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQWYsQ0FDRSx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQ1osTUFBTTtRQUNKOzs7O2tCQUNMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmO1VBQ0csTUFBTTtVQUFLO1VBQUcsTUFBTTtTQUNsQjs7Ozs7Z0JBQ0Y7Ozs7a0JBQ0wsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQ1osTUFBTSxLQUFLLE9BQU8sQ0FBQztRQUNqQjs7OztnQkFDRjs7Ozs7O01BQ0Y7Ozs7O2FBQ0Y7T0F2Q0UsTUFBTTs7OztXQXVDUjtHQUVULENBQUM7RUFDRTs7OztZQUdMLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO2FBQ1osYUFBYSxLQUFLLEdBQUcsTUFDcEIsd0JBQUMsVUFBRDtJQUVFLGVBQWUsZUFBZSxDQUFDO0lBQy9CLGNBQVksZUFBZSxJQUFJO0lBQy9CLFdBQVcsd0RBQ1QsZ0JBQWdCLElBQUksZ0JBQWdCO0dBRXZDLEdBTk07Ozs7VUFNTixDQUNGO0VBQ0U7Ozs7VUFDRjs7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiVGVzdGltb25pYWxzU2xpZGVyLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0YXIsIENoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHQsIFF1b3RlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHRlc3RpbW9uaWFscyB9IGZyb20gJy4uL2RhdGEvc2l0ZURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbHNTbGlkZXIoKSB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gQXV0byByb3RhdGUgZXZlcnkgNC41IHNlY29uZHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEFjdGl2ZUluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgdGVzdGltb25pYWxzLmxlbmd0aCk7XG4gICAgfSwgNDUwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZUluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgdGVzdGltb25pYWxzLmxlbmd0aCk7XG4gIH07XG5cbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZUluZGV4KChwcmV2KSA9PiAocHJldiAtIDEgKyB0ZXN0aW1vbmlhbHMubGVuZ3RoKSAlIHRlc3RpbW9uaWFscy5sZW5ndGgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgey8qIENhcm91c2VsIEdyaWQgZm9yIExhcmdlIFNjcmVlbnMsIGFjdGl2ZSBjYXJkIGZvciBzbWFsbCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgoc3RvcnksIGlkeCkgPT4ge1xuICAgICAgICAgIC8vIFJlc3BvbnNpdmUgdmlzaWJpbGl0eTogb24gbW9iaWxlIHNob3cgYWN0aXZlSW5kZXgsIG9uIG1kIHNob3cgYWN0aXZlSW5kZXggJiBhY3RpdmVJbmRleCsxLCBvbiBsZyBzaG93IDNcbiAgICAgICAgICAvLyBPciByZW5kZXIgYWxsIGluIGEgc2xpZGluZyBjb250YWluZXJcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3N0b3J5LmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtY2FyZCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBjYXJkLWhvdmVyIGdyb3VwIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogUGhvdG8gQmFubmVyIHdpdGggc3RhcnMgb3ZlcmxheSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBhc3BlY3QtWzE3MDgvOTIwXSBvdmVyZmxvdy1oaWRkZW4gYmctbGlnaHQtYmx1ZVwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17c3RvcnkuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake3N0b3J5Lm5hbWV9LCAke3N0b3J5LnJvbGV9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi03MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1jaGFyY29hbC80MCB2aWEtdHJhbnNwYXJlbnQgdG8tdHJhbnNwYXJlbnRcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC00IGZsZXggZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgIHtbLi4uQXJyYXkoc3RvcnkucmF0aW5nKV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTdGFyIGtleT17aX0gc2l6ZT17MTJ9IGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIGZpbGwtb3JhbmdlIGRyb3Atc2hhZG93XCIgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogQ2FyZCBCb2R5ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGZsZXgtY29sIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIDxRdW90ZSBzaXplPXsyMH0gY2xhc3NOYW1lPVwidGV4dC1uYXZ5LzIwIG1iLTNcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgZm9udC1ib2R5IHRleHQtc20gbGVhZGluZy1yZWxheGVkIGZsZXgtMSBtYi01XCI+XG4gICAgICAgICAgICAgICAgICBcIntzdG9yeS50ZXh0fVwiXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItc29mdC1ib3JkZXIgcHQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3N0b3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgdGV4dC14cyBmb250LWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3Rvcnkucm9sZX0sIHtzdG9yeS5jb21wYW55fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04IHJvdW5kZWQtZnVsbCBiZy1uYXZ5LTUwIGJvcmRlciBib3JkZXItbmF2eS8xNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LW5hdnkgZm9udC1ib2xkIHRleHQteHMgZm9udC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdG9yeS5uYW1lLmNoYXJBdCgwKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQYWdpbmF0aW9uIGluZGljYXRvcnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIG10LThcIj5cbiAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJbmRleChpKX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BHbyB0byBzbGlkZSAke2kgKyAxfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTIuNSBoLTIuNSByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID09PSBpID8gJ2JnLW5hdnkgdy02JyA6ICdiZy1uYXZ5LzIwIGhvdmVyOmJnLW5hdnkvNDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl19