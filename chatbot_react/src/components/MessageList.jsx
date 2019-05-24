import React from "react";
import MessageIn from "./MessageIn";
import MessageOut from "./MessageOut";
const bodyStyle = {
  height: "28.5rem",
  overflowY: "scroll"
};

const MessageList = props => {
  return (
    <div style={bodyStyle}>
      {props.messages.map(m => (
        <div key={m.id}>
          <MessageOut message={m.request} />
          <MessageIn message={m.response} />
        </div>
      ))}
    </div>
  );
};

export default MessageList;
