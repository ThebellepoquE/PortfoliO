import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // State can be added here if needed in the future
    // Lifecycle hooks can also be added if needed
    constructor() {
        super();
       
        this.state= {
         pageTitle: "Welcome to my portfolio",
         data: [
            {title: "HOLA" },
            {title: "IONE" },
            {title: "FROM TUPORTFOLIO" }, 
            {title: "ITEMS" },
            ]
       };
  }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem pageTitle={item.title} url={"ioneuraga.es"} />;
        });
    }

    // Render method to display the portfolio items
    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                {this.portfolioItems()}
            </div>
        );
    }
}