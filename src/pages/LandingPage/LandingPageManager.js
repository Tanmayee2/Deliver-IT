import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function LandingPageManager() {
  const navigate = useNavigate();
  const navigateToMap = () => {
    navigate("/mapview/manager");
  };
  const navigateToSearch = () => {
    navigate("/search/manager");
  };
  return (
    <Container className="landing-page">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">DeliverEase</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={navigateToSearch}>Search Employees</Nav.Link>
        </Nav>
        <Button onClick={() => navigate("/login")}>Logout</Button>
      </Navbar>

      <Alert variant="warning" className="mt-3">
        <Alert.Heading>Welcome to Your Management Dashboard!</Alert.Heading>
        <p>
          Oversee all delivery operations, manage driver assignments, and track
          delivery statuses.
        </p>
        <hr />
        <Button variant="primary" onClick={navigateToMap}>
          Manage Deliveries
        </Button>
      </Alert>

      <footer className="footer">
        <p>&copy; 2024 DeliverEase.inc</p>
      </footer>
    </Container>
  );
}

export default LandingPageManager;
