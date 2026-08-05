import { o as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { s as predictPerformance } from "./students-store-a3yX7MaI.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as Sparkles, t as Zap } from "../_libs/lucide-react.mjs";
import { t as Nav } from "./nav-rPQqZ3WF.mjs";
import { t as LightningBg } from "./lightning-bg-Bkm-sBAV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/predict-BOiYnBsk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Predict() {
	const [f, setF] = (0, import_react.useState)({
		attendance: 85,
		studyHours: 15,
		previousScore: 75,
		assignments: 80,
		participation: 7,
		sleepHours: 7
	});
	const [computed, setComputed] = (0, import_react.useState)(null);
	const [running, setRunning] = (0, import_react.useState)(false);
	const live = (0, import_react.useMemo)(() => predictPerformance(f), [f]);
	function run() {
		setRunning(true);
		setTimeout(() => {
			setComputed(live);
			setRunning(false);
		}, 900);
	}
	const result = computed ?? live;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightningBg, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-6 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Live Prediction"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-display text-5xl md:text-6xl",
							children: ["Predict a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-shimmer",
								children: "Score"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground max-w-xl",
							children: "Adjust the signals — watch the forecast reshape in real time."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						className: "glass rounded-3xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Behavioural Inputs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										label: "Previous score",
										v: f.previousScore,
										onChange: (v) => setF({
											...f,
											previousScore: v
										}),
										max: 100,
										suffix: "%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										label: "Attendance",
										v: f.attendance,
										onChange: (v) => setF({
											...f,
											attendance: v
										}),
										max: 100,
										suffix: "%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										label: "Assignments complete",
										v: f.assignments,
										onChange: (v) => setF({
											...f,
											assignments: v
										}),
										max: 100,
										suffix: "%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										label: "Study hours / week",
										v: f.studyHours,
										onChange: (v) => setF({
											...f,
											studyHours: v
										}),
										max: 40,
										suffix: "h"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										label: "Participation",
										v: f.participation,
										onChange: (v) => setF({
											...f,
											participation: v
										}),
										max: 10,
										suffix: "/10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
										label: "Sleep per night",
										v: f.sleepHours,
										onChange: (v) => setF({
											...f,
											sleepHours: v
										}),
										max: 12,
										suffix: "h",
										step: .5
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								whileHover: { scale: 1.02 },
								whileTap: { scale: .98 },
								onClick: run,
								className: "mt-8 relative w-full overflow-hidden rounded-xl bg-gold-gradient py-3.5 font-semibold text-primary-foreground shadow-luxe",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative z-10 inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										animate: running ? { rotate: 360 } : {},
										transition: {
											duration: 1,
											repeat: Infinity,
											ease: "linear"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" })
									}), running ? "Computing..." : "Run Prediction"]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: 20
						},
						animate: {
							opacity: 1,
							x: 0
						},
						className: "glass rounded-3xl p-8 relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold-gradient opacity-20 blur-3xl animate-pulse-glow" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Predicted Outcome"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialScore, { value: result.score }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-widest text-muted-foreground",
										children: "Grade"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-6xl text-shimmer",
										children: result.grade
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `mt-1 text-sm ${result.risk === "Low" ? "text-emerald-400" : result.risk === "Medium" ? "text-yellow-400" : "text-red-400"}`,
										children: [result.risk, " risk"]
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground mb-3",
									children: "Factor Breakdown"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2.5",
									children: result.factors.map((fac, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											x: 10
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: i * .05 },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												fac.label,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted-foreground",
													children: [
														"· ",
														fac.weight,
														"%"
													]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-gold",
												children: [fac.value, "%"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 h-1.5 rounded-full bg-secondary overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: { width: 0 },
												animate: { width: `${fac.value}%` },
												transition: {
													duration: .8,
													ease: "easeOut"
												},
												className: "h-full bg-gold-gradient"
											})
										})]
									}, fac.label))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-xl border border-gold/20 bg-gold/5 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-gold mb-2",
									children: "Recommendations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1.5 text-sm",
									children: result.suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold",
											children: "◆"
										}), s]
									}, s))
								})]
							})
						]
					})]
				})]
			})]
		})]
	});
}
function Slider({ label, v, onChange, max, suffix, step = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between text-xs uppercase tracking-widest text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-gold",
				children: [v, suffix]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min: 0,
			max,
			step,
			value: v,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "mt-2 w-full accent-[oklch(0.82_0.14_85)]"
		})]
	});
}
function RadialScore({ value }) {
	const r = 54;
	const c = 2 * Math.PI * r;
	const offset = c - value / 100 * c;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-36 w-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "h-full w-full -rotate-90",
			viewBox: "0 0 128 128",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "64",
					cy: "64",
					r,
					stroke: "oklch(0.24 0.04 285)",
					strokeWidth: "10",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					cx: "64",
					cy: "64",
					r,
					stroke: "url(#g)",
					strokeWidth: "10",
					fill: "none",
					strokeLinecap: "round",
					strokeDasharray: c,
					initial: { strokeDashoffset: c },
					animate: { strokeDashoffset: offset },
					transition: {
						duration: 1,
						ease: "easeOut"
					},
					style: { filter: "drop-shadow(0 0 8px oklch(0.82 0.14 85 / 0.6))" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "g",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.82 0.14 85)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.9 0.09 90)"
					})]
				}) })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-3xl text-shimmer",
					children: value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground",
					children: "Score"
				})]
			})
		})]
	});
}
//#endregion
export { Predict as component };
