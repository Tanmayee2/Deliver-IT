import React from 'react';
import ChatInterface from './ChatInterface';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

const ChatPageDriver = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/landingpage");
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">DeliverEase</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
                </Nav>
            </Navbar>
            <ChatInterface />
            <footer>© 2024 DeliverEase.inc</footer>
        </div>
    );
};

export default ChatPageDriver;