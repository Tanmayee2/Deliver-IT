import React from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { useState } from "react";
import { useEffect } from "react";
import "./ChatPage.scss";
import axios from "axios";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  useEffect(() => {
    fetch("http://localhost:8080/getAllUsers")
      .then((response) => response.json())
      .then((data) => setAllUsers(data.allUsers));
  }, []);

  return (
    <div className="chat">
      {allUsers.length ? (
        <ChatBar socket={socket} allUsers={allUsers} />
      ) : (
        <></>
      )}
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
