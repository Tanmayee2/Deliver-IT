import React, { useEffect, useState } from "react";
import MapComponent from "./MapComponent";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Navbarmain from "../../components/NavBar/Navbarmain";

const MapViewPageManager = () => {
  const [drivers, setDrivers] = useState([
    { id: 'driver1', lat: 39.1653, lng: -86.5264, status: "available" },
    { id: 'driver2', lat: 39.1713, lng: -86.5164, status: "on delivery" },
  ]);

  useEffect(() => {
    const moveDrivers = () => {
      setDrivers(drivers.map(driver => {
        if (driver.id === 'driver1') {
          return {
            ...driver,
            lat: driver.lat + (Math.random() - 0.5) * 0.01,
            lng: driver.lng + (Math.random() - 0.5) * 0.01,
          };
        } else {
          return driver;
        }
      }));
    };

    const intervalId = setInterval(moveDrivers, 2000);
    return () => clearInterval(intervalId);
  }, [drivers]);

  return (
      <div className="homepage">
        <Navbarmain />
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
              data={drivers.map(driver => ({ position: { lat: driver.lat, lng: driver.lng } }))}
              role="Delivery Manager"
              updatePosition={{}}
          />
        </div>
      </div>
  );
};

export default MapViewPageManager;