import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import wsClient from '@zerrtech/koa-ws/client';

class App extends Component {
  componentWillMount() {
    wsClient.connect('localhost:3000');

    wsClient.register('session', function (err, payload) {
      if (err) console.error('Something went wrong', err);
      console.log({session: payload}) // should include our session
    });

    wsClient.method('hello', function (err, result) {
      if (err) console.error('Something went wrong', err);
      console.log({result}) // should log 'world!'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
