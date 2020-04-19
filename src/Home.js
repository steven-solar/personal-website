import React, { Component } from 'react';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="container home-container"> 
                <div className="row justify-content-md-center name"> Steven Solar </div>
                <div className="row justify-content-md-center descrip"> &lt;developer, engineer, enthusiast&#47;&gt;</div>
            </div>   
        );
    }
}

export default Home;
