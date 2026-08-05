export type Student = {
  id: string;
  name: string;
  email: string;
  grade: string;
  attendance: number; // 0-100
  studyHours: number; // 0-40 per week
  previousScore: number; // 0-100
  assignments: number; // 0-100 completion %
  participation: number; // 0-10
  sleepHours: number; // 0-12
  createdAt: number;
};

const AUTH_KEY = "lumen.auth.v1";

async function fetchJson<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const response = await fetch(input, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`API request failed: ${response.status} ${body}`);
  }
  return response.json();
}

export async function loadStudents(): Promise<Student[]> {
  return fetchJson<Student[]>("/api/students");
}

export async function addStudent(s: Omit<Student, "id" | "createdAt">): Promise<Student> {
  return fetchJson<Student>("/api/students", {
    method: "POST",
    body: JSON.stringify(s),
  });
}

export async function deleteStudent(id: string): Promise<void> {
  const response = await fetch(`/api/students/${id}`, {
    method: "DELETE",
  });
  if (!response.ok && response.status !== 204) {
    const body = await response.text();
    throw new Error(`Delete failed: ${response.status} ${body}`);
  }
}

import weights from "./model-weights.json";

export function predictPerformance(s: Pick<Student, "attendance" | "studyHours" | "previousScore" | "assignments" | "participation" | "sleepHours">) {
  // Weighted model producing a 0-100 predicted score.
  const attendance = s.attendance / 100;
  const study = Math.min(s.studyHours, 40) / 40;
  const prev = s.previousScore / 100;
  const assign = s.assignments / 100;
  const part = s.participation / 10;
  // Sleep: optimal at 8h — Gaussian-ish falloff
  const sleep = Math.max(0, 1 - Math.abs(s.sleepHours - 8) / 6);

  const raw =
    weights.intercept +
    prev * weights.previousScore +
    attendance * weights.attendance +
    assign * weights.assignments +
    study * weights.studyHours +
    part * weights.participation +
    sleep * weights.sleepHours;

  const score = Math.round(Math.max(0, Math.min(1, raw)) * 100);
  const grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : score >= 50 ? "D" : "F";
  const risk = score >= 75 ? "Low" : score >= 55 ? "Medium" : "High";
  const factors = [
    { label: "Prior Academic", value: Math.round(prev * 100), weight: Math.round(weights.previousScore * 100) },
    { label: "Attendance", value: Math.round(attendance * 100), weight: Math.round(weights.attendance * 100) },
    { label: "Assignments", value: Math.round(assign * 100), weight: Math.round(weights.assignments * 100) },
    { label: "Study Habit", value: Math.round(study * 100), weight: Math.round(weights.studyHours * 100) },
    { label: "Participation", value: Math.round(part * 100), weight: Math.round(weights.participation * 100) },
    { label: "Sleep Balance", value: Math.round(sleep * 100), weight: Math.round(weights.sleepHours * 100) },
  ];
  const suggestions: string[] = [];
  if (attendance < 0.8) suggestions.push("Improve attendance — aim above 85%.");
  if (study < 0.5) suggestions.push("Increase focused study time to 15+ hrs/week.");
  if (assign < 0.7) suggestions.push("Complete outstanding assignments consistently.");
  if (part < 0.5) suggestions.push("Engage more in class — ask & answer questions.");
  if (sleep < 0.6) suggestions.push("Optimize sleep — target 7-9 hours nightly.");
  if (suggestions.length === 0) suggestions.push("Excellent balance. Maintain your rhythm.");

  return { score, grade, risk, factors, suggestions };
}

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "1";
}
export function login(email: string) {
  localStorage.setItem(AUTH_KEY, "1");
  localStorage.setItem(AUTH_KEY + ".email", email);
}
export function logout() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(AUTH_KEY + ".email");
}
export function currentEmail(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(AUTH_KEY + ".email") || "";
}
