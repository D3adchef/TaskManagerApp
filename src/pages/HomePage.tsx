import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  // If the user is already authenticated, redirect to the dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container mt-5">
      <h2>Welcome to the Task Manager App</h2>
      <p>Please log in to manage your tasks.</p>
    </div>
  );
};

export default HomePage;
