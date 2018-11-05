import logo from '../logo.svg';
import React, { Component } from 'react';

class Home extends Component {  
  state = { hello: null };
  componentDidMount = () => {
    fetch('/api/helloWorld')
      .then(res => res.json())
      .then(res => this.setState({ hello: res }));
  }

  render() {
    const { hello } = this.state;
    const greeting = hello ? hello.helloFromBackend : 'Loading...' ;
    console.log(greeting);
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            { greeting }
          </a>
        </header>
        </div>
    );
  }
}

export default Home;
