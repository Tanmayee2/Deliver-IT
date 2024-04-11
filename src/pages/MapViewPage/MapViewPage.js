import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MapComponent from "./MapComponent";
import { Link } from "react-router-dom";
import {
  Typography,
  LinearProgress,
  Box,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";

const MapViewPage = () => {
  const userProfiles = {
    "Delivery Driver": { role: "Delivery Driver", id: "driver1" },
    Customer: { role: "Customer", id: "customer1" },
    "Delivery Manager": { role: "Delivery Manager", id: "manager1" },
  };

  const [user, setUser] = useState(userProfiles["Customer"]);
  const [position, setPosition] = useState({ lat: 39.1653, lng: -86.5264 });
  const [progress, setProgress] = useState(0);
  const [drivers, setDrivers] = useState([]); // Array to hold driver info

  useEffect(() => {
    const socket = io("http://localhost:8080");
    socket.on("connect", () => {
      console.log("Connected to server");
      socket.emit("register", { role: user.role, id: user.id });
    });

    socket.on("driversUpdate", (newDrivers) => {
      setDrivers(newDrivers);
    });

    socket.on("packagePositionUpdate", (newPosition) => {
      if (user.role === "Customer") {
        setPosition(newPosition);
        setProgress((oldProgress) =>
          oldProgress < 100 ? oldProgress + 10 : 100
        );
      }
    });

    return () => socket.disconnect();
  }, [user]);

  const handleRoleChange = (role) => {
    setUser(userProfiles[role]);
    if (role === "Customer") {
      setProgress(0);
    }
  };

  const data = [{ position }];

  return (
    <div className="homepage">
      <header>
        <h1>Map View</h1>
        <nav>
          <ul>
            <li>
              <Link to="/LandingPage">HOME</Link>
            </li>
            <li>
              <Link to="/About">ABOUT</Link>
            </li>
            <li>
              <Link to="/HomePage">CONTACTS</Link>
            </li>
            <li>
              <Link to="/HomePage">RECENT POSTS</Link>
            </li>
          </ul>
          <button onClick={() => handleRoleChange("Customer")}>
            Customer View
          </button>
          <button onClick={() => handleRoleChange("Delivery Driver")}>
            Driver View
          </button>
          <button onClick={() => handleRoleChange("Delivery Manager")}>
            Manager View
          </button>
        </nav>
      </header>

      <div className="map-container">
        {user.role === "Customer" && (
          <Box sx={{ width: "100%", mr: 1, mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Delivery Progress ({progress}%)
            </Typography>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        )}
        {user.role === "Delivery Manager" && (
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Typography variant="h6" component="div" sx={{ m: 2 }}>
              Active Drivers: Driver 1
            </Typography>
            {drivers.map((driver, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Driver ${driver.id}: ${driver.status}`}
                />
              </ListItem>
            ))}
          </List>
        )}
        <MapComponent data={data} role={user.role} updatePosition={position} />
      </div>
      <footer>
        <p>&copy; 2024 DeliverEase.inc</p>
      </footer>
    </div>
  );
};

export default MapViewPage;
