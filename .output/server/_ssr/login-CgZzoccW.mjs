import { o as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { a as login } from "./students-store-a3yX7MaI.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Mail, m as GraduationCap, p as Lock, t as Zap } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as LightningBg } from "./lightning-bg-Bkm-sBAV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CgZzoccW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const nav = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [mode, setMode] = (0, import_react.useState)("login");
	function submit(e) {
		e.preventDefault();
		if (!email.includes("@") || password.length < 4) {
			toast.error("Enter a valid email and password (4+ chars).");
			return;
		}
		setLoading(true);
		setTimeout(() => {
			login(email);
			toast.success(mode === "login" ? "Welcome back." : "Account created.");
			nav({ to: "/dashboard" });
		}, 900);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen flex items-center justify-center px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightningBg, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "pointer-events-none fixed inset-0 bg-gold/5 mix-blend-screen",
				animate: { opacity: [
					0,
					0,
					.6,
					0,
					0,
					.4,
					0
				] },
				transition: {
					duration: 5,
					repeat: Infinity,
					times: [
						0,
						.2,
						.22,
						.24,
						.6,
						.62,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40,
					scale: .95
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				transition: {
					duration: .7,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "relative z-10 w-full max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 rounded-3xl bg-gold-gradient opacity-20 blur-2xl animate-pulse-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative glass rounded-3xl p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "mb-8 flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								animate: { rotate: [
									0,
									-8,
									8,
									0
								] },
								transition: {
									duration: 4,
									repeat: Infinity
								},
								className: "rounded-xl bg-gold-gradient p-2.5 shadow-luxe",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-6 w-6 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-semibold text-shimmer",
								children: "Lumen"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl",
								children: mode === "login" ? "Welcome back" : "Create account"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: mode === "login" ? "Sign in to access your dashboard" : "Begin illuminating potential"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "mt-8 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									icon: Mail,
									label: "Email",
									type: "email",
									value: email,
									onChange: setEmail,
									placeholder: "you@lumen.edu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									icon: Lock,
									label: "Password",
									type: "password",
									value: password,
									onChange: setPassword,
									placeholder: "••••••••"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
									whileHover: { scale: 1.02 },
									whileTap: { scale: .98 },
									type: "submit",
									disabled: loading,
									className: "relative w-full overflow-hidden rounded-xl bg-gold-gradient py-3.5 font-semibold text-primary-foreground shadow-luxe disabled:opacity-70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative z-10 flex items-center justify-center gap-2",
										children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											animate: { rotate: 360 },
											transition: {
												duration: 1,
												repeat: Infinity,
												ease: "linear"
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" })
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" }), loading ? "Charging..." : mode === "login" ? "Sign In" : "Create Account"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-white/40 skew-x-12 transition-transform duration-700 hover:translate-x-full" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-center text-sm text-muted-foreground",
							children: [
								mode === "login" ? "New here?" : "Already a member?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setMode(mode === "login" ? "signup" : "login"),
									className: "text-gold hover:underline",
									children: mode === "login" ? "Create account" : "Sign in"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-center text-xs text-muted-foreground",
							children: "Demo: any email + 4+ char password works."
						})
					]
				})]
			})
		]
	});
}
function Field({ icon: Icon, label, type, value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 relative group",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-gold transition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type,
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				required: true,
				className: "w-full rounded-xl border border-border bg-input/40 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
			})]
		})]
	});
}
//#endregion
export { LoginPage as component };
