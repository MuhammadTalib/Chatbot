import React, { Component } from "react";
import logo from "./gif1.gif";
import Form from "./Form";
class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          alt=""
          style={{ height: "39.1rem", width: "100%", position: "absolute" }}
          src={logo}
        />
        <Form handleSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

export default LoginPage;
