import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
class Form extends Component {
  state = {
    name: "",
    users: [],
    toMessagePage: false
  };
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/user/")
      .then(res => {
        this.setState({ users: res.data.user });
        console.log(this.state.users);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSubmit = () => {
    this.props.handleSubmit(
      this.state.users.length + 1,
      this.state.name,
      this.refreshList
    );
    this.setState({ toMessagePage: true });
    return <Redirect to="/chat" />;
  };
  render() {
    if (this.state.toMessagePage === true) {
      return <Redirect to="/chat" />;
    }

    return (
      <div
        style={{ position: "absolute", marginTop: "10rem", marginLeft: "5rem" }}
      >
        <input
          placeholder="User Name"
          onChange={this.handleChange}
          value={this.state.name}
          style={{
            height: "45px",
            width: "300px",
            backgroundColor: "#fff",
            paddingLeft: "10px",
            color: "#000",
            borderRadius: "5px"
          }}
        />
        <br />

        <br />
        <button
          className="btn-primary"
          style={{
            marginTop: "8px",
            height: "45px",
            width: "300px",
            paddingLeft: "10px",
            color: "#fff",
            fontSize: "15px",
            fontFamily: "Josefin Sans",
            borderRadius: "5px"
          }}
          onClick={this.handleSubmit}
        >
          Go-->
        </button>
        <br />
      </div>
    );
  }
}

export default Form;
