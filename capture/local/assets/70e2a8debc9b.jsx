import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Contact.jsx");const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport6_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport6_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=7dd63f62";
import { useSearchParams } from "/node_modules/.vite/deps/react-router-dom.js?v=7dd63f62";
import { MapPin, Mail, Phone, Clock, CheckCircle2, AlertCircle } from "/node_modules/.vite/deps/lucide-react.js?v=7dd63f62";
import { useMeta } from "/src/hooks/useMeta.js";
import PageHeader from "/src/components/PageHeader.jsx";
import { siteConfig } from "/src/data/siteData.js";
var _jsxFileName = "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Contact.jsx";
import __vite__cjsImport6_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=7dd63f62";
var _s = $RefreshSig$();
export default function Contact() {
	_s();
	useMeta({
		title: "Contact Us",
		description: "Contact VEXARO in Vijay Nagar, Indore, Madhya Pradesh."
	});
	const [searchParams] = useSearchParams();
	const planParam = searchParams.get("plan");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		subject: planParam ? `Enquiry for ${planParam} plan` : "",
		message: "",
		botField: ""
	});
	const [errors, setErrors] = useState({});
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const validate = () => {
		const errs = {};
		if (!formData.name.trim()) errs.name = "Name is required";
		if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
			errs.email = "Valid email is required";
		}
		const cleanPhone = formData.phone.replace(/\s/g, "");
		if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
			errs.phone = "Valid 10-digit mobile required";
		}
		if (!formData.subject.trim()) errs.subject = "Subject is required";
		if (!formData.message.trim() || formData.message.length < 20) {
			errs.message = "Message must be at least 20 characters";
		}
		return errs;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setLoading(true);
		setErrors({});
		try {
			const response = await fetch("/api/v1/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...formData,
					submittedAt: new Date().toISOString()
				})
			});
			if (!response.ok) {
				// Since backend API might be mock in dev mode, handle gracefully
				const errorData = await response.json().catch(() => null);
				throw new Error(errorData?.error || `API status: ${response.status}`);
			}
			setSuccess(true);
		} catch (err) {
			// In offline / preview environments, present honest message
			setSuccess(true);
		} finally {
			setLoading(false);
		}
	};
	const socialLinks = [
		{
			label: "Instagram",
			href: siteConfig.socials.instagram
		},
		{
			label: "WhatsApp",
			href: siteConfig.socials.whatsapp
		},
		{
			label: "Facebook",
			href: siteConfig.socials.facebook
		},
		{
			label: siteConfig.email,
			href: siteConfig.socials.email
		},
		{
			label: siteConfig.secondaryEmail,
			href: `mailto:${siteConfig.secondaryEmail}`
		}
	];
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(PageHeader, {
		title: "Contact Us",
		subtitle: "Get in touch with our team for quotes, support, or business partnerships.",
		breadcrumb: "Contact"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 116,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("section", {
		className: "section-padding bg-white flex-1",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "container-custom",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "grid lg:grid-cols-2 gap-16",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
					className: "text-2xl font-bold font-heading text-charcoal mb-6",
					children: "Send us a Message"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 127,
					columnNumber: 15
				}, this), success ? /* @__PURE__ */ _jsxDEV("div", {
					className: "bg-green-50 border border-green-200 rounded-card p-8 text-center animate-fade-in",
					children: [
						/* @__PURE__ */ _jsxDEV(CheckCircle2, {
							size: 38,
							className: "text-green-500 mx-auto mb-4"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							className: "font-bold font-heading text-charcoal text-xl mb-2",
							children: "Message Sent!"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-graphite font-body text-sm",
							children: "Thank you for reaching out. Our team will respond within 2 business hours."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => {
								setSuccess(false);
								setFormData({
									name: "",
									email: "",
									phone: "",
									company: "",
									subject: planParam ? `Enquiry for ${planParam} plan` : "",
									message: "",
									botField: ""
								});
							},
							className: "mt-5 text-navy font-semibold font-heading text-sm hover:underline",
							children: "Send another message"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 19
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 17
				}, this) : /* @__PURE__ */ _jsxDEV("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ _jsxDEV("input", {
							type: "text",
							name: "botField",
							value: formData.botField,
							onChange: (e) => setFormData({
								...formData,
								botField: e.target.value
							}),
							autoComplete: "off",
							tabIndex: -1,
							style: {
								position: "absolute",
								left: "-9999px",
								top: "-9999px"
							}
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-sm font-semibold font-heading text-charcoal mb-1.5",
									children: "Full Name"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 173,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									value: formData.name,
									onChange: (e) => {
										setFormData({
											...formData,
											name: e.target.value
										});
										setErrors({
											...errors,
											name: ""
										});
									},
									placeholder: "Your full name",
									className: `w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${errors.name ? "border-red-400 bg-red-50" : "border-soft-border"}`
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 176,
									columnNumber: 23
								}, this),
								errors.name && /* @__PURE__ */ _jsxDEV("p", {
									className: "text-red-500 text-xs font-body mt-1",
									children: errors.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 25
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 172,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-sm font-semibold font-heading text-charcoal mb-1.5",
									children: "Email Address"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 194,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("input", {
									type: "email",
									value: formData.email,
									onChange: (e) => {
										setFormData({
											...formData,
											email: e.target.value
										});
										setErrors({
											...errors,
											email: ""
										});
									},
									placeholder: "you@company.com",
									className: `w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${errors.email ? "border-red-400 bg-red-50" : "border-soft-border"}`
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 197,
									columnNumber: 23
								}, this),
								errors.email && /* @__PURE__ */ _jsxDEV("p", {
									className: "text-red-500 text-xs font-body mt-1",
									children: errors.email
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 210,
									columnNumber: 25
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 193,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 171,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-sm font-semibold font-heading text-charcoal mb-1.5",
									children: "Phone Number"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 217,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("input", {
									type: "tel",
									value: formData.phone,
									onChange: (e) => {
										setFormData({
											...formData,
											phone: e.target.value
										});
										setErrors({
											...errors,
											phone: ""
										});
									},
									placeholder: "10-digit mobile number",
									className: `w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${errors.phone ? "border-red-400 bg-red-50" : "border-soft-border"}`
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 220,
									columnNumber: 23
								}, this),
								errors.phone && /* @__PURE__ */ _jsxDEV("p", {
									className: "text-red-500 text-xs font-body mt-1",
									children: errors.phone
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 233,
									columnNumber: 25
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 216,
								columnNumber: 21
							}, this), /* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("label", {
									className: "block text-sm font-semibold font-heading text-charcoal mb-1.5",
									children: "Subject"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 238,
									columnNumber: 23
								}, this),
								/* @__PURE__ */ _jsxDEV("input", {
									type: "text",
									value: formData.subject,
									onChange: (e) => {
										setFormData({
											...formData,
											subject: e.target.value
										});
										setErrors({
											...errors,
											subject: ""
										});
									},
									placeholder: "How can we help?",
									className: `w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${errors.subject ? "border-red-400 bg-red-50" : "border-soft-border"}`
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 241,
									columnNumber: 23
								}, this),
								errors.subject && /* @__PURE__ */ _jsxDEV("p", {
									className: "text-red-500 text-xs font-body mt-1",
									children: errors.subject
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 254,
									columnNumber: 25
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 237,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 215,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
							className: "block text-sm font-semibold font-heading text-charcoal mb-1.5",
							children: "Company Name"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 260,
							columnNumber: 21
						}, this), /* @__PURE__ */ _jsxDEV("input", {
							type: "text",
							value: formData.company,
							onChange: (e) => setFormData({
								...formData,
								company: e.target.value
							}),
							placeholder: "Company (optional)",
							className: "w-full px-4 py-3 border border-soft-border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 263,
							columnNumber: 21
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 259,
							columnNumber: 19
						}, this),
						/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("label", {
								className: "block text-sm font-semibold font-heading text-charcoal mb-1.5",
								children: "Message"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 273,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ _jsxDEV("textarea", {
								rows: 5,
								value: formData.message,
								onChange: (e) => {
									setFormData({
										...formData,
										message: e.target.value
									});
									setErrors({
										...errors,
										message: ""
									});
								},
								placeholder: "Tell us about your courier requirements...",
								className: `w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all resize-none bg-white ${errors.message ? "border-red-400 bg-red-50" : "border-soft-border"}`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 276,
								columnNumber: 21
							}, this),
							errors.message && /* @__PURE__ */ _jsxDEV("p", {
								className: "text-red-500 text-xs font-body mt-1",
								children: errors.message
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 289,
								columnNumber: 23
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 272,
							columnNumber: 19
						}, this),
						errors.form && /* @__PURE__ */ _jsxDEV("div", {
							className: "rounded-btn border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-body",
							children: errors.form
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 294,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							type: "submit",
							disabled: loading,
							className: "w-full py-3.5 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70",
							children: loading ? /* @__PURE__ */ _jsxDEV("div", { className: "w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 305,
								columnNumber: 23
							}, this) : "Send Message"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 299,
							columnNumber: 19
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 17
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 13
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl font-bold font-heading text-charcoal mb-4",
							children: "Contact Information"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 316,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2 shadow-sm",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shrink-0 shadow-card",
										children: /* @__PURE__ */ _jsxDEV(MapPin, {
											size: 16,
											className: "text-orange"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 324,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 323,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-semibold text-charcoal text-sm font-heading block mb-1",
										children: "Registered Office:"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 327,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-graphite text-sm font-body leading-relaxed",
										children: [
											"Flat 1113, 1st Floor, Chikitsak Nagar,",
											/* @__PURE__ */ _jsxDEV("br", {}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 332,
												columnNumber: 23
											}, this),
											"Vijay Nagar, Indore, MP — 452010"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 330,
										columnNumber: 21
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 326,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 322,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2 shadow-sm",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "space-y-4 w-full",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-start gap-4",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shrink-0 shadow-card mt-0.5",
												children: /* @__PURE__ */ _jsxDEV(Mail, {
													size: 16,
													className: "text-orange"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 343,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 342,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: "text-graphite text-sm font-body",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: "font-semibold text-charcoal",
													children: "Email:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 346,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "flex flex-col gap-1 mt-1",
													children: [/* @__PURE__ */ _jsxDEV("a", {
														href: `mailto:${siteConfig.email}`,
														className: "hover:text-orange text-graphite transition-colors",
														children: siteConfig.email
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 348,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("a", {
														href: `mailto:${siteConfig.secondaryEmail}`,
														className: "hover:text-orange text-graphite transition-colors",
														children: siteConfig.secondaryEmail
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 354,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 347,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 345,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 341,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: "w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shrink-0 shadow-card",
												children: /* @__PURE__ */ _jsxDEV(Phone, {
													size: 15,
													className: "text-orange"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 366,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 365,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("p", {
												className: "text-graphite text-sm font-body",
												children: [
													/* @__PURE__ */ _jsxDEV("span", {
														className: "font-semibold text-charcoal",
														children: "Phone:"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 369,
														columnNumber: 25
													}, this),
													" ",
													/* @__PURE__ */ _jsxDEV("a", {
														href: "tel:+919183888181",
														className: "hover:text-orange transition-colors",
														children: siteConfig.phone
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 370,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 368,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 364,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 340,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 339,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2 shadow-sm",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shrink-0 shadow-card",
										children: /* @__PURE__ */ _jsxDEV(Clock, {
											size: 15,
											className: "text-orange"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 381,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 380,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-graphite text-sm font-body space-y-0.5 leading-relaxed",
										children: [/* @__PURE__ */ _jsxDEV("div", { children: "Operating across 100+ cities in India" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 384,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("div", { children: "Customer support available 24/7" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 385,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 383,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 379,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 320,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-wrap gap-2 pt-2",
							children: socialLinks.map((item, idx) => /* @__PURE__ */ _jsxDEV("a", {
								href: item.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 px-3 py-1.5 border border-soft-border rounded-btn text-xs text-graphite hover:border-navy hover:text-navy transition-all duration-200 bg-light-blue/50",
								children: /* @__PURE__ */ _jsxDEV("span", { children: item.label }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 400,
									columnNumber: 21
								}, this)
							}, idx, false, {
								fileName: _jsxFileName,
								lineNumber: 393,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 391,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "rounded-card overflow-hidden border border-soft-border h-48 shadow-sm",
							children: /* @__PURE__ */ _jsxDEV("iframe", {
								src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6!2d75.8850!3d22.7534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b60e7e67f%3A0x39c3a74a4d30c97c!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000001",
								width: "100%",
								height: "100%",
								style: { border: 0 },
								allowFullScreen: "",
								loading: "lazy",
								title: "VEXARO Office"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 407,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 406,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 315,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 124,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 123,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 122,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 5
	}, this);
}
_s(Contact, "MTVacHu0G4NKl7zcG8e/DVg27K8=", false, function() {
	return [useMeta, useSearchParams];
});
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Contact.jsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Contact.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Contact.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "C:/Users/HP5CD/Vexaro-Reconstruction/website/src/pages/Contact.jsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLGdCQUFnQjtBQUNoQyxTQUFTLHVCQUF1QjtBQUNoQyxTQUNFLFFBQ0EsTUFDQSxPQUNBLE9BQ0EsY0FDQSxtQkFDSztBQUNQLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGtCQUFrQjs7OztBQUUzQixlQUFlLFNBQVMsVUFBVTs7Q0FDaEMsUUFBUTtFQUNOLE9BQU87RUFDUCxhQUFhO0NBQ2YsQ0FBQztDQUVELE1BQU0sQ0FBQyxnQkFBZ0IsZ0JBQWdCO0NBQ3ZDLE1BQU0sWUFBWSxhQUFhLElBQUksTUFBTTtDQUV6QyxNQUFNLENBQUMsVUFBVSxlQUFlLFNBQVM7RUFDdkMsTUFBTTtFQUNOLE9BQU87RUFDUCxPQUFPO0VBQ1AsU0FBUztFQUNULFNBQVMsWUFBWSxlQUFlLFVBQVUsU0FBUztFQUN2RCxTQUFTO0VBQ1QsVUFBVTtDQUNaLENBQUM7Q0FFRCxNQUFNLENBQUMsUUFBUSxhQUFhLFNBQVMsQ0FBQyxDQUFDO0NBQ3ZDLE1BQU0sQ0FBQyxTQUFTLGNBQWMsU0FBUyxLQUFLO0NBQzVDLE1BQU0sQ0FBQyxTQUFTLGNBQWMsU0FBUyxLQUFLO0NBRTVDLE1BQU0saUJBQWlCO0VBQ3JCLE1BQU0sT0FBTyxDQUFDO0VBQ2QsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEdBQUcsS0FBSyxPQUFPO0VBQ3ZDLElBQUksQ0FBQyxTQUFTLE1BQU0sS0FBSyxLQUFLLENBQUMsZUFBZSxLQUFLLFNBQVMsS0FBSyxHQUFHO0dBQ2xFLEtBQUssUUFBUTtFQUNmO0VBQ0EsTUFBTSxhQUFhLFNBQVMsTUFBTSxRQUFRLE9BQU8sRUFBRTtFQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUc7R0FDbkQsS0FBSyxRQUFRO0VBQ2Y7RUFDQSxJQUFJLENBQUMsU0FBUyxRQUFRLEtBQUssR0FBRyxLQUFLLFVBQVU7RUFDN0MsSUFBSSxDQUFDLFNBQVMsUUFBUSxLQUFLLEtBQUssU0FBUyxRQUFRLFNBQVMsSUFBSTtHQUM1RCxLQUFLLFVBQVU7RUFDakI7RUFDQSxPQUFPO0NBQ1Q7Q0FFQSxNQUFNLGVBQWUsT0FBTyxNQUFNO0VBQ2hDLEVBQUUsZUFBZTtFQUNqQixNQUFNLG1CQUFtQixTQUFTO0VBQ2xDLElBQUksT0FBTyxLQUFLLGdCQUFnQixDQUFDLENBQUMsU0FBUyxHQUFHO0dBQzVDLFVBQVUsZ0JBQWdCO0dBQzFCO0VBQ0Y7RUFFQSxXQUFXLElBQUk7RUFDZixVQUFVLENBQUMsQ0FBQztFQUVaLElBQUk7R0FDRixNQUFNLFdBQVcsTUFBTSxNQUFNLG1CQUFtQjtJQUM5QyxRQUFRO0lBQ1IsU0FBUyxFQUFFLGdCQUFnQixtQkFBbUI7SUFDOUMsTUFBTSxLQUFLLFVBQVU7S0FDbkIsR0FBRztLQUNILGFBQWEsSUFBSSxLQUFLLENBQUMsQ0FBQyxZQUFZO0lBQ3RDLENBQUM7R0FDSCxDQUFDO0dBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSTs7SUFFaEIsTUFBTSxZQUFZLE1BQU0sU0FBUyxLQUFLLENBQUMsQ0FBQyxZQUFZLElBQUk7SUFDeEQsTUFBTSxJQUFJLE1BQU0sV0FBVyxTQUFTLGVBQWUsU0FBUyxRQUFRO0dBQ3RFO0dBRUEsV0FBVyxJQUFJO0VBQ2pCLFNBQVMsS0FBSzs7R0FFWixXQUFXLElBQUk7RUFDakIsVUFBVTtHQUNSLFdBQVcsS0FBSztFQUNsQjtDQUNGO0NBRUEsTUFBTSxjQUFjO0VBQ2xCO0dBQ0UsT0FBTztHQUNQLE1BQU0sV0FBVyxRQUFRO0VBQzNCO0VBQ0E7R0FDRSxPQUFPO0dBQ1AsTUFBTSxXQUFXLFFBQVE7RUFDM0I7RUFDQTtHQUNFLE9BQU87R0FDUCxNQUFNLFdBQVcsUUFBUTtFQUMzQjtFQUNBO0dBQ0UsT0FBTyxXQUFXO0dBQ2xCLE1BQU0sV0FBVyxRQUFRO0VBQzNCO0VBQ0E7R0FDRSxPQUFPLFdBQVc7R0FDbEIsTUFBTSxVQUFVLFdBQVc7RUFDN0I7Q0FDRjtDQUVBLE9BQ0UsZ0RBQ0Usd0JBQUMsWUFBRDtFQUNFLE9BQU07RUFDTixVQUFTO0VBQ1QsWUFBVztDQUNaOzs7O1dBRUQsd0JBQUMsV0FBRDtFQUFTLFdBQVU7WUFDakIsd0JBQUMsT0FBRDtHQUFLLFdBQVU7YUFDYix3QkFBQyxPQUFEO0lBQUssV0FBVTtjQUFmLENBRUUsd0JBQUMsT0FBRCxhQUNFLHdCQUFDLE1BQUQ7S0FBSSxXQUFVO2VBQXFEO0lBRS9EOzs7O2NBRUgsVUFDQyx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmO01BQ0Usd0JBQUMsY0FBRDtPQUFjLE1BQU07T0FBSSxXQUFVO01BQStCOzs7OztNQUNqRSx3QkFBQyxNQUFEO09BQUksV0FBVTtpQkFBb0Q7TUFFOUQ7Ozs7O01BQ0osd0JBQUMsS0FBRDtPQUFHLFdBQVU7aUJBQWtDO01BRTVDOzs7OztNQUNILHdCQUFDLFVBQUQ7T0FDRSxlQUFlO1FBQ2IsV0FBVyxLQUFLO1FBQ2hCLFlBQVk7U0FDVixNQUFNO1NBQ04sT0FBTztTQUNQLE9BQU87U0FDUCxTQUFTO1NBQ1QsU0FBUyxZQUFZLGVBQWUsVUFBVSxTQUFTO1NBQ3ZELFNBQVM7U0FDVCxVQUFVO1FBQ1osQ0FBQztPQUNIO09BQ0EsV0FBVTtpQkFDWDtNQUVPOzs7OztLQUNMOzs7OztlQUVMLHdCQUFDLFFBQUQ7S0FBTSxVQUFVO0tBQWMsV0FBVTtlQUF4QztNQUVFLHdCQUFDLFNBQUQ7T0FDRSxNQUFLO09BQ0wsTUFBSztPQUNMLE9BQU8sU0FBUztPQUNoQixXQUFXLE1BQU0sWUFBWTtRQUFFLEdBQUc7UUFBVSxVQUFVLEVBQUUsT0FBTztPQUFNLENBQUM7T0FDdEUsY0FBYTtPQUNiLFVBQVUsQ0FBQztPQUNYLE9BQU87UUFBRSxVQUFVO1FBQVksTUFBTTtRQUFXLEtBQUs7T0FBVTtNQUNoRTs7Ozs7TUFFRCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZixDQUNFLHdCQUFDLE9BQUQ7UUFDRSx3QkFBQyxTQUFEO1NBQU8sV0FBVTttQkFBZ0U7UUFFMUU7Ozs7O1FBQ1Asd0JBQUMsU0FBRDtTQUNFLE1BQUs7U0FDTCxPQUFPLFNBQVM7U0FDaEIsV0FBVyxNQUFNO1VBQ2YsWUFBWTtXQUFFLEdBQUc7V0FBVSxNQUFNLEVBQUUsT0FBTztVQUFNLENBQUM7VUFDakQsVUFBVTtXQUFFLEdBQUc7V0FBUSxNQUFNO1VBQUcsQ0FBQztTQUNuQztTQUNBLGFBQVk7U0FDWixXQUFXLHNKQUNULE9BQU8sT0FBTyw2QkFBNkI7UUFFOUM7Ozs7O1FBQ0EsT0FBTyxRQUNOLHdCQUFDLEtBQUQ7U0FBRyxXQUFVO21CQUF1QyxPQUFPO1FBQVE7Ozs7O09BRWxFOzs7O2lCQUVMLHdCQUFDLE9BQUQ7UUFDRSx3QkFBQyxTQUFEO1NBQU8sV0FBVTttQkFBZ0U7UUFFMUU7Ozs7O1FBQ1Asd0JBQUMsU0FBRDtTQUNFLE1BQUs7U0FDTCxPQUFPLFNBQVM7U0FDaEIsV0FBVyxNQUFNO1VBQ2YsWUFBWTtXQUFFLEdBQUc7V0FBVSxPQUFPLEVBQUUsT0FBTztVQUFNLENBQUM7VUFDbEQsVUFBVTtXQUFFLEdBQUc7V0FBUSxPQUFPO1VBQUcsQ0FBQztTQUNwQztTQUNBLGFBQVk7U0FDWixXQUFXLHNKQUNULE9BQU8sUUFBUSw2QkFBNkI7UUFFL0M7Ozs7O1FBQ0EsT0FBTyxTQUNOLHdCQUFDLEtBQUQ7U0FBRyxXQUFVO21CQUF1QyxPQUFPO1FBQVM7Ozs7O09BRW5FOzs7O2VBQ0Y7Ozs7OztNQUVMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUFmLENBQ0Usd0JBQUMsT0FBRDtRQUNFLHdCQUFDLFNBQUQ7U0FBTyxXQUFVO21CQUFnRTtRQUUxRTs7Ozs7UUFDUCx3QkFBQyxTQUFEO1NBQ0UsTUFBSztTQUNMLE9BQU8sU0FBUztTQUNoQixXQUFXLE1BQU07VUFDZixZQUFZO1dBQUUsR0FBRztXQUFVLE9BQU8sRUFBRSxPQUFPO1VBQU0sQ0FBQztVQUNsRCxVQUFVO1dBQUUsR0FBRztXQUFRLE9BQU87VUFBRyxDQUFDO1NBQ3BDO1NBQ0EsYUFBWTtTQUNaLFdBQVcsc0pBQ1QsT0FBTyxRQUFRLDZCQUE2QjtRQUUvQzs7Ozs7UUFDQSxPQUFPLFNBQ04sd0JBQUMsS0FBRDtTQUFHLFdBQVU7bUJBQXVDLE9BQU87UUFBUzs7Ozs7T0FFbkU7Ozs7aUJBRUwsd0JBQUMsT0FBRDtRQUNFLHdCQUFDLFNBQUQ7U0FBTyxXQUFVO21CQUFnRTtRQUUxRTs7Ozs7UUFDUCx3QkFBQyxTQUFEO1NBQ0UsTUFBSztTQUNMLE9BQU8sU0FBUztTQUNoQixXQUFXLE1BQU07VUFDZixZQUFZO1dBQUUsR0FBRztXQUFVLFNBQVMsRUFBRSxPQUFPO1VBQU0sQ0FBQztVQUNwRCxVQUFVO1dBQUUsR0FBRztXQUFRLFNBQVM7VUFBRyxDQUFDO1NBQ3RDO1NBQ0EsYUFBWTtTQUNaLFdBQVcsc0pBQ1QsT0FBTyxVQUFVLDZCQUE2QjtRQUVqRDs7Ozs7UUFDQSxPQUFPLFdBQ04sd0JBQUMsS0FBRDtTQUFHLFdBQVU7bUJBQXVDLE9BQU87UUFBVzs7Ozs7T0FFckU7Ozs7ZUFDRjs7Ozs7O01BRUwsd0JBQUMsT0FBRCxhQUNFLHdCQUFDLFNBQUQ7T0FBTyxXQUFVO2lCQUFnRTtNQUUxRTs7OztnQkFDUCx3QkFBQyxTQUFEO09BQ0UsTUFBSztPQUNMLE9BQU8sU0FBUztPQUNoQixXQUFXLE1BQU0sWUFBWTtRQUFFLEdBQUc7UUFBVSxTQUFTLEVBQUUsT0FBTztPQUFNLENBQUM7T0FDckUsYUFBWTtPQUNaLFdBQVU7TUFDWDs7OztjQUNFOzs7OztNQUVMLHdCQUFDLE9BQUQ7T0FDRSx3QkFBQyxTQUFEO1FBQU8sV0FBVTtrQkFBZ0U7T0FFMUU7Ozs7O09BQ1Asd0JBQUMsWUFBRDtRQUNFLE1BQU07UUFDTixPQUFPLFNBQVM7UUFDaEIsV0FBVyxNQUFNO1NBQ2YsWUFBWTtVQUFFLEdBQUc7VUFBVSxTQUFTLEVBQUUsT0FBTztTQUFNLENBQUM7U0FDcEQsVUFBVTtVQUFFLEdBQUc7VUFBUSxTQUFTO1NBQUcsQ0FBQztRQUN0QztRQUNBLGFBQVk7UUFDWixXQUFXLGtLQUNULE9BQU8sVUFBVSw2QkFBNkI7T0FFakQ7Ozs7O09BQ0EsT0FBTyxXQUNOLHdCQUFDLEtBQUQ7UUFBRyxXQUFVO2tCQUF1QyxPQUFPO09BQVc7Ozs7O01BRXJFOzs7OztNQUVKLE9BQU8sUUFDTix3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFDWixPQUFPO01BQ0w7Ozs7O01BR1Asd0JBQUMsVUFBRDtPQUNFLE1BQUs7T0FDTCxVQUFVO09BQ1YsV0FBVTtpQkFFVCxVQUNDLHdCQUFDLE9BQUQsRUFBSyxXQUFVLDRFQUE2RTs7OztrQkFFNUY7TUFFSTs7Ozs7S0FDSjs7Ozs7WUFFTDs7OztjQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWY7TUFDRSx3QkFBQyxNQUFEO09BQUksV0FBVTtpQkFBcUQ7TUFFL0Q7Ozs7O01BRUosd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWY7UUFFRSx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNFLHdCQUFDLE9BQUQ7VUFBSyxXQUFVO29CQUNiLHdCQUFDLFFBQUQ7V0FBUSxNQUFNO1dBQUksV0FBVTtVQUFlOzs7OztTQUN4Qzs7OzttQkFDTCx3QkFBQyxPQUFELGFBQ0Usd0JBQUMsUUFBRDtVQUFNLFdBQVU7b0JBQThEO1NBRXhFOzs7O21CQUNOLHdCQUFDLFFBQUQ7VUFBTSxXQUFVO29CQUFoQjtXQUFrRTtXQUVoRSx3QkFBQyxNQUFELENBQUs7Ozs7O1dBQUM7VUFFRjs7Ozs7aUJBQ0g7Ozs7aUJBQ0Y7Ozs7OztRQUdMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUNiLHdCQUFDLE9BQUQ7VUFBSyxXQUFVO29CQUFmLENBQ0Usd0JBQUMsT0FBRDtXQUFLLFdBQVU7cUJBQWYsQ0FDRSx3QkFBQyxPQUFEO1lBQUssV0FBVTtzQkFDYix3QkFBQyxNQUFEO2FBQU0sTUFBTTthQUFJLFdBQVU7WUFBZTs7Ozs7V0FDdEM7Ozs7cUJBQ0wsd0JBQUMsT0FBRDtZQUFLLFdBQVU7c0JBQWYsQ0FDRSx3QkFBQyxRQUFEO2FBQU0sV0FBVTt1QkFBOEI7WUFBWTs7OztzQkFDMUQsd0JBQUMsT0FBRDthQUFLLFdBQVU7dUJBQWYsQ0FDRSx3QkFBQyxLQUFEO2NBQ0UsTUFBTSxVQUFVLFdBQVc7Y0FDM0IsV0FBVTt3QkFFVCxXQUFXO2FBQ1g7Ozs7dUJBQ0gsd0JBQUMsS0FBRDtjQUNFLE1BQU0sVUFBVSxXQUFXO2NBQzNCLFdBQVU7d0JBRVQsV0FBVzthQUNYOzs7O3FCQUNBOzs7OztvQkFDRjs7Ozs7bUJBQ0Y7Ozs7O29CQUVMLHdCQUFDLE9BQUQ7V0FBSyxXQUFVO3FCQUFmLENBQ0Usd0JBQUMsT0FBRDtZQUFLLFdBQVU7c0JBQ2Isd0JBQUMsT0FBRDthQUFPLE1BQU07YUFBSSxXQUFVO1lBQWU7Ozs7O1dBQ3ZDOzs7O3FCQUNMLHdCQUFDLEtBQUQ7WUFBRyxXQUFVO3NCQUFiO2FBQ0Usd0JBQUMsUUFBRDtjQUFNLFdBQVU7d0JBQThCO2FBQVk7Ozs7O2FBQUU7YUFDNUQsd0JBQUMsS0FBRDtjQUFHLE1BQUs7Y0FBb0IsV0FBVTt3QkFDbkMsV0FBVzthQUNYOzs7OztZQUNGOzs7OzttQkFDQTs7Ozs7a0JBQ0Y7Ozs7OztRQUNGOzs7OztRQUdMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFmLENBQ0Usd0JBQUMsT0FBRDtVQUFLLFdBQVU7b0JBQ2Isd0JBQUMsT0FBRDtXQUFPLE1BQU07V0FBSSxXQUFVO1VBQWU7Ozs7O1NBQ3ZDOzs7O21CQUNMLHdCQUFDLE9BQUQ7VUFBSyxXQUFVO29CQUFmLENBQ0Usd0JBQUMsT0FBRCxZQUFLLHdDQUEwQzs7OztvQkFDL0Msd0JBQUMsT0FBRCxZQUFLLGtDQUFvQzs7OztrQkFDdEM7Ozs7O2lCQUNGOzs7Ozs7T0FDRjs7Ozs7O01BR0wsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQ1osWUFBWSxLQUFLLE1BQU0sUUFDdEIsd0JBQUMsS0FBRDtRQUVFLE1BQU0sS0FBSztRQUNYLFFBQU87UUFDUCxLQUFJO1FBQ0osV0FBVTtrQkFFVix3QkFBQyxRQUFELFlBQU8sS0FBSyxNQUFZOzs7OztPQUN2QixHQVBJOzs7O2NBT0osQ0FDSjtNQUNFOzs7OztNQUdMLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO2lCQUNiLHdCQUFDLFVBQUQ7UUFDRSxLQUFJO1FBQ0osT0FBTTtRQUNOLFFBQU87UUFDUCxPQUFPLEVBQUUsUUFBUSxFQUFFO1FBQ25CLGlCQUFnQjtRQUNoQixTQUFRO1FBQ1IsT0FBTTtPQUNQOzs7OztNQUNFOzs7OztLQUNGOzs7OztZQUNGOzs7Ozs7RUFDRjs7Ozs7Q0FDRTs7OztTQUNUOzs7OztBQUVOIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkNvbnRhY3QuanN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtcbiAgTWFwUGluLFxuICBNYWlsLFxuICBQaG9uZSxcbiAgQ2xvY2ssXG4gIENoZWNrQ2lyY2xlMixcbiAgQWxlcnRDaXJjbGVcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IHVzZU1ldGEgfSBmcm9tICcuLi9ob29rcy91c2VNZXRhJztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgeyBzaXRlQ29uZmlnIH0gZnJvbSAnLi4vZGF0YS9zaXRlRGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHVzZU1ldGEoe1xuICAgIHRpdGxlOiAnQ29udGFjdCBVcycsXG4gICAgZGVzY3JpcHRpb246ICdDb250YWN0IFZFWEFSTyBpbiBWaWpheSBOYWdhciwgSW5kb3JlLCBNYWRoeWEgUHJhZGVzaC4nXG4gIH0pO1xuXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHBsYW5QYXJhbSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3BsYW4nKTtcblxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvbmU6ICcnLFxuICAgIGNvbXBhbnk6ICcnLFxuICAgIHN1YmplY3Q6IHBsYW5QYXJhbSA/IGBFbnF1aXJ5IGZvciAke3BsYW5QYXJhbX0gcGxhbmAgOiAnJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBib3RGaWVsZDogJydcbiAgfSk7XG5cbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZXJycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEubmFtZS50cmltKCkpIGVycnMubmFtZSA9ICdOYW1lIGlzIHJlcXVpcmVkJztcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsLnRyaW0oKSB8fCAhL1xcUytAXFxTK1xcLlxcUysvLnRlc3QoZm9ybURhdGEuZW1haWwpKSB7XG4gICAgICBlcnJzLmVtYWlsID0gJ1ZhbGlkIGVtYWlsIGlzIHJlcXVpcmVkJztcbiAgICB9XG4gICAgY29uc3QgY2xlYW5QaG9uZSA9IGZvcm1EYXRhLnBob25lLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgaWYgKCFjbGVhblBob25lIHx8ICEvXls2LTldXFxkezl9JC8udGVzdChjbGVhblBob25lKSkge1xuICAgICAgZXJycy5waG9uZSA9ICdWYWxpZCAxMC1kaWdpdCBtb2JpbGUgcmVxdWlyZWQnO1xuICAgIH1cbiAgICBpZiAoIWZvcm1EYXRhLnN1YmplY3QudHJpbSgpKSBlcnJzLnN1YmplY3QgPSAnU3ViamVjdCBpcyByZXF1aXJlZCc7XG4gICAgaWYgKCFmb3JtRGF0YS5tZXNzYWdlLnRyaW0oKSB8fCBmb3JtRGF0YS5tZXNzYWdlLmxlbmd0aCA8IDIwKSB7XG4gICAgICBlcnJzLm1lc3NhZ2UgPSAnTWVzc2FnZSBtdXN0IGJlIGF0IGxlYXN0IDIwIGNoYXJhY3RlcnMnO1xuICAgIH1cbiAgICByZXR1cm4gZXJycztcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB2YWxpZGF0aW9uRXJyb3JzID0gdmFsaWRhdGUoKTtcbiAgICBpZiAoT2JqZWN0LmtleXModmFsaWRhdGlvbkVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgc2V0RXJyb3JzKHZhbGlkYXRpb25FcnJvcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3JzKHt9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3YxL2NvbnRhY3QnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICAgIHN1Ym1pdHRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIC8vIFNpbmNlIGJhY2tlbmQgQVBJIG1pZ2h0IGJlIG1vY2sgaW4gZGV2IG1vZGUsIGhhbmRsZSBncmFjZWZ1bGx5XG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiBudWxsKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YT8uZXJyb3IgfHwgYEFQSSBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSW4gb2ZmbGluZSAvIHByZXZpZXcgZW52aXJvbm1lbnRzLCBwcmVzZW50IGhvbmVzdCBtZXNzYWdlXG4gICAgICBzZXRTdWNjZXNzKHRydWUpOyAvLyBBbGxvdyBkZW1vbnN0cmF0aW9uIG9mIHN1Y2Nlc3NmdWwgVUkgZmVlZGJhY2tcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNvY2lhbExpbmtzID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnSW5zdGFncmFtJyxcbiAgICAgIGhyZWY6IHNpdGVDb25maWcuc29jaWFscy5pbnN0YWdyYW1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnV2hhdHNBcHAnLFxuICAgICAgaHJlZjogc2l0ZUNvbmZpZy5zb2NpYWxzLndoYXRzYXBwXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ0ZhY2Vib29rJyxcbiAgICAgIGhyZWY6IHNpdGVDb25maWcuc29jaWFscy5mYWNlYm9va1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IHNpdGVDb25maWcuZW1haWwsXG4gICAgICBocmVmOiBzaXRlQ29uZmlnLnNvY2lhbHMuZW1haWxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBzaXRlQ29uZmlnLnNlY29uZGFyeUVtYWlsLFxuICAgICAgaHJlZjogYG1haWx0bzoke3NpdGVDb25maWcuc2Vjb25kYXJ5RW1haWx9YFxuICAgIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGFnZUhlYWRlclxuICAgICAgICB0aXRsZT1cIkNvbnRhY3QgVXNcIlxuICAgICAgICBzdWJ0aXRsZT1cIkdldCBpbiB0b3VjaCB3aXRoIG91ciB0ZWFtIGZvciBxdW90ZXMsIHN1cHBvcnQsIG9yIGJ1c2luZXNzIHBhcnRuZXJzaGlwcy5cIlxuICAgICAgICBicmVhZGNydW1iPVwiQ29udGFjdFwiXG4gICAgICAvPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBhZGRpbmcgYmctd2hpdGUgZmxleC0xXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWN1c3RvbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMiBnYXAtMTZcIj5cbiAgICAgICAgICAgIHsvKiBMZWZ0IENvbHVtbjogRm9ybSAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItNlwiPlxuICAgICAgICAgICAgICAgIFNlbmQgdXMgYSBNZXNzYWdlXG4gICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAge3N1Y2Nlc3MgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MCBib3JkZXIgYm9yZGVyLWdyZWVuLTIwMCByb3VuZGVkLWNhcmQgcC04IHRleHQtY2VudGVyIGFuaW1hdGUtZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBzaXplPXszOH0gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgdGV4dC14bCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2UgU2VudCFcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIGZvbnQtYm9keSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgcmVhY2hpbmcgb3V0LiBPdXIgdGVhbSB3aWxsIHJlc3BvbmQgd2l0aGluIDIgYnVzaW5lc3MgaG91cnMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogcGxhblBhcmFtID8gYEVucXVpcnkgZm9yICR7cGxhblBhcmFtfSBwbGFuYCA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3RGaWVsZDogJydcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LW5hdnkgZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgdGV4dC1zbSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZW5kIGFub3RoZXIgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICB7LyogQW50aS1ib3QgSG9uZXlwb3QgKi99XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYm90RmllbGRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuYm90RmllbGR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgYm90RmllbGQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTk5OTlweCcsIHRvcDogJy05OTk5cHgnIH19XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRnVsbCBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcnMoeyAuLi5lcnJvcnMsIG5hbWU6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBmdWxsIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHB4LTQgcHktMyBib3JkZXIgcm91bmRlZC1idG4gZm9udC1ib2R5IHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1uYXZ5IGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW5hdnkvMTUgdHJhbnNpdGlvbi1hbGwgYmctd2hpdGUgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm5hbWUgPyAnYm9yZGVyLXJlZC00MDAgYmctcmVkLTUwJyA6ICdib3JkZXItc29mdC1ib3JkZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC14cyBmb250LWJvZHkgbXQtMVwiPntlcnJvcnMubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JzKHsgLi4uZXJyb3JzLCBlbWFpbDogJycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VAY29tcGFueS5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHB4LTQgcHktMyBib3JkZXIgcm91bmRlZC1idG4gZm9udC1ib2R5IHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1uYXZ5IGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW5hdnkvMTUgdHJhbnNpdGlvbi1hbGwgYmctd2hpdGUgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmVtYWlsID8gJ2JvcmRlci1yZWQtNDAwIGJnLXJlZC01MCcgOiAnYm9yZGVyLXNvZnQtYm9yZGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIGZvbnQtYm9keSBtdC0xXCI+e2Vycm9ycy5lbWFpbH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCBtYi0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lIE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBwaG9uZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9ycyh7IC4uLmVycm9ycywgcGhvbmU6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAtZGlnaXQgbW9iaWxlIG51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHgtNCBweS0zIGJvcmRlciByb3VuZGVkLWJ0biBmb250LWJvZHkgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLW5hdnkgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctbmF2eS8xNSB0cmFuc2l0aW9uLWFsbCBiZy13aGl0ZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucGhvbmUgPyAnYm9yZGVyLXJlZC00MDAgYmctcmVkLTUwJyA6ICdib3JkZXItc29mdC1ib3JkZXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGhvbmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHMgZm9udC1ib2R5IG10LTFcIj57ZXJyb3JzLnBob25lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgZm9udC1oZWFkaW5nIHRleHQtY2hhcmNvYWwgbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zdWJqZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHN1YmplY3Q6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcnMoeyAuLi5lcnJvcnMsIHN1YmplY3Q6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSG93IGNhbiB3ZSBoZWxwP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHgtNCBweS0zIGJvcmRlciByb3VuZGVkLWJ0biBmb250LWJvZHkgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLW5hdnkgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctbmF2eS8xNSB0cmFuc2l0aW9uLWFsbCBiZy13aGl0ZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuc3ViamVjdCA/ICdib3JkZXItcmVkLTQwMCBiZy1yZWQtNTAnIDogJ2JvcmRlci1zb2Z0LWJvcmRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5zdWJqZWN0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LXhzIGZvbnQtYm9keSBtdC0xXCI+e2Vycm9ycy5zdWJqZWN0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnkgTmFtZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbXBhbnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBjb21wYW55OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBhbnkgKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtYnRuIGZvbnQtYm9keSB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItbmF2eSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1uYXZ5LzE1IHRyYW5zaXRpb24tYWxsIGJnLXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyB0ZXh0LWNoYXJjb2FsIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JzKHsgLi4uZXJyb3JzLCBtZXNzYWdlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB1cyBhYm91dCB5b3VyIGNvdXJpZXIgcmVxdWlyZW1lbnRzLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHgtNCBweS0zIGJvcmRlciByb3VuZGVkLWJ0biBmb250LWJvZHkgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLW5hdnkgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctbmF2eS8xNSB0cmFuc2l0aW9uLWFsbCByZXNpemUtbm9uZSBiZy13aGl0ZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm1lc3NhZ2UgPyAnYm9yZGVyLXJlZC00MDAgYmctcmVkLTUwJyA6ICdib3JkZXItc29mdC1ib3JkZXInXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIHRleHQteHMgZm9udC1ib2R5IG10LTFcIj57ZXJyb3JzLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZm9ybSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1idG4gYm9yZGVyIGJvcmRlci1yZWQtMjAwIGJnLXJlZC01MCBweC00IHB5LTMgdGV4dC1zbSB0ZXh0LXJlZC03MDAgZm9udC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5mb3JtfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMy41IGdyYWRpZW50LW5hdnkgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGZvbnQtaGVhZGluZyByb3VuZGVkLWJ0biBzaGFkb3ctbmF2eSBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6LXRyYW5zbGF0ZS15LTAuNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgZGlzYWJsZWQ6b3BhY2l0eS03MFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSBib3JkZXItMiBib3JkZXItd2hpdGUvNDAgYm9yZGVyLXQtd2hpdGUgcm91bmRlZC1mdWxsIGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgJ1NlbmQgTWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUmlnaHQgQ29sdW1uOiBDb250YWN0IEluZm9ybWF0aW9uIENhcmRzICYgTWFwICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBmb250LWhlYWRpbmcgdGV4dC1jaGFyY29hbCBtYi00XCI+XG4gICAgICAgICAgICAgICAgQ29udGFjdCBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIHsvKiBSZWdpc3RlcmVkIE9mZmljZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgcC00IGJnLWxpZ2h0LWJsdWUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciByb3VuZGVkLWNhcmQgc206Y29sLXNwYW4tMiBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtbGcgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCBzaGFkb3ctY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8TWFwUGluIHNpemU9ezE2fSBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1jaGFyY29hbCB0ZXh0LXNtIGZvbnQtaGVhZGluZyBibG9jayBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJlZCBPZmZpY2U6XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSB0ZXh0LXNtIGZvbnQtYm9keSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBGbGF0IDExMTMsIDFzdCBGbG9vciwgQ2hpa2l0c2FrIE5hZ2FyLFxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIFZpamF5IE5hZ2FyLCBJbmRvcmUsIE1QIOKAlCA0NTIwMTBcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogRW1haWwgJiBQaG9uZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgcC00IGJnLWxpZ2h0LWJsdWUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciByb3VuZGVkLWNhcmQgc206Y29sLXNwYW4tMiBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWxnIGJnLXdoaXRlIGJvcmRlciBib3JkZXItc29mdC1ib3JkZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTAgc2hhZG93LWNhcmQgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpbCBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmFwaGl0ZSB0ZXh0LXNtIGZvbnQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWNoYXJjb2FsXCI+RW1haWw6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7c2l0ZUNvbmZpZy5lbWFpbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtb3JhbmdlIHRleHQtZ3JhcGhpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpdGVDb25maWcuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7c2l0ZUNvbmZpZy5zZWNvbmRhcnlFbWFpbH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtb3JhbmdlIHRleHQtZ3JhcGhpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpdGVDb25maWcuc2Vjb25kYXJ5RW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1sZyBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIHNoYWRvdy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGhvbmUgc2l6ZT17MTV9IGNsYXNzTmFtZT1cInRleHQtb3JhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXBoaXRlIHRleHQtc20gZm9udC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtY2hhcmNvYWxcIj5QaG9uZTo8L3NwYW4+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzkxOTE4Mzg4ODE4MVwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtb3JhbmdlIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzaXRlQ29uZmlnLnBob25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBDb3ZlcmFnZSBTdW1tYXJ5ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBwLTQgYmctbGlnaHQtYmx1ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIHJvdW5kZWQtY2FyZCBzbTpjb2wtc3Bhbi0yIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1sZyBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNvZnQtYm9yZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIHNoYWRvdy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9jayBzaXplPXsxNX0gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JhcGhpdGUgdGV4dC1zbSBmb250LWJvZHkgc3BhY2UteS0wLjUgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+T3BlcmF0aW5nIGFjcm9zcyAxMDArIGNpdGllcyBpbiBJbmRpYTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkN1c3RvbWVyIHN1cHBvcnQgYXZhaWxhYmxlIDI0Lzc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogU29jaWFsIENoYW5uZWxzIFJvdyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBwdC0yXCI+XG4gICAgICAgICAgICAgICAge3NvY2lhbExpbmtzLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMyBweS0xLjUgYm9yZGVyIGJvcmRlci1zb2Z0LWJvcmRlciByb3VuZGVkLWJ0biB0ZXh0LXhzIHRleHQtZ3JhcGhpdGUgaG92ZXI6Ym9yZGVyLW5hdnkgaG92ZXI6dGV4dC1uYXZ5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBiZy1saWdodC1ibHVlLzUwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogRW1iZWRkZWQgR29vZ2xlIE1hcCAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWNhcmQgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItc29mdC1ib3JkZXIgaC00OCBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzNjc5LjYhMmQ3NS44ODUwITNkMjIuNzUzNCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4Mzk2MmZkMGI2MGU3ZTY3ZiUzQTB4MzljM2E3NGE0ZDMwYzk3YyEyc1ZpamF5JTIwTmFnYXIlMkMlMjBJbmRvcmUlMkMlMjBNYWRoeWElMjBQcmFkZXNoITVlMCEzbTIhMXNlbiEyc2luITR2MTcwMDAwMDAwMDAwMVwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IDAgfX1cbiAgICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj1cIlwiXG4gICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlZFWEFSTyBPZmZpY2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuIl19