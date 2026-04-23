import { useState } from "react";
import { api } from "../api";

export default function AuthCard({ onAuth, showMessage }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = mode === "register"
        ? { name: form.name, email: form.email, password: form.password }
        : { email: form.email, password: form.password };

      const data = mode === "register" ? await api.register(payload) : await api.login(payload);
      onAuth(data.user, data.message);
    } catch (err) {
      showMessage(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="card auth-card">
      <div className="tabs">
        <button className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>Login</button>
        <button className={mode === "register" ? "active" : ""} onClick={() => setMode("register")}>Register</button>
      </div>

      <form onSubmit={submit} className="form">
        {mode === "register" && (
          <input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        )}
        <input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button disabled={loading}>{loading ? "Please wait..." : mode === "register" ? "Create account" : "Login"}</button>
      </form>
    </div>
  );
}