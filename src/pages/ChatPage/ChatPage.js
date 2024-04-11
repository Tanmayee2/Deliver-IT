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

  // Define a function to generate a random agent response
const generateAgentResponse = () => {
  const agentResponses = [
    "Hello!",
    "How can I assist you today?",
    "Nice to meet you!",
    "What can I do for you?",
    "Howdy!"
  ];

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * agentResponses.length);

  // Return the randomly selected response
  return agentResponses[randomIndex];
};

// Modify the sendMessage function to use the generated agent response
const sendMessage = () => {
  if (text.trim() !== '') {
    const userMessage = {
      text,
      sender: 'user' // Assuming user sends the message
    };

    // Adding user message to the chat
    setMessages(prevMessages => [...prevMessages, userMessage]);

    // Saving user message to the selected contact's chat history
    selectedContact.chat = [...messages, userMessage];

    // Generate the agent response
    const agentMessage = {
      text: generateAgentResponse(),
      sender: 'agent'
    };

    // Adding agent's response to the chat
    setMessages(prevMessages => [...prevMessages, agentMessage]);

    // Updating selected contact's chat history with agent's response
    selectedContact.chat = [...messages, agentMessage];

    setText('');
  }
};

  const handleNewUserSave = () => {
    const newContact = {
      email: newUserEmail
    };
  
    // Send a request to the server to add the new contact
    fetch('http://localhost:8080/addChatUser', {
      method: 'POST',
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
      // Update local state with the new contact
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
        
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button onClick={() => setSelectedContact(contact)}>{contact.email}</button>
            </li>
          ))}
        </ul>

        {showNewUserForm ? (
          <div>
            <input
              type="email"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              placeholder="Enter new user email"
            />
<button className="save-button" onClick={handleNewUserSave}>Save</button>
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
