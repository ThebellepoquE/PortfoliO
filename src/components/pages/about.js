import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column"
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      /> 
      <div className="right-column">
        <h1>Ione Rodríguez</h1>
        <h2>Full Stack Developer</h2>
        
        <p>
          Passionate about creating digital experiences that matter. 
          I transform ideas into functional, beautiful applications using modern web technologies.
        </p>
        
        <p>
          Currently specializing in React ecosystem, with experience in 
          component architecture, state management, and API integration.
        </p>
        
        <p>
          When I'm not coding, you can find me exploring new technologies 
          and constantly learning something more.
        </p>
        
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <ul>
            <li>React & JavaScript ES6+</li>
            <li>SCSS & Responsive Design</li>
            <li>Node.js & RESTful APIs</li>
            <li>Git & Modern Development Workflow</li>
          </ul>
        </div>
      </div>
    </div>
  );
}