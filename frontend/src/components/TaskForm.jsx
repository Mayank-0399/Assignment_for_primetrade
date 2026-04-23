import { useEffect, useState } from "react";

export default function TaskForm({ editingTask, onSave, onCancel }) {
  const [form, setForm] = useState({ title: "", description: "", status: "todo", priority: "medium" });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title || "",
        description: editingTask.description || "",
        status: editingTask.status || "todo",
        priority: editingTask.priority || "medium"
      });
    } else {
      setForm({ title: "", description: "", status: "todo", priority: "medium" });
    }
  }, [editingTask]);

  const submit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="card">
      <h3>{editingTask ? "Edit Task" : "Create Task"}</h3>
      <form onSubmit={submit} className="form">
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="row">
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="row">
          <button type="submit">{editingTask ? "Update" : "Create"}</button>
          {editingTask && <button type="button" className="secondary-btn" onClick={onCancel}>Cancel</button>}
        </div>
      </form>
    </div>
  );
}
