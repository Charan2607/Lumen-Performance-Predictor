import { o as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { i as loadStudents, n as deleteStudent, r as isLoggedIn, s as predictPerformance, t as addStudent } from "./students-store-a3yX7MaI.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Award, a as Trash2, i as TrendingUp, l as Search, n as Users, r as TriangleAlert, u as Plus } from "../_libs/lucide-react.mjs";
import { t as Nav } from "./nav-rPQqZ3WF.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-Cmsd7-PJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const nav = useNavigate();
	const [students, setStudents] = (0, import_react.useState)([]);
	const [query, setQuery] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!isLoggedIn()) {
			nav({ to: "/login" });
			return;
		}
		let isMounted = true;
		(async () => {
			try {
				const data = await loadStudents();
				if (isMounted) setStudents(data);
			} catch (error) {
				console.error(error);
			} finally {
				if (isMounted) setLoading(false);
			}
		})();
		return () => {
			isMounted = false;
		};
	}, [nav]);
	const filtered = students.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.email.toLowerCase().includes(query.toLowerCase()));
	const predictions = students.map((s) => ({
		s,
		p: predictPerformance(s)
	}));
	const avg = predictions.length ? Math.round(predictions.reduce((a, b) => a + b.p.score, 0) / predictions.length) : 0;
	const atRisk = predictions.filter((x) => x.p.risk === "High").length;
	const top = predictions.filter((x) => x.p.risk === "Low").length;
	async function handleAdd(s) {
		try {
			const student = await addStudent(s);
			setStudents((prev) => [student, ...prev]);
			setOpen(false);
			toast.success(`${s.name} added.`);
		} catch (error) {
			console.error(error);
			toast.error("Unable to add student.");
		}
	}
	async function handleDelete(id, name) {
		try {
			await deleteStudent(id);
			setStudents((prev) => prev.filter((student) => student.id !== id));
			toast.success(`${name} removed.`);
		} catch (error) {
			console.error(error);
			toast.error("Unable to remove student.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-4xl md:text-5xl",
							children: ["Student ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-shimmer",
								children: "Dashboard"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Manage, monitor and predict outcomes across your cohort."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								icon: Users,
								label: "Total Students",
								value: students.length,
								accent: "gold"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								icon: TrendingUp,
								label: "Avg. Predicted",
								value: `${avg}%`,
								accent: "gold"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								icon: Award,
								label: "High Performers",
								value: top,
								accent: "green"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
								icon: TriangleAlert,
								label: "At Risk",
								value: atRisk,
								accent: "red"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 min-w-[240px] max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Search students...",
								className: "w-full rounded-full border border-border bg-input/40 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-gold"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							whileHover: { scale: 1.03 },
							whileTap: { scale: .97 },
							onClick: () => setOpen(true),
							className: "inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-luxe",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Student"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: filtered.map((s, i) => {
							const p = predictPerformance(s);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								layout: true,
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									scale: .9
								},
								transition: { delay: i * .03 },
								whileHover: { y: -4 },
								className: "glass rounded-2xl p-5 group relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 h-1 w-full ${p.risk === "Low" ? "bg-emerald-400" : p.risk === "Medium" ? "bg-yellow-400" : "bg-red-400"}` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-11 w-11 place-items-center rounded-full bg-gold-gradient font-semibold text-primary-foreground",
												children: s.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: s.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs text-muted-foreground",
												children: [
													"Grade ",
													s.grade,
													" · ",
													s.email
												]
											})] })]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleDelete(s.id, s.name),
											className: "opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-red-400 transition",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-end justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs uppercase tracking-widest text-muted-foreground",
											children: "Predicted"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-display text-4xl text-shimmer",
											children: [p.score, "%"]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-2xl text-gold",
												children: p.grade
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `text-xs ${p.risk === "Low" ? "text-emerald-400" : p.risk === "Medium" ? "text-yellow-400" : "text-red-400"}`,
												children: [p.risk, " Risk"]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 space-y-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBar, {
												label: "Attendance",
												v: s.attendance
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBar, {
												label: "Study Hours",
												v: s.studyHours / 40 * 100
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBar, {
												label: "Assignments",
												v: s.assignments
											})
										]
									})
								]
							}, s.id);
						}) })
					}),
					filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 text-center text-muted-foreground",
						children: "No students match your search."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddModal, {
				onClose: () => setOpen(false),
				onAdd: handleAdd
			}) })
		]
	});
}
function StatCard({ icon: Icon, label, value, accent }) {
	const color = accent === "green" ? "text-emerald-400" : accent === "red" ? "text-red-400" : "text-gold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		whileHover: { y: -3 },
		className: "glass rounded-2xl p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-widest text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${color}` })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-2 font-display text-3xl ${color}`,
			children: value
		})]
	});
}
function MiniBar({ label, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(v), "%"] })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 h-1 rounded-full bg-secondary overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: { width: 0 },
			animate: { width: `${v}%` },
			transition: {
				duration: .9,
				ease: "easeOut"
			},
			className: "h-full bg-gold-gradient"
		})
	})] });
}
function AddModal({ onClose, onAdd }) {
	const [f, setF] = (0, import_react.useState)({
		name: "",
		email: "",
		grade: "10",
		attendance: 85,
		studyHours: 15,
		previousScore: 75,
		assignments: 80,
		participation: 7,
		sleepHours: 7
	});
	function submit(e) {
		e.preventDefault();
		if (!f.name || !f.email) {
			toast.error("Name and email required.");
			return;
		}
		onAdd(f);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		className: "fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-md p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
			onClick: (e) => e.stopPropagation(),
			onSubmit: submit,
			initial: {
				y: 40,
				opacity: 0,
				scale: .95
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: 30,
				opacity: 0
			},
			transition: {
				type: "spring",
				damping: 22
			},
			className: "glass relative w-full max-w-2xl rounded-3xl p-8 max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 -z-10 rounded-3xl bg-gold-gradient opacity-20 blur-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl",
					children: ["Add ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-shimmer",
						children: "Student"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Enter behavioural signals to include this learner."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							label: "Full name",
							value: f.name,
							onChange: (v) => setF({
								...f,
								name: v
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							label: "Email",
							value: f.email,
							onChange: (v) => setF({
								...f,
								email: v
							}),
							type: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							label: "Grade",
							value: f.grade,
							onChange: (v) => setF({
								...f,
								grade: v
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Num, {
							label: "Previous score (%)",
							value: f.previousScore,
							onChange: (v) => setF({
								...f,
								previousScore: v
							}),
							max: 100
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
							label: "Sleep (hrs/night)",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "rounded-full border border-border px-5 py-2.5 text-sm",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
						whileHover: { scale: 1.03 },
						whileTap: { scale: .97 },
						type: "submit",
						className: "rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-luxe",
						children: "Add Student"
					})]
				})
			]
		})
	});
}
function Text({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-2 w-full rounded-xl border border-border bg-input/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
		})]
	});
}
function Num({ label, value, onChange, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			value,
			min: 0,
			max,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "mt-2 w-full rounded-xl border border-border bg-input/40 px-4 py-2.5 text-sm outline-none focus:border-gold"
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
//#endregion
export { Dashboard as component };
