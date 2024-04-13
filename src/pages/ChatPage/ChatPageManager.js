import React from 'react';
import ChatInterface from './ChatInterface';
import {useNavigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const ChatPageManager = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/landingpage/manager");
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">DeliverEase</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
                </Nav>
            </Navbar>
            <ChatInterface role="manager" chatWith="multiple" />
            <footer>© 2024 DeliverEase.inc</footer>
        </div>
    );
};

export default ChatPageManager;