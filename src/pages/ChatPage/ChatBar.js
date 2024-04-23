import React from "react";

const ChatBar = ({ socket, allUsers }) => {
  console.log(allUsers);
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">All USERS</h4>
        <div
          style={{ height: "200px" }}
          className="chat__users overflow-y-scroll"
        >
          {allUsers.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
