import React, { Component } from 'react';
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
import Resume from './Resume.js';

class App extends Component {
  render() {
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <title> My Personal Website </title> 
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </head>
        <body>
          <Router>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3" >
            <div className="container-fluid">
                <a className="navbar-brand mr-3">Steven Solar</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link"> <Link to='/'> <span className="link"> Home </span> </Link> </a>
                        <a className="nav-item nav-link"> <Link to='/about'> <span className="link"> About </span> </Link> </a>
                        <a className="nav-item nav-link"> <Link to='/skills'> <span className="link"> Skills </span> </Link> </a>
                        <a className="nav-item nav-link"> <Link to='/projects'> <span className="link"> Projects </span> </Link> </a>
                    </div>
                </div>
            </div>    
          </nav>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
        </Router>
      </body>
      </html>
    );
  }
}

export default App;
