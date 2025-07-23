// src/pages/Dashboard.tsx
import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../context/TaskContext';
import type { Task } from '../types/Task';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { tasks, deleteTask } = useTaskContext();
  const [taskToEdit, setTaskToEdit] = useState<Task | undefined>(undefined);

  const handleEdit = (task: Task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="container mt-4">
      <h2>Add New Task</h2>
      <TaskForm taskToEdit={taskToEdit} onFinish={() => setTaskToEdit(undefined)} />

      <hr />
      <h3>Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card mb-3">
            <div className="card-body">
              <Link to={`/task/${task.id}`} style={{ textDecoration: 'none' }}>
                <h5 className="card-title">{task.title}</h5>
              </Link>
              <p className="card-text">{task.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Created: {new Date(task.createdAt).toLocaleString()} | Updated: {new Date(task.updatedAt).toLocaleString()}
                </small>
              </p>
              <button className="btn btn-secondary me-2" onClick={() => handleEdit(task)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
