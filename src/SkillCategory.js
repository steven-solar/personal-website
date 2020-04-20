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
                    {items}
            </div>
        );
    }
}

export default SkillCategory;