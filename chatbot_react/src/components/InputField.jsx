import React, { useState } from "react";

import "../App.css";

const inputStyle = {
  position: "relative",
  width: "29.5rem",
  height: "2.5rem",
  zIndex: "9999",
  border: "1px solid rgb(199, 199, 199)",
  borderRadius: "0px 0px 8px 8px",
  marginLeft: "-1px",
  padding: "2px",
  marginBottom: "-1px",
  paddingLeft: "10px",
  color: "#000",
  fontSize: "15px"
};

const InputField = props => {
  const [input, setInput] = useState("");
  const inputChanged = e => {
    setInput(e.target.value);
  };
  const submit = input => {
    setInput(" ");
    props.onSubmit(input);
  };
  return (
    <React.Fragment>
      <input
        style={inputStyle}
        type="text"
        value={input}
        onChange={inputChanged}
        placeholder="Type a message"
      />
      <i
        onClick={() => submit(input)}
        style={{
          position: "absolute",
          fontSize: "30px",
          marginTop: "31.7rem",
          marginLeft: "27rem",
          color: "#00bb6b",
          zIndex: "9999"
        }}
        className="fas fa-paper-plane"
      />
    </React.Fragment>
  );
};

export default InputField;
