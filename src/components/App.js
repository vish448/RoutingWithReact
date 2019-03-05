import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Home from './Home'
import About from './About'
import Topics from './Topics'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello Vishang!</h1>
          <Home />
          <About />
          <Topics />
        </header>
      </div>
    );
  }
}

export default App;
