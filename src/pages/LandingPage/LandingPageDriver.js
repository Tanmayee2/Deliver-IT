import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./LandingPage.scss";

function LandingPageDriver() {
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate("/MapViewPageDriver");
  };

  return (
    <Container className="landing-page">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">DeliverEase</Navbar.Brand>
        <Nav className="mr-auto">//add links here</Nav>
        <Button onClick={() => navigate("/login")}>Logout</Button>
      </Navbar>

      <Alert variant="info" className="mt-3">
        <Alert.Heading>Welcome to Your Driver Dashboard!</Alert.Heading>
        <p>
          Update your current location, check your delivery schedule, and view
          your delivery routes.
        </p>
        <hr />
        <Button variant="primary" onClick={navigateToMap}>
          View Your Route
        </Button>
      </Alert>

      <footer className="footer">
        <p>&copy; 2024 DeliverEase.inc</p>
      </footer>
    </Container>
  );
}

export default LandingPageDriver;
