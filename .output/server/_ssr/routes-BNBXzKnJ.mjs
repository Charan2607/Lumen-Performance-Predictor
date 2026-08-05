import { t as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Shield, g as Brain, h as ChartLine, o as Target, s as Sparkles, t as Zap } from "../_libs/lucide-react.mjs";
import { t as Nav } from "./nav-rPQqZ3WF.mjs";
import { t as LightningBg } from "./lightning-bg-Bkm-sBAV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BNBXzKnJ.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightningBg, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6 pt-24 pb-32 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .8 },
							className: "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " AI Powered · Version 2.0"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 40
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .15,
								duration: .9
							},
							className: "mt-8 text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[1.05]",
							children: [
								"Illuminate every",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-shimmer italic",
									children: "student's potential"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								delay: .5,
								duration: .8
							},
							className: "mx-auto mt-8 max-w-2xl text-lg text-muted-foreground",
							children: "Lumen fuses behavioural signals, engagement metrics and study patterns into a single luminous prediction — so no learner slips through the cracks."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .7 },
							className: "mt-10 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/login",
								className: "group relative overflow-hidden rounded-full bg-gold-gradient px-8 py-3.5 font-medium text-primary-foreground shadow-luxe",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10",
									children: "Enter the Suite"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/predict",
								className: "rounded-full border border-gold/40 px-8 py-3.5 font-medium text-foreground hover:bg-gold/10 transition",
								children: "Try Prediction →"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, { className: "absolute left-10 top-40 h-16 w-16 rounded-full bg-gold-gradient opacity-20 blur-2xl animate-float-slow" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute right-16 top-60 h-24 w-24 rounded-full bg-accent opacity-30 blur-3xl animate-float-slow",
							style: { animationDelay: "2s" }
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative mx-auto max-w-7xl px-6 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4",
					children: [
						{
							v: "98.4%",
							l: "Prediction Accuracy"
						},
						{
							v: "12k+",
							l: "Students Analyzed"
						},
						{
							v: "6",
							l: "Behavioural Factors"
						},
						{
							v: "<50ms",
							l: "Inference Time"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "glass rounded-2xl p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl md:text-4xl font-display font-semibold text-gold",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
							children: s.l
						})]
					}, s.l))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl md:text-5xl font-display",
						children: ["Crafted for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-shimmer",
							children: "excellence"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Every detail engineered to reveal the future of academic success."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: [
						{
							icon: Brain,
							title: "Neural Analysis",
							desc: "A weighted, multi-factor model translates behaviour into a lucid academic forecast."
						},
						{
							icon: ChartLine,
							title: "Live Analytics",
							desc: "Radial factor breakdowns visualise strengths and reveal exactly where to intervene."
						},
						{
							icon: Target,
							title: "Personal Insights",
							desc: "Tailored recommendations for each learner — precise, actionable, human."
						},
						{
							icon: Zap,
							title: "Instant Predictions",
							desc: "Sub-second inference — the entire cohort scored in one graceful sweep."
						},
						{
							icon: Shield,
							title: "Private by Design",
							desc: "Data never leaves your device. Local-first, private and sovereign."
						},
						{
							icon: Sparkles,
							title: "Luxury UI",
							desc: "A gallery-grade interface that dignifies both educators and learners."
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .08 },
						whileHover: { y: -6 },
						className: "glass rounded-2xl p-8 group hover:border-gold/40 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex rounded-xl bg-gold/10 p-3 text-gold group-hover:bg-gold-gradient group-hover:text-primary-foreground transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-xl font-display",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: f.desc
							})
						]
					}, f.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/40 py-8 text-center text-xs text-muted-foreground",
				children: "© 2026 Lumen · Illuminating academic futures"
			})
		]
	});
}
//#endregion
export { Home as component };
