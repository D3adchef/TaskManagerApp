import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="container mt-5">
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <Link to="/dashboard" className="btn btn-primary mt-3">
          Go to Dashboard
        </Link>
      ) : (
        <p className="mt-3">Please log in to manage your tasks.</p>
      )}
    </div>
  );
};

export default Home;
