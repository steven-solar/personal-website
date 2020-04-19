import React, { Component } from 'react';
import './App.css';
import {
    Route, 
    Link, 
    BrowserRouter as Router
  } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container home-container"> 
                <div className="row justify-content-md-center name"> Steven Solar </div>
                <div className="row justify-content-md-center descrip"> &lt;developer, engineer, enthusiast&#47;&gt; </div>
                <div> 
                    <a href="https://github.com/steven-solar" target="_blank"> <img src="./images/github.png"/> </a>
                    <a href="https://www.linkedin.com/in/steven-solar" target="_blank"> <img src="./images/linkedin.png" /> </a>
                    <Link to="/resume" target="_blank"> <img src="./resume.png" /> </Link>
                </div>
                
            </div>   
        );
    }
}

export default Home;
