import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = ({ data, role, updatePosition }) => {
    const markersRef = useRef({});

    // Update positions for all roles where applicable
    useEffect(() => {
        if (role === 'Customer' && markersRef.current['customer']) {
            markersRef.current['customer'].setLatLng(new L.LatLng(updatePosition.lat, updatePosition.lng));
        } else if (role === 'Delivery Driver' && markersRef.current['driver']) {
            markersRef.current['driver'].setLatLng(new L.LatLng(updatePosition.lat, updatePosition.lng));
        } else if (role === 'Delivery Manager') {
            data.forEach((item, index) => {
                if (markersRef.current[`manager${index}`]) {
                    markersRef.current[`manager${index}`].setLatLng(new L.LatLng(item.position.lat, item.position.lng));
                }
            });
        }
    }, [updatePosition, role, data]);

    return (
        <MapContainer center={[39.0944, -86.3120]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.map((item, index) => {
                if (role === 'Customer') {
                    return (
                        <Marker key={index} position={[item.position.lat, item.position.lng]} ref={el => markersRef.current['customer'] = el}>
                            <Popup>Your package is here</Popup>
                        </Marker>
                    );
                } else if (role === 'Delivery Driver') {
                    return (
                        <Marker key={index} position={[item.position.lat, item.position.lng]} ref={el => markersRef.current['driver'] = el}>
                            <Popup>Your current location</Popup>
                        </Marker>
                    );
                } else if (role === 'Delivery Manager') {
                    return (
                        <Marker key={index} position={[item.position.lat, item.position.lng]} ref={el => markersRef.current[`manager${index}`] = el}>
                            <Popup>{`Driver ${index + 1}: ${item.status}`}</Popup>
                        </Marker>
                    );
                }
                return null;
            })}
        </MapContainer>
    );
};

export default MapComponent;