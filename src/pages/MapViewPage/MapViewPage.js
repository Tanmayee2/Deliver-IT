import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from "./MapComponent";

function MapViewPage() {
    const [message, setMessage] = useState('Welcome to my basic React page!');
    const user = useContext(user);
    const navigate = useNavigate();
    const goHome = () => navigate('/');

    return (
        <div>
            <h1>{message}</h1>
            <p>This is a very basic React page.</p>
            <MapComponent />
            <div>Welcome, {user.name}!</div>
            <button onClick={goHome}>Go Home</button>
        </div>
    );
}

export default MapViewPage;