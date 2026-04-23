import { useEffect, useState } from "react";
import { api } from "../api";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Dashboard({ user, onLogout, showMessage }) {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    const data = await api.getTasks();
    setTasks(data.tasks);
  };

  useEffect(() => {
    loadTasks().catch((err) => showMessage(err.message));
  }, []);

  const handleSave  = async (payload) => {
    try {
      if (editingTask) {
        await api.updateTask(editingTask._id, payload);
        showMessage("Task updated successfully");
      } else {
        await api.createTask(payload);
        showMessage("Task created successfully");
      }
      setEditingTask(null);
      await loadTasks();
    } catch (err) {
      showMessage(err.message);
    }
  };

  const handleDelete = async (id) => {
    try { await api.deleteTask(id);
      showMessage("Task deleted successfully");
      await loadTasks();
    } catch (err) {
      showMessage(err.message);
    }
  };

  return (
    <div className="dashboard-grid">
      <div className="card profile-card">
        <h2>Welcome, {user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <button onClick={onLogout} className="secondary-btn">Logout</button>
      </div>

      <TaskForm
        editingTask={editingTask}
        onSave={handleSave}
        onCancel={() => setEditingTask(null)}
      />

      <TaskList
        tasks={tasks}
        userRole={user.role}
        onEdit={setEditingTask}
        onDelete={handleDelete}
      />
    </div>
  );
}