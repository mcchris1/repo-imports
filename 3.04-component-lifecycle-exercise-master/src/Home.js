import React, { Component } from 'react';

// Update this component to use the Mounting Component Lifecycle methods

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}

export default Home;
