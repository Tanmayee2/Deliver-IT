// ChatPage.js
import React, { useState } from 'react';
import './ChatPage.scss';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    // Append user message
    setMessages([...messages, { sender: 'User', text: inputText }]);

    // Simulate receiving response from the server
    setTimeout(() => {
      const agentResponse = 'This is an example response from the agent.';
      setMessages([...messages, { sender: 'Agent', text: agentResponse }]);
    }, 500);

    // Clear input text
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
