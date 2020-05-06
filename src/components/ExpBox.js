import React, { Component } from 'react';
import '../App.css';

class ExpBox extends Component {
    render() {
        return (
            <div className="exp-box">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.imglink} height="125" width="125" alt={this.props.company.concat(" logo")} />
                        <div className="content">
                            <div className="text">
                                <h4 className="company"> {this.props.company} </h4>
                                <h6 className="title"> {this.props.title} </h6>
                            </div>
                        </div>
                </a>

            </div>
        );
    }
}

export default ExpBox;