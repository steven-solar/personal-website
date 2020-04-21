import React, { Component } from 'react';
import './App.css';

class SkillCategory extends Component {
    render() {
        var items = []
        for (const value of this.props.skills) {
            items.push(<span className="skill-item">{value}</span>)
        }
        return (
            <div>
                <div className="skill-category"> {this.props.title} </div>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                        {items}
                    </div>
            </div>
        );
    }
}

export default SkillCategory;