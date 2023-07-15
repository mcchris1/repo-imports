import React, { Component } from 'react';
import Home from './Home';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    };
  }

  setPage = event => {
    event.preventDefault();
    this.setState({
      page: event.target.id
    });
  };

  render() {
    const { page } = this.state;
    return (
      <div className="page-container">
        <header>
          <h1>Component Lifecycle</h1>
          <nav>
            <a href="/" onClick={this.setPage} id="home">
              Home
            </a>
            <a href="/counter" onClick={this.setPage} id="counter">
              Counter
            </a>
          </nav>
        </header>
        <main>
          {page === 'home' && <Home message={'Home'}></Home>}
          {page === 'counter' && <Counter message={'Counter'}></Counter>}
        </main>
      </div>
    );
  }
}

export default App;
