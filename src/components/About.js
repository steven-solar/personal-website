import React, { Component } from 'react';
import '../App.css';

class About extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="abt-title"> About Me </div> 
                <img height="200" width="200" src="https://media-exp1.licdn.com/dms/image/C4D03AQEdqi1ChpXrpg/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=7ETBq--krlM3MJwrXhqEIpWXXDxZgPpZFQetn9yEaHg" />
                <div className="abt-content">
                    <p> Hi! I'm Steven Solar, a Computer Science and Biomedical Engineering major at Johns Hopkins University graduating in May 2022. 
                        I love learning about all things technology, and will be interning at Google this upcoming summer.
                    </p>
                    <p>
                       I wear many hats: entrepreneur, developer and engineer.
                       But mainly I'm a passionate student, and want to continue learning and exploring new ideas for the rest of my life!
                    </p>
                    <p>
                        I was born and raised in New Rochelle, NY, where I've lived for all my life. 
                        My love for learning began with a set of "kiddy" encyclopedias that I read cover-to-cover more than once. 
                        My mind was boggled by the concept of space and the universe, and I wanted more than anything to be an astronaut. 
                        My younger brothers and I would turn old boxes into spaceships and went on inter-galactic ventures through the house.
                        I loved learning how the world works, and still do!
                    </p>
                    <div> pic of my house, or me as a kid</div>
                    <p>
                        In high school, I was first exposed to computer science in a class and immediately fell in love!
                        I spent my free time making old-style Snake and Pong Java Applets to play on my computer, and solving coding puzzles. 
                        Outside of this, I acted as a Research Assistant at Memorial Sloan, working on developed second-generation armored CAR T cells.
                        I was also captain of our club frisbee team, and still love to play. 
                        Since coming to college, I've continued to explore my interests in the both the biomedical realm and computer science.
                    </p>
                    <div> physics gang pic </div>
                    <div> frisbee pic </div>
                    <div> snake/pong video? </div>
                    <p>
                        My freshman year, I joined Treyetech, where we've developed a medical device to simplify DMEK, an advanced corneal procedure. 
                        As Diector of Operations, I oversee research, business development, IP, device development, hiring new members, and strategy. 
                        I've pitched the company at business plan competitions, and helped to raise over $100,000 in funding!
                        I've also authored a paper published in Cornea, and presented at the AAO annual conference, and co-authored a paper published in ASME.
                        I love our team, and enjoy the fun social events we do together. 
                    </p>
                    <div> Treyetech pic from competition </div>
                    <p>
                        That spring I interned at Semester.ly, learning full-stack development and a slew of new languages and libraries. 
                        In my time, I worked to improve the website's advanced search feature, alter how we displayed course information, and update aspects of the UI.
                    </p>
                    <p>
                        Last summer, I interned at Sokat.co as a machine learning engineer. 
                        Me and my two teammates developed an algorithm to predict which federal grant applications would receive funding, leveraging machine learning and NLP techniques.
                        Our solution worked at 95% accuracy (and 95% F1 score), and we went on to present it to company leadership and government executives at the ACF.
                        All the interns sat together at one big table in the office, which gave us lots of time to get to know each other (and learn how to brew kombucha!)
                        I loved the friendly energy of the office, and the coffee machine (from which I drank many a hot chocolate). 
                    </p>
                    <div> Sokat pic </div>
                    <p>
                        Outside of class, I love to read, mostly science-fiction. 
                        Some of my all-time favorites are I, Robot, the Foundation, and the Three Body Problem! 
                        I'm currently reading the Lord of the Rings, and am very open to any book recommendations.
                    </p>
                    <p>
                        I'm also super involved in my fraternity, and enjoy working in teams to plan awesome philanthropy and social events.
                    </p>
                    <div> PC pic or maybe haunted house </div>
                    <p>
                        If you have any book recommendations, or want to work on a project together, feel free to reach out!
                    </p>
                    <p>
                        My email is steven.j.solar@gmail.com, or you can find me on Facebook or LinkedIn!
                    </p>
                </div>
            </div>
        );
    }
}

export default About;