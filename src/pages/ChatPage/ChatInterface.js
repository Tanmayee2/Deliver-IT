import React, { useState, useEffect } from 'react';
import useUserContext from '../../UserContext';

const ChatInterface = ({ recipientId }) => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const { userDetails } = useUserContext();

    const getSortedRoomName = (id1, id2) => {
        console.log(userDetails._id);
        console.log("ID1:", id1, "ID2:", id2);
        return [id1, id2].sort().join('_');
    };

    const roomName = userDetails.role === 'Delivery Driver' ? 'DeliveryDriversRoom' : getSortedRoomName(userDetails.id, recipientId);

    const loadChatHistory = async () => {
        try {
            const response = await fetch(`http://localhost:8080/getMessages?roomName=${roomName}`);
            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            } else {
                console.error('Failed to load messages:', await response.text());
            }
        } catch (error) {
            console.error('Error fetching chat history:', error);
        }
    };

    const ensureRoomExists = async () => {
        try {
            const response = await fetch(`http://localhost:8080/getMessages?roomName=${roomName}`);
            if (!response.ok) {
                const createResponse = await fetch('http://localhost:8080/createRoom', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ roomName }),
                });
                if (!createResponse.ok) {
                    throw new Error('Failed to create room');
                }
            }
        } catch (error) {
            console.error('Error ensuring chat room exists:', error);
        }
    };

    useEffect(() => {
        setMessages([]);
        console.log("Selected Manager ID:", recipientId);
        console.log("Effective Room Name:", roomName);
        ensureRoomExists().then(loadChatHistory);
    },  [recipientId, userDetails.id]);

    const sendMessage = async () => {
        if (text.trim()) {
            const messageToSend = {
                roomName: roomName,
                message: userDetails.firstName + ': '+ text
            };
            try {
                await ensureRoomExists();
                const sendMessageResponse = await fetch('http://localhost:8080/sendMessage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(messageToSend),
                });
                if (sendMessageResponse.ok) {
                    setText('');
                    loadChatHistory();
                } else {
                    console.error('Failed to send message:', await sendMessageResponse.text());
                }
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div className="chat-room">
            <h2>Chat</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <p key={index}> {msg}</p>
                ))}
            </div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatInterface;