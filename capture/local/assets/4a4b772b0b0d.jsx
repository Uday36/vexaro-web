import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/IconHelper.jsx");const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { Truck, Zap, Clock, Building2, Warehouse, ShoppingCart, Package, RotateCcw, ShieldCheck, MapPin, Headphones, Radio, Globe, Cpu, Search, Navigation, CheckCircle2, Users, Briefcase, ShoppingBag, ArrowRight, Check, Mail, Phone, ExternalLink } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/IconHelper.jsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
function InstagramIcon({ size = 20, className = "" }) {
	return /* @__PURE__ */ _jsxDEV("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
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
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("line", {
				x1: "17.5",
				y1: "6.5",
				x2: "17.51",
				y2: "6.5"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 5
	}, this);
}
_c = InstagramIcon;
function FacebookIcon({ size = 20, className = "" }) {
	return /* @__PURE__ */ _jsxDEV("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ _jsxDEV("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
_c2 = FacebookIcon;
const iconMap = {
	truck: Truck,
	FaTruck: Truck,
	zap: Zap,
	FaBolt: Zap,
	clock: Clock,
	FaClock: Clock,
	building: Building2,
	FaIndustry: Building2,
	warehouse: Warehouse,
	FaWarehouse: Warehouse,
	shoppingCart: ShoppingCart,
	FaShoppingCart: ShoppingCart,
	boxes: Package,
	FaBoxes: Package,
	undo: RotateCcw,
	FaUndo: RotateCcw,
	shield: ShieldCheck,
	mapPin: MapPin,
	headphones: Headphones,
	radar: Radio,
	globe: Globe,
	cpu: Cpu,
	search: Search,
	navigation: Navigation,
	checkCircle: CheckCircle2,
	users: Users,
	briefcase: Briefcase,
	shoppingBag: ShoppingBag,
	arrowRight: ArrowRight,
	check: Check,
	mail: Mail,
	phone: Phone,
	instagram: InstagramIcon,
	facebook: FacebookIcon,
	externalLink: ExternalLink
};
export default function IconHelper({ name, size = 20, className = "" }) {
	const IconComponent = iconMap[name] || Truck;
	return /* @__PURE__ */ _jsxDEV(IconComponent, {
		size,
		className
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 88,
		columnNumber: 10
	}, this);
}
_c3 = IconHelper;
var _c, _c2, _c3;
$RefreshReg$(_c, "InstagramIcon");
$RefreshReg$(_c2, "FacebookIcon");
$RefreshReg$(_c3, "IconHelper");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/IconHelper.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/IconHelper.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/IconHelper.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/components/IconHelper.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFNBQ0UsT0FDQSxLQUNBLE9BQ0EsV0FDQSxXQUNBLGNBQ0EsU0FDQSxXQUNBLGFBQ0EsUUFDQSxZQUNBLE9BQ0EsT0FDQSxLQUNBLFFBQ0EsWUFDQSxjQUNBLE9BQ0EsV0FDQSxhQUNBLFlBQ0EsT0FDQSxNQUNBLE9BQ0Esb0JBQ0s7OztBQUVQLFNBQVMsY0FBYyxFQUFFLE9BQU8sSUFBSSxZQUFZLE1BQU07Q0FDcEQsT0FDRSx3QkFBQyxPQUFEO0VBQUssT0FBTztFQUFNLFFBQVE7RUFBTSxTQUFRO0VBQVksTUFBSztFQUFPLFFBQU87RUFBZSxhQUFZO0VBQUksZUFBYztFQUFRLGdCQUFlO0VBQW1CO1lBQTlKO0dBQ0Usd0JBQUMsUUFBRDtJQUFNLEdBQUU7SUFBSSxHQUFFO0lBQUksT0FBTTtJQUFLLFFBQU87SUFBSyxJQUFHO0lBQUksSUFBRztHQUFVOzs7OztHQUM3RCx3QkFBQyxRQUFELEVBQU0sR0FBRSxrREFBd0Q7Ozs7O0dBQ2hFLHdCQUFDLFFBQUQ7SUFBTSxJQUFHO0lBQU8sSUFBRztJQUFNLElBQUc7SUFBUSxJQUFHO0dBQVk7Ozs7O0VBQ2hEOzs7Ozs7QUFFVDs7QUFFQSxTQUFTLGFBQWEsRUFBRSxPQUFPLElBQUksWUFBWSxNQUFNO0NBQ25ELE9BQ0Usd0JBQUMsT0FBRDtFQUFLLE9BQU87RUFBTSxRQUFRO0VBQU0sU0FBUTtFQUFZLE1BQUs7RUFBTyxRQUFPO0VBQWUsYUFBWTtFQUFJLGVBQWM7RUFBUSxnQkFBZTtFQUFtQjtZQUM1Six3QkFBQyxRQUFELEVBQU0sR0FBRSxvRUFBMEU7Ozs7O0NBQy9FOzs7OztBQUVUOztBQUVBLE1BQU0sVUFBVTtDQUNkLE9BQU87Q0FDUCxTQUFTO0NBQ1QsS0FBSztDQUNMLFFBQVE7Q0FDUixPQUFPO0NBQ1AsU0FBUztDQUNULFVBQVU7Q0FDVixZQUFZO0NBQ1osV0FBVztDQUNYLGFBQWE7Q0FDYixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLE9BQU87Q0FDUCxTQUFTO0NBQ1QsTUFBTTtDQUNOLFFBQVE7Q0FDUixRQUFRO0NBQ1IsUUFBUTtDQUNSLFlBQVk7Q0FDWixPQUFPO0NBQ1AsT0FBTztDQUNQLEtBQUs7Q0FDTCxRQUFRO0NBQ1IsWUFBWTtDQUNaLGFBQWE7Q0FDYixPQUFPO0NBQ1AsV0FBVztDQUNYLGFBQWE7Q0FDYixZQUFZO0NBQ1osT0FBTztDQUNQLE1BQU07Q0FDTixPQUFPO0NBQ1AsV0FBVztDQUNYLFVBQVU7Q0FDVixjQUFjO0FBQ2hCO0FBRUEsZUFBZSxTQUFTLFdBQVcsRUFBRSxNQUFNLE9BQU8sSUFBSSxZQUFZLE1BQU07Q0FDdEUsTUFBTSxnQkFBZ0IsUUFBUSxTQUFTO0NBQ3ZDLE9BQU8sd0JBQUMsZUFBRDtFQUFxQjtFQUFpQjtDQUFZOzs7OztBQUMzRCIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJJY29uSGVscGVyLmpzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgVHJ1Y2ssXG4gIFphcCxcbiAgQ2xvY2ssXG4gIEJ1aWxkaW5nMixcbiAgV2FyZWhvdXNlLFxuICBTaG9wcGluZ0NhcnQsXG4gIFBhY2thZ2UsXG4gIFJvdGF0ZUNjdyxcbiAgU2hpZWxkQ2hlY2ssXG4gIE1hcFBpbixcbiAgSGVhZHBob25lcyxcbiAgUmFkaW8sXG4gIEdsb2JlLFxuICBDcHUsXG4gIFNlYXJjaCxcbiAgTmF2aWdhdGlvbixcbiAgQ2hlY2tDaXJjbGUyLFxuICBVc2VycyxcbiAgQnJpZWZjYXNlLFxuICBTaG9wcGluZ0JhZyxcbiAgQXJyb3dSaWdodCxcbiAgQ2hlY2ssXG4gIE1haWwsXG4gIFBob25lLFxuICBFeHRlcm5hbExpbmtcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuZnVuY3Rpb24gSW5zdGFncmFtSWNvbih7IHNpemUgPSAyMCwgY2xhc3NOYW1lID0gJycgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxyZWN0IHg9XCIyXCIgeT1cIjJcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiByeD1cIjVcIiByeT1cIjVcIj48L3JlY3Q+XG4gICAgICA8cGF0aCBkPVwiTTE2IDExLjM3QTQgNCAwIDEgMSAxMi42MyA4IDQgNCAwIDAgMSAxNiAxMS4zN3pcIj48L3BhdGg+XG4gICAgICA8bGluZSB4MT1cIjE3LjVcIiB5MT1cIjYuNVwiIHgyPVwiMTcuNTFcIiB5Mj1cIjYuNVwiPjwvbGluZT5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRmFjZWJvb2tJY29uKHsgc2l6ZSA9IDIwLCBjbGFzc05hbWUgPSAnJyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPHBhdGggZD1cIk0xOCAyaC0zYTUgNSAwIDAgMC01IDV2M0g3djRoM3Y4aDR2LThoM2wxLTRoLTRWN2ExIDEgMCAwIDEgMS0xaDN6XCI+PC9wYXRoPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5jb25zdCBpY29uTWFwID0ge1xuICB0cnVjazogVHJ1Y2ssXG4gIEZhVHJ1Y2s6IFRydWNrLFxuICB6YXA6IFphcCxcbiAgRmFCb2x0OiBaYXAsXG4gIGNsb2NrOiBDbG9jayxcbiAgRmFDbG9jazogQ2xvY2ssXG4gIGJ1aWxkaW5nOiBCdWlsZGluZzIsXG4gIEZhSW5kdXN0cnk6IEJ1aWxkaW5nMixcbiAgd2FyZWhvdXNlOiBXYXJlaG91c2UsXG4gIEZhV2FyZWhvdXNlOiBXYXJlaG91c2UsXG4gIHNob3BwaW5nQ2FydDogU2hvcHBpbmdDYXJ0LFxuICBGYVNob3BwaW5nQ2FydDogU2hvcHBpbmdDYXJ0LFxuICBib3hlczogUGFja2FnZSxcbiAgRmFCb3hlczogUGFja2FnZSxcbiAgdW5kbzogUm90YXRlQ2N3LFxuICBGYVVuZG86IFJvdGF0ZUNjdyxcbiAgc2hpZWxkOiBTaGllbGRDaGVjayxcbiAgbWFwUGluOiBNYXBQaW4sXG4gIGhlYWRwaG9uZXM6IEhlYWRwaG9uZXMsXG4gIHJhZGFyOiBSYWRpbyxcbiAgZ2xvYmU6IEdsb2JlLFxuICBjcHU6IENwdSxcbiAgc2VhcmNoOiBTZWFyY2gsXG4gIG5hdmlnYXRpb246IE5hdmlnYXRpb24sXG4gIGNoZWNrQ2lyY2xlOiBDaGVja0NpcmNsZTIsXG4gIHVzZXJzOiBVc2VycyxcbiAgYnJpZWZjYXNlOiBCcmllZmNhc2UsXG4gIHNob3BwaW5nQmFnOiBTaG9wcGluZ0JhZyxcbiAgYXJyb3dSaWdodDogQXJyb3dSaWdodCxcbiAgY2hlY2s6IENoZWNrLFxuICBtYWlsOiBNYWlsLFxuICBwaG9uZTogUGhvbmUsXG4gIGluc3RhZ3JhbTogSW5zdGFncmFtSWNvbixcbiAgZmFjZWJvb2s6IEZhY2Vib29rSWNvbixcbiAgZXh0ZXJuYWxMaW5rOiBFeHRlcm5hbExpbmtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25IZWxwZXIoeyBuYW1lLCBzaXplID0gMjAsIGNsYXNzTmFtZSA9ICcnIH0pIHtcbiAgY29uc3QgSWNvbkNvbXBvbmVudCA9IGljb25NYXBbbmFtZV0gfHwgVHJ1Y2s7XG4gIHJldHVybiA8SWNvbkNvbXBvbmVudCBzaXplPXtzaXplfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz47XG59XG4iXX0=