import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function LandingPageCustomer() {
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/register");
  };
  const navigateToSearch = () => {
    navigate("/search/customer");
  };

  return (
    <Container className="landing-page">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>DeliverEase</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={navigateToSearch}>Browse Services</Nav.Link>
        </Nav>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </Navbar>

      <Alert variant="success" className="mt-3">
        <Alert.Heading>Welcome to DeliverEase!</Alert.Heading>
        <p>
          We are your ultimate solution for seamless delivery management.
          Whether you're a small business looking to streamline your logistics
          or a large enterprise seeking to optimize your supply chain, we've got
          you covered. Our comprehensive platform offers intuitive tools and
          advanced technologies to help you efficiently manage every aspect of
          the delivery process.
        </p>
        <hr />
        <Button variant="primary" onClick={navigateToMap}>
          New Customers can Register HERE
        </Button>
      </Alert>

      <footer className="footer">
        <p>&copy; 2024 DeliverEase.inc</p>
      </footer>
    </Container>
  );
}

export default LandingPageCustomer;
