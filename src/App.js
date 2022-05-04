import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
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

    const animateTime = {
      enter: 1000,
      exit: 500,
    };

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
        <CSSTransition
        in={this.state.show}
        timeout={animateTime}
        mountOnEnter
        unmountOnExit
        onEnter={()=> console.log("onEnter")}
        onEntering={()=> console.log("onEntering")}
        onEntered={()=> console.log("onEntered")}
        onExit={() => console.log("onExit")}
        onExiting={() => console.log("onExiting")}
        onExited={() => console.log("onExited")}
        classNames = "my-node"
        >
          {(mode) => (
            <div
              style={{
                // display: this.state.show ? "block" : "none",
                background: "black",
                color: "white",
                borderRadius: 4,
                // transition: "opacity 1s ease-out",
                // opacity: mode === "exiting" || mode === "entering" ? 0 : 1,
              }}
            >
              <p>React Animation Group</p>
            </div>
          )}

        </CSSTransition>
        <p>
          <strong>That Is Outside Animation Group!</strong>
        </p>
      </div>
    );
  }
}

export default App;
