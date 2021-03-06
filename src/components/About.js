import React, { Component } from 'react';
import '../App.css';

class About extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="abt-title"> About Me </div> 
                <div className="abt-content">
                    <p> Hi! I'm Steven Solar, a Computer Science and Biomedical Engineering major at Johns Hopkins University graduating in May 2022. 
                        I love learning about all things technology, and will be interning at Google this upcoming summer.
                    </p>
                    <p>
                       I wear many hats: entrepreneur, developer and engineer.
                       But mainly I'm a passionate student, and want to continue learning and exploring new ideas for the rest of my life!
                    </p>
                    <p>
                        I was born and raised in New Rochelle, NY. 
                    </p>
                    <p>
                        In high school, I was first exposed to computer science in class.
                        I spent my free time making Snake and Pong Java Applets to play on my computer, and solving coding puzzles. 
                        I was also captain of our club frisbee team, and still love to play. 
                        Since coming to college, I've continued to explore my interests in the both medicine and computer science.
                    </p>
                    <img src="https://i.ytimg.com/vi/ts7J1I1YyKo/maxresdefault.jpg" alt="Our team!" width="500" />
                    <p> Here's our team after the state tournament! </p>
                    <p>
                        My freshman year, I joined Treyetech, where we've developed a medical device to simplify DMEK, an advanced corneal procedure. 
                        As Diector of Operations, I oversee research, IP, device development, hiring new members, and strategy. 
                        I've pitched at business plan competitions, helping raise over $100,000 in funding!
                        I've also authored a paper published in Cornea, and presented at the AAO annual conference, and co-authored a paper in ASME.
                        I love our team, and enjoy the fun social events we do together. 
                    </p>
                    <a href="https://journals.lww.com/corneajrnl/Abstract/publishahead/Preloading_Trifolded_Grafts_for_Descemet_Membrane.96202.aspx"> Here's one of my papers! </a>
                    <p>
                        That spring I interned at Semester.ly, learning full-stack development and a slew of new languages and libraries. 
                        In my time, I worked to improve the website's advanced search feature, alter how we displayed course information, and update aspects of the UI.
                    </p>
                    <p>
                        Last summer, I interned at Sokat.co as a machine learning engineer. 
                        Me and my two teammates developed an algorithm to predict which federal grant applications would receive funding, leveraging machine learning and NLP techniques.
                        Our solution worked at 95% accuracy (and 95% F1 score), and we went on to present it to company leadership and government executives at the ACF.
                        All the interns sat together at one big table in the office, which gave us lots of time to get to know each other (and learn how to brew kombucha!)
                    </p>
                    <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=455x10000:format=jpg/path/s1e1ceb42d680f129/image/i0f3db62b9e14cdff/version/1560434222/image.jpg" alt="Our team!" />
                    <p> Here's our team team of interns! </p>
                    <p>
                        I love to read, mostly science-fiction. 
                        Some of my all-time favorites are I, Robot, the Foundation, and the Three Body Problem! 
                        I'm currently reading the Lord of the Rings, and am very open to any book recommendations.
                    </p>
                    <a href="https://www.amazon.com/Three-Body-Problem-Cixin-Liu/dp/0765382032"> <img height="350" src="https://images-na.ssl-images-amazon.com/images/I/919XM42JQlL.jpg" /> </a>
                    <p>
                        I'm also super involved in my fraternity, Phi Kappa Psi, and enjoy working in teams to plan awesome philanthropy and social events.
                    </p>
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