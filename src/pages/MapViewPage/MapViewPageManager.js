<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MapComponent from "./MapComponent";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const MapViewPageManager = () => {
  const [drivers, setDrivers] = useState([]);
=======
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import MapComponent from './MapComponent';
import {Link, useNavigate} from 'react-router-dom';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const MapViewPageManager = () => {
    const [drivers, setDrivers] = useState([]);
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/landingpage/manager");
    };
>>>>>>> Stashed changes

  useEffect(() => {
    const socket = io("http://localhost:8080");

    socket.on("connect", () => {
      socket.emit("register", { role: "Delivery Manager", id: "manager1" });
    });

    socket.on("driversUpdate", setDrivers);

    return () => socket.disconnect();
  }, []);

<<<<<<< Updated upstream
  return (
    <div className="homepage">
      <header>
        <h1>Manager Map View</h1>
        <nav>
          <ul>
            <li>
              <Link to="/landingpage">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/homepage">CONTACTS</Link>
            </li>
            <li>
              <Link to="/homepage">RECENT POSTS</Link>
            </li>
          </ul>
        </nav>
      </header>
=======
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
>>>>>>> Stashed changes

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
