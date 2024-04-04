import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import io from 'socket.io-client';
import './MapComponent.css';

const MapComponent = () => {
    const [position, setPosition] = useState([39.1653, -86.5264]);
    const [pickupLocation, setPickupLocation] = useState([39.1683, -86.5090]);
    const [destinationLocation, setDestinationLocation] = useState([39.1611, -86.5340]);
    const [pickupAddress, setPickupAddress] = useState('123 Pickup St, City, State');
    const [destinationAddress, setDestinationAddress] = useState('456 Destination Ave, City, State');

    useEffect(() => {
        const socket = io('http://localhost:4000');

        socket.on('positionUpdate', newPosition => {
            setPosition(newPosition);
        });

        // Assuming the backend emits 'locationData' event with location and address data
        socket.on('locationData', data => {
            setPickupLocation(data.pickupLocation);
            setDestinationLocation(data.destinationLocation);
            setPickupAddress(data.pickupAddress);
            setDestinationAddress(data.destinationAddress);
        });

        return () => socket.disconnect();
    }, []);

    return (
        <div className="map-page">
            <header className="map-header">
                <h1>DeliverEase</h1>
            </header>
            <div className="tracking-info">
                <p>Pickup Address: {pickupAddress}</p>
                <p>Destination Address: {destinationAddress}</p>
            </div>
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '80%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Current Position</Popup>
                </Marker>
                <Marker position={pickupLocation}>
                    <Popup>Pickup Location</Popup>
                </Marker>
                <Marker position={destinationLocation}>
                    <Popup>Destination Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;