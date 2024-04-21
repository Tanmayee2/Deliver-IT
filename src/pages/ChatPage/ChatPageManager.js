import React, { useState } from "react";
import ChatInterface from "./ChatInterface";
import UserList from "./UserList";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import Navbarmain from "../../components/NavBar/Navbarmain";

const ChatPageManager = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);

  const navigateToHome = () => {
    navigate("/landingpage");
  };

  return (
    <div>
      <Navbarmain />
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">DeliverEase</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={navigateToHome}>Home</Nav.Link>
        </Nav>
      </Navbar>
      <UserList roles={["Customer", "Driver"]} onSelectUser={setSelectedUser} />
      {selectedUser && <ChatInterface recipientId={selectedUser._id} />}
      <footer>© 2024 DeliverEase.inc</footer>
    </div>
  );
};

export default ChatPageManager;
