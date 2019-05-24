import React from "react";
import { Card } from "reactstrap";

const messageOut = {
  width: "fit-content",
  backgroundColor: "#BAE3EA",
  margin: "10px",
  padding: "4px",
  borderRadius: "8px",
  position: "relative",
  boxShadow: "2x 2px 2px #BAE3EA"
};
const MessageOut = props => {
  return (
    <div className="d-flex justify-content-end mb-4">
      <div className="msg_cotainer_send">
        <Card style={messageOut}>{props.message}</Card>
      </div>
    </div>
  );
};

export default MessageOut;
