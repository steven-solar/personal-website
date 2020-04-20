import React, { Component } from 'react';
import './App.css';
import ExpBox from './ExpBox.js';
import {
    Route, 
    Link, 
    BrowserRouter as Router
  } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="text-center"> 
                <div className="name col-md-auto"> Steven&nbsp;Solar </div>
                <div className="descrip col-md-auto"> &lt;developer, engineer, enthusiast&#47;&gt; </div>
                <div className="icons">
                    <ul className="icon-list">
                        <li className="logos">
                            <a href="https://github.com/steven-solar" target="_blank"> <img className="imgs" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png"/> </a>
                        </li>
                        <li className="logos">
                            <a href="https://www.linkedin.com/in/steven-solar" target="_blank"> <img className="imgs" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" /> </a>
                        </li>
                        <li className="logos">
                            <img className="imgs" src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-resume-icon-png-image_4260240.jpg" />
                        </li>
                    </ul>
                </div>
                <div className="exp"> Experience </div>
                <div className="exp-container">           
                    <ExpBox company="Google" title="Incoming STEP Intern" link="https://about.google/" imglink="https://pbs.twimg.com/profile_images/1216813945408966663/vkVajfRz_400x400.jpg" />
                    <ExpBox company="Treyetech" title="Director of Operations" link="http://treye.tech/" imglink="https://lh3.googleusercontent.com/proxy/aKeTkbap4innvvoaZwOxDOdWbf9_dO5VbiRIuxe8-d1QNyHM88eeNO96GSxU7YnyS-BqVQpH-i4d60WV7hNrciaLuPG-EK_uGfmsk4HsIRBHtjNVb9yTq98" />
                    <ExpBox company="SoKat.co" title="Machine Learning Engineer Intern" link="https://www.sokat.co/" imglink="https://media-exp1.licdn.com/dms/image/C4D0BAQGrzDw1Re1D_Q/company-logo_200_200/0?e=2159024400&v=beta&t=djnBKY5KJQJobohPbCv6UCof_v3-UoaCps4JiVqPvK8" />


                    
                </div>
            </div>   
        );
    }
}

export default Home;
