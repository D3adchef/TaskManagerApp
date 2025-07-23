// src/components/NavigationBar.tsx

import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Task Manager</Navbar.Brand>
        <Nav className="ms-auto">
          {isAuthenticated && user && (
            <Navbar.Text className="me-3">
              Welcome, {user.name}
            </Navbar.Text>
          )}

          {!isAuthenticated ? (
            <Button variant="outline-light" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          ) : (
            <Button
              variant="outline-light"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
