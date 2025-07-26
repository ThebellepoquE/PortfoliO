import React, { Component } from "react";
import moment from "moment";

// Importing the PortfolioContainer component
import PortfolioContainer from "./portfolio/portfolio-container"; 

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Ione RodrígueZ Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer />
        <h2>Full Stack Developer</h2>
        <p>Welcome to my portfolio website!</p>
        <p>Here you can find my projects, skills, and contact information.</p>
        <p>Feel free to explore and reach out if you have any questions.</p>
        <p>Thank you for visiting!</p>
        <p>© 2025 ThebellepoquE</p>
      </div>
    );
  }
}
