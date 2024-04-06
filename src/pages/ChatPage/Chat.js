import React, { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (text.trim() !== '') {
      const newMessage = {
        text,
        sender: 'user' // Assuming user sends the message
      };
      setMessages([...messages, newMessage]);
      setText('');
    }
  };

  return (
    <section className="chat-container">
      <div className="chat-header">
        <img src={contact.profilePicture} alt={contact.name} className="profile-picture" />
        <h2 className="contact-name">{contact.name}</h2>
      </div>
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
  );
}
