import { useEffect, useState } from "react";
import { api } from "./api";
import AuthCard from "./components/AuthCard";
import Dashboard from "./components/Dashboard";
import Message from "./components/Message";

export default function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  useEffect(() => {
    api.me()
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const handleAuth = (u, text) => {
    setUser(u);
    showMessage(text);
  };

  const handleLogout = async () => {
    await api.logout();
    setUser(null);
    showMessage("Logged out successfully");
  };

  if (loading) return <div className="page-center">Loading...</div>;

  return (
    <div className="app-shell">
      <Message message={message} />
      <div className="hero">
        <h1>Backend Assignment Demo</h1>
        <p>JWT auth, role-based access, protected dashboard, and task CRUD.</p>
      </div>

      {!user ? (
        <AuthCard onAuth={handleAuth} showMessage={showMessage} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} showMessage={showMessage} />
      )}
    </div>
  );
}