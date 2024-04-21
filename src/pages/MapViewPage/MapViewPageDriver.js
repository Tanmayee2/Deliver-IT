import React, { useEffect } from "react";
import { io } from "socket.io-client";
import MapComponent from "./MapComponent";
import { Link } from "react-router-dom";

const MapViewPageDriver = () => {
  const [position, setPosition] = React.useState({
    lat: 39.1653,
    lng: -86.5264,
  });

  useEffect(() => {
    const socket = io("https://delivery-it-server.onrender.com");

    socket.on("connect", () => {
      socket.emit("register", { role: "Delivery Driver", id: "driver1" });
    });

    socket.on("updateLocation", (newPosition) => {
      setPosition(newPosition);
    });

    return () => socket.disconnect();
  }, []);

  const data = [{ position }];

  return (
    <div className="homepage">
      <header>
        <h1>Driver Map View</h1>
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
        <MapComponent
          data={data}
          role="Delivery Driver"
          updatePosition={position}
        />
      </div>
      <footer>
        <p>&copy; 2024 DeliverEase.inc</p>
      </footer>
    </div>
  );
};

export default MapViewPageDriver;
