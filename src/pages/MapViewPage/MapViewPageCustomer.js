import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MapComponent from "./MapComponent";
import { Link, useNavigate } from "react-router-dom";
import { Box, LinearProgress, Typography } from "@mui/material";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const MapViewPageCustomer = () => {
  const [position, setPosition] = useState({ lat: 39.1653, lng: -86.5264 });
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/landingpage/customer");
  };
  const navigateToChat = () => {
    navigate("/chat");
  };

  useEffect(() => {
    const socket = io("https://delivery-it-server.onrender.com");

    socket.on("connect", () => {
      socket.emit("register", { role: "Customer", id: "customer1" });
    });

    socket.on("packagePositionUpdate", (newPosition) => {
      setPosition(newPosition);
      setProgress((oldProgress) =>
        oldProgress < 100 ? oldProgress + 10 : 100
      );
    });

    return () => socket.disconnect();
  }, []);

  const data = [{ position }];
  return (
    <div className="homepage">
      <header>
        <h1>Customer Map View</h1>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">DeliverEase</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
          </Nav>
          <Button onClick={() => navigate("/login")}>Logout</Button>
        </Navbar>
      </header>
      <div className="map-container">
        <Box sx={{ width: "100%", mr: 1, mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Delivery Progress ({progress}%)
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        <MapComponent data={data} role="Customer" updatePosition={position} />
      </div>
      <footer>
        <p>&copy; 2024 DeliverEase.inc</p>
      </footer>
    </div>
  );
};

export default MapViewPageCustomer;
