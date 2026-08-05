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

const KEY = "lumen.students.v1";
const AUTH_KEY = "lumen.auth.v1";

export function loadStudents(): Student[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const seed = seedStudents();
      localStorage.setItem(KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw) as Student[];
  } catch { return []; }
}

export function saveStudents(list: Student[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addStudent(s: Omit<Student, "id" | "createdAt">): Student {
  const list = loadStudents();
  const student: Student = { ...s, id: crypto.randomUUID(), createdAt: Date.now() };
  saveStudents([student, ...list]);
  return student;
}

export function deleteStudent(id: string) {
  saveStudents(loadStudents().filter(s => s.id !== id));
}

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
    prev * 0.30 +
    attendance * 0.18 +
    assign * 0.18 +
    study * 0.14 +
    part * 0.12 +
    sleep * 0.08;

  const score = Math.round(Math.max(0, Math.min(1, raw)) * 100);
  const grade = score >= 90 ? "A+" : score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : score >= 50 ? "D" : "F";
  const risk = score >= 75 ? "Low" : score >= 55 ? "Medium" : "High";
  const factors = [
    { label: "Prior Academic", value: Math.round(prev * 100), weight: 30 },
    { label: "Attendance", value: Math.round(attendance * 100), weight: 18 },
    { label: "Assignments", value: Math.round(assign * 100), weight: 18 },
    { label: "Study Habit", value: Math.round(study * 100), weight: 14 },
    { label: "Participation", value: Math.round(part * 100), weight: 12 },
    { label: "Sleep Balance", value: Math.round(sleep * 100), weight: 8 },
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

function seedStudents(): Student[] {
  const now = Date.now();
  return [
    { id: crypto.randomUUID(), name: "Aarav Sharma", email: "aarav@lumen.edu", grade: "10", attendance: 92, studyHours: 22, previousScore: 88, assignments: 95, participation: 8, sleepHours: 7.5, createdAt: now },
    { id: crypto.randomUUID(), name: "Isabella Rossi", email: "isabella@lumen.edu", grade: "11", attendance: 76, studyHours: 12, previousScore: 68, assignments: 70, participation: 6, sleepHours: 6, createdAt: now - 1000 },
    { id: crypto.randomUUID(), name: "Kenji Watanabe", email: "kenji@lumen.edu", grade: "12", attendance: 98, studyHours: 30, previousScore: 94, assignments: 98, participation: 9, sleepHours: 8, createdAt: now - 2000 },
    { id: crypto.randomUUID(), name: "Maya Okafor", email: "maya@lumen.edu", grade: "9", attendance: 60, studyHours: 8, previousScore: 55, assignments: 50, participation: 4, sleepHours: 5, createdAt: now - 3000 },
  ];
}
