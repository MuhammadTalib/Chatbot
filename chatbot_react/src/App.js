import React, { Component } from "react";
import "./App.css";
import MessagePage from "./components/MessagePage";
import { Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/loginPage";
import axios from "axios";

class App extends Component {
  state = {
    id: 0,
    name: ""
  };
  handleSubmit = (id, name) => {
    console.log(name);
    axios
      .get("http://localhost:8000/user/" + name)
      .then(res => {
        console.log("already", res.data);
        console.log("app.js", {
          id: res.data.user[0].id,
          name: res.data.user[0].name
        });
        this.setState({ id: res.data.user[0].id, name: res.data.user[0].name });
      })
      .catch(err => {
        console.log(err);
        axios
          .post("http://localhost:8000/user/", {
            id: id,
            name: name
          })
          .then(res => <Link to="/" />)
          .catch(err => console.log(err));
        this.setState({ id, name });
      });
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/chat"
            render={props => (
              <MessagePage id={this.state.id} name={this.state.name} />
            )}
          />
          <Route
            exact
            path="/"
            render={props => <LoginPage handleSubmit={this.handleSubmit} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
