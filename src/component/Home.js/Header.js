import React from "react";
import './../Home.js/Header.css';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="col-md-6">
                    <h1>Good food choices are good investments.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Etiam et purus a odio finibus bibendum amet leo. </p>
                         <button className="order">order Now</button>
                         <button className="Learn">Learn More</button>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </header>
    );
}



export default Header;