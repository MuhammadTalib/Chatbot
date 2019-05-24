import React, { Component } from "react";

import axios from "axios";
import { Card } from "reactstrap";
import MessageList from "./MessageList";
import InputField from "./InputField";

const cardstyle = {
  position: "fixed",
  width: "29.5rem",
  height: "34rem",
  marginTop: "3.7rem",
  marginLeft: "55rem",
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxShadow: "4px 4px 10px 4px rgb(199, 199, 199)"
};
const headerstyle = {
  paddingTop: "0.8rem",
  height: "3.2rem",
  borderRadius: "8px 8px 0px 0px",
  fontSize: "20px",
  color: "#fff",
  fontFamily: "Josefin Sans",
  paddingLeft: "1rem",
  paddingBottom: "0.3rem",
  backgroundColor: "#00BB6B"
};

class MessageBox extends Component {
  state = {
    Messages: []
  };
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/id/" + this.props.id)
      .then(res => {
        console.log(this.props.id, res.data);
        this.setState({ Messages: res.data.chats });
        console.log("messages", this.state.Messages);
      })
      .catch(err => console.log(err));
  };

  handleSubmit = input => {
    console.log("submit");
    console.log(this.state.Messages.length);
    console.log(this.props.id.toString() + this.props.name + new Date());
    const messages = this.state.Messages;
    messages.push({
      request: input,
      response: "...",
      sender: this.props.name,
      sender_id: this.props.id
    });
    this.setState({ Messages: messages });
    axios
      .post("http://localhost:8000/api/", {
        request: input,
        response: "egte",
        sender: this.props.name,
        sender_id: this.props.id
      })
      .then(res => {
        const messages = this.state.Messages.filter(a => a.response !== "...");
        this.setState({ Messages: messages });
        this.refreshList();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Card style={cardstyle}>
          <div style={headerstyle}>Chatbot</div>
          <MessageList messages={this.state.Messages} />
          <InputField onSubmit={this.handleSubmit} />
        </Card>
      </div>
    );
  }
}

export default MessageBox;
