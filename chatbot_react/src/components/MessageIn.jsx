import React from "react";
import { Card } from "reactstrap";

const messageIn = {
  position: "relative",
  width: "fit-content",
  backgroundColor: "#8AFBCB",
  margin: "10px",
  padding: "6px",
  borderRadius: "8px",
  boxShadow: "2x 2px 2px #00BB6B"
};
const MessageIn = props => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ position: "relative", width: "70%" }}>
        <Card style={messageIn}>{props.message}</Card>
      </div>
      <div style={{ position: "relative", width: "30%" }} />
    </div>
  );
};

export default MessageIn;
