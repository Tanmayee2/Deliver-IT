import Chat from './Chat.js';
import ContactList from './ContactList.js';
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { createContext, useContext } from "react";
import "./ChatPage.css";

export default function Messenger() {
  const pageNavigation = useNavigate();
  const [employeeId, setEmployeeId] = useState(""); // State for employee ID
  const [deliveryCharges, setDeliveryCharges] = useState("");
  const [range, setRange] = useState(0);
  const user = createContext(null);
  const username = useContext(user);


  useEffect(() => {
    // Fetch user information from localStorage on component mount
    const userData = localStorage.getItem("userInfo");
    if (userData) {
      const parsedData = JSON.parse(userData);
      console.log("User Data:", parsedData); // Log user data to console
      //setUser(parsedData.name); // Set user's name to the state
      // Log each component separately
      console.log("User Name:", parsedData.name);
      //setUser(parsedData.firstName); // Set user's name to the state
      // Log each component separately

      console.log("User Name:", userData.name);
      console.log("User Email:", parsedData.email);
      console.log("User Role:", parsedData.role);
    }
  }, []);

  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  )
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];