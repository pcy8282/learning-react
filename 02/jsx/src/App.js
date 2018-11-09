import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "React";
    const condition = true;
    const style = {
      backgroundColor: "gray",
      border: "1px solid black",
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: "all",
      MozTransition: "all",
      msTransition: "all"
    };

    return (
      <div className="my-div">
        {/* comment */}
        <h1>Hello</h1>
        <h2>{name}</h2>
        {/* {condition ? "true" : "false"} */}
        {condition && "&&"}
        <div
          style={style}
          // comment
          /* comment */
        />
      </div>
    );
  }
}
export default App;
