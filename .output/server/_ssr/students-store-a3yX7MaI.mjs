//#region node_modules/.nitro/vite/services/ssr/assets/students-store-a3yX7MaI.js
var model_weights_default = {
	intercept: -.32869680033719084,
	previousScore: .8688863464617264,
	attendance: .18369019461236122,
	assignments: .017074356364787765,
	studyHours: .9750904691937906,
	participation: .01671344983441593,
	sleepHours: .027533710986623668
};
var AUTH_KEY = "lumen.auth.v1";
async function fetchJson(input, init) {
	const response = await fetch(input, {
		headers: { "Content-Type": "application/json" },
		...init
	});
	if (!response.ok) {
		const body = await response.text();
		throw new Error(`API request failed: ${response.status} ${body}`);
	}
	return response.json();
}
async function loadStudents() {
	return fetchJson("/api/students");
}
async function addStudent(s) {
	return fetchJson("/api/students", {
		method: "POST",
		body: JSON.stringify(s)
	});
}
async function deleteStudent(id) {
	const response = await fetch(`/api/students/${id}`, { method: "DELETE" });
	if (!response.ok && response.status !== 204) {
		const body = await response.text();
		throw new Error(`Delete failed: ${response.status} ${body}`);
	}
}
function predictPerformance(s) {
	const attendance = s.attendance / 100;
	const study = Math.min(s.studyHours, 40) / 40;
	const prev = s.previousScore / 100;
	const assign = s.assignments / 100;
	const part = s.participation / 10;
	const sleep = Math.max(0, 1 - Math.abs(s.sleepHours - 8) / 6);
	const raw = model_weights_default.intercept + prev * model_weights_default.previousScore + attendance * model_weights_default.attendance + assign * model_weights_default.assignments + study * model_weights_default.studyHours + part * model_weights_default.participation + sleep * model_weights_default.sleepHours;
	const score = Math.round(Math.max(0, Math.min(1, raw)) * 100);
	const grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : score >= 50 ? "D" : "F";
	const risk = score >= 75 ? "Low" : score >= 55 ? "Medium" : "High";
	const factors = [
		{
			label: "Prior Academic",
			value: Math.round(prev * 100),
			weight: Math.round(model_weights_default.previousScore * 100)
		},
		{
			label: "Attendance",
			value: Math.round(attendance * 100),
			weight: Math.round(model_weights_default.attendance * 100)
		},
		{
			label: "Assignments",
			value: Math.round(assign * 100),
			weight: Math.round(model_weights_default.assignments * 100)
		},
		{
			label: "Study Habit",
			value: Math.round(study * 100),
			weight: Math.round(model_weights_default.studyHours * 100)
		},
		{
			label: "Participation",
			value: Math.round(part * 100),
			weight: Math.round(model_weights_default.participation * 100)
		},
		{
			label: "Sleep Balance",
			value: Math.round(sleep * 100),
			weight: Math.round(model_weights_default.sleepHours * 100)
		}
	];
	const suggestions = [];
	if (attendance < .8) suggestions.push("Improve attendance — aim above 85%.");
	if (study < .5) suggestions.push("Increase focused study time to 15+ hrs/week.");
	if (assign < .7) suggestions.push("Complete outstanding assignments consistently.");
	if (part < .5) suggestions.push("Engage more in class — ask & answer questions.");
	if (sleep < .6) suggestions.push("Optimize sleep — target 7-9 hours nightly.");
	if (suggestions.length === 0) suggestions.push("Excellent balance. Maintain your rhythm.");
	return {
		score,
		grade,
		risk,
		factors,
		suggestions
	};
}
function isLoggedIn() {
	if (typeof window === "undefined") return false;
	return localStorage.getItem(AUTH_KEY) === "1";
}
function login(email) {
	localStorage.setItem(AUTH_KEY, "1");
	localStorage.setItem("lumen.auth.v1.email", email);
}
function logout() {
	localStorage.removeItem(AUTH_KEY);
	localStorage.removeItem("lumen.auth.v1.email");
}
//#endregion
export { login as a, loadStudents as i, deleteStudent as n, logout as o, isLoggedIn as r, predictPerformance as s, addStudent as t };
