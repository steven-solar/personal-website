import React, { Component } from 'react';
import SkillCategory from './SkillCategory.js';
import '../App.css';

class Skills extends Component {
    render() {
        return (
            <div className="text-center" style={{marginBottom: "25px"}}> 
                <div className="skill-title"> Skills </div>
                <div className="descrip"> I love learning and building! </div>
                <div className="descrip"> Here is some of what I've picked up along the way. </div>

                <SkillCategory title="General Languages" skills={['Python', 'Java', 'C', 'C++']} />

                <SkillCategory title="Frontend Development" skills={['Javascript', 'JSX', 'React', 'Redux', 'HTML', 'CSS']} />

                <SkillCategory title="Backend Development" skills={['Python', 'Django', 'Node.js', 'Express', 'SQL']} />

                <SkillCategory title="Data Science Libraries" skills={['Pandas', 'NLTK', 'scikit-learn']} />

                <SkillCategory title="Coursework" skills={['Data Structures', 'Algorithms', 'Computer Networks', 'Probability and Statistics', 'Calculus I-III']} />

                <SkillCategory title="Tools" skills={['Git', 'JIRA', 'Confluence', 'Sketch', 'Zeplin', 'AWS', 'CAD Software']} />
            </div>
        );
    }
}

export default Skills;