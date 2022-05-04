import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./App.css";

class App extends Component {
  state = {
    show: true,
  };
  render() {
    

    // There are 4 main states a Transition can be in:

    // 'entering'
    // 'entered'
    // 'exiting'
    // 'exited'

    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState({
              show: !this.state.show,
            })
          }
        >
          Toggle
        </button>
        <Transition in={this.state.show} timeout={1000}>
          {(mode) => (
            <div style={
              {
                // display: this.state.show ? "block" : "none",
                background: "black",
                color: "white",
                // borderRadius: 4,
                transition: "opacity 2s ease-out",
                opacity: mode === "exited" ? 0 : 1,
              }}>
              <p> React Animation Group </p>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default App;
