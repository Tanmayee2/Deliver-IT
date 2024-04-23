import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import carIconUrl from '../../assets/images/car.jpg';

const carIcon = new L.Icon({
    iconUrl: carIconUrl,
    iconSize: [30, 25],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});
const MapComponent = ({ data, role, updatePosition }) => {
    const markersRef = useRef({});

    const updateMarkerPosition = (markerId, position) => {
        if (markersRef.current[markerId]) {
            markersRef.current[markerId].setLatLng(new L.LatLng(position.lat, position.lng));
        }
    };

    useEffect(() => {
        switch(role) {
            case 'Customer':
                updateMarkerPosition('customer', updatePosition);
                break;
            case 'Delivery Driver':
                updateMarkerPosition('driver', updatePosition);
                break;
            case 'Delivery Manager':
                data.forEach((item, index) => {
                    updateMarkerPosition(`manager${index}`, item.position);
                });
                break;
            default:
                console.log("Invalid role");
        }
    }, [updatePosition, role, data]);

    return (
        <MapContainer center={[39.0944, -86.3120]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {data.map((item, index) => (
                <Marker key={index} position={[item.position.lat, item.position.lng]}
                        icon={carIcon}
                        ref={el => markersRef.current[role.toLowerCase() + index] = el}>
                    <Popup>{role === 'Customer' ? "Your package is here" : `Location of ${role}`}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;