import { r as __exportAll } from "../_runtime.mjs";
import { t as require_lib } from "../_libs/mongodb.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/index.js
var ssr_exports = /* @__PURE__ */ __exportAll({
	default: () => server_default,
	t: () => renderErrorPage
});
var import_lib = require_lib();
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var uri = processModule.env.MONGODB_URI || "mongodb://localhost:27017";
var dbName = processModule.env.MONGODB_DB || "lumen";
var cachedClient = null;
var cachedDb = null;
async function getDb() {
	if (cachedDb) return cachedDb;
	if (!cachedClient) cachedClient = new import_lib.MongoClient(uri);
	await cachedClient.connect();
	cachedDb = cachedClient.db(dbName);
	return cachedDb;
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-aAiukK2l.mjs").then((n) => n.t).then((m) => m.default ?? m);
	return serverEntryPromise;
}
var seedStudents = () => [
	{
		id: crypto.randomUUID(),
		name: "Aarav Sharma",
		email: "aarav@lumen.edu",
		grade: "10",
		attendance: 92,
		studyHours: 22,
		previousScore: 88,
		assignments: 95,
		participation: 8,
		sleepHours: 7.5,
		createdAt: Date.now()
	},
	{
		id: crypto.randomUUID(),
		name: "Isabella Rossi",
		email: "isabella@lumen.edu",
		grade: "11",
		attendance: 76,
		studyHours: 12,
		previousScore: 68,
		assignments: 70,
		participation: 6,
		sleepHours: 6,
		createdAt: Date.now() - 1e3
	},
	{
		id: crypto.randomUUID(),
		name: "Kenji Watanabe",
		email: "kenji@lumen.edu",
		grade: "12",
		attendance: 98,
		studyHours: 30,
		previousScore: 94,
		assignments: 98,
		participation: 9,
		sleepHours: 8,
		createdAt: Date.now() - 2e3
	},
	{
		id: crypto.randomUUID(),
		name: "Maya Okafor",
		email: "maya@lumen.edu",
		grade: "9",
		attendance: 60,
		studyHours: 8,
		previousScore: 55,
		assignments: 50,
		participation: 4,
		sleepHours: 5,
		createdAt: Date.now() - 3e3
	},
	{
		id: crypto.randomUUID(),
		name: "Daniela Cruz",
		email: "daniela@lumen.edu",
		grade: "11",
		attendance: 85,
		studyHours: 18,
		previousScore: 81,
		assignments: 88,
		participation: 7,
		sleepHours: 7,
		createdAt: Date.now() - 4e3
	},
	{
		id: crypto.randomUUID(),
		name: "Noah Kim",
		email: "noah@lumen.edu",
		grade: "12",
		attendance: 89,
		studyHours: 25,
		previousScore: 91,
		assignments: 94,
		participation: 8,
		sleepHours: 8.5,
		createdAt: Date.now() - 5e3
	},
	{
		id: crypto.randomUUID(),
		name: "Priya Patel",
		email: "priya@lumen.edu",
		grade: "10",
		attendance: 72,
		studyHours: 14,
		previousScore: 65,
		assignments: 75,
		participation: 6,
		sleepHours: 6.5,
		createdAt: Date.now() - 6e3
	},
	{
		id: crypto.randomUUID(),
		name: "Samuel Mbatha",
		email: "samuel@lumen.edu",
		grade: "9",
		attendance: 68,
		studyHours: 10,
		previousScore: 59,
		assignments: 62,
		participation: 5,
		sleepHours: 6.5,
		createdAt: Date.now() - 7e3
	}
];
async function ensureSeeded() {
	const collection = (await getDb()).collection("students");
	if (await collection.countDocuments() === 0) await collection.insertMany(seedStudents());
}
async function handleApi(request) {
	const url = new URL(request.url);
	if (!url.pathname.startsWith("/api/students")) return null;
	const collection = (await getDb()).collection("students");
	await ensureSeeded();
	if (request.method === "GET" && url.pathname === "/api/students") {
		const students = await collection.find().sort({ createdAt: -1 }).toArray();
		return new Response(JSON.stringify(students), {
			status: 200,
			headers: { "content-type": "application/json" }
		});
	}
	if (request.method === "POST" && url.pathname === "/api/students") {
		const body = await request.json();
		const student = {
			id: crypto.randomUUID(),
			createdAt: Date.now(),
			...body
		};
		await collection.insertOne(student);
		return new Response(JSON.stringify(student), {
			status: 201,
			headers: { "content-type": "application/json" }
		});
	}
	if (request.method === "DELETE" && url.pathname.startsWith("/api/students/")) {
		const id = url.pathname.split("/").pop();
		if (!id) return new Response(JSON.stringify({ error: "Missing student id" }), {
			status: 400,
			headers: { "content-type": "application/json" }
		});
		if ((await collection.deleteOne({ id })).deletedCount === 0) return new Response(JSON.stringify({ error: "Student not found" }), {
			status: 404,
			headers: { "content-type": "application/json" }
		});
		return new Response(null, { status: 204 });
	}
	return new Response(JSON.stringify({ error: "Method not allowed" }), {
		status: 405,
		headers: { "content-type": "application/json" }
	});
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		const apiResponse = await handleApi(request);
		if (apiResponse) return apiResponse;
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, ssr_exports as n, renderErrorPage as t };
