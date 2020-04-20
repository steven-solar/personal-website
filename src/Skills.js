import React, { Component } from 'react';
import './App.css';

class Skills extends Component {
    render() {
        return (
            <div className="skills-container"> 
                <div className="name"> Skills </div>
                <div className="descrip"> I love learning and building! Here is some of what I've picked up along the way!</div>
                <div className="skill-category"> Frontend Development </div>
                <span className="skill-item"> Javascript </span>
                <span className="skill-item"> React </span>
                <span className="skill-item"> Redux </span>
                <span className="skill-item"> HTML </span>
                <span className="skill-item"> CSS </span>

                <div className="skill-category"> Backend Development </div>
                <span className="skill-item"> Python </span>
                <span className="skill-item"> Django </span>
                <span className="skill-item"> Node.js </span>
                <span className="skill-item"> Express </span> 
                <span className="skill-item"> SQL </span> 

                <div className="skill-category"> General Languages </div>
                <span className="skill-item"> Python </span>  
                <span className="skill-item"> Java </span>
                <span className="skill-item"> C </span>
                <span className="skill-item"> C++ </span>
                    
                <div className="skill-category"> Coursework </div>
                <span className="skill-item"> Data Structures </span>  
                <span className="skill-item"> Algorithms </span>
                <span className="skill-item"> Computer Networks </span>
                <span className="skill-item"> Automata &amp; Computation Theory </span>
                <span className="skill-item"> Probability &amp; Statistics </span>
                <span className="skill-item"> Calculus I-III </span>

                <div className="skill-category"> Tools </div>
                <span className="skill-item"> Git </span>
                <span className="skill-item"> Sketch </span>  
                <span className="skill-item"> Zeplin </span>
                <span className="skill-item"> AWS </span>

            </div>
        );
    }
}

export default Skills;