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
                <div className="row justify-content-md-center"> 
                    <a className="logos" href="https://github.com/steven-solar" target="_blank"> <img height="75" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"/> </a>
                    <a className="logos" href="https://www.linkedin.com/in/steven-solar" target="_blank"> <img height="75" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" /> </a>
                    <Link className="logos" to="/resume" target="_blank"> <img height="75" src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-resume-icon-png-image_4260240.jpg" /> </Link>
                </div>
                <div> Experience </div>
                
                
            </div>   
        );
    }
}

export default Home;
