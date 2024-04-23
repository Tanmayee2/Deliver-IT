import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import MapComponent from "./MapComponent";
import { Button } from "react-bootstrap";
import Navbarmain from "../../components/NavBar/Navbarmain";

const MapViewPageDriver = () => {
  const [position, setPosition] = useState({ lat: 39.1653, lng: -86.5264 }); // starting position

  useEffect(() => {
    const socket = io("https://delivery-it-server.onrender.com");
    socket.on("connect", () => {
      socket.emit("register", { role: "Delivery Driver", id: "driver1" });
    });

    return () => socket.disconnect();
  }, []);

  const moveTowardsPoint = () => {
    const targetLat = 39.1612;
    const targetLng = -86.5300;
    setPosition({
      lat: position.lat + (targetLat - position.lat) * 0.1,
      lng: position.lng + (targetLng - position.lng) * 0.1,
    });
  };

  const data = [{ position }];
  return (
      <div className="homepage">
        <Navbarmain />
        <Button onClick={moveTowardsPoint}>Update My Location</Button>
        <MapComponent data={data} role="Delivery Driver" updatePosition={position} />
      </div>
  );
};

export default MapViewPageDriver;