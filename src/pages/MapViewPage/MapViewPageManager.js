import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MapComponent from "./MapComponent";
import { Link, useNavigate } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const MapViewPageManager = () => {
  const [drivers, setDrivers] = useState([]);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/landingpage/manager");
  };

  useEffect(() => {
    const socket = io("https://delivery-it-server.onrender.com");

    socket.on("connect", () => {
      socket.emit("register", { role: "Delivery Manager", id: "manager1" });
    });

    socket.on("driversUpdate", setDrivers);

    return () => socket.disconnect();
  }, []);

  return (
    <div className="homepage">
      <header>
        <h1>Manager Map View</h1>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">DeliverEase</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
          </Nav>
          <Button onClick={() => navigate("/login")}>Logout</Button>
        </Navbar>
      </header>

      <div className="map-container">
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Typography variant="h6" component="div" sx={{ m: 2 }}>
            Active Drivers:
          </Typography>
          {drivers.map((driver, index) => (
            <ListItem key={index}>
              <ListItemText primary={`Driver ${driver.id}: ${driver.status}`} />
            </ListItem>
          ))}
        </List>
        <MapComponent
          data={drivers}
          role="Delivery Manager"
          updatePosition={{}}
        />
      </div>
      <footer>
        <p>&copy; 2024 DeliverEase.inc</p>
      </footer>
    </div>
  );
};

export default MapViewPageManager;
