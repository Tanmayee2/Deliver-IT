import React from 'react';
import ChatInterface from './ChatInterface';
import {useNavigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const ChatPageDriver = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/landingpage/driver");
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">DeliverEase</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
                </Nav>
            </Navbar>
            <ChatInterface role="driver" chatWith="manager" />
            <footer>© 2024 DeliverEase.inc</footer>
        </div>
    );
};

export default ChatPageDriver;