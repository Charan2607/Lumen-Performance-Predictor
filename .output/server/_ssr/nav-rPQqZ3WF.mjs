import { o as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { o as logout, r as isLoggedIn } from "./students-store-a3yX7MaI.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as LogOut, m as GraduationCap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nav-rPQqZ3WF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Nav() {
	const navigate = useNavigate();
	const loc = useRouterState({ select: (s) => s.location.pathname });
	const [authed, setAuthed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setAuthed(isLoggedIn());
	}, [loc]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		className: "sticky top-0 z-40 glass border-b border-border/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						whileHover: {
							rotate: 12,
							scale: 1.1
						},
						className: "rounded-lg bg-gold-gradient p-2 shadow-luxe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5 text-primary-foreground" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-semibold text-shimmer",
						children: "Lumen"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:flex items-center gap-8",
					children: [
						{
							to: "/",
							label: "Home"
						},
						{
							to: "/dashboard",
							label: "Dashboard"
						},
						{
							to: "/predict",
							label: "Predict"
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: "relative text-sm text-muted-foreground hover:text-gold transition-colors",
						children: [l.label, loc === l.to && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "navdot",
							className: "absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold"
						})]
					}, l.to))
				}),
				authed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						logout();
						setAuthed(false);
						navigate({ to: "/login" });
					},
					className: "flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-gold hover:text-gold transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Sign out"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "rounded-full bg-gold-gradient px-5 py-2 text-sm font-medium text-primary-foreground shadow-luxe hover:animate-pulse-glow",
					children: "Sign in"
				})
			]
		})
	});
}
//#endregion
export { Nav as t };
