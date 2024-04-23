import React, { useContext, useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && userDetails.email) {
      socket.emit("message", {
        text: message,
        name: userDetails.email,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
