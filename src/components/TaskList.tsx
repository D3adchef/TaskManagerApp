import { Card, Button } from 'react-bootstrap';
import { useTaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, deleteTask } = useTaskContext();

  if (tasks.length === 0) {
    return <p className="text-muted">No tasks available.</p>;
  }

  return (
    <>
      {tasks.map(task => (
        <Card key={task.id} className="mb-3">
          <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>{task.description}</Card.Text>
            <Card.Text>
              <small className="text-muted">
                Created: {task.createdAt.toLocaleString()}
              </small>
            </Card.Text>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default TaskList;
