import React from "react";
import Header from "../Header/Header";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <h1>About Me</h1>
      <p>
        I am a web developer with a passion for creating amazing websites.Here
        you will find more information about me, what I do, and my current
        skills
      </p>
      <div className="get-to-know">
        <h2>Get to know me!</h2>
        <p>
          Hey, my name is Laura Januleviciute and I use LauPau8011 as my
          nickname in GitHub. I'm front-end web developer from Lithuania. I'm
          also passionate about diving and sport. I'm open to Job opportunities
          where I can contribute, learn and grow. If you have a good opportunity
          that matches my skills and experience then don't hesitate to contact
          me.
        </p>
      </div>
      <div className="skills">
        <h2>My skills</h2>
        <div className="skills-skill">HTML</div>
        <div className="skills-skill">CSS</div>
        <div className="skills-skill">JavaScript</div>
        <div className="skills-skill">Node</div>
        <div className="skills-skill">React</div>
        <div className="skills-skill">Github</div>
        <div className="skills-skill">Git</div>
        <div className="skills-skill">Responsive Design</div>
      </div>
    </div>
  );
};

export default About;
