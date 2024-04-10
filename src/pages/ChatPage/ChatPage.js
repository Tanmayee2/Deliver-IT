import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './ChatPage.css';

const contacts = [
  { id: 0, email: 'taylor@mail.com' },
  { id: 1, email: 'alice@mail.com' },
  { id: 2, email: 'bob@mail.com' },
];
const randomStatements = [
  "How's your day going?",
  "Anything interesting happening?",
  "Got any plans for the weekend?",
  "Have you read any good books lately?",
  "Seen any good movies recently?"
];

export default function Messenger() {
  const pageNavigation = useNavigate();
  const [employeeId, setEmployeeId] = useState(''); // State for employee ID
  const [deliveryCharges, setDeliveryCharges] = useState('');
  const [range, setRange] = useState(0);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState(selectedContact.chat || []);



  // sending ,
  const sendMessage = () => {
    if (text.trim() !== '') {
      const newMessage = {
        text,
        sender: 'user' // Assuming user sends the message
      };

      setMessages(prevMessages => [...prevMessages, newMessage]);

      selectedContact.chat = [...messages, newMessage];

      fetch("http://localhost:8080/addChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedContact),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Chat data saved successfully.");
      })
      .catch(error => {
        console.error('Error saving chat data:', error);
      });

      setText('');
    }
  };

  const handleNewUserSave = () => {
    const chatObject = {
      participants: [selectedContact.email, newUserEmail],
    };

    const newUserId = Date.now().toString();
    const newContact = {
      email: newUserEmail
    };
    // Save the new contact to the server
    fetch('http://localhost:8080/addChatUser', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact), 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const updatedContactsArray = [...contacts, data];
        localStorage.setItem('contacts', JSON.stringify(updatedContactsArray));

        setSelectedContact(data);

        setNewUserEmail('');
        setShowNewUserForm(false);
      })
      .catch((error) => {
        console.error('Error adding new contact:', error);
      });
  };

  return (
    <div>
      <section className="contact-list">
        // Display the list of contacts
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button onClick={() => setSelectedContact(contact)}>{contact.email}</button>
            </li>
          ))}
        </ul>

        {showNewUserForm ? (
          <div>
            // new user form
            <input
              type="email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              placeholder="Enter new user email"
            />
            <button class="save-button" onClick={handleNewUserSave}>Save</button>
          </div>
        ) : (
          <button onClick={() => setShowNewUserForm(true)}>Chat with new user</button>
        )}
      </section>
      <section className="chat-container">
        // this is the chat container
        <div className="chat-header">
          <img src={selectedContact.profilePicture} alt={selectedContact.name} className="profile-picture" />
          <h2 className="contact-name">{selectedContact.email}</h2>
        </div>

        // Display the chat messages
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <textarea
            value={text}
            placeholder={'Type a message'}
            onChange={e => setText(e.target.value)}
            className="message-input"
          />
          <button className="send-button" onClick={sendMessage}>Send</button>
        </div>
      </section>
    </div>
  );
}
