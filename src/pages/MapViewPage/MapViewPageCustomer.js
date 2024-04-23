import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MapComponent from "./MapComponent";
import { Box, LinearProgress, Typography} from "@mui/material";
import Navbarmain from "../../components/NavBar/Navbarmain";

const MapViewPageCustomer = () => {
  const [position, setPosition] = useState({ lat: 39.1673, lng: -86.5344 }); // starting at origin
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const socket = io("https://delivery-it-server.onrender.com/");
    socket.on("connect", () => {
      socket.emit("register", { role: "Customer", id: "customer1" });
    });

    const origin = { lat: 39.1673, lng: -86.5344 };
    const destination = { lat: 39.1738, lng: -86.5087 };

    const interval = setInterval(() => {
      setPosition(prevPosition => {
        const stepLat = (destination.lat - origin.lat) * 0.05;
        const stepLng = (destination.lng - origin.lng) * 0.05;
        const newLat = prevPosition.lat + stepLat;
        const newLng = prevPosition.lng + stepLng;
        if (newLat >= destination.lat && newLng <= destination.lng) {
          clearInterval(interval);
          setProgress(100);
        }
        return { lat: newLat, lng: newLng };
      });

      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      socket.disconnect();
    };
  }, );

  const data = [{ position }];
  return (
      <div className="homepage">
        <header>
          <Navbarmain />
        </header>
        <div className="map-container">
          <Box sx={{ width: "100%", mr: 1, mt: 3 }}>
            <Typography variant="body2" color="text.secondary">
              Delivery Progress ({Math.round(progress)}%)
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