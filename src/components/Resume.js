import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div className="container home-container"> 
               <embed src="resume.pdf" width="800px" height="2100px" />
            </div>   
        );
    }
}

export default Resume;
