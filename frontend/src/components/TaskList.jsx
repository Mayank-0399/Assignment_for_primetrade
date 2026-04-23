export default function TaskList({ tasks, userRole, onEdit, onDelete }) {
  return (
    <div className="card task-list">
      <h3>Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="task-item">
            <div>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <small>Status: {task.status} | Priority: {task.priority}</small>
            </div>
            <div className="row">
              <button onClick={() => onEdit(task)}>Edit</button>
              {(userRole === "admin" || true) && (
                <button className="danger-btn" onClick={() => onDelete(task._id)}>Delete</button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}