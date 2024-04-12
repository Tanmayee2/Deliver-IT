import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MapComponent from "./MapComponent";
import { Link } from "react-router-dom";
import { Box, LinearProgress, Typography } from "@mui/material";

const MapViewPageCustomer = () => {
  const [position, setPosition] = useState({ lat: 39.1653, lng: -86.5264 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:8080");

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
