import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import MapComponent from './MapComponent';
import { Link } from 'react-router-dom';
import { Box, LinearProgress, Typography, List, ListItem, ListItemText } from '@mui/material';

const MapViewPage = () => {
    const userProfiles = {
        'Delivery Driver': { role: 'Delivery Driver', id: 'driver1' },
        'Customer': { role: 'Customer', id: 'customer1' },
        'Delivery Manager': { role: 'Delivery Manager', id: 'manager1' }
    };

    const [user, setUser] = useState(userProfiles['Customer']);
    const [position, setPosition] = useState({ lat: 39.1653, lng: -86.5264 });
    const [progress, setProgress] = useState(0);
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        const socket = io('http://localhost:8080', {
            transports: ['websocket'], // Use WebSockets only
            upgrade: false
        });

        socket.on('connect', () => {
            socket.emit('register', user);
        });

        socket.on('driversUpdate', setDrivers);
        socket.on('packagePositionUpdate', newPos => {
            setPosition(newPos);
            setProgress(oldProgress => (oldProgress < 100 ? oldProgress + 10 : 100));
        });

        return () => {
            socket.off('connect');
            socket.off('driversUpdate');
            socket.off('packagePositionUpdate');
            socket.disconnect();
        };
    }, [user]);

    const handleRoleChange = (role) => {
        setUser(userProfiles[role]);
        if (role === 'Customer') {
            setProgress(0);
        }
    };

    return (
        <div className="homepage">
            <header>
                <h1>Map View</h1>
                <nav>
                    <ul>
                        <li><Link to="/landingpage">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/homepage">CONTACTS</Link></li>
                        <li><Link to="/homepage">RECENT POSTS</Link></li>
                    </ul>
                    <button onClick={() => handleRoleChange('Customer')}>Customer View</button>
                    <button onClick={() => handleRoleChange('Delivery Driver')}>Driver View</button>
                    <button onClick={() => handleRoleChange('Delivery Manager')}>Manager View</button>
                </nav>
            </header>

            <div className="map-container">
                {user.role === 'Customer' && (
                    <Box sx={{ width: '100%', mr: 1, mt: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            Delivery Progress ({progress}%)
                        </Typography>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                )}
                {user.role === 'Delivery Manager' && (
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Typography variant="h6" component="div" sx={{ m: 2 }}>
                            Active Drivers:
                        </Typography>
                        {drivers.map((driver, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`Driver ${driver.id}: ${driver.status}`} />
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