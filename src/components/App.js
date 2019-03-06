import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Home from './Home'
import About from './About'
import Topics from './Topics'

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello Vishang!</h1>
          <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/topics'>Topics</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/topics" component = {Topics} />
          </nav>
        </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
