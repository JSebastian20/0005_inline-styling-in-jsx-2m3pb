import React from "react";
import ReactDOM from "react-dom";

const custStyle = {
  color: "red",
  fontSize: "20px",
  border: "2px solid blue"
};

ReactDOM.render(
  <h1 style={custStyle}>Hello World!</h1>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <h1 style={{ color: "red" }}>Hello World!</h1>,
//   document.getElementById("root")
// );
