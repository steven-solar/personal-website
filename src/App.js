import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route, 
  Link, 
  BrowserRouter as Router
} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
            <li> <Link to='/skills'> Skills </Link> </li>
            <li> <Link to='/projects'> Projects </Link> </li>
          </ul>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
      </Router>


    );
  }
}

export default App;
