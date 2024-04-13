import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const ChatInterface = ({ userId, role, chatWith }) => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const socket = io('http://localhost:8080/api/chat/');

    useEffect(() => {
        socket.emit('join', { userId, room: `${role}-${chatWith}` });

        socket.on('message', message => {
            setMessages(prev => [...prev, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, [userId, role, chatWith, socket]);

    const sendMessage = () => {
        if(text.trim()) {
            socket.emit('sendMessage', { userId, text });
            setText('');
        }
    };

    return (
        <div className="chat-room">
            <h2>Chat as {role} with {chatWith}</h2>
            <div className="messages">
                {messages.map((msg, index) => <p key={index}>{`${msg.userId}: ${msg.text}`}</p>)}
            </div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatInterface;