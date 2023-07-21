import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor (props) {
    super(props);
    this.state = { counter: 0 };
    this.intervalID = null;
  }

  handleStart = () => {
    if (this.intervalID === null) {
      this.intervalID = setInterval(() => {
        this.setState(prevState => ({counter: prevState.counter+1}))
      }, 1000)
    }
  }

  handlePause = () => {
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

  handleReset = () => {
    clearInterval(this.intervalID)
    this.setState({counter: 0})
    this.intervalID = null;
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch;
