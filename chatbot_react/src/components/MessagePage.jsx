import React, { Component } from "react";
import logo from "./giflogo.gif";
import MessageBox from "./MessageBox";

import "../App.css";
class MessagePage extends Component {
  state = {};
  componentWillUpdate() {}
  render() {
    return (
      <div>
        <img
          alt=""
          style={{
            marginTop: "-50px",
            height: "670px",
            float: "left"
          }}
          src={logo}
          playing={false}
        />
        <MessageBox id={this.props.id} name={this.props.name} />
      </div>
    );
  }
}

export default MessagePage;
