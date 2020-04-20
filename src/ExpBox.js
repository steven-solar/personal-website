import React, { Component } from 'react';
import './App.css';

class ExpBox extends Component {
    render() {
        return (
            <div className="exp-box">
                <a href={this.props.link} target="_blank"> 
                    <div className="exp-descrip" hidden>
                        <h4> {this.props.company} </h4>
                        <h6> {this.props.title} </h6>
                    </div>
                    <div>
                        <img className="exp-img" src={this.props.imglink}/> 
                    </div>
                </a>
            </div>
        );
    }
}

export default ExpBox;