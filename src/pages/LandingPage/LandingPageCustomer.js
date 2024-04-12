import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./LandingPage.scss";

function LandingPageCustomer() {
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/mapview/customer");
  };
  const navigateToSearch = () => {
    navigate("/search/customer");
  };

  return (
    <Container className="landing-page">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">DeliverEase</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={navigateToSearch}>Browse Services</Nav.Link>
        </Nav>
        <Button onClick={() => navigate("/login")}>Logout</Button>
      </Navbar>

      <Alert variant="success" className="mt-3">
        <Alert.Heading>Welcome to Your Dashboard, Customer!</Alert.Heading>
        <p>Text Here</p>
        <hr />
        <Button variant="primary" onClick={navigateToMap}>
          Track Your Orders
        </Button>
      </Alert>

      <footer className="footer">
        <p>&copy; 2024 DeliverEase.inc</p>
      </footer>
    </Container>
  );
}

export default LandingPageCustomer;
