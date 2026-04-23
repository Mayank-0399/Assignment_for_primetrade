const API_BASE = "http://localhost:5000/api/v1";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: "include",   // ✅ VERY IMPORTANT
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

export const api = {
  register: (payload) => request("/auth/register", { method: "POST", body: JSON.stringify(payload) }),
  login: (payload) => request("/auth/login", { method: "POST", body: JSON.stringify(payload) }),
  me: () => request("/auth/me"),
  logout: () => request("/auth/logout", { method: "POST" }),
  getTasks: () => request("/tasks"),
  createTask: (payload) => request("/tasks", { method: "POST", body: JSON.stringify(payload) }),
  updateTask: (id, payload) => request(`/tasks/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteTask: (id) => request(`/tasks/${id}`, { method: "DELETE" })
};