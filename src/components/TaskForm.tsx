// src/components/TaskForm.tsx
import { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import type { Task } from '../types/Task';
import { v4 as uuidv4 } from 'uuid';

interface TaskFormProps {
  taskToEdit?: Task;
  onFinish: () => void;
}

const TaskForm = ({ taskToEdit, onFinish }: TaskFormProps) => {
  const { addTask, updateTask } = useTaskContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const task: Task = taskToEdit
      ? {
          ...taskToEdit,
          title,
          description,
          updatedAt: new Date(),
        }
      : {
          id: uuidv4(),
          title,
          description,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

    taskToEdit ? updateTask(task) : addTask(task);

    setTitle('');
    setDescription('');
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <button className="btn btn-primary" type="submit">
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
