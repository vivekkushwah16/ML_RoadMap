import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css"


const Banner = () => {
        return (
        <>  
          
             <div className="bg_image"> </div>
             <div className="animation-area">
                  <ul className="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className ="bg-text">
                  <h1 id="main_title">Machine Learning</h1>
                  <p>Complete Roadmap to master ML -
                  From Zero to Pro</p>
                  <button type="button" className="btn btn-outline-light btn-lg ">Get Started</button>
                </div>     
        </>
        );
    };
export default Banner;    