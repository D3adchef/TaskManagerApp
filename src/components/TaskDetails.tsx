// src/components/TaskDetails.tsx
import { useParams, Link } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useTaskContext();

  const task = tasks.find((t) => t.id === id);

  if (!task) return <div className="container mt-4">Task not found.</div>;

  return (
    <div className="container mt-4">
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Completed:</strong> {task.completed ? 'Yes' : 'No'}</p>
      <p>
        <strong>Created At:</strong>{' '}
        {task.createdAt ? new Date(task.createdAt).toLocaleString() : 'N/A'}
      </p>
      <p>
        <strong>Updated At:</strong>{' '}
        {task.updatedAt ? new Date(task.updatedAt).toLocaleString() : 'N/A'}
      </p>
      <Link className="btn btn-secondary mt-3" to="/dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default TaskDetails;
